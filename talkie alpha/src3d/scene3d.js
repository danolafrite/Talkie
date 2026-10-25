/* Mika en 3D : la chambre et le personnage (three.js, aucun fichier externe, tout est généré par code). */
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const C = {
  mint: 0x5de3b4, mintDeep: 0x3fc79a, belly: 0xc9fbe8, lav: 0xc7b8ff, lavDeep: 0xb3a2ff, pink: 0xff8fc0, ink: 0x2a1b5e,
  wood: 0xf0d3b0, woodDark: 0xd9b48a, wall: 0xe9defe, wallB: 0xffe3f1, cream: 0xfff6ea, sun: 0xffcf3f
};
const std = (color, extra) => new THREE.MeshStandardMaterial(Object.assign({ color, roughness: 0.85, metalness: 0 }, extra || {}));
const rbox = (w, h, d, r) => new RoundedBoxGeometry(w, h, d, 4, r == null ? Math.min(w, h, d) * 0.25 : r);
function mesh(geo, mat, x, y, z, shadow) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x || 0, y || 0, z || 0);
  if (shadow !== false) { m.castShadow = true; m.receiveShadow = true; }
  return m;
}
function sph(r, mat, sx, sy, sz, x, y, z) {
  const m = mesh(new THREE.SphereGeometry(r, 32, 24), mat, x, y, z);
  m.scale.set(sx || 1, sy || 1, sz || 1);
  return m;
}
function canvasTex(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}
function heartShape(s) {
  const sh = new THREE.Shape();
  sh.moveTo(0, -0.5 * s);
  sh.bezierCurveTo(-0.9 * s, 0.05 * s, -0.5 * s, 0.7 * s, 0, 0.3 * s);
  sh.bezierCurveTo(0.5 * s, 0.7 * s, 0.9 * s, 0.05 * s, 0, -0.5 * s);
  return sh;
}
function glyphTexture(kind) {
  return canvasTex(64, 64, (g) => {
    g.translate(32, 32);
    if (kind === 'heart') { g.fillStyle = '#FF5FA8'; g.beginPath(); g.moveTo(0, 22); g.bezierCurveTo(-34, -2, -16, -28, 0, -10); g.bezierCurveTo(16, -28, 34, -2, 0, 22); g.fill(); }
    else if (kind === 'star') { g.fillStyle = '#FFCF3F'; g.beginPath(); for (let i = 0; i < 10; i++) { const r = i % 2 ? 9 : 22, a = i * Math.PI / 5 - Math.PI / 2; g.lineTo(Math.cos(a) * r, Math.sin(a) * r); } g.fill(); }
    else if (kind === 'drop') { g.fillStyle = '#8EDBFF'; g.beginPath(); g.moveTo(0, -22); g.bezierCurveTo(22, 4, 14, 22, 0, 22); g.bezierCurveTo(-14, 22, -22, 4, 0, -22); g.fill(); }
    else if (kind === 'z') { g.fillStyle = '#7C5CFF'; g.font = '900 40px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('z', 0, 2); }
    else { g.fillStyle = '#fff'; g.beginPath(); g.arc(0, 0, 14, 0, 7); g.fill(); }
  });
}

function skyTexture(hour) {
  return canvasTex(256, 256, (g, w, h) => {
    const night = hour < 6 || hour >= 21, eve = hour >= 18 && hour < 21, morn = hour >= 6 && hour < 9;
    const gr = g.createLinearGradient(0, 0, 0, h);
    if (night) { gr.addColorStop(0, '#1c1650'); gr.addColorStop(1, '#4b3a8f'); }
    else if (eve) { gr.addColorStop(0, '#8a6fd1'); gr.addColorStop(0.6, '#ff9fb8'); gr.addColorStop(1, '#ffd29a'); }
    else if (morn) { gr.addColorStop(0, '#9fd8ff'); gr.addColorStop(1, '#ffe2c9'); }
    else { gr.addColorStop(0, '#7fcbff'); gr.addColorStop(1, '#d8f1ff'); }
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    if (night) {
      g.fillStyle = '#fff';
      for (let i = 0; i < 26; i++) { g.globalAlpha = 0.5 + Math.random() * 0.5; g.beginPath(); g.arc(Math.random() * w, Math.random() * h * 0.8, Math.random() * 1.6 + 0.6, 0, 7); g.fill(); }
      g.globalAlpha = 1; g.fillStyle = '#FFF4C2'; g.beginPath(); g.arc(w * 0.68, h * 0.28, 26, 0, 7); g.fill();
      g.fillStyle = '#4b3a8f'; g.beginPath(); g.arc(w * 0.68 + 11, h * 0.28 - 5, 22, 0, 7); g.fill();
    } else {
      g.fillStyle = eve ? '#FF8A6B' : '#FFE27A'; g.beginPath(); g.arc(w * (eve ? 0.3 : 0.7), h * (eve ? 0.7 : 0.25), 28, 0, 7); g.fill();
      g.fillStyle = 'rgba(255,255,255,.9)';
      [[50, 150, 26], [78, 148, 32], [110, 152, 24], [170, 90, 20], [196, 88, 26], [222, 94, 18]].forEach((c) => { g.beginPath(); g.arc(c[0], c[1], c[2], 0, 7); g.fill(); });
    }
  });
}

export function init(host, opts) {
  opts = opts || {};
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'low-power', preserveDrawingBuffer: !!opts.preserve });
  } catch (e) { return null; }
  const maxPR = Math.min(window.devicePixelRatio || 1, 2);
  renderer.setPixelRatio(maxPR);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const canvas = renderer.domElement;
  canvas.className = 'scene3d';
  canvas.setAttribute('aria-hidden', 'true');
  host.insertBefore(canvas, host.firstChild);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf3e6ff);
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 60);
  const camBase = new THREE.Vector3(1.3, 4.0, 8.2), camLook = new THREE.Vector3(0, 1.0, 0.3);

  /* ---- lumières ---- */
  const hemi = new THREE.HemisphereLight(0xffffff, 0xffd6e8, 1.0); scene.add(hemi);
  const sunL = new THREE.DirectionalLight(0xffffff, 1.5);
  sunL.position.set(-3, 7, 5); sunL.castShadow = true;
  sunL.shadow.mapSize.set(1024, 1024);
  Object.assign(sunL.shadow.camera, { left: -5, right: 5, top: 5, bottom: -5, near: 1, far: 18 });
  sunL.shadow.bias = -0.0006; sunL.shadow.radius = 4;
  scene.add(sunL);
  const lampL = new THREE.PointLight(0xffc27a, 0, 7, 1.6); lampL.position.set(-2.1, 2.3, -0.4); scene.add(lampL);

  /* ---- la pièce ---- */
  const room = new THREE.Group(); scene.add(room);
  const floorTex = canvasTex(512, 512, (g, w, h) => {
    g.fillStyle = '#F2D8B8'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? '#EFD0AB' : '#F5DDBF'; g.fillRect(0, i * 64, w, 64); g.fillStyle = 'rgba(160,110,60,.22)'; g.fillRect(0, i * 64, w, 2); }
    for (let i = 0; i < 26; i++) { g.fillStyle = 'rgba(160,110,60,.18)'; g.fillRect(Math.random() * w, Math.floor(Math.random() * 8) * 64, 2, 64); }
  });
  floorTex.wrapS = floorTex.wrapT = THREE.RepeatWrapping; floorTex.repeat.set(1.4, 1.4);
  const floor = mesh(rbox(7, 0.4, 7, 0.12), std(0xffffff, { map: floorTex }), 0, -0.2, 0); room.add(floor);
  const wallTex = (a, dots) => canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = a; g.fillRect(0, 0, w, h); g.fillStyle = dots;
    for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) { g.beginPath(); g.arc(32 + x * 64 + (y % 2) * 32, 32 + y * 64, 5, 0, 7); g.fill(); }
  });
  const wt1 = wallTex('#E9DEFE', 'rgba(255,255,255,.85)'); wt1.wrapS = wt1.wrapT = THREE.RepeatWrapping; wt1.repeat.set(3, 2.2);
  const wt2 = wallTex('#FFE3F1', 'rgba(255,255,255,.85)'); wt2.wrapS = wt2.wrapT = THREE.RepeatWrapping; wt2.repeat.set(3, 2.2);
  const backWall = mesh(rbox(7, 4.2, 0.3, 0.1), std(0xffffff, { map: wt1 }), 0, 2.1, -3.35); room.add(backWall);
  const leftWall = mesh(rbox(0.3, 4.2, 7, 0.1), std(0xffffff, { map: wt2 }), -3.35, 2.1, 0); room.add(leftWall);
  room.add(mesh(rbox(7, 0.22, 0.1, 0.05), std(0xffffff), 0, 0.12, -3.17));
  room.add(mesh(rbox(0.1, 0.22, 7, 0.05), std(0xffffff), -3.17, 0.12, 0));

  // fenêtre
  const win = new THREE.Group(); win.position.set(0.7, 2.35, -3.18); room.add(win);
  const skyMat = new THREE.MeshBasicMaterial({ map: skyTexture(new Date().getHours()) });
  win.add(mesh(new THREE.PlaneGeometry(1.7, 1.55), skyMat, 0, 0, 0.02, false));
  const fm = std(0xffffff);
  win.add(mesh(rbox(1.95, 0.14, 0.2, 0.06), fm, 0, 0.85, 0.05)); win.add(mesh(rbox(1.95, 0.14, 0.2, 0.06), fm, 0, -0.85, 0.05));
  win.add(mesh(rbox(0.14, 1.8, 0.2, 0.06), fm, -0.92, 0, 0.05)); win.add(mesh(rbox(0.14, 1.8, 0.2, 0.06), fm, 0.92, 0, 0.05));
  win.add(mesh(rbox(0.07, 1.6, 0.12, 0.03), fm, 0, 0, 0.06)); win.add(mesh(rbox(1.75, 0.07, 0.12, 0.03), fm, 0, 0, 0.06));
  win.add(mesh(rbox(2.2, 0.1, 0.4, 0.05), std(0xffffff), 0, -0.98, 0.18));
  const curt = std(C.pink);
  const c1 = mesh(rbox(0.5, 1.9, 0.14, 0.07), curt, -1.2, 0.0, 0.12); c1.rotation.z = 0.05; win.add(c1);
  const c2 = mesh(rbox(0.5, 1.9, 0.14, 0.07), curt, 1.2, 0.0, 0.12); c2.rotation.z = -0.05; win.add(c2);
  const rod = mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.9, 10), std(C.woodDark), 0, 1.0, 0.16); rod.rotation.z = Math.PI / 2; win.add(rod);

  // tapis
  const rug = new THREE.Group(); rug.position.set(0, 0, 0.55); room.add(rug);
  rug.add(mesh(new THREE.CylinderGeometry(2.0, 2.0, 0.06, 48), std(0xffd0ea), 0, 0.03, 0));
  rug.add(mesh(new THREE.CylinderGeometry(1.7, 1.7, 0.08, 48), std(0xbdf3dc), 0, 0.035, 0));
  rug.add(mesh(new THREE.CylinderGeometry(1.15, 1.15, 0.1, 48), std(0xfff6ea), 0, 0.04, 0));

  // lit
  const bed = new THREE.Group(); bed.position.set(-1.9, 0, -1.95); room.add(bed);
  bed.add(mesh(rbox(2.5, 0.5, 1.75, 0.12), std(0xe2b98a), 0, 0.25, 0));
  bed.add(mesh(rbox(2.4, 0.4, 1.65, 0.16), std(0xd9ccff), 0, 0.68, 0));
  bed.add(mesh(rbox(1.65, 0.2, 1.7, 0.1), std(0xbdf3dc), 0.38, 0.92, 0.0));
  const pil = mesh(rbox(0.7, 0.25, 0.9, 0.12), std(0xffc0dc), -0.78, 0.98, 0); pil.rotation.z = 0.08; bed.add(pil);
  bed.add(mesh(rbox(0.14, 1.4, 1.75, 0.06), std(0xe2b98a), -1.3, 0.7, 0));

  // plante
  const plant = new THREE.Group(); plant.position.set(2.5, 0, -2.3); plant.userData.pick = 'plant'; room.add(plant);
  plant.add(mesh(new THREE.CylinderGeometry(0.42, 0.32, 0.6, 20), std(0xffb89a), 0, 0.3, 0));
  const leafM = std(0x74e08f);
  for (let i = 0; i < 7; i++) { const a = i / 7 * Math.PI * 2; const l = sph(0.34, leafM, 0.55, 1.25, 0.28, Math.cos(a) * 0.3, 1.0 + (i % 2) * 0.22, Math.sin(a) * 0.3); l.rotation.z = Math.cos(a) * 0.5; l.rotation.x = Math.sin(a) * 0.5; plant.add(l); }
  plant.add(sph(0.32, std(0x5fd07a), 1, 1, 1, 0, 1.15, 0));
  plant.traverse((o) => { if (o.isMesh) o.userData.root = plant; });

  // étagère et peluche frites
  const shelf = new THREE.Group(); shelf.position.set(-3.1, 2.55, 0.1); room.add(shelf);
  shelf.add(mesh(rbox(0.5, 0.1, 2.4, 0.04), std(C.woodDark), 0, 0, 0));
  const bookCols = [0xff8fc0, 0x8edbff, 0xffe27a, 0xb9a6ff, 0x74e08f];
  bookCols.forEach((c, i) => { const b = mesh(rbox(0.3, 0.55 + (i % 3) * 0.08, 0.14, 0.03), std(c), 0, 0.35 + (i % 3) * 0.04, -1.0 + i * 0.17); shelf.add(b); });
  const fries = new THREE.Group(); fries.position.set(0, 0.05, 0.75); fries.userData.pick = 'fries'; shelf.add(fries);
  fries.add(mesh(rbox(0.36, 0.34, 0.36, 0.06), std(0xff5a5a), 0, 0.17, 0));
  for (let i = 0; i < 6; i++) fries.add(mesh(rbox(0.07, 0.34, 0.07, 0.02), std(0xffd24a), -0.12 + (i % 3) * 0.12, 0.45, -0.08 + Math.floor(i / 3) * 0.16));
  fries.add(sph(0.025, std(C.ink), 1, 1, 1, 0.19, 0.2, -0.07)); fries.add(sph(0.025, std(C.ink), 1, 1, 1, 0.19, 0.2, 0.07));
  fries.traverse((o) => { if (o.isMesh) o.userData.root = fries; });

  // lampadaire (interrupteur)
  const lamp = new THREE.Group(); lamp.position.set(-2.1, 0, 0.1); lamp.userData.pick = 'lamp'; room.add(lamp);
  lamp.add(mesh(new THREE.CylinderGeometry(0.28, 0.32, 0.08, 20), std(C.woodDark), 0, 0.04, 0));
  lamp.add(mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.9, 10), std(C.woodDark), 0, 1.0, 0));
  const shadeMat = new THREE.MeshStandardMaterial({ color: 0xfff0c9, emissive: 0xffc15a, emissiveIntensity: 0.0, roughness: 0.8 });
  shadeMat.side = THREE.DoubleSide;
  lamp.add(mesh(new THREE.CylinderGeometry(0.28, 0.45, 0.5, 24, 1, true), shadeMat, 0, 2.15, 0));
  lamp.traverse((o) => { if (o.isMesh) o.userData.root = lamp; });
  // pouf
  const pouf = mesh(new THREE.CylinderGeometry(0.5, 0.52, 0.5, 28), std(0xffc0dc), 2.0, 0.25, 1.35); room.add(pouf);
  pouf.geometry.translate(0, 0, 0);
  room.add(sph(0.52, std(0xffc0dc), 1, 0.35, 1, 2.0, 0.5, 1.35));
  // cadre cœur
  const pic = new THREE.Group(); pic.position.set(-1.6, 2.7, -3.17); room.add(pic);
  pic.add(mesh(rbox(0.9, 0.9, 0.08, 0.05), std(0xffffff), 0, 0, 0));
  const hm = new THREE.Mesh(new THREE.ExtrudeGeometry(heartShape(0.55), { depth: 0.04, bevelEnabled: false }), std(C.pink)); hm.position.set(0, 0.03, 0.05); pic.add(hm);

  // guirlande lumineuse
  const bulbs = [];
  for (let i = 0; i < 15; i++) {
    const t = i / 14, x = -3 + t * 6.2, y = 3.65 - Math.sin(t * Math.PI) * 0.38;
    const m = new THREE.MeshBasicMaterial({ color: [0xfff1a8, 0xffb3d1, 0xbdf3dc, 0xd9ccff][i % 4] });
    const b = sph(0.06, m, 1, 1, 1, x, y, -3.1); b.castShadow = false; b.receiveShadow = false; room.add(b); bulbs.push(b);
  }

  /* ---- particules : pétales et paillettes ---- */
  const dust = []; const dustTex = glyphTexture('star');
  for (let i = 0; i < 14; i++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: dustTex, transparent: true, opacity: 0.0, depthWrite: false }));
    s.scale.setScalar(0.16 + Math.random() * 0.1); s.userData = { ph: Math.random() * 6, sp: 0.25 + Math.random() * 0.3, x: (Math.random() - 0.5) * 6, z: (Math.random() - 0.5) * 5 };
    scene.add(s); dust.push(s);
  }

  /* ---- Mika ---- */
  const mika = new THREE.Group(); mika.position.set(0, 0, 0.75); mika.scale.setScalar(1.3); scene.add(mika);
  const bodyG = new THREE.Group(); mika.add(bodyG);
  const mintM = std(C.mint, { roughness: 0.62, emissive: 0x2aa57a, emissiveIntensity: 0.32 });
  const body = sph(0.55, mintM, 1.1, 0.95, 1, 0, 0.56, 0); bodyG.add(body);
  const BX = 0.55 * 1.1, BY = 0.55 * 0.95, BZ = 0.55, BCY = 0.56;
  const surf = (x, y) => BZ * Math.sqrt(Math.max(0.02, 1 - (x / BX) ** 2 - ((y - BCY) / BY) ** 2));
  bodyG.add(sph(0.42, std(C.belly, { roughness: 0.7 }), 1.05, 0.9, 0.55, 0, 0.42, 0.3));
  // oreilles
  const ears = [];
  [-1, 1].forEach((s) => {
    const g = new THREE.Group(); g.position.set(s * 0.4, 0.98, -0.02);
    g.add(sph(0.22, mintM, 1, 1.05, 0.62, 0, 0.12, 0));
    g.add(sph(0.12, std(0xd9ccff), 1, 1.05, 0.5, 0, 0.12, 0.08));
    g.rotation.z = -s * 0.28; bodyG.add(g); ears.push(g);
  });
  // pompon
  const pom = new THREE.Group(); pom.position.set(0, 1.07, 0.02); bodyG.add(pom);
  pom.add(sph(0.11, std(C.lav), 1, 1, 1, -0.1, 0.02, 0)); pom.add(sph(0.11, std(C.lav), 1, 1, 1, 0.1, 0.02, 0)); pom.add(sph(0.14, std(C.lavDeep), 1, 1, 1, 0, 0.12, 0));
  pom.add(sph(0.035, std(0xffffff, { emissive: 0xffffff, emissiveIntensity: 0.4 }), 1, 1, 1, -0.04, 0.2, 0.09));
  // visage
  const face = new THREE.Group(); bodyG.add(face);
  const inkM = new THREE.MeshStandardMaterial({ color: C.ink, roughness: 0.25 });
  const whiteM = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const eyes = [];
  [-1, 1].forEach((s) => {
    const ex = s * 0.21, ey = 0.66, ez = surf(ex, ey) - 0.02;
    const g = new THREE.Group(); g.position.set(ex, ey, ez);
    const open = new THREE.Group();
    const ball = sph(0.105, inkM, 1, 1.28, 0.55, 0, 0, 0); open.add(ball);
    const hl1 = sph(0.036, whiteM, 1, 1, 1, 0.035, 0.07, 0.07); hl1.castShadow = false; open.add(hl1);
    const hl2 = sph(0.018, whiteM, 1, 1, 1, -0.035, -0.06, 0.07); hl2.castShadow = false; open.add(hl2);
    g.add(open);
    const happy = new THREE.Mesh(new THREE.TorusGeometry(0.075, 0.02, 8, 20, Math.PI), inkM); happy.position.y = -0.03; happy.visible = false; g.add(happy);
    const closed = new THREE.Mesh(new THREE.TorusGeometry(0.075, 0.02, 8, 20, Math.PI), inkM); closed.rotation.z = Math.PI; closed.position.y = 0.03; closed.visible = false; g.add(closed);
    const heart = new THREE.Mesh(new THREE.ExtrudeGeometry(heartShape(0.24), { depth: 0.03, bevelEnabled: false }), new THREE.MeshBasicMaterial({ color: 0xff4f9a })); heart.position.z = 0.02; heart.visible = false; g.add(heart);
    const brow = mesh(rbox(0.17, 0.035, 0.04, 0.015), inkM, s * -0.0, 0.18, 0.04); brow.visible = false; brow.castShadow = false; g.add(brow);
    face.add(g); eyes.push({ g, open, happy, closed, heart, brow, s });
  });
  const cheeks = [-1, 1].map((s) => { const m = sph(0.085, std(0xff8fc0, { roughness: 0.9 }), 1.2, 0.72, 0.3, s * 0.37, 0.5, surf(s * 0.37, 0.5) - 0.03); m.castShadow = false; face.add(m); return m; });
  const mY = 0.47, mZ = surf(0, mY) - 0.005;
  const mouths = {};
  mouths.smile = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.015, 8, 16, Math.PI), inkM); mouths.smile.rotation.z = Math.PI; mouths.smile.position.set(0, mY + 0.045, mZ);
  mouths.frown = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.015, 8, 16, Math.PI), inkM); mouths.frown.position.set(0, mY - 0.02, mZ);
  mouths.open = sph(0.075, new THREE.MeshStandardMaterial({ color: 0x7a2252, roughness: 0.5 }), 1, 0.9, 0.35, 0, mY, mZ - 0.01);
  const tongue = sph(0.04, std(0xff8fa3), 1.3, 0.7, 0.4, 0, -0.04, 0.03); mouths.open.add(tongue);
  mouths.o = sph(0.035, new THREE.MeshStandardMaterial({ color: 0x7a2252 }), 1, 1.2, 0.4, 0, mY, mZ - 0.005);
  Object.keys(mouths).forEach((k) => { mouths[k].visible = false; mouths[k].castShadow = false; face.add(mouths[k]); });
  mouths.smile.visible = true;
  const tear = sph(0.04, new THREE.MeshStandardMaterial({ color: 0x8edbff, roughness: 0.1, transparent: true, opacity: 0.85 }), 0.8, 1.2, 0.8, -0.27, 0.56, surf(-0.27, 0.56) + 0.01); tear.visible = false; face.add(tear);
  const sweat = sph(0.045, new THREE.MeshStandardMaterial({ color: 0x8edbff, roughness: 0.1, transparent: true, opacity: 0.85 }), 0.8, 1.25, 0.8, 0.46, 0.98, 0.25); sweat.visible = false; bodyG.add(sweat);
  // bras et pieds
  const arms = [-1, 1].map((s) => { const g = new THREE.Group(); g.position.set(s * 0.6, 0.5, 0.08); g.add(sph(0.14, std(0x44cfa0), 1.15, 0.7, 0.75, s * 0.06, 0, 0)); bodyG.add(g); return g; });
  const feet = [-1, 1].map((s) => { const m = sph(0.16, std(C.mintDeep), 1, 0.6, 1.25, s * 0.25, 0.08, 0.2); mika.add(m); return m; });
  mika.traverse((o) => { if (o.isMesh) o.receiveShadow = false; });
  // ombre douce
  const shTex = canvasTex(128, 128, (g, w, h) => { const r = g.createRadialGradient(64, 64, 4, 64, 64, 62); r.addColorStop(0, 'rgba(70,40,120,.38)'); r.addColorStop(1, 'rgba(70,40,120,0)'); g.fillStyle = r; g.fillRect(0, 0, w, h); });
  const blob = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.5), new THREE.MeshBasicMaterial({ map: shTex, transparent: true, depthWrite: false })); blob.rotation.x = -Math.PI / 2; blob.position.y = 0.012; scene.add(blob);

  // accessoires
  const acc = {};
  acc.scarf = new THREE.Group(); { const t = mesh(new THREE.TorusGeometry(0.4, 0.085, 12, 32), std(C.pink), 0, 0.36, 0.12); t.rotation.x = Math.PI / 2.1; t.scale.set(1.12, 1, 1); acc.scarf.add(t); const tail = mesh(rbox(0.14, 0.34, 0.06, 0.03), std(0xff6fae), 0.28, 0.2, 0.46); tail.rotation.z = 0.15; acc.scarf.add(tail); }
  acc.bow = new THREE.Group(); { const m = std(0xff6fae); const a = sph(0.1, m, 1.4, 0.8, 0.5, -0.11, 0, 0), b = sph(0.1, m, 1.4, 0.8, 0.5, 0.11, 0, 0); a.rotation.z = 0.5; b.rotation.z = -0.5; acc.bow.add(a, b, sph(0.055, std(0xffb3d1), 1, 1, 0.8, 0, 0, 0.02)); acc.bow.position.set(-0.42, 1.2, 0.1); acc.bow.rotation.z = 0.2; }
  acc.crown = new THREE.Group(); { const m = std(C.sun, { metalness: 0.3, roughness: 0.4 }); acc.crown.add(mesh(new THREE.CylinderGeometry(0.2, 0.22, 0.12, 20, 1, true), m, 0, 0, 0)); for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2; const c = mesh(new THREE.ConeGeometry(0.06, 0.16, 8), m, Math.cos(a) * 0.2, 0.12, Math.sin(a) * 0.2); acc.crown.add(c); } acc.crown.position.set(0, 1.12, 0.03); }
  acc.glasses = new THREE.Group(); { const m = new THREE.MeshStandardMaterial({ color: C.ink, roughness: 0.3 }); [-1, 1].forEach((s) => { const t = mesh(new THREE.TorusGeometry(0.13, 0.016, 8, 24), m, s * 0.21, 0.66, surf(s * 0.21, 0.66) + 0.04); acc.glasses.add(t); }); acc.glasses.add(mesh(rbox(0.1, 0.018, 0.02, 0.008), m, 0, 0.67, surf(0, 0.67) + 0.04)); }
  acc.hat = new THREE.Group(); { const m = std(0x7c5cff); acc.hat.add(mesh(new THREE.ConeGeometry(0.3, 0.7, 20), m, 0, 0.38, 0)); acc.hat.add(mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.05, 28), std(0x5b3fd6), 0, 0.02, 0)); acc.hat.add(sph(0.045, std(C.sun, { emissive: 0xffcf3f, emissiveIntensity: 0.6 }), 1, 1, 1, 0, 0.74, 0)); acc.hat.position.set(0, 1.1, 0.0); acc.hat.rotation.z = 0.12; }
  acc.wings = new THREE.Group(); { const m = std(0xffffff, { roughness: 0.6 }); [-1, 1].forEach((s) => { const w = sph(0.3, m, 0.5, 1, 0.18, s * 0.55, 0.62, -0.35); w.rotation.z = s * -0.5; acc.wings.add(w); }); }
  acc.pj = new THREE.Group(); { acc.pj.add(sph(0.34, std(0x8ea2ff), 1.05, 0.7, 1.0, 0, 0.1, 0)); acc.pj.add(sph(0.075, std(0xffffff), 1, 1, 1, 0.3, 0.12, 0.2)); acc.pj.position.set(0, 1.0, 0.0); acc.pj.rotation.z = -0.1; }
  Object.keys(acc).forEach((k) => { acc[k].visible = false; (k === 'wings' || k === 'scarf' || k === 'glasses' || k === 'bow' || k === 'crown' || k === 'hat' || k === 'pj' ? bodyG : bodyG).add(acc[k]); });
  function setAccessories(list) { Object.keys(acc).forEach((k) => { acc[k].visible = list.indexOf(k) >= 0; }); }

  /* ---- bulles de particules (cœurs, étoiles, gouttes, zzz) ---- */
  const glyphTex = { heart: glyphTexture('heart'), star: glyphTexture('star'), drop: glyphTexture('drop'), z: glyphTexture('z') };
  const fx = [];
  function emit(kind, n) {
    for (let i = 0; i < n; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glyphTex[kind], transparent: true, depthWrite: false, depthTest: false }));
      s.position.set(mika.position.x + (Math.random() - 0.5) * 0.9, mika.position.y + 1.1 + Math.random() * 0.3, mika.position.z + 0.3);
      s.scale.setScalar(0.22 + Math.random() * 0.14); s.renderOrder = 10;
      scene.add(s);
      fx.push({ s, vx: (Math.random() - 0.5) * 0.7, vy: kind === 'drop' ? -0.2 : 0.8 + Math.random() * 0.6, life: 0, max: 1.6 + Math.random() * 0.6, delay: i * 0.09 });
      s.material.opacity = 0;
    }
  }

  /* ---- état et comportement ---- */
  const st = { emo: 'neutral', talking: false, jumpReq: 0, vy: 0, y: 0, squash: 0, target: new THREE.Vector3(0, 0, 0.75), yaw: 0, yawT: 0, nextWander: 4, nextBlink: 2, blinkT: 0, look: new THREE.Vector2(0, 0), lookT: new THREE.Vector2(0, 0), nextLook: 1, armsT: 0, sleeping: false, lampOn: false, lampT: 0, hold: 0, busy: false };
  const SPOTS = [[0, 0.75], [0.1, 0.75], [1.0, -1.7], [-0.9, -0.5], [2.0, -1.4], [1.4, 1.4], [-0.5, 1.6], [0.9, 0.9]];

  function setEmotion(e) {
    st.emo = e;
    const E = eyes;
    E.forEach((o) => { o.open.visible = true; o.happy.visible = false; o.closed.visible = false; o.heart.visible = false; o.brow.visible = false; o.g.scale.set(1, 1, 1); o.g.rotation.z = 0; });
    Object.keys(mouths).forEach((k) => { mouths[k].visible = false; });
    tear.visible = false; sweat.visible = false;
    st.armsT = 0; st.sleeping = false;
    if (e === 'happy') { E.forEach((o) => { o.open.visible = false; o.happy.visible = true; }); mouths.open.visible = true; mouths.open.scale.set(1.05, 0.8, 0.35); }
    else if (e === 'love') { E.forEach((o) => { o.open.visible = false; o.heart.visible = true; }); mouths.open.visible = true; st.armsT = 1; }
    else if (e === 'wow') { E.forEach((o) => { o.g.scale.set(1.18, 1.18, 1); }); mouths.o.visible = true; }
    else if (e === 'sad') { E.forEach((o) => { o.brow.visible = true; o.brow.rotation.z = -o.s * 0.45; o.brow.position.set(o.s * 0.0, 0.2, 0.04); }); mouths.frown.visible = true; tear.visible = true; }
    else if (e === 'worry') { E.forEach((o) => { o.brow.visible = true; o.brow.rotation.z = -o.s * 0.4; }); mouths.o.visible = true; mouths.o.scale.set(0.8, 1, 0.4); sweat.visible = true; }
    else if (e === 'proud') { E.forEach((o) => { o.open.visible = false; o.happy.visible = true; }); mouths.open.visible = true; mouths.open.scale.set(1.2, 1, 0.35); emit('star', 5); st.armsT = 0.5; }
    else if (e === 'shy') { E.forEach((o) => { o.open.visible = false; o.closed.visible = true; }); mouths.smile.visible = true; st.yawT = 0.5; }
    else if (e === 'sleep') { E.forEach((o) => { o.open.visible = false; o.closed.visible = true; }); mouths.o.visible = true; mouths.o.scale.set(0.6, 0.7, 0.4); st.sleeping = true; }
    else { mouths.smile.visible = true; }
    cheeks.forEach((c) => c.scale.set(e === 'shy' || e === 'love' ? 1.6 : 1.2, e === 'shy' ? 0.95 : 0.72, 0.3));
  }
  function hop(power) { if (st.y < 0.05) { st.vy = power || 4.2; st.squash = -0.2; } }

  let lastSay = 0;
  const bridge = {
    setEmotion, setAccessories, hop,
    talking(on) { st.talking = !!on; if (on) { lastSay = performance.now(); st.target.set(0, 0, 0.9); st.yawT = 0; st.hold = 2.5; } },
    look(dx, dy) { st.lookT.set(dx, dy); },
    busy(on) { st.busy = !!on; if (on) { st.target.set(0.1, 0, 0.9); st.hold = 3; } },
    emit,
    destroy() { running = false; renderer.dispose(); if (canvas.parentNode) canvas.parentNode.removeChild(canvas); }
  };

  /* ---- clavier, souris, toucher ---- */
  const ray = new THREE.Raycaster(), ptr = new THREE.Vector2();
  let down = null, camOff = new THREE.Vector2(0, 0), camOffT = new THREE.Vector2(0, 0), hovered = false;
  canvas.style.touchAction = 'pan-y';
  function setPtr(e) { const r = canvas.getBoundingClientRect(); ptr.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1); return ptr; }
  canvas.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY }; });
  canvas.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch') return;
    const p = setPtr(e); camOffT.set(p.x * 0.5, p.y * 0.25); hovered = true;
    bridge.look(p.x * 0.9, -p.y * 0.6);
  });
  canvas.addEventListener('pointerleave', () => { camOffT.set(0, 0); hovered = false; });
  canvas.addEventListener('pointerup', (e) => {
    if (!down || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 8) { down = null; return; }
    down = null;
    setPtr(e); ray.setFromCamera(ptr, camera);
    const hits = ray.intersectObjects(scene.children, true);
    for (const h of hits) {
      let o = h.object, name = null;
      while (o) { if (o === mika) { name = 'mika'; break; } if (o.userData && o.userData.pick) { name = o.userData.pick; break; } if (o.userData && o.userData.root && o.userData.root.userData.pick) { name = o.userData.root.userData.pick; break; } o = o.parent; }
      if (name) {
        if (name === 'lamp') { st.lampOn = !st.lampOn; }
        if (name === 'mika') hop(4.6);
        host.dispatchEvent(new CustomEvent('mika3d', { detail: { name } }));
        return;
      }
    }
  });

  function resize() {
    const w = host.clientWidth || 360, h = host.clientHeight || 360;
    renderer.setSize(w, h, false);
    canvas.style.width = '100%'; canvas.style.height = '100%';
    camera.aspect = w / h;
    camera.fov = w / h < 0.9 ? 38 : 30;
    camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(host); resize();

  /* ---- ambiance selon l'heure ---- */
  let ambHour = -1;
  function ambiance() {
    const h = new Date().getHours(); if (h === ambHour) return; ambHour = h;
    skyMat.map.dispose(); skyMat.map = skyTexture(h); skyMat.needsUpdate = true;
    const night = h < 6 || h >= 21, eve = h >= 18 && h < 21;
    scene.background.set(night ? 0x2b2360 : eve ? 0xffd0c0 : 0xf3e6ff);
    hemi.intensity = night ? 0.55 : eve ? 0.85 : 1.05;
    hemi.color.set(night ? 0x8f86ff : eve ? 0xffd9c2 : 0xffffff);
    sunL.intensity = night ? 0.35 : eve ? 1.0 : 1.5;
    sunL.color.set(night ? 0x9aa6ff : eve ? 0xffb38a : 0xffffff);
    st.lampAuto = night || eve;
    if (st.lampAuto && !st.lampTouched) st.lampOn = true;
    dust.forEach((d) => { d.material.map = glyphTex[night ? 'star' : 'heart']; d.material.opacity = 0; });
    const dk = night ? 'z' : null;
  }
  ambiance(); setInterval(ambiance, 60000);
  canvas.addEventListener('pointerup', () => { st.lampTouched = true; });

  /* ---- boucle ---- */
  let running = true, visible = true, clock = new THREE.Clock(), T = 0;
  if ('IntersectionObserver' in window) new IntersectionObserver((es) => { visible = es[0].isIntersecting; }, { threshold: 0.01 }).observe(host);
  const tmp = new THREE.Vector3();
  function frame() {
    if (!running) return;
    requestAnimationFrame(frame);
    if (!visible || document.hidden) { clock.getDelta(); return; }
    const dt = Math.min(0.05, clock.getDelta()); T += dt;
    const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

    // errance
    st.hold = Math.max(0, st.hold - dt);
    if (!reduce && !st.sleeping && !st.busy && !st.talking && st.hold <= 0 && T > st.nextWander) {
      const p = SPOTS[Math.floor(Math.random() * SPOTS.length)]; st.target.set(p[0], 0, p[1]); st.nextWander = T + 5 + Math.random() * 6;
    }
    const dx = st.target.x - mika.position.x, dz = st.target.z - mika.position.z, dist = Math.hypot(dx, dz);
    let moving = false;
    if (dist > 0.06) {
      moving = true; const sp = Math.min(dist, (st.talking ? 1.6 : 1.0) * dt);
      mika.position.x += dx / dist * sp; mika.position.z += dz / dist * sp;
      st.yawT = Math.atan2(dx, dz) * 0.7;
    } else if (!st.talking && st.emo !== 'shy') st.yawT = 0;
    // saut
    if (st.y > 0 || st.vy > 0) { st.vy -= 16 * dt; st.y += st.vy * dt; if (st.y <= 0) { st.y = 0; if (st.vy < -1) st.squash = 0.18; st.vy = 0; } }
    st.squash += (0 - st.squash) * Math.min(1, dt * 10);
    const wob = moving ? Math.abs(Math.sin(T * 9)) * 0.07 : 0;
    mika.position.y = st.y + wob;
    st.yaw += (st.yawT - st.yaw) * Math.min(1, dt * 5);
    mika.rotation.y = st.yaw;
    mika.rotation.z = moving ? Math.sin(T * 9) * 0.08 : 0;
    // respiration
    const br = st.sleeping ? 0.04 * Math.sin(T * 1.4) : 0.022 * Math.sin(T * 2.3);
    bodyG.scale.set(1 - st.squash * 0.5 - br * 0.5, 1 + st.squash + br, 1 - st.squash * 0.5);
    feet.forEach((f, i) => { f.position.y = 0.08 + (moving ? Math.max(0, Math.sin(T * 9 + i * Math.PI)) * 0.06 : 0); });
    // oreilles, pompon
    ears.forEach((e, i) => { const s = i ? 1 : -1; e.rotation.z = -s * (0.28 + (st.talking ? 0.1 : 0) + (st.emo === 'sad' || st.emo === 'worry' ? 0.35 : 0)) + Math.sin(T * 1.7 + i) * 0.05; });
    pom.rotation.z = Math.sin(T * 2.1) * 0.12; pom.rotation.x = Math.sin(T * 1.6) * 0.06;
    // bras
    arms.forEach((a, i) => { const s = i ? 1 : -1; const up = st.armsT; a.rotation.z = s * -(0.2 + up * 1.6) + (moving ? Math.sin(T * 9 + i * 3) * 0.3 : Math.sin(T * 2 + i) * 0.06); a.position.y = 0.5 + up * 0.28; });
    // regard
    if (!hovered && T > st.nextLook) { st.lookT.set((Math.random() - 0.5) * 1.4, (Math.random() - 0.5) * 0.8); st.nextLook = T + 1.5 + Math.random() * 2.5; }
    st.look.lerp(st.lookT, Math.min(1, dt * 6));
    eyes.forEach((o) => { o.open.position.x = st.look.x * 0.022; o.open.position.y = st.look.y * 0.018; });
    // clignement
    if (!st.sleeping && T > st.nextBlink) { st.blinkT = 0.13; st.nextBlink = T + 2 + Math.random() * 3.5; }
    st.blinkT = Math.max(0, st.blinkT - dt);
    const bl = st.blinkT > 0 ? 0.1 : 1;
    eyes.forEach((o) => { if (o.open.visible) o.open.scale.y += (bl - o.open.scale.y) * Math.min(1, dt * 40); });
    // bouche qui parle
    if (st.talking) { const k = 0.55 + Math.abs(Math.sin(T * 13)) * 0.7; mouths.smile.visible = false; mouths.frown.visible = false; mouths.o.visible = false; mouths.open.visible = true; mouths.open.scale.set(1.0, k, 0.35); }
    else if (mouths.open.visible && !(['happy', 'love', 'proud'].indexOf(st.emo) >= 0)) mouths.open.visible = false;
    if (!st.talking && !mouths.smile.visible && !mouths.open.visible && !mouths.frown.visible && !mouths.o.visible) mouths.smile.visible = true;
    // larmes, sueur
    if (tear.visible) { tear.position.y = 0.56 - ((T * 0.35) % 1) * 0.18; tear.material.opacity = 0.85 * (1 - ((T * 0.35) % 1)); }
    if (sweat.visible) sweat.position.y = 0.98 + Math.sin(T * 3) * 0.02;
    blob.position.set(mika.position.x, 0.012, mika.position.z + 0.02);
    const sc = Math.max(0.5, 1 - st.y * 0.4) * 1.3; blob.scale.set(sc * (1.05 + st.squash), sc * (1.05 + st.squash), 1);
    blob.material.opacity = Math.max(0.35, 1 - st.y * 0.7);

    // zzz et particules de scène
    if (st.sleeping && Math.random() < dt * 0.7) emit('z', 1);
    for (let i = fx.length - 1; i >= 0; i--) {
      const f = fx[i]; f.delay -= dt; if (f.delay > 0) continue;
      f.life += dt; const k = f.life / f.max;
      f.s.position.x += f.vx * dt; f.s.position.y += f.vy * dt * (1 - k * 0.5);
      f.s.material.opacity = k < 0.15 ? k / 0.15 : Math.max(0, 1 - (k - 0.15) / 0.85);
      if (f.life >= f.max) { scene.remove(f.s); f.s.material.dispose(); fx.splice(i, 1); }
    }
    dust.forEach((d) => { const u = d.userData; d.position.set(u.x + Math.sin(T * u.sp + u.ph) * 0.4, 0.9 + ((T * u.sp * 0.3 + u.ph) % 1) * 3, u.z); d.material.opacity = 0.55 * Math.sin(((T * u.sp * 0.3 + u.ph) % 1) * Math.PI); d.material.rotation = T * 0.3 + u.ph; });
    bulbs.forEach((b, i) => { const s = 0.85 + 0.25 * Math.sin(T * 2.4 + i * 1.3); b.scale.setScalar(s); });
    // lampe
    st.lampT += ((st.lampOn ? 1 : 0) - st.lampT) * Math.min(1, dt * 4);
    lampL.intensity = st.lampT * 2.2; shadeMat.emissiveIntensity = st.lampT * 1.3;
    // caméra
    camOff.lerp(hovered ? camOffT : tmp.set(Math.sin(T * 0.25) * 0.28, Math.sin(T * 0.18) * 0.08, 0), Math.min(1, dt * 3));
    camera.position.set(camBase.x + camOff.x, camBase.y + camOff.y, camBase.z);
    camera.lookAt(camLook);
    renderer.render(scene, camera);
  }
  frame();
  setEmotion('neutral');
  return bridge;
}
