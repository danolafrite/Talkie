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


/* ================= Personnage : le même corps pour Mika et pour les avatars ================= */
export const AV_COLORS = [0x5de3b4, 0xb9a6ff, 0xffb89a, 0x8edbff, 0xffe27a, 0xffa8cf, 0xa8e86b, 0xe0e4f2];
export const AV_EARS = ['cat', 'bear', 'bunny', 'none'];
export const AV_FACE = ['dot', 'happy', 'stars'];
export const AV_ACC = ['', 'bow', 'glasses', 'beanie', 'flower'];
export function avatarOpts(code) {
  code = /^[0-7][0-3][0-2][0-4]$/.test(code || '') ? code : '0000';
  return { mika: true, color: AV_COLORS[+code[0]], ears: AV_EARS[+code[1]], eyes: AV_FACE[+code[2]], topper: 'pom', acc: AV_ACC[+code[3]] ? [AV_ACC[+code[3]]] : [] };
}
function outline(m, color) {
  if (!m.isMesh) return m;
  const h = new THREE.Mesh(m.geometry, new THREE.MeshBasicMaterial({ color, side: THREE.BackSide }));
  h.scale.setScalar(1.05); h.castShadow = false; h.receiveShadow = false; m.add(h); return m;
}
function shade(hex, k) { const c = new THREE.Color(hex); c.multiplyScalar(k); return c; }

export function createCharacter(o) {
  o = Object.assign({ color: C.mint, ears: 'round', topper: 'pom', eyes: 'dot', mika: false, acc: [] }, o || {});
  const root = new THREE.Group();
  const bodyG = new THREE.Group(); root.add(bodyG);
  const mainM = std(o.color, { roughness: 0.62, emissive: shade(o.color, 0.55), emissiveIntensity: 0.3 });
  const deepM = std(shade(o.color, 0.85).getHex());
  const BX = 0.55 * 1.1, BY = 0.55 * 0.95, BZ = 0.55, BCY = 0.56;
  const surf = (x, y) => BZ * Math.sqrt(Math.max(0.02, 1 - (x / BX) ** 2 - ((y - BCY) / BY) ** 2));
  bodyG.add(sph(0.55, mainM, 1.1, 0.95, 1, 0, 0.56, 0));
  { const bc = new THREE.Color(o.color).lerp(new THREE.Color(0xffffff), 0.62).getHex(); bodyG.add(sph(0.42, std(bc, { roughness: 0.7, emissive: bc, emissiveIntensity: 0.32 }), 1.05, 0.9, 0.55, 0, 0.42, 0.3)); }
  const inner = std(o.mika ? 0xd9ccff : 0xffb3d1);
  const ears = [];
  [-1, 1].forEach((s) => {
    const g = new THREE.Group(); let base = 0.28;
    if (o.ears === 'round') { g.position.set(s * 0.4, 0.98, -0.02); g.add(sph(0.22, mainM, 1, 1.05, 0.62, 0, 0.12, 0)); g.add(sph(0.12, inner, 1, 1.05, 0.5, 0, 0.12, 0.08)); }
    else if (o.ears === 'bear') { g.position.set(s * 0.43, 0.97, -0.02); g.add(sph(0.17, mainM, 1, 1, 0.7, 0, 0.1, 0)); g.add(sph(0.09, inner, 1, 1, 0.5, 0, 0.1, 0.07)); base = 0.2; }
    else if (o.ears === 'cat') { g.position.set(s * 0.36, 1.0, 0); const c = mesh(new THREE.ConeGeometry(0.2, 0.4, 4), mainM, 0, 0.15, 0); c.rotation.y = Math.PI / 4; c.scale.z = 0.55; g.add(c); const c2 = mesh(new THREE.ConeGeometry(0.11, 0.26, 4), inner, 0, 0.12, 0.06); c2.rotation.y = Math.PI / 4; c2.scale.z = 0.4; g.add(c2); base = 0.32; }
    else if (o.ears === 'bunny') { g.position.set(s * 0.26, 1.0, -0.02); g.add(sph(0.14, mainM, 1, 2.6, 0.55, 0, 0.3, 0)); g.add(sph(0.08, inner, 1, 2.3, 0.5, 0, 0.3, 0.06)); base = 0.14; }
    else return;
    g.userData.base = base; g.rotation.z = -s * base; bodyG.add(g); ears.push(g);
  });
  const pom = new THREE.Group(); pom.position.set(0, 1.07, 0.02); bodyG.add(pom);
  if (o.topper === 'pom') {
    pom.add(sph(0.11, std(C.lav), 1, 1, 1, -0.1, 0.02, 0)); pom.add(sph(0.11, std(C.lav), 1, 1, 1, 0.1, 0.02, 0)); pom.add(sph(0.14, std(C.lavDeep), 1, 1, 1, 0, 0.12, 0));
    pom.add(sph(0.035, std(0xffffff, { emissive: 0xffffff, emissiveIntensity: 0.4 }), 1, 1, 1, -0.04, 0.2, 0.09));
  } else if (o.ears === 'none') { pom.position.y = 1.02; pom.add(sph(0.1, mainM, 1, 1, 1, 0, 0.05, 0)); pom.add(sph(0.05, std(0xffffff), 1, 1, 1, -0.02, 0.1, 0.05)); }
  const face = new THREE.Group(); bodyG.add(face);
  const inkM = new THREE.MeshStandardMaterial({ color: C.ink, roughness: 0.25 });
  const whiteM = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const eyes = [];
  [-1, 1].forEach((s) => {
    const ex = s * 0.21, ey = 0.66, ez = surf(ex, ey) - 0.02;
    const g = new THREE.Group(); g.position.set(ex, ey, ez);
    const open = new THREE.Group();
    const big = o.eyes === 'stars' ? 1.2 : 1;
    open.add(sph(0.105 * big, inkM, 1, o.eyes === 'dot' && !o.mika ? 1.1 : 1.28, 0.55, 0, 0, 0));
    const hl1 = sph(0.036 * big, whiteM, 1, 1, 1, 0.035, 0.07, 0.07); hl1.castShadow = false; open.add(hl1);
    const hl2 = sph(0.018 * big, whiteM, 1, 1, 1, -0.035, -0.06, 0.07); hl2.castShadow = false; open.add(hl2);
    if (o.eyes === 'stars') { const hl3 = sph(0.02, whiteM, 1, 1, 1, 0.045, -0.04, 0.075); hl3.castShadow = false; open.add(hl3); }
    g.add(open);
    const happy = new THREE.Mesh(new THREE.TorusGeometry(0.075, 0.02, 8, 20, Math.PI), inkM); happy.position.y = -0.03; happy.visible = false; g.add(happy);
    const closed = new THREE.Mesh(new THREE.TorusGeometry(0.075, 0.02, 8, 20, Math.PI), inkM); closed.rotation.z = Math.PI; closed.position.y = 0.03; closed.visible = false; g.add(closed);
    const heart = new THREE.Mesh(new THREE.ExtrudeGeometry(heartShape(0.24), { depth: 0.03, bevelEnabled: false }), new THREE.MeshBasicMaterial({ color: 0xff4f9a })); heart.position.z = 0.02; heart.visible = false; g.add(heart);
    const brow = mesh(rbox(0.17, 0.035, 0.04, 0.015), inkM, 0, 0.18, 0.04); brow.visible = false; brow.castShadow = false; g.add(brow);
    face.add(g); eyes.push({ g, open, happy, closed, heart, brow, s });
  });
  const cheeks = [-1, 1].map((s) => { const m = sph(0.085, std(0xff8fc0, { roughness: 0.9 }), 1.2, 0.72, 0.3, s * 0.37, 0.5, surf(s * 0.37, 0.5) - 0.03); m.castShadow = false; face.add(m); return m; });
  const mY = 0.47, mZ = surf(0, mY) - 0.005;
  const mouths = {};
  mouths.smile = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.015, 8, 16, Math.PI), inkM); mouths.smile.rotation.z = Math.PI; mouths.smile.position.set(0, mY + 0.045, mZ);
  mouths.frown = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.015, 8, 16, Math.PI), inkM); mouths.frown.position.set(0, mY - 0.02, mZ);
  mouths.open = sph(0.075, new THREE.MeshStandardMaterial({ color: 0x7a2252, roughness: 0.5 }), 1, 0.9, 0.35, 0, mY, mZ - 0.01);
  mouths.open.add(sph(0.04, std(0xff8fa3), 1.3, 0.7, 0.4, 0, -0.04, 0.03));
  mouths.o = sph(0.035, new THREE.MeshStandardMaterial({ color: 0x7a2252 }), 1, 1.2, 0.4, 0, mY, mZ - 0.005);
  Object.keys(mouths).forEach((k) => { mouths[k].visible = false; mouths[k].castShadow = false; face.add(mouths[k]); });
  const dropM = new THREE.MeshStandardMaterial({ color: 0x8edbff, roughness: 0.1, transparent: true, opacity: 0.85 });
  const tear = sph(0.04, dropM, 0.8, 1.2, 0.8, -0.27, 0.56, surf(-0.27, 0.56) + 0.01); tear.visible = false; face.add(tear);
  const sweat = sph(0.045, dropM, 0.8, 1.25, 0.8, 0.46, 0.98, 0.25); sweat.visible = false; bodyG.add(sweat);
  const arms = [-1, 1].map((s) => { const g = new THREE.Group(); g.position.set(s * 0.6, 0.5, 0.08); g.add(sph(0.14, deepM, 1.15, 0.7, 0.75, s * 0.06, 0, 0)); bodyG.add(g); return g; });
  const feet = [-1, 1].map((s) => { const m = sph(0.16, deepM, 1, 0.6, 1.25, s * 0.25, 0.08, 0.2); root.add(m); return m; });

  const acc = {};
  acc.scarf = new THREE.Group(); { const t = mesh(new THREE.TorusGeometry(0.4, 0.085, 12, 32), std(C.pink), 0, 0.36, 0.12); t.rotation.x = Math.PI / 2.1; t.scale.set(1.12, 1, 1); acc.scarf.add(t); const tail = mesh(rbox(0.14, 0.34, 0.06, 0.03), std(0xff6fae), 0.28, 0.2, 0.46); tail.rotation.z = 0.15; acc.scarf.add(tail); }
  acc.bow = new THREE.Group(); { const m = std(0xff6fae); const a = sph(0.1, m, 1.4, 0.8, 0.5, -0.11, 0, 0), b = sph(0.1, m, 1.4, 0.8, 0.5, 0.11, 0, 0); a.rotation.z = 0.5; b.rotation.z = -0.5; acc.bow.add(a, b, sph(0.055, std(0xffb3d1), 1, 1, 0.8, 0, 0, 0.02)); acc.bow.position.set(-0.4, 1.17, 0.12); acc.bow.rotation.z = 0.2; }
  acc.crown = new THREE.Group(); { const m = std(C.sun, { metalness: 0.3, roughness: 0.4 }); acc.crown.add(mesh(new THREE.CylinderGeometry(0.2, 0.22, 0.12, 20, 1, true), m, 0, 0, 0)); for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2; acc.crown.add(mesh(new THREE.ConeGeometry(0.06, 0.16, 8), m, Math.cos(a) * 0.2, 0.12, Math.sin(a) * 0.2)); } acc.crown.position.set(0, 1.12, 0.03); }
  acc.glasses = new THREE.Group(); { [-1, 1].forEach((s) => { acc.glasses.add(mesh(new THREE.TorusGeometry(0.13, 0.016, 8, 24), inkM, s * 0.21, 0.66, surf(s * 0.21, 0.66) + 0.04)); }); acc.glasses.add(mesh(rbox(0.1, 0.018, 0.02, 0.008), inkM, 0, 0.67, surf(0, 0.67) + 0.04)); }
  acc.hat = new THREE.Group(); { acc.hat.add(mesh(new THREE.ConeGeometry(0.3, 0.7, 20), std(0x7c5cff), 0, 0.38, 0)); acc.hat.add(mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.05, 28), std(0x5b3fd6), 0, 0.02, 0)); acc.hat.add(sph(0.045, std(C.sun, { emissive: 0xffcf3f, emissiveIntensity: 0.6 }), 1, 1, 1, 0, 0.74, 0)); acc.hat.position.set(0, 1.1, 0); acc.hat.rotation.z = 0.12; }
  acc.wings = new THREE.Group(); { const m = std(0xffffff, { roughness: 0.6 }); [-1, 1].forEach((s) => { const w = sph(0.3, m, 0.5, 1, 0.18, s * 0.55, 0.62, -0.35); w.rotation.z = s * -0.5; acc.wings.add(w); }); }
  acc.pj = new THREE.Group(); { acc.pj.add(sph(0.34, std(0x8ea2ff), 1.05, 0.7, 1.0, 0, 0.1, 0)); acc.pj.add(sph(0.075, std(0xffffff), 1, 1, 1, 0.3, 0.12, 0.2)); acc.pj.position.set(0, 1.0, 0); acc.pj.rotation.z = -0.1; }
  acc.beanie = new THREE.Group(); { acc.beanie.add(sph(0.38, std(0xff6f8e), 1.05, 0.62, 1.0, 0, 0.05, 0)); const rim = mesh(new THREE.TorusGeometry(0.36, 0.07, 10, 28), std(0xffffff), 0, -0.04, 0); rim.rotation.x = Math.PI / 2; acc.beanie.add(rim); acc.beanie.add(sph(0.09, std(0xffffff), 1, 1, 1, 0, 0.36, 0)); acc.beanie.position.set(0, 1.0, 0); }
  acc.flower = new THREE.Group(); { for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2; acc.flower.add(sph(0.07, std(0xffb3d1), 1, 1, 0.6, Math.cos(a) * 0.09, Math.sin(a) * 0.09, 0)); } acc.flower.add(sph(0.055, std(C.sun), 1, 1, 0.8, 0, 0, 0.03)); acc.flower.position.set(0.36, 1.08, 0.18); acc.flower.rotation.z = -0.3; }
  acc.bowtie = new THREE.Group(); { const m = std(0xe0457b); acc.bowtie.add(sph(0.1, m, 1.5, 0.9, 0.6, -0.12, 0, 0), sph(0.1, m, 1.5, 0.9, 0.6, 0.12, 0, 0), sph(0.05, std(0xffd1e3), 1, 1, 0.8, 0, 0, 0.02)); acc.bowtie.position.set(0, 0.34, 0.5); }
  acc.mortar = new THREE.Group(); { const m = std(0x2a1b5e); acc.mortar.add(mesh(new THREE.CylinderGeometry(0.26, 0.3, 0.16, 20), m, 0, 0.04, 0)); acc.mortar.add(mesh(rbox(0.8, 0.04, 0.8, 0.01), m, 0, 0.15, 0)); acc.mortar.add(mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.3, 6), std(C.sun), 0.28, 0.0, 0.28)); acc.mortar.add(sph(0.05, std(C.sun), 1, 1, 1, 0.28, -0.14, 0.28)); acc.mortar.position.set(0, 1.08, 0); }
  acc.labcoat = new THREE.Group(); { const m = std(0xffffff, { roughness: 0.7 }); acc.labcoat.add(sph(0.58, m, 1.12, 0.7, 1.05, 0, 0.42, -0.02)); acc.labcoat.add(sph(0.07, std(0xe0457b), 1, 1, 0.6, 0.26, 0.42, 0.52)); acc.labcoat.add(sph(0.07, std(0xe0457b), 1, 1, 0.6, 0.26, 0.26, 0.54)); }
  Object.keys(acc).forEach((k) => { acc[k].visible = false; bodyG.add(acc[k]); });
  { const oc = shade(o.color, 0.42).getHex(); const list = []; bodyG.traverse((m) => { if (m.isMesh && m.parent && (m.material === mainM || m.material === deepM)) list.push(m); }); feet.forEach((f) => list.push(f)); list.forEach((m) => outline(m, oc)); }
  root.traverse((m) => { if (m.isMesh) m.receiveShadow = false; });

  const st = { emo: 'neutral', talking: false, vy: 0, y: 0, squash: 0, yaw: 0, yawT: 0, blinkT: 0, nextBlink: 1.5 + Math.random() * 2, look: new THREE.Vector2(), lookT: new THREE.Vector2(), nextLook: 1, armsT: 0, sleeping: false };
  const ch = { root, st, fx: null, baseY: 0 };
  function baseEyes(e) {
    const happyBase = o.eyes === 'happy' && !o.mika;
    e.open.visible = !happyBase; e.happy.visible = happyBase; e.closed.visible = false; e.heart.visible = false; e.brow.visible = false; e.g.scale.set(1, 1, 1);
  }
  ch.setAccessories = (list) => { Object.keys(acc).forEach((k) => { acc[k].visible = list.indexOf(k) >= 0; }); };
  ch.setEmotion = (e) => {
    st.emo = e; st.armsT = 0; st.sleeping = false;
    eyes.forEach(baseEyes);
    Object.keys(mouths).forEach((k) => { mouths[k].visible = false; });
    tear.visible = false; sweat.visible = false;
    const E = eyes;
    if (e === 'happy') { E.forEach((x) => { x.open.visible = false; x.happy.visible = true; }); mouths.open.visible = true; mouths.open.scale.set(1.05, 0.8, 0.35); }
    else if (e === 'love') { E.forEach((x) => { x.open.visible = false; x.heart.visible = true; }); mouths.open.visible = true; st.armsT = 1; }
    else if (e === 'wow') { E.forEach((x) => { x.g.scale.set(1.18, 1.18, 1); }); mouths.o.visible = true; }
    else if (e === 'sad') { E.forEach((x) => { x.brow.visible = true; x.brow.rotation.z = -x.s * 0.45; }); mouths.frown.visible = true; tear.visible = true; }
    else if (e === 'worry') { E.forEach((x) => { x.brow.visible = true; x.brow.rotation.z = -x.s * 0.4; }); mouths.o.visible = true; mouths.o.scale.set(0.8, 1, 0.4); sweat.visible = true; }
    else if (e === 'proud') { E.forEach((x) => { x.open.visible = false; x.happy.visible = true; }); mouths.open.visible = true; mouths.open.scale.set(1.2, 1, 0.35); st.armsT = 0.5; if (ch.fx) ch.fx('star', 5); }
    else if (e === 'shy') { E.forEach((x) => { x.open.visible = false; x.closed.visible = true; }); mouths.smile.visible = true; st.yawT = 0.5; }
    else if (e === 'sleep') { E.forEach((x) => { x.open.visible = false; x.closed.visible = true; }); mouths.o.visible = true; mouths.o.scale.set(0.6, 0.7, 0.4); st.sleeping = true; }
    else mouths.smile.visible = true;
    cheeks.forEach((c) => c.scale.set(e === 'shy' || e === 'love' ? 1.6 : 1.2, e === 'shy' ? 0.95 : 0.72, 0.3));
  };
  ch.hop = (p) => { if (st.y < 0.05) { st.vy = p || 4.2; st.squash = -0.2; } };
  ch.setTalking = (on) => { st.talking = !!on; };
  ch.look = (x, y) => st.lookT.set(x, y);
  ch.face = (yaw) => { st.yawT = yaw; };
  ch.update = (dt, T, moving, hovered) => {
    if (st.y > 0 || st.vy > 0) { st.vy -= 16 * dt; st.y += st.vy * dt; if (st.y <= 0) { st.y = 0; if (st.vy < -1) st.squash = 0.18; st.vy = 0; } }
    st.squash += (0 - st.squash) * Math.min(1, dt * 10);
    root.position.y = (ch.baseY || 0) + st.y + (moving ? Math.abs(Math.sin(T * 9)) * 0.07 : 0);
    st.yaw += (st.yawT - st.yaw) * Math.min(1, dt * 5); root.rotation.y = st.yaw; root.rotation.z = moving ? Math.sin(T * 9) * 0.08 : 0;
    const br = st.sleeping ? 0.04 * Math.sin(T * 1.4) : 0.022 * Math.sin(T * 2.3);
    bodyG.scale.set(1 - st.squash * 0.5 - br * 0.5, 1 + st.squash + br, 1 - st.squash * 0.5);
    feet.forEach((f, i) => { f.position.y = 0.08 + (moving ? Math.max(0, Math.sin(T * 9 + i * Math.PI)) * 0.06 : 0); });
    const droop = (st.emo === 'sad' || st.emo === 'worry') ? 0.35 : 0;
    ears.forEach((e, i) => { const s = i ? 1 : -1; e.rotation.z = -s * ((e.userData.base || 0.28) + (st.talking ? 0.1 : 0) + droop) + Math.sin(T * 1.7 + i) * 0.05; });
    pom.rotation.z = Math.sin(T * 2.1) * 0.12; pom.rotation.x = Math.sin(T * 1.6) * 0.06;
    arms.forEach((a, i) => { const s = i ? 1 : -1; a.rotation.z = s * -(0.2 + st.armsT * 1.6) + (moving ? Math.sin(T * 9 + i * 3) * 0.3 : Math.sin(T * 2 + i) * 0.06); a.position.y = 0.5 + st.armsT * 0.28; });
    if (!hovered && T > st.nextLook) { st.lookT.set((Math.random() - 0.5) * 1.4, (Math.random() - 0.5) * 0.8); st.nextLook = T + 1.5 + Math.random() * 2.5; }
    st.look.lerp(st.lookT, Math.min(1, dt * 6));
    eyes.forEach((e) => { e.open.position.x = st.look.x * 0.022; e.open.position.y = st.look.y * 0.018; });
    if (!st.sleeping && T > st.nextBlink) { st.blinkT = 0.13; st.nextBlink = T + 2 + Math.random() * 3.5; }
    st.blinkT = Math.max(0, st.blinkT - dt);
    const bl = st.blinkT > 0 ? 0.1 : 1;
    eyes.forEach((e) => { if (e.open.visible) e.open.scale.y += (bl - e.open.scale.y) * Math.min(1, dt * 40); });
    if (st.talking) { const k = 0.55 + Math.abs(Math.sin(T * 13)) * 0.7; Object.keys(mouths).forEach((m) => { mouths[m].visible = m === 'open'; }); mouths.open.scale.set(1.0, k, 0.35); }
    else {
      const keep = ['happy', 'love', 'proud'].indexOf(st.emo) >= 0;
      if (mouths.open.visible && !keep) mouths.open.visible = false;
      if (!keep && !Object.keys(mouths).some((m) => mouths[m].visible)) mouths.smile.visible = true;
    }
    if (tear.visible) { const f = (T * 0.35) % 1; tear.position.y = 0.56 - f * 0.18; tear.material.opacity = 0.85 * (1 - f); }
    if (sweat.visible) sweat.position.y = 0.98 + Math.sin(T * 3) * 0.02;
    if (st.sleeping && ch.fx && Math.random() < dt * 0.7) ch.fx('z', 1);
  };
  ch.dispose = () => { root.traverse((m) => { if (m.isMesh) m.geometry.dispose(); }); if (root.parent) root.parent.remove(root); };
  ch.setEmotion('neutral'); ch.setAccessories(o.acc || []);
  return ch;
}
function softShadow() {
  const t = canvasTex(128, 128, (g, w, h) => { const r = g.createRadialGradient(64, 64, 4, 64, 64, 62); r.addColorStop(0, 'rgba(70,40,120,.38)'); r.addColorStop(1, 'rgba(70,40,120,0)'); g.fillStyle = r; g.fillRect(0, 0, w, h); });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.5), new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false }));
  m.rotation.x = -Math.PI / 2; m.position.y = 0.012; return m;
}
const GLYPHS = {};
function glyph(kind) { return GLYPHS[kind] || (GLYPHS[kind] = glyphTexture(kind)); }
function createFx(scene) {
  const list = [];
  return {
    emit(kind, n, pos, scale) {
      const sc = scale || 1;
      for (let i = 0; i < n; i++) {
        const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glyph(kind), transparent: true, depthWrite: false, depthTest: false, opacity: 0 }));
        s.position.set(pos.x + (Math.random() - 0.5) * 0.9 * sc, pos.y + 1.1 * sc + Math.random() * 0.3, pos.z + 0.3);
        s.scale.setScalar((0.22 + Math.random() * 0.14) * sc); s.renderOrder = 10; scene.add(s);
        list.push({ s, vx: (Math.random() - 0.5) * 0.7, vy: kind === 'drop' ? -0.2 : 0.8 + Math.random() * 0.6, life: 0, max: 1.6 + Math.random() * 0.6, delay: i * 0.09 });
      }
    },
    update(dt) {
      for (let i = list.length - 1; i >= 0; i--) {
        const f = list[i]; f.delay -= dt; if (f.delay > 0) continue;
        f.life += dt; const k = f.life / f.max;
        f.s.position.x += f.vx * dt; f.s.position.y += f.vy * dt * (1 - k * 0.5);
        f.s.material.opacity = k < 0.15 ? k / 0.15 : Math.max(0, 1 - (k - 0.15) / 0.85);
        if (f.life >= f.max) { scene.remove(f.s); f.s.material.dispose(); list.splice(i, 1); }
      }
    }
  };
}
function standardLights(scene) {
  scene.add(new THREE.HemisphereLight(0xffffff, 0xffd6e8, 1.15));
  const d = new THREE.DirectionalLight(0xffffff, 1.3); d.position.set(-3, 6, 5); scene.add(d); return d;
}

/* ================= La chambre de Mika (scène principale) ================= */
function buildRoom(scene) {
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

  // décorations à débloquer (boutique)
  const decor = {};
  { const g = new THREE.Group(); g.position.set(-1.0, 1.02, -1.7);
    const bm = std(0xd9a86c); g.add(sph(0.26, bm, 1, 1, 0.95, 0, 0.26, 0)); g.add(sph(0.2, bm, 1, 1, 0.95, 0, 0.62, 0.02));
    g.add(sph(0.08, bm, 1, 1, 0.6, -0.15, 0.78, 0)); g.add(sph(0.08, bm, 1, 1, 0.6, 0.15, 0.78, 0));
    g.add(sph(0.08, std(0xf5d9b0), 1, 0.8, 0.7, 0, 0.58, 0.17)); g.add(sph(0.03, std(C.ink), 1, 1, 1, 0, 0.6, 0.23));
    g.add(sph(0.025, std(C.ink), 1, 1, 1, -0.07, 0.68, 0.17)); g.add(sph(0.025, std(C.ink), 1, 1, 1, 0.07, 0.68, 0.17));
    g.add(sph(0.07, bm, 1, 1.3, 1, -0.28, 0.25, 0.08)); g.add(sph(0.07, bm, 1, 1.3, 1, 0.28, 0.25, 0.08));
    g.add(mesh(rbox(0.3, 0.07, 0.04, 0.02), std(0xff6fae), 0, 0.42, 0.2)); g.rotation.y = 0.5; g.visible = false; room.add(g); decor.plushbear = g; }
  { const g = new THREE.Group(); g.position.set(2.45, 2.55, -3.14);
    const neon = new THREE.Mesh(new THREE.ExtrudeGeometry(heartShape(0.8), { depth: 0.05, bevelEnabled: false }), new THREE.MeshBasicMaterial({ color: 0xff7ac0 }));
    const halo = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 1.8), new THREE.MeshBasicMaterial({ map: canvasTex(128, 128, (c, w, h) => { const r = c.createRadialGradient(64, 64, 4, 64, 64, 62); r.addColorStop(0, 'rgba(255,122,192,.55)'); r.addColorStop(1, 'rgba(255,122,192,0)'); c.fillStyle = r; c.fillRect(0, 0, w, h); }), transparent: true, depthWrite: false }));
    halo.position.z = -0.02; g.add(halo, neon); g.visible = false; room.add(g); decor.neon = g; }
  return { skyMat, shadeMat, bulbs, dust, decor };
}

export function init(host, opts) {
  opts = opts || {};
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'low-power', preserveDrawingBuffer: !!opts.preserve }); } catch (e) { return null; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
  const canvas = renderer.domElement; canvas.className = 'scene3d'; canvas.setAttribute('aria-hidden', 'true');
  host.insertBefore(canvas, host.firstChild);
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0xf3e6ff);
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 60);
  const camBase = new THREE.Vector3(1.3, 4.0, 8.2), camLook = new THREE.Vector3(0, 1.0, 0.3);
  const hemi = new THREE.HemisphereLight(0xffffff, 0xffd6e8, 1.0); scene.add(hemi);
  const sunL = new THREE.DirectionalLight(0xffffff, 1.5); sunL.position.set(-3, 7, 5); sunL.castShadow = true; sunL.shadow.mapSize.set(1024, 1024);
  Object.assign(sunL.shadow.camera, { left: -5, right: 5, top: 5, bottom: -5, near: 1, far: 18 }); sunL.shadow.bias = -0.0006; scene.add(sunL);
  const lampL = new THREE.PointLight(0xffc27a, 0, 7, 1.6); lampL.position.set(-2.1, 2.3, -0.4); scene.add(lampL);
  const R = buildRoom(scene);
  const fx = createFx(scene);
  let mika = createCharacter(opts.look || { mika: true });
  mika.root.position.set(0, 0, 0.75); mika.root.scale.setScalar(1.3); scene.add(mika.root);
  mika.root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  let lastAcc = [];
  const blob = softShadow(); scene.add(blob);
  mika.fx = (k, n) => fx.emit(k, n, mika.root.position, 1.3);
  const st = { bed: null, act: null, target: new THREE.Vector3(0, 0, 0.75), nextWander: 4, hold: 0, busy: false, lampOn: false, lampT: 0, lampTouched: false };
  const SPOTS = [[0, 0.75], [0.1, 0.75], [1.0, -1.7], [-0.9, -0.5], [2.0, -1.4], [1.4, 1.4], [-0.5, 1.6], [0.9, 0.9]];
  const bridge = {
    setEmotion: (e) => mika.setEmotion(e), setAccessories: (l) => { lastAcc = l; mika.setAccessories(l); }, hop: (p) => mika.hop(p),
    setLook(o) {
      const old = mika, nm = createCharacter(o);
      nm.root.position.copy(old.root.position); nm.root.scale.copy(old.root.scale); nm.root.traverse((x) => { if (x.isMesh) x.castShadow = true; });
      scene.add(nm.root); nm.fx = (k, n) => fx.emit(k, n, nm.root.position, 1.3); nm.setAccessories(lastAcc); nm.setEmotion(old.st.emo === 'sleep' ? 'neutral' : old.st.emo);
      old.dispose(); mika = nm; st.bed = null; nm.hop(4);
    },
    act(name, ms) {
      if (name === 'nap') { st.bed = { until: -1, ms: ms || 9000, state: 'go' }; st.target.set(-1.35, 0, -1.45); st.hold = 99; }
      else if (name === 'eat') { st.act = { until: T + 2.6, kind: 'eat' }; st.target.set(0, 0, 0.9); st.hold = 3; mika.face(0); mika.setEmotion('happy'); }
      else if (name === 'hug') { mika.setEmotion('love'); mika.hop(4.8); mika.fx('heart', 7); st.target.set(0, 0, 1.0); st.hold = 3; mika.face(0); setTimeout(() => mika.setEmotion('neutral'), 2600); }
      else if (name === 'play') { st.act = { until: T + 3, kind: 'play', next: 0 }; st.target.set(0.2, 0, 0.9); st.hold = 3.5; mika.setEmotion('happy'); }
      else if (name === 'rumble') { mika.setEmotion('worry'); st.armsBelly = 1.6; setTimeout(() => mika.setEmotion('neutral'), 2200); }
    },
    talking(on) { mika.setTalking(on); if (on) { st.target.set(0, 0, 0.9); mika.face(0); st.hold = 2.5; } },
    look(dx, dy) { mika.look(dx, dy); },
    busy(on) { st.busy = !!on; if (on) { st.target.set(0.1, 0, 0.9); st.hold = 3; } },
    emit(kind, n) { mika.fx(kind, n); },
    setDecor(list) { Object.keys(R.decor).forEach((k) => { R.decor[k].visible = list.indexOf(k) >= 0; }); },
    destroy() { running = false; renderer.dispose(); if (canvas.parentNode) canvas.parentNode.removeChild(canvas); }
  };
  const ray = new THREE.Raycaster(), ptr = new THREE.Vector2();
  let down = null, hovered = false; const camOff = new THREE.Vector2(), camOffT = new THREE.Vector2();
  canvas.style.touchAction = 'pan-y';
  const setPtr = (e) => { const r = canvas.getBoundingClientRect(); ptr.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1); return ptr; };
  canvas.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY }; });
  canvas.addEventListener('pointermove', (e) => { if (e.pointerType === 'touch') return; const p = setPtr(e); camOffT.set(p.x * 0.5, p.y * 0.25); hovered = true; mika.look(p.x * 0.9, -p.y * 0.6); });
  canvas.addEventListener('pointerleave', () => { camOffT.set(0, 0); hovered = false; });
  canvas.addEventListener('pointerup', (e) => {
    if (!down || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 8) { down = null; return; }
    down = null; setPtr(e); ray.setFromCamera(ptr, camera);
    for (const h of ray.intersectObjects(scene.children, true)) {
      let o = h.object, name = null;
      while (o) { if (o === mika.root) { name = 'mika'; break; } if (o.userData && o.userData.pick) { name = o.userData.pick; break; } if (o.userData && o.userData.root && o.userData.root.userData.pick) { name = o.userData.root.userData.pick; break; } o = o.parent; }
      if (name) { if (name === 'lamp') { st.lampOn = !st.lampOn; st.lampTouched = true; } if (name === 'mika') mika.hop(4.6); host.dispatchEvent(new CustomEvent('mika3d', { detail: { name } })); return; }
    }
  });
  function resize() {
    const w = host.clientWidth || 360, h = host.clientHeight || 360;
    renderer.setSize(w, h, false); canvas.style.width = '100%'; canvas.style.height = '100%';
    camera.aspect = w / h; camera.fov = w / h < 0.9 ? 38 : 30; camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(host); resize();
  let ambHour = -1;
  function ambiance() {
    const h = new Date().getHours(); if (h === ambHour) return; ambHour = h;
    R.skyMat.map.dispose(); R.skyMat.map = skyTexture(h); R.skyMat.needsUpdate = true;
    const night = h < 6 || h >= 21, eve = h >= 18 && h < 21;
    scene.background.set(night ? 0x2b2360 : eve ? 0xffd0c0 : 0xf3e6ff);
    hemi.intensity = night ? 0.55 : eve ? 0.85 : 1.05; hemi.color.set(night ? 0x8f86ff : eve ? 0xffd9c2 : 0xffffff);
    sunL.intensity = night ? 0.35 : eve ? 1.0 : 1.5; sunL.color.set(night ? 0x9aa6ff : eve ? 0xffb38a : 0xffffff);
    if ((night || eve) && !st.lampTouched) st.lampOn = true;
    R.dust.forEach((d) => { d.material.map = glyph(night ? 'star' : 'heart'); d.material.opacity = 0; });
  }
  ambiance(); setInterval(ambiance, 60000);
  let running = true, visible = true; const clock = new THREE.Clock(); let T = 0; const tmp = new THREE.Vector3();
  if ('IntersectionObserver' in window) new IntersectionObserver((es) => { visible = es[0].isIntersecting; }, { threshold: 0.01 }).observe(host);
  function frame() {
    if (!running) return; requestAnimationFrame(frame);
    if (!visible || document.hidden) { clock.getDelta(); return; }
    const dt = Math.min(0.05, clock.getDelta()); T += dt;
    const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    st.hold = Math.max(0, st.hold - dt);
    const ms = mika.st;
    if (st.act) {
      if (st.act.kind === 'eat') mika.setTalking(true);
      if (st.act.kind === 'play' && T > st.act.next) { mika.hop(4.2); mika.fx('star', 2); st.act.next = T + 0.55; }
      if (T > st.act.until) { if (st.act.kind === 'eat') { mika.setTalking(false); mika.fx('heart', 5); mika.setEmotion('love'); setTimeout(() => mika.setEmotion('neutral'), 2200); } else mika.setEmotion('neutral'); host.dispatchEvent(new CustomEvent('mika3d', { detail: { name: 'done-' + st.act.kind } })); st.act = null; }
    }
    if (st.bed) {
      const b = st.bed, p0 = mika.root.position, d0 = Math.hypot(st.target.x - p0.x, st.target.z - p0.z);
      if (b.state === 'go' && d0 < 0.1) { b.state = 'sleep'; b.until = T + b.ms / 1000; mika.setEmotion('sleep'); mika.face(0.9); }
      if (b.state === 'sleep') { mika.baseY += (1.08 - mika.baseY) * Math.min(1, dt * 4); if (T > b.until) { b.state = 'wake'; mika.setEmotion('happy'); mika.hop(4.4); mika.fx('star', 5); } }
      else if (b.state === 'wake') { mika.baseY += (0 - mika.baseY) * Math.min(1, dt * 5); if (mika.baseY < 0.03) { mika.baseY = 0; st.hold = 2; st.target.set(0, 0, 0.9); host.dispatchEvent(new CustomEvent('mika3d', { detail: { name: 'done-nap' } })); setTimeout(() => mika.setEmotion('neutral'), 1500); st.bed = null; } }
    }
    if (!reduce && !ms.sleeping && !st.busy && !ms.talking && st.hold <= 0 && T > st.nextWander) { const p = SPOTS[Math.floor(Math.random() * SPOTS.length)]; st.target.set(p[0], 0, p[1]); st.nextWander = T + 5 + Math.random() * 6; }
    const p = mika.root.position, dx = st.target.x - p.x, dz = st.target.z - p.z, dist = Math.hypot(dx, dz);
    let moving = false;
    if (dist > 0.06) { moving = true; const sp = Math.min(dist, (ms.talking ? 1.6 : 1.0) * dt); p.x += dx / dist * sp; p.z += dz / dist * sp; mika.face(Math.atan2(dx, dz) * 0.7); }
    else if (!ms.talking && ms.emo !== 'shy') mika.face(0);
    mika.update(dt, T, moving, hovered);
    blob.position.set(p.x, 0.012, p.z + 0.02);
    const sc = Math.max(0.5, 1 - ms.y * 0.4) * 1.3; blob.scale.set(sc * (1.05 + ms.squash), sc * (1.05 + ms.squash), 1); blob.material.opacity = Math.max(0.35, 1 - ms.y * 0.7);
    fx.update(dt);
    R.dust.forEach((d) => { const u = d.userData, f = (T * u.sp * 0.3 + u.ph) % 1; d.position.set(u.x + Math.sin(T * u.sp + u.ph) * 0.4, 0.9 + f * 3, u.z); d.material.opacity = 0.55 * Math.sin(f * Math.PI); d.material.rotation = T * 0.3 + u.ph; });
    R.bulbs.forEach((b, i) => b.scale.setScalar(0.85 + 0.25 * Math.sin(T * 2.4 + i * 1.3)));
    st.lampT += ((st.lampOn ? 1 : 0) - st.lampT) * Math.min(1, dt * 4); lampL.intensity = st.lampT * 2.2; R.shadeMat.emissiveIntensity = st.lampT * 1.3;
    camOff.lerp(hovered ? camOffT : tmp.set(Math.sin(T * 0.25) * 0.28, Math.sin(T * 0.18) * 0.08, 0), Math.min(1, dt * 3));
    camera.position.set(camBase.x + camOff.x, camBase.y + camOff.y, camBase.z); camera.lookAt(camLook);
    renderer.render(scene, camera);
  }
  frame();
  return bridge;
}

/* ================= Aperçu d'un personnage (créateur d'avatar) ================= */
export function initPreview(host, getOpts) {
  let renderer; try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' }); } catch (e) { return null; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  const canvas = renderer.domElement; canvas.className = 'scene3d'; host.insertBefore(canvas, host.firstChild);
  const scene = new THREE.Scene(); standardLights(scene);
  const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 30); camera.position.set(0, 1.5, 4.6); camera.lookAt(0, 0.82, 0);
  const plat = mesh(new THREE.CylinderGeometry(0.95, 1.0, 0.1, 40), std(0xffffff), 0, -0.05, 0, false); scene.add(plat);
  { const sh = softShadow(); sh.scale.setScalar(1.5); scene.add(sh); }
  const fx = createFx(scene);
  let ch = null, T = 0, running = true, drag = null, spin = 0, spinT = 0;
  function build() {
    if (ch) ch.dispose();
    ch = createCharacter(getOpts()); ch.root.scale.setScalar(1.25); ch.fx = (k, n) => fx.emit(k, n, ch.root.position, 1.25); scene.add(ch.root);
  }
  build();
  function resize() { const w = host.clientWidth || 200, h = host.clientHeight || 200; renderer.setSize(w, h, false); canvas.style.width = '100%'; canvas.style.height = '100%'; camera.aspect = w / h; camera.updateProjectionMatrix(); }
  new ResizeObserver(resize).observe(host); resize();
  canvas.style.touchAction = 'none';
  canvas.addEventListener('pointerdown', (e) => { drag = { x: e.clientX, s: spin, moved: false }; canvas.setPointerCapture(e.pointerId); });
  canvas.addEventListener('pointermove', (e) => { if (!drag) return; const d = e.clientX - drag.x; if (Math.abs(d) > 4) drag.moved = true; spin = drag.s + d * 0.012; spinT = spin; });
  canvas.addEventListener('pointerup', () => { if (drag && !drag.moved) { ch.hop(4.6); ch.setEmotion('happy'); fx.emit('heart', 3, ch.root.position, 1.25); setTimeout(() => ch && ch.setEmotion('neutral'), 1400); } drag = null; });
  const clock = new THREE.Clock(); let visible = true;
  if ('IntersectionObserver' in window) new IntersectionObserver((es) => { visible = es[0].isIntersecting; }, { threshold: 0.01 }).observe(host);
  function frame() {
    if (!running) return; requestAnimationFrame(frame);
    if (!visible || document.hidden) { clock.getDelta(); return; }
    const dt = Math.min(0.05, clock.getDelta()); T += dt;
    if (!drag) spinT += (Math.sin(T * 0.7) * 0.5 - spinT) * Math.min(1, dt * 0.8);
    spin += (spinT - spin) * Math.min(1, dt * 6);
    ch.face(spin); ch.update(dt, T, false, false); fx.update(dt);
    renderer.render(scene, camera);
  }
  frame();
  return {
    rebuild() { build(); ch.hop(3.6); },
    emote(e) { ch.setEmotion(e); },
    destroy() { running = false; if (ch) ch.dispose(); renderer.dispose(); renderer.forceContextLoss && renderer.forceContextLoss(); if (canvas.parentNode) canvas.parentNode.removeChild(canvas); }
  };
}

/* ================= Le salon des avatars (conversation) ================= */
export function initStage(host, mikaAcc) {
  let renderer; try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' }); } catch (e) { return null; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  const canvas = renderer.domElement; canvas.className = 'scene3d'; host.insertBefore(canvas, host.firstChild);
  const ov = document.createElement('div'); ov.className = 'st3-ov'; host.appendChild(ov);
  const scene = new THREE.Scene(); standardLights(scene);
  const camera = new THREE.PerspectiveCamera(30, 2.6, 0.1, 40); camera.position.set(0, 2.2, 6.4); camera.lookAt(0, 1.1, 0);
  scene.add(mesh(rbox(11, 0.3, 4.2, 0.1), std(0xffe6c9, { emissive: 0xf0c9a0, emissiveIntensity: 0.35 }), 0, -0.15, 0, false));
  { const wt = canvasTex(256, 256, (g, w, h) => { g.fillStyle = '#E9DEFE'; g.fillRect(0, 0, w, h); g.fillStyle = 'rgba(255,255,255,.85)'; for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) { g.beginPath(); g.arc(32 + x * 64 + (y % 2) * 32, 32 + y * 64, 5, 0, 7); g.fill(); } });
    wt.wrapS = wt.wrapT = THREE.RepeatWrapping; wt.repeat.set(4, 1.4);
    scene.add(mesh(rbox(11, 3.6, 0.2, 0.06), std(0xffffff, { map: wt, emissive: 0xe9defe, emissiveIntensity: 0.25 }), 0, 1.8, -2.15, false));
    scene.add(mesh(rbox(11, 0.2, 0.12, 0.04), std(0xffffff), 0, 0.1, -2.02, false));
    for (let i = 0; i < 17; i++) { const t = i / 16; const bm = new THREE.MeshBasicMaterial({ color: [0xfff1a8, 0xffb3d1, 0xbdf3dc, 0xd9ccff][i % 4] }); scene.add(sph(0.07, bm, 1, 1, 1, -5 + t * 10, 3.15 - Math.sin(t * Math.PI * 4) * 0.12, -2.0)); }
    const hm = new THREE.Mesh(new THREE.ExtrudeGeometry(heartShape(0.7), { depth: 0.05, bevelEnabled: false }), new THREE.MeshBasicMaterial({ color: 0xff8fc0 })); hm.position.set(-3.6, 2.2, -2.0); scene.add(hm);
    const hm2 = hm.clone(); hm2.position.set(3.6, 2.2, -2.0); hm2.material = new THREE.MeshBasicMaterial({ color: 0x8edbff }); scene.add(hm2); }
  const rg = new THREE.Group(); rg.position.set(0, 0, 0.1); rg.add(mesh(new THREE.CylinderGeometry(1.9, 1.9, 0.05, 40), std(0xbdf3dc), 0, 0.03, 0, false)); rg.add(mesh(new THREE.CylinderGeometry(1.3, 1.3, 0.07, 40), std(0xfff6ea), 0, 0.04, 0, false)); scene.add(rg);
  const fx = createFx(scene);
  const mika = createCharacter({ mika: true, acc: mikaAcc || [] }); mika.root.scale.setScalar(0.9); mika.root.position.set(0, 0, 0.6); scene.add(mika.root); mika.fx = (k, n) => fx.emit(k, n, mika.root.position, 0.9);
  const cast = {}; let mikaTarget = new THREE.Vector3(0, 0, 0.6), nextWander = 3, T = 0, running = true, visible = true;
  const mikaOv = mkLabel('Mika', true);
  function mkLabel(name, isMika) { const n = document.createElement('span'); n.className = 'st3-n' + (isMika ? ' mk' : ''); n.textContent = name; ov.appendChild(n); return n; }
  function slotX(i, mine, total) { return mine ? -3.5 : 3.5 - i * 1.5; }
  function relayout() { let i = 0; Object.keys(cast).forEach((id) => { const c = cast[id]; if (c.mine) c.tx = -3.2; else { c.tx = 3.2 - i * 1.5; i++; } }); }
  function setMembers(list) {
    const ids = {};
    list.forEach((m) => {
      ids[m.id] = 1;
      const key = m.code + '|' + m.nick;
      if (cast[m.id] && cast[m.id].key !== key) { removeOne(m.id); }
      if (!cast[m.id]) {
        const ch = createCharacter(avatarOpts(m.code)); ch.root.scale.setScalar(0.95); ch.root.position.set(m.me ? -6 : 6, 0, 0.5); scene.add(ch.root);
        ch.fx = (k, n) => fx.emit(k, n, ch.root.position, 0.95);
        cast[m.id] = { ch, key, mine: !!m.me, tx: 0, label: mkLabel(m.me ? 'Moi' : m.nick), bubble: null };
        setTimeout(() => ch.hop(4), 500);
      }
    });
    Object.keys(cast).forEach((id) => { if (!ids[id]) removeOne(id); });
    relayout();
  }
  function removeOne(id) { const c = cast[id]; if (!c) return; c.ch.dispose(); c.label.remove(); if (c.bubble) c.bubble.remove(); delete cast[id]; }
  function bubble(owner, text, isMika) {
    const old = owner.bubble; if (old) old.remove();
    const b = document.createElement('div'); b.className = 'st3-b' + (isMika ? ' mk' : ''); b.textContent = text; ov.appendChild(b); owner.bubble = b;
    setTimeout(() => { if (owner.bubble === b) { b.remove(); owner.bubble = null; } }, Math.min(7000, 2800 + text.length * 55));
  }
  const mikaOwner = { bubble: null };
  function emoFor(t) {
    if (/[😂🤣😆😄😁]|haha|mdr|lol/i.test(t)) return 'happy';
    if (/[😍🥰❤💕💖]|j'adore|trop bien/i.test(t)) return 'love';
    if (/[😢😭😞]|triste|nul|fatigu/i.test(t)) return 'sad';
    if (/[😮😱]|\?\?|oh/i.test(t)) return 'wow';
    return null;
  }
  const api = {
    setMembers,
    say(id, text) {
      const c = cast[id]; if (!c) return;
      c.ch.hop(3.8); const e = emoFor(text);
      if (e) { c.ch.setEmotion(e); if (e === 'love') fx.emit('heart', 3, c.ch.root.position, 0.95); setTimeout(() => c.ch.setEmotion('neutral'), 1800); }
      c.ch.setTalking(true); setTimeout(() => c.ch.setTalking(false), Math.min(2400, 600 + text.length * 40));
      bubble(c, text, false);
    },
    mikaSay(text) { mika.hop(3.6); mika.setTalking(true); mikaTarget.set(0, 0, 0.9); nextWander = T + 4; setTimeout(() => mika.setTalking(false), Math.min(2800, 700 + text.length * 40)); bubble(mikaOwner, text, true); },
    mikaReact(e) { mika.setEmotion(e); setTimeout(() => mika.setEmotion('neutral'), 2200); },
    setMikaAcc(l) { mika.setAccessories(l); },
    destroy() { running = false; Object.keys(cast).forEach(removeOne); mika.dispose(); renderer.dispose(); renderer.forceContextLoss && renderer.forceContextLoss(); canvas.remove(); ov.remove(); }
  };
  function resize() { const w = host.clientWidth || 360, h = host.clientHeight || 150; renderer.setSize(w, h, false); canvas.style.width = '100%'; canvas.style.height = '100%'; camera.aspect = w / h; camera.fov = w / h > 2 ? 30 : 40; camera.updateProjectionMatrix(); }
  new ResizeObserver(resize).observe(host); resize();
  mikaOv.style.opacity = 1;
  const clock = new THREE.Clock(); const v = new THREE.Vector3();
  function place(el, wp, dy, dx) { v.set(wp.x, wp.y + dy, wp.z).project(camera); const w = host.clientWidth, h = host.clientHeight; const half = (el.offsetWidth || 40) / 2 + 4; el.style.left = Math.max(half, Math.min(w - half, (v.x * 0.5 + 0.5) * w + (dx || 0))) + 'px'; el.style.top = ((-v.y * 0.5 + 0.5) * h) + 'px'; }
  mika.setEmotion('neutral');
  canvas.addEventListener('pointerup', () => { mika.hop(4.4); mika.setEmotion('happy'); setTimeout(() => mika.setEmotion('neutral'), 1200); host.dispatchEvent(new CustomEvent('mika3d', { detail: { name: 'mika' } })); });
  function frame() {
    if (!running) return; requestAnimationFrame(frame);
    if (document.hidden) { clock.getDelta(); return; }
    const dt = Math.min(0.05, clock.getDelta()); T += dt;
    if (T > nextWander && !mika.st.talking) { mikaTarget.set((Math.random() - 0.5) * 3.2, 0, 0.3 + Math.random() * 0.8); nextWander = T + 4 + Math.random() * 5; }
    let p = mika.root.position, dx = mikaTarget.x - p.x, dz = mikaTarget.z - p.z, dist = Math.hypot(dx, dz), mv = false;
    if (dist > 0.06) { mv = true; const sp = Math.min(dist, 0.9 * dt); p.x += dx / dist * sp; p.z += dz / dist * sp; mika.face(Math.atan2(dx, dz) * 0.7); } else mika.face(0);
    mika.update(dt, T, mv, false);
    Object.keys(cast).forEach((id) => {
      const c = cast[id], q = c.ch.root.position, d = c.tx - q.x; let m2 = false;
      if (Math.abs(d) > 0.05) { m2 = true; q.x += Math.sign(d) * Math.min(Math.abs(d), 2.2 * dt); c.ch.face(Math.sign(d) * 0.5); } else c.ch.face(c.mine ? 0.35 : -0.35);
      q.z = 0.5; c.ch.update(dt, T + id.length, m2, false);
      place(c.label, q, -0.12, 0); if (c.bubble) place(c.bubble, q, 1.75, 0);
    });
    place(mikaOv, mika.root.position, -0.12, 0); if (mikaOwner.bubble) place(mikaOwner.bubble, mika.root.position, 1.75, 0);
    fx.update(dt);
    renderer.render(scene, camera);
  }
  frame();
  return api;
}


/* ================= La classe du Professeur Bobby : l'élève et Mika de dos, Bobby en face ================= */
export function initClass(host, o) {
  o = o || {};
  let renderer; try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' }); } catch (e) { return null; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  const canvas = renderer.domElement; canvas.className = 'scene3d'; host.insertBefore(canvas, host.firstChild);
  const ov = document.createElement('div'); ov.className = 'st3-ov'; host.appendChild(ov);
  const scene = new THREE.Scene(); standardLights(scene);
  const camera = new THREE.PerspectiveCamera(36, 1.4, 0.1, 40); camera.position.set(0, 2.5, 7.6); camera.lookAt(0, 1.0, -0.4);
  scene.add(mesh(rbox(9, 0.3, 8, 0.1), std(0xf3d9b8, { emissive: 0xe8c79c, emissiveIntensity: 0.3 }), 0, -0.15, 0.3, false));
  const wt = canvasTex(256, 256, (g, w, h) => { g.fillStyle = '#FFE9F3'; g.fillRect(0, 0, w, h); g.fillStyle = 'rgba(255,255,255,.9)'; for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) { g.beginPath(); g.arc(32 + x * 64 + (y % 2) * 32, 32 + y * 64, 5, 0, 7); g.fill(); } });
  wt.wrapS = wt.wrapT = THREE.RepeatWrapping; wt.repeat.set(3.2, 1.3);
  scene.add(mesh(rbox(9, 4.2, 0.2, 0.06), std(0xffffff, { map: wt, emissive: 0xffe9f3, emissiveIntensity: 0.25 }), 0, 2.0, -3.1, false));
  // tableau noir (texte mis à jour à la volée)
  const bc = document.createElement('canvas'); bc.width = 512; bc.height = 256; const bg = bc.getContext('2d');
  const btex = new THREE.CanvasTexture(bc); btex.colorSpace = THREE.SRGBColorSpace;
  let boardLines = [];
  function drawBoard() {
    bg.fillStyle = '#2f5d50'; bg.fillRect(0, 0, 512, 256);
    bg.strokeStyle = 'rgba(255,255,255,.18)'; bg.lineWidth = 6; bg.strokeRect(8, 8, 496, 240);
    bg.textAlign = 'center'; bg.textBaseline = 'middle';
    const L = boardLines.length ? boardLines : [{ t: 'Willkommen!', c: '#fff6c2', s: 56 }, { t: 'Hello · Hallo · Hola · Ciao', c: '#cfe9ff', s: 26 }];
    const total = L.reduce((a, l) => a + (l.s || 34) * 1.35, 0); let y = 128 - total / 2;
    L.forEach((l) => { const sz = l.s || 34; bg.font = '700 ' + sz + 'px "Comic Sans MS","Chalkboard SE","Segoe UI",sans-serif'; bg.fillStyle = l.c || '#ffffff'; let t = l.t; while (bg.measureText(t).width > 470 && sz > 14) { bg.font = '700 ' + (--l.s) + 'px sans-serif'; } bg.fillText(t, 256, y + sz * 0.67); y += sz * 1.35; });
    btex.needsUpdate = true;
  }
  drawBoard();
  const board = new THREE.Group(); board.position.set(0, 2.15, -2.95);
  board.add(mesh(rbox(3.6, 1.9, 0.12, 0.05), std(0xd9b48a), 0, 0, 0, false));
  board.add(mesh(new THREE.PlaneGeometry(3.4, 1.7), new THREE.MeshBasicMaterial({ map: btex }), 0, 0, 0.07, false));
  scene.add(board);
  // pupitre de Bobby, tapis, guirlande
  scene.add(mesh(rbox(1.7, 0.7, 0.7, 0.1), std(0xc79870), 0, 0.35, -1.55));
  scene.add(mesh(rbox(1.85, 0.08, 0.8, 0.04), std(0xe2b88a), 0, 0.72, -1.55));
  scene.add(mesh(rbox(0.5, 0.06, 0.34, 0.02), std(0xff8fc0), -0.5, 0.79, -1.5, false));
  scene.add(mesh(new THREE.CylinderGeometry(2.6, 2.6, 0.04, 44), std(0xd9ccff), 0, 0.02, 1.6, false));
  for (let i = 0; i < 17; i++) { const t = i / 16; scene.add(sph(0.07, new THREE.MeshBasicMaterial({ color: [0xfff1a8, 0xffb3d1, 0xbdf3dc, 0xd9ccff][i % 4] }), 1, 1, 1, -4 + t * 8, 3.9 - Math.sin(t * Math.PI * 4) * 0.14, -2.95)); }
  const fx = createFx(scene);
  // personnages
  const bob = createCharacter({ mika: true, color: 0xf2b27a, ears: 'bear', eyes: 'dot', acc: o.bobAcc || ['glasses', 'bowtie'] }); bob.root.scale.setScalar(1.12); bob.root.position.set(0, 0.0, -1.0); bob.face(0); scene.add(bob.root); bob.fx = (k, n) => fx.emit(k, n, bob.root.position, 1.1);
  const me = createCharacter(Object.assign(avatarOpts(o.code || '0000'))); me.root.scale.setScalar(0.8); me.root.position.set(-0.9, 0, 2.2); me.face(Math.PI); scene.add(me.root); me.fx = (k, n) => fx.emit(k, n, me.root.position, 0.95);
  const mk = createCharacter({ mika: true, acc: o.mikaAcc || [] }); mk.root.scale.setScalar(0.68); mk.root.position.set(0.85, 0, 2.2); mk.face(Math.PI); scene.add(mk.root); mk.fx = (k, n) => fx.emit(k, n, mk.root.position, 0.8);
  const who = { bob: { ch: bob, el: null, dy: 1.95, b: null }, me: { ch: me, el: null, dy: 1.5, b: null }, mika: { ch: mk, el: null, dy: 1.3, b: null } };
  [['bob', 'Prof. Bobby', 'pr'], ['mika', 'Mika', 'mk']].forEach((x) => { const n = document.createElement('span'); n.className = 'st3-n ' + x[2]; n.textContent = x[1]; ov.appendChild(n); who[x[0]].el = n; n.style.opacity = 1; });
  function bubble(k, text, cls, ms) {
    const w = who[k]; if (w.b) w.b.remove();
    const b = document.createElement('div'); b.className = 'st3-b ' + (cls || ''); b.textContent = text; ov.appendChild(b); w.b = b;
    setTimeout(() => { if (w.b === b) { b.remove(); w.b = null; } }, ms || Math.min(14000, 4200 + text.length * 70));
  }
  let T = 0, running = true; const clock = new THREE.Clock(); const v = new THREE.Vector3();
  function place(el, wp, dy) { v.set(wp.x, wp.y + dy, wp.z).project(camera); const w = host.clientWidth, h = host.clientHeight; const half = (el.offsetWidth || 40) / 2 + 4; el.style.left = Math.max(half, Math.min(w - half, (v.x * 0.5 + 0.5) * w)) + 'px'; el.style.top = ((-v.y * 0.5 + 0.5) * h) + 'px'; }
  function resize() { const w = host.clientWidth || 360, h = host.clientHeight || 260; renderer.setSize(w, h, false); canvas.style.width = '100%'; canvas.style.height = '100%'; camera.aspect = w / h; camera.fov = w / h < 1.2 ? 46 : 36; camera.updateProjectionMatrix(); }
  new ResizeObserver(resize).observe(host); resize();
  let talkT = {};
  function talk(k, ms) { who[k].ch.setTalking(true); clearTimeout(talkT[k]); talkT[k] = setTimeout(() => who[k].ch.setTalking(false), ms); }
  const api = {
    bobbySay(text, e) { bob.hop(3.4); bob.setEmotion(e || 'happy'); talk('bob', Math.min(4000, 800 + text.length * 45)); bubble('bob', text, 'pr'); setTimeout(() => bob.setEmotion('neutral'), 2600); },
    bobbyEmote(e) { bob.setEmotion(e); if (e === 'proud' || e === 'cheer' || e === 'love') fx.emit('heart', 4, bob.root.position, 1.1); setTimeout(() => bob.setEmotion('neutral'), 2400); },
    bobbyListen(on) { bob.setEmotion(on ? 'wow' : 'neutral'); },
    userSay(text) { me.hop(3.4); talk('me', Math.min(2500, 600 + text.length * 40)); bubble('me', text, 'me'); },
    mikaSay(text, e) { mk.hop(3.6); mk.setEmotion(e || 'happy'); talk('mika', Math.min(3000, 800 + text.length * 40)); bubble('mika', text, 'mk', Math.min(16000, 5000 + text.length * 80)); setTimeout(() => mk.setEmotion('neutral'), 2800); },
    mikaReact(e) { mk.setEmotion(e); setTimeout(() => mk.setEmotion('neutral'), 2400); },
    board(lines) { boardLines = lines || []; drawBoard(); },
    setBobAcc(l) { bob.setAccessories(l); },
    setMikaAcc(l) { mk.setAccessories(l); },
    thinking(on) { if (on) { bob.setEmotion('neutral'); bob.look(0.4, 0.3); } },
    destroy() { running = false; [bob, me, mk].forEach((c) => c.dispose()); renderer.dispose(); renderer.forceContextLoss && renderer.forceContextLoss(); canvas.remove(); ov.remove(); }
  };
  canvas.addEventListener('pointerup', () => { bob.hop(4); bob.setEmotion('happy'); setTimeout(() => bob.setEmotion('neutral'), 1200); host.dispatchEvent(new CustomEvent('mika3d', { detail: { name: 'bobby' } })); });
  function frame() {
    if (!running) return; requestAnimationFrame(frame);
    if (document.hidden) { clock.getDelta(); return; }
    const dt = Math.min(0.05, clock.getDelta()); T += dt;
    bob.face(Math.sin(T * 0.6) * 0.12); me.face(Math.PI + Math.sin(T * 0.5) * 0.08); mk.face(Math.PI - Math.sin(T * 0.5) * 0.08);
    bob.update(dt, T, false, false); me.update(dt, T + 1, false, false); mk.update(dt, T + 2, false, false);
    ['bob', 'mika'].forEach((k) => { place(who[k].el, who[k].ch.root.position, k === 'bob' ? -0.08 : -0.08); });
    Object.keys(who).forEach((k) => { if (who[k].b) place(who[k].b, who[k].ch.root.position, who[k].dy); });
    fx.update(dt);
    renderer.render(scene, camera);
  }
  frame();
  return api;
}


/* ================= La Place : monde 3D partagé ================= */
export function initPlaza(host) {
  let renderer; try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' }); } catch (e) { return null; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  const canvas = renderer.domElement; canvas.className = 'scene3d'; host.insertBefore(canvas, host.firstChild);
  const ov = document.createElement('div'); ov.className = 'st3-ov'; host.appendChild(ov);
  const scene = new THREE.Scene(); standardLights(scene);
  const camera = new THREE.PerspectiveCamera(38, 1.4, 0.1, 60); camera.position.set(0, 7.2, 9.4); camera.lookAt(0, 0, 0.5);
  scene.add(mesh(new THREE.CylinderGeometry(7.2, 7.4, 0.3, 56), std(0xc9f2b8, { emissive: 0xa8e6a0, emissiveIntensity: 0.25 }), 0, -0.15, 0.2, false));
  scene.add(mesh(new THREE.CylinderGeometry(3.4, 3.4, 0.04, 48), std(0xfff0d6), 0, 0.02, 0.2, false));
  scene.add(mesh(new THREE.TorusGeometry(3.4, 0.08, 8, 48), std(0xffd1e3), 0, 0.04, 0.2, false).rotateX(Math.PI / 2));
  // fontaine
  const fo = new THREE.Group(); fo.position.set(0, 0, -0.4); scene.add(fo);
  fo.add(mesh(new THREE.CylinderGeometry(1.0, 1.1, 0.34, 32), std(0xe8e2ff), 0, 0.17, 0));
  fo.add(mesh(new THREE.CylinderGeometry(0.86, 0.86, 0.3, 32), std(0x8edbff, { emissive: 0x6ac8f5, emissiveIntensity: 0.4, roughness: 0.2 }), 0, 0.2, 0, false));
  fo.add(mesh(new THREE.CylinderGeometry(0.12, 0.16, 0.8, 12), std(0xe8e2ff), 0, 0.6, 0));
  const jet = sph(0.2, std(0xb8ecff, { emissive: 0x8edbff, emissiveIntensity: 0.5, transparent: true, opacity: 0.85 }), 1, 1.3, 1, 0, 1.15, 0); fo.add(jet);
  // arbres sakura, lampadaires, banc
  function tree(x, z, c, k) { const g = new THREE.Group(); g.position.set(x, 0, z); g.scale.setScalar(k || 1); g.add(mesh(new THREE.CylinderGeometry(0.14, 0.2, 1.1, 10), std(0xb98a63), 0, 0.55, 0)); [[0, 1.55, 0, 0.8], [-0.5, 1.3, 0.15, 0.55], [0.5, 1.35, -0.1, 0.55], [0.05, 1.95, 0.05, 0.5]].forEach((a) => g.add(sph(a[3], std(c, { emissive: c, emissiveIntensity: 0.18 }), 1, 0.9, 1, a[0], a[1], a[2]))); scene.add(g); }
  tree(-4.6, -2.6, 0xffb3d1, 1.2); tree(4.8, -2.4, 0xffc6dc, 1.1); tree(-5.2, 2.6, 0xbdf3dc, 1); tree(5.3, 2.8, 0xffb3d1, 0.95); tree(0.2, -4.2, 0xd9ccff, 1.3);
  function lamp(x, z) { const g = new THREE.Group(); g.position.set(x, 0, z); g.add(mesh(new THREE.CylinderGeometry(0.05, 0.07, 1.7, 8), std(0x6b5a8e), 0, 0.85, 0)); g.add(sph(0.2, new THREE.MeshBasicMaterial({ color: 0xfff1a8 }), 1, 1, 1, 0, 1.8, 0)); scene.add(g); }
  lamp(-2.6, -2.2); lamp(2.6, -2.2); lamp(-3.4, 3.2); lamp(3.4, 3.2);
  scene.add(mesh(rbox(1.6, 0.18, 0.5, 0.05), std(0xe2b88a), 3.1, 0.45, -3.3)); scene.add(mesh(rbox(1.6, 0.5, 0.1, 0.04), std(0xe2b88a), 3.1, 0.75, -3.5));
  const fx = createFx(scene);
  const cast = {}; let T = 0, running = true; const clock = new THREE.Clock();
  function mkLabel(name, me) { const n = document.createElement('span'); n.className = 'st3-n' + (me ? ' mk' : ''); n.textContent = name; n.style.opacity = 1; ov.appendChild(n); return n; }
  function add(p) {
    if (cast[p.pid]) return;
    const ch = createCharacter(p.npc ? { mika: true, acc: p.acc || [] } : avatarOpts(p.code)); ch.root.scale.setScalar(p.npc ? 0.75 : 0.85); ch.root.position.set(p.x || 0, 0, p.z || 2); scene.add(ch.root);
    ch.fx = (k, n) => fx.emit(k, n, ch.root.position, 0.85);
    cast[p.pid] = { ch, tx: p.x || 0, tz: p.z || 2, label: mkLabel(p.me ? 'Moi' : p.nick, p.me), me: !!p.me, npc: !!p.npc, next: 0, dance: 0 };
    ch.hop(4);
  }
  function remove(pid) { const c = cast[pid]; if (!c) return; c.ch.dispose(); c.label.remove(); delete cast[pid]; }
  function moveTo(pid, x, z) { const c = cast[pid]; if (c) { c.tx = x; c.tz = z; } }
  function emote(pid, k) {
    const c = cast[pid]; if (!c) return;
    const ch = c.ch;
    if (k === 'wave') { ch.hop(4.2); ch.setEmotion('happy'); }
    else if (k === 'heart') { ch.setEmotion('love'); ch.hop(4.6); fx.emit('heart', 6, ch.root.position, 0.85); }
    else if (k === 'happy') { ch.setEmotion('happy'); ch.hop(5); }
    else if (k === 'wow') { ch.setEmotion('wow'); ch.hop(4); }
    else if (k === 'dance') { ch.setEmotion('happy'); c.dance = 2.4; }
    setTimeout(() => ch.setEmotion('neutral'), 2200);
  }
  function resize() { const w = host.clientWidth || 360, h = host.clientHeight || 280; renderer.setSize(w, h, false); canvas.style.width = '100%'; canvas.style.height = '100%'; camera.aspect = w / h; camera.fov = w / h < 1.2 ? 52 : 38; camera.updateProjectionMatrix(); }
  new ResizeObserver(resize).observe(host); resize();
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), hit = new THREE.Vector3();
  canvas.addEventListener('pointerup', (ev) => {
    const r = canvas.getBoundingClientRect(); ndc.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera); if (!ray.ray.intersectPlane(plane, hit)) return;
    let best = null, bd = 0.9;
    Object.keys(cast).forEach((id) => { const q = cast[id].ch.root.position; const d = Math.hypot(q.x - hit.x, q.z - hit.z); if (d < bd) { bd = d; best = id; } });
    host.dispatchEvent(new CustomEvent('plaza3d', { detail: best ? { kind: 'tap', pid: best, me: cast[best].me } : { kind: 'walk', x: Math.max(-5.2, Math.min(5.2, hit.x)), z: Math.max(-3.2, Math.min(4.2, hit.z)) } }));
  });
  const v = new THREE.Vector3();
  function place(el, wp, dy) { v.set(wp.x, wp.y + dy, wp.z).project(camera); const w = host.clientWidth, h = host.clientHeight; const half = (el.offsetWidth || 40) / 2 + 4; el.style.left = Math.max(half, Math.min(w - half, (v.x * 0.5 + 0.5) * w)) + 'px'; el.style.top = ((-v.y * 0.5 + 0.5) * h) + 'px'; }
  function frame() {
    if (!running) return; requestAnimationFrame(frame);
    if (document.hidden) { clock.getDelta(); return; }
    const dt = Math.min(0.05, clock.getDelta()); T += dt;
    jet.scale.y = 1.3 + Math.sin(T * 5) * 0.2;
    Object.keys(cast).forEach((id) => {
      const c = cast[id], q = c.ch.root.position, dx = c.tx - q.x, dz = c.tz - q.z, d = Math.hypot(dx, dz); let mv = false;
      if (c.dance > 0) { c.dance -= dt; if (c.ch.st.y < 0.02) c.ch.hop(3.2); c.ch.face(Math.sin(T * 10) * 0.8); }
      else if (c.npc && d < 0.06 && T > c.next) { c.tx = (Math.random() - 0.5) * 8; c.tz = -1 + Math.random() * 4.5; c.next = T + 3 + Math.random() * 4; }
      else if (d > 0.06) { mv = true; const sp = Math.min(d, (c.npc ? 0.9 : 2.0) * dt); q.x += dx / d * sp; q.z += dz / d * sp; c.ch.face(Math.atan2(dx, dz) * 0.8); } else c.ch.face(0);
      c.ch.update(dt, T + id.length, mv, false);
      place(c.label, q, -0.12);
    });
    fx.update(dt);
    renderer.render(scene, camera);
  }
  frame();
  function reset() { Object.keys(cast).forEach((id) => { if (!cast[id].npc) remove(id); }); }
  return { add, remove, reset, moveTo, emote, has: (pid) => !!cast[pid], count: () => Object.keys(cast).length, destroy() { running = false; Object.keys(cast).forEach(remove); renderer.dispose(); renderer.forceContextLoss && renderer.forceContextLoss(); canvas.remove(); ov.remove(); } };
}

/* ================= Vignettes 3D (images) : avatars, tenues de Mika ================= */
let snapR = null, snapScene = null, snapCam = null;
const snapCache = {};
function snap(key, make) {
  if (snapCache[key]) return snapCache[key];
  try {
    if (!snapR) {
      snapR = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
      snapR.setPixelRatio(1); snapR.setSize(256, 256, false);
      snapScene = new THREE.Scene(); standardLights(snapScene);
      snapCam = new THREE.PerspectiveCamera(26, 1, 0.1, 30); snapCam.position.set(0, 1.25, 4.6); snapCam.lookAt(0, 0.78, 0);
    }
    const ch = make(); ch.root.scale.setScalar(1.2); ch.face(-0.25); ch.update(0.016, 0.3, false, true); snapScene.add(ch.root);
    snapR.render(snapScene, snapCam);
    const url = snapR.domElement.toDataURL('image/png');
    ch.dispose();
    snapCache[key] = url; return url;
  } catch (e) { return ''; }
}
export function avatarPng(code, emo) { return snap('a' + code + (emo || ''), () => { const c = createCharacter(avatarOpts(code)); if (emo) c.setEmotion(emo); return c; }); }
export function mikaPng(acc, emo) { return snap('m' + (acc || '') + (emo || ''), () => { const c = createCharacter({ mika: true, acc: acc ? [acc] : [] }); if (emo) c.setEmotion(emo); return c; }); }
