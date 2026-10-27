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
    else if (kind === 'bubble') { g.strokeStyle = '#8EDBFF'; g.lineWidth = 4; g.fillStyle = 'rgba(200,240,255,.55)'; g.beginPath(); g.arc(0, 0, 16, 0, 7); g.fill(); g.stroke(); g.fillStyle = '#fff'; g.beginPath(); g.arc(-6, -6, 4, 0, 7); g.fill(); }
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
export const AV_COLORS = [0x5de3b4, 0xb9a6ff, 0xffb89a, 0x8edbff, 0xffe27a, 0xffa8cf, 0xa8e86b, 0xe0e4f2, 0xff9aa2, 0xc7a98f, 0x9ec5ff, 0xf6a6ff];
export const AV_EARS = ['cat', 'bear', 'bunny', 'none', 'fox', 'mouse'];
export const AV_FACE = ['dot', 'happy', 'stars', 'big', 'sleepy'];
export const AV_ACC = ['', 'bow', 'glasses', 'beanie', 'flower', 'crown', 'shades', 'phones', 'bandana', 'bowtie', 'wings', 'hat'];
export const AV_SHAPE = ['round', 'tall', 'chubby', 'bean'];
export const AV_TAIL = ['none', 'cat', 'bunny', 'fox'];
const AV_RE = /^[0-9a-b][0-5][0-4][0-9a-b][0-3][0-3]$/;
/* codes à 6 caractères [couleur][oreilles][visage][accessoire][corps][queue] ; les anciens codes à 4 chiffres restent valides */
export function normAv(code) {
  code = String(code == null ? '' : code);
  if (/^[0-7][0-3][0-2][0-4]$/.test(code)) code += '00';
  return AV_RE.test(code) ? code : '';
}
export function avatarOpts(code) {
  code = normAv(code) || '000000';
  const acc = AV_ACC[parseInt(code[3], 12)];
  return { mika: true, color: AV_COLORS[parseInt(code[0], 12)], ears: AV_EARS[+code[1]], eyes: AV_FACE[+code[2]], topper: 'pom', acc: acc ? [acc] : [], shape: AV_SHAPE[+code[4]], tail: AV_TAIL[+code[5]] };
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
  const SHP = { tall: [0.9, 1.2], chubby: [1.2, 0.9], bean: [0.86, 1.1] }[o.shape] || [1, 1], SHX = SHP[0], SHY = SHP[1];
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
    else if (o.ears === 'fox') { g.position.set(s * 0.33, 1.0, 0); const c = mesh(new THREE.ConeGeometry(0.16, 0.46, 4), mainM, 0, 0.18, 0); c.rotation.y = Math.PI / 4; c.scale.z = 0.5; g.add(c); const t = mesh(new THREE.ConeGeometry(0.08, 0.18, 4), std(0xfff4ec), 0, 0.3, 0.01); t.rotation.y = Math.PI / 4; t.scale.z = 0.5; g.add(t); base = 0.22; }
    else if (o.ears === 'mouse') { g.position.set(s * 0.46, 0.92, -0.02); g.add(sph(0.26, mainM, 1, 1, 0.45, 0, 0.12, 0)); g.add(sph(0.17, inner, 1, 1, 0.4, 0, 0.12, 0.07)); base = 0.34; }
    else if (o.ears === 'bunny') { g.position.set(s * 0.26, 1.0, -0.02); g.add(sph(0.14, mainM, 1, 2.6, 0.55, 0, 0.3, 0)); g.add(sph(0.08, inner, 1, 2.3, 0.5, 0, 0.3, 0.06)); base = 0.14; }
    else return;
    g.userData.base = base; g.rotation.z = -s * base; bodyG.add(g); ears.push(g);
  });
  if (o.tail && o.tail !== 'none') {
    const tg = new THREE.Group(); tg.position.set(0, 0.3, -0.5); bodyG.add(tg);
    if (o.tail === 'bunny') tg.add(sph(0.14, std(0xffffff, { roughness: 0.9 }), 1, 1, 1, 0, 0, -0.04));
    else if (o.tail === 'cat') { const t = mesh(new THREE.TorusGeometry(0.2, 0.05, 8, 18, Math.PI * 1.25), mainM, 0.12, 0.12, -0.04); t.rotation.set(0, 0, 0.3); tg.add(t); tg.add(sph(0.06, mainM, 1, 1, 1, 0.34, 0.26, -0.04)); }
    else { const t = sph(0.2, mainM, 0.8, 1.5, 0.8, 0.12, 0.14, -0.06); t.rotation.z = -0.7; tg.add(t); const tp = sph(0.1, std(0xfff4ec), 0.8, 1.3, 0.8, 0.28, 0.3, -0.06); tp.rotation.z = -0.7; tg.add(tp); }
    tg.traverse((m) => { if (m.isMesh) m.castShadow = false; });
  }
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
    const big = o.eyes === 'stars' ? 1.2 : o.eyes === 'big' ? 1.38 : 1;
    open.add(sph(0.105 * big, inkM, 1, o.eyes === 'dot' && !o.mika ? 1.1 : (o.eyes === 'sleepy' ? 0.62 : 1.28), 0.55, 0, 0, 0));
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
  acc.shades = new THREE.Group(); { const dk = std(0x1d1640, { roughness: 0.2 }); [-1, 1].forEach((s2) => { acc.shades.add(sph(0.14, dk, 1.05, 0.82, 0.3, s2 * 0.21, 0.66, surf(s2 * 0.21, 0.66) + 0.05)); }); acc.shades.add(mesh(rbox(0.12, 0.025, 0.03, 0.01), dk, 0, 0.68, surf(0, 0.68) + 0.06)); }
  acc.phones = new THREE.Group(); { const m = std(0xff8fc0), w = std(0xffffff); const band = mesh(new THREE.TorusGeometry(0.5, 0.045, 8, 28, Math.PI), m, 0, 0.0, 0); band.rotation.z = 0; acc.phones.add(band); [-1, 1].forEach((s2) => { const cup = mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.12, 18), w, s2 * 0.5, -0.02, 0); cup.rotation.z = Math.PI / 2; acc.phones.add(cup); acc.phones.add(sph(0.08, m, 1, 1, 0.5, s2 * 0.56, -0.02, 0)); }); acc.phones.position.set(0, 0.62, 0.02); }
  acc.bunny = new THREE.Group(); { const w = std(0xffffff), pk = std(0xffb3d1); [-1, 1].forEach((s2) => { const e = sph(0.1, w, 1, 3.2, 0.5, s2 * 0.2, 0.34, 0); e.rotation.z = -s2 * 0.18; acc.bunny.add(e); const i2 = sph(0.055, pk, 1, 2.6, 0.5, s2 * 0.2, 0.34, 0.04); i2.rotation.z = -s2 * 0.18; acc.bunny.add(i2); }); const band = mesh(new THREE.TorusGeometry(0.34, 0.035, 8, 24), pk, 0, 0, 0); band.rotation.x = Math.PI / 2; acc.bunny.add(band); acc.bunny.position.set(0, 1.06, 0.02); }
  acc.cape = new THREE.Group(); { const m = std(0xe0457b); acc.cape.add(sph(0.5, m, 1.1, 1.15, 0.2, 0, 0.52, -0.5)); const col = mesh(new THREE.TorusGeometry(0.34, 0.07, 10, 28), std(0xffd1e3), 0, 0.3, 0.05); col.rotation.x = Math.PI / 2.2; acc.cape.add(col); }
  acc.bandana = new THREE.Group(); { const m = std(0xff5a6e); const band = mesh(new THREE.TorusGeometry(0.43, 0.06, 10, 28), m, 0, 0, 0); band.rotation.x = Math.PI / 2.15; acc.bandana.add(band); acc.bandana.add(sph(0.09, m, 1.3, 1, 0.8, 0.33, -0.04, 0.2)); acc.bandana.add(sph(0.05, std(0xffffff), 1, 1, 1, 0.0, 0.02, 0.43)); acc.bandana.position.set(0, 0.94, 0.0); }
  Object.keys(acc).forEach((k) => { acc[k].visible = false; bodyG.add(acc[k]); });
  { const oc = shade(o.color, 0.42).getHex(); const list = []; bodyG.traverse((m) => { if (m.isMesh && m.parent && (m.material === mainM || m.material === deepM)) list.push(m); }); feet.forEach((f) => list.push(f)); list.forEach((m) => outline(m, oc)); }
  root.traverse((m) => { if (m.isMesh) m.receiveShadow = false; });

  const st = { emo: 'neutral', talking: false, vy: 0, y: 0, squash: 0, yaw: 0, yawT: 0, blinkT: 0, nextBlink: 1.5 + Math.random() * 2, look: new THREE.Vector2(), lookT: new THREE.Vector2(), nextLook: 1, armsT: 0, sleeping: false };
  const ch = { root, st, fx: null, baseY: 0, roll: 0 };
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
    st.yaw += (st.yawT - st.yaw) * Math.min(1, dt * 5); root.rotation.y = st.yaw; root.rotation.z = (moving ? Math.sin(T * 9) * 0.08 : 0) + (ch.roll || 0);
    const br = st.sleeping ? 0.04 * Math.sin(T * 1.4) : 0.022 * Math.sin(T * 2.3);
    bodyG.scale.set((1 - st.squash * 0.5 - br * 0.5) * SHX, (1 + st.squash + br) * SHY, (1 - st.squash * 0.5) * SHX);
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

/* ================= Catalogue de décorations (partagé : chambre, visites, aperçu boutique) ================= */
const DECOR_SLOT = {
  plushbear: { p: [-1.7, 1.02, -2.75], r: 0.5 }, neon: { p: [2.9, 3.3, -4.1], r: 0 }, beanbag: { p: [-5.2, 0, 0.1], r: 0.3 },
  aquarium: { p: [-6.2, 0, -0.5], r: Math.PI / 2 }, arcade: { p: [6.3, 0, -0.2], r: -Math.PI / 2 }, poster: { p: [-7.03, 2.6, 1.6], r: Math.PI / 2 },
  catbed: { p: [-2.0, 0, 1.9], r: 0.4 }, disco: { p: [1.2, 3.3, 0.8], r: 0 },
  bookshelf: { p: [-6.75, 0, 2.9], r: Math.PI / 2 }, cloud: { p: [-2.6, 3.2, 0.4], r: 0 }, piano: { p: [5.3, 0, 2.7], r: -0.5 }, starrug: { p: [3.4, 0.0, 1.0], r: 0.3 }
};
const DECOR_BUILD = {
  plushbear() {
    const g = new THREE.Group(); const bm = std(0xd9a86c); g.add(sph(0.26, bm, 1, 1, 0.95, 0, 0.26, 0)); g.add(sph(0.2, bm, 1, 1, 0.95, 0, 0.62, 0.02));
    g.add(sph(0.08, bm, 1, 1, 0.6, -0.15, 0.78, 0)); g.add(sph(0.08, bm, 1, 1, 0.6, 0.15, 0.78, 0));
    g.add(sph(0.08, std(0xf5d9b0), 1, 0.8, 0.7, 0, 0.58, 0.17)); g.add(sph(0.03, std(C.ink), 1, 1, 1, 0, 0.6, 0.23));
    g.add(sph(0.025, std(C.ink), 1, 1, 1, -0.07, 0.68, 0.17)); g.add(sph(0.025, std(C.ink), 1, 1, 1, 0.07, 0.68, 0.17));
    g.add(sph(0.07, bm, 1, 1.3, 1, -0.28, 0.25, 0.08)); g.add(sph(0.07, bm, 1, 1.3, 1, 0.28, 0.25, 0.08));
    g.add(mesh(rbox(0.3, 0.07, 0.04, 0.02), std(0xff6fae), 0, 0.42, 0.2)); return g;
  },
  neon() {
    const g = new THREE.Group();
    const neon = new THREE.Mesh(new THREE.ExtrudeGeometry(heartShape(0.8), { depth: 0.05, bevelEnabled: false }), new THREE.MeshBasicMaterial({ color: 0xff7ac0 }));
    const halo = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 1.8), new THREE.MeshBasicMaterial({ map: canvasTex(128, 128, (c, w, h) => { const r = c.createRadialGradient(64, 64, 4, 64, 64, 62); r.addColorStop(0, 'rgba(255,122,192,.55)'); r.addColorStop(1, 'rgba(255,122,192,0)'); c.fillStyle = r; c.fillRect(0, 0, w, h); }), transparent: true, depthWrite: false }));
    halo.position.z = -0.02; g.add(halo, neon); return g;
  },
  beanbag() {
    const g = new THREE.Group(); const m = std(0xff9ec8), m2 = std(0xffc2dc);
    g.add(sph(0.62, m, 1, 0.78, 1, 0, 0.42, 0)); g.add(sph(0.4, m2, 1, 0.62, 1, 0.12, 0.8, 0.1)); g.add(sph(0.16, std(0xffffff), 1, 0.6, 1, -0.3, 0.84, 0.3)); return g;
  },
  aquarium() {
    const g = new THREE.Group();
    g.add(mesh(rbox(1.5, 0.7, 0.8, 0.06), std(C.woodDark), 0, 0.35, 0));
    g.add(mesh(rbox(1.38, 0.08, 0.68, 0.03), std(0xffe9b8), 0, 0.74, 0, false));
    const glass = mesh(rbox(1.4, 0.85, 0.7, 0.05), new THREE.MeshStandardMaterial({ color: 0x8edbff, transparent: true, opacity: 0.38, roughness: 0.1, emissive: 0x4fb8e8, emissiveIntensity: 0.3 }), 0, 1.2, 0, false); g.add(glass);
    const fish = [];
    [[0xff9a4a, 0], [0xffd24a, 2], [0xff6fae, 4]].forEach((f, i) => { const fg = new THREE.Group(); fg.add(sph(0.1, std(f[0], { emissive: f[0], emissiveIntensity: 0.25 }), 1.4, 1, 0.8, 0, 0, 0)); const tail = mesh(new THREE.ConeGeometry(0.08, 0.14, 4), std(f[0]), -0.17, 0, 0, false); tail.rotation.z = Math.PI / 2; fg.add(tail); fg.add(sph(0.018, std(C.ink), 1, 1, 1, 0.1, 0.03, 0.07)); fg.userData = { ph: f[1], y: 1.05 + i * 0.17 }; g.add(fg); fish.push(fg); });
    for (let i = 0; i < 4; i++) g.add(sph(0.03 + (i % 2) * 0.015, std(0xffffff, { transparent: true, opacity: 0.8 }), 1, 1, 1, 0.5 + i * 0.03, 0.9 + i * 0.2, 0.1));
    g.userData.fish = fish; return g;
  },
  bookshelf() {
    const g = new THREE.Group(); const wood = std(0xe2b88a);
    g.add(mesh(rbox(1.9, 2.5, 0.12, 0.04), std(0xc79870), 0, 1.25, -0.2));
    [-0.93, 0.93].forEach((x) => g.add(mesh(rbox(0.08, 2.5, 0.5, 0.03), wood, x, 1.25, 0)));
    for (let i = 0; i < 4; i++) g.add(mesh(rbox(1.9, 0.08, 0.5, 0.03), wood, 0, 0.04 + i * 0.8, 0));
    const cols = [0xff8fc0, 0x8edbff, 0xffd24a, 0xb9a6ff, 0x5de3b4, 0xffb89a];
    for (let r = 0; r < 3; r++) { let x = -0.8; for (let i = 0; i < 9 && x < 0.8; i++) { const w = 0.1 + ((i * 7 + r * 3) % 4) * 0.03, h = 0.5 + ((i * 5 + r) % 3) * 0.1; g.add(mesh(rbox(w, h, 0.3, 0.02), std(cols[(i + r * 2) % cols.length]), x + w / 2, 0.08 + r * 0.8 + h / 2 + 0.04, 0.02)); x += w + 0.04; } }
    g.add(sph(0.14, std(0xffffff), 1, 0.9, 1, 0.6, 2.18, 0.05)); g.add(sph(0.05, std(C.ink), 1, 1, 1, 0.56, 2.2, 0.17)); g.add(sph(0.05, std(C.ink), 1, 1, 1, 0.64, 2.2, 0.17));
    return g;
  },
  cloud() {
    const g = new THREE.Group(); const m = std(0xffffff, { emissive: 0xfff6d6, emissiveIntensity: 0.7, roughness: 0.9 });
    g.add(sph(0.5, m, 1.2, 0.8, 1, 0, 0, 0)); g.add(sph(0.38, m, 1, 0.9, 1, -0.5, -0.05, 0.05)); g.add(sph(0.42, m, 1, 0.9, 1, 0.5, -0.03, -0.05)); g.add(sph(0.3, m, 1, 0.9, 1, 0.1, 0.28, 0));
    g.add(mesh(new THREE.CylinderGeometry(0.012, 0.012, 1.2, 6), std(0xffffff), 0, 0.9, 0, false));
    g.add(sph(0.025, std(C.ink), 1, 1, 1, -0.12, -0.02, 0.45)); g.add(sph(0.025, std(C.ink), 1, 1, 1, 0.12, -0.02, 0.45)); g.add(sph(0.05, std(0xffb3d1), 1.4, 0.7, 0.4, -0.25, -0.1, 0.43)); g.add(sph(0.05, std(0xffb3d1), 1.4, 0.7, 0.4, 0.25, -0.1, 0.43));
    return g;
  },
  piano() {
    const g = new THREE.Group(); const body = std(0xff9ec8);
    [[-0.65, -0.28], [0.65, -0.28], [-0.65, 0.28], [0.65, 0.28]].forEach((l) => g.add(mesh(rbox(0.1, 0.6, 0.1, 0.03), std(0xe2b88a), l[0], 0.3, l[1])));
    g.add(mesh(rbox(1.6, 0.34, 0.8, 0.08), body, 0, 0.72, 0));
    g.add(mesh(rbox(1.5, 0.05, 0.3, 0.02), std(0xffffff), 0, 0.92, 0.22, false));
    for (let i = 0; i < 8; i++) g.add(mesh(rbox(0.16, 0.04, 0.28, 0.01), std(0xffffff), -0.65 + i * 0.185, 0.95, 0.22, false));
    [0, 1, 3, 4, 5].forEach((i) => g.add(mesh(rbox(0.09, 0.06, 0.17, 0.01), std(C.ink), -0.56 + i * 0.185, 0.98, 0.15, false)));
    g.add(mesh(rbox(1.5, 0.5, 0.06, 0.03), body, 0, 1.12, -0.32));
    const nm = new THREE.Mesh(new THREE.ExtrudeGeometry(heartShape(0.22), { depth: 0.02, bevelEnabled: false }), std(0xffffff)); nm.position.set(0, 1.14, -0.28); g.add(nm);
    return g;
  },
  starrug() {
    const g = new THREE.Group(); const sh = new THREE.Shape(); const pts = 10;
    for (let i = 0; i < pts; i++) { const r = i % 2 ? 0.55 : 1.25, a = (i / pts) * Math.PI * 2 + Math.PI / 2; if (i === 0) sh.moveTo(Math.cos(a) * r, Math.sin(a) * r); else sh.lineTo(Math.cos(a) * r, Math.sin(a) * r); } sh.closePath();
    const star = new THREE.Mesh(new THREE.ExtrudeGeometry(sh, { depth: 0.05, bevelEnabled: true, bevelSize: 0.06, bevelThickness: 0.03, bevelSegments: 3 }), std(0xffe27a)); star.rotation.x = -Math.PI / 2; star.position.y = 0.02; star.receiveShadow = true; g.add(star);
    const inner = new THREE.Mesh(new THREE.CircleGeometry(0.32, 24), std(0xff9ec8)); inner.rotation.x = -Math.PI / 2; inner.position.y = 0.11; g.add(inner);
    return g;
  },
  arcade() {
    const g = new THREE.Group();
    g.add(mesh(rbox(0.95, 1.75, 0.85, 0.1), std(0x7c5cff), 0, 0.88, 0));
    const tex = canvasTex(128, 96, (c, w, h) => { c.fillStyle = '#1b1240'; c.fillRect(0, 0, w, h); c.fillStyle = '#ff7ac0'; for (let i = 0; i < 5; i++) { c.beginPath(); c.arc(20 + i * 22, 24, 7, 0, 7); c.fill(); } c.fillStyle = '#8edbff'; c.fillRect(20, 60, 88, 8); c.fillStyle = '#ffe27a'; c.fillRect(54, 72, 20, 10); });
    const scr = mesh(new THREE.PlaneGeometry(0.7, 0.52), new THREE.MeshBasicMaterial({ map: tex }), 0, 1.3, 0.43, false); scr.rotation.x = -0.12; g.add(scr);
    g.add(mesh(rbox(0.8, 0.22, 0.12, 0.04), std(0xffe27a, { emissive: 0xffcf3f, emissiveIntensity: 0.5 }), 0, 1.68, 0.4, false));
    g.add(mesh(rbox(0.9, 0.12, 0.5, 0.04), std(0x5b3fd6), 0, 0.78, 0.5));
    g.add(mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.16, 8), std(0xffffff), -0.2, 0.9, 0.5)); g.add(sph(0.06, std(0xff4f9a), 1, 1, 1, -0.2, 1.0, 0.5));
    g.add(sph(0.045, std(0x8edbff), 1, 1, 1, 0.12, 0.86, 0.5)); g.add(sph(0.045, std(0xffe27a), 1, 1, 1, 0.26, 0.86, 0.5)); return g;
  },
  poster() {
    const g = new THREE.Group();
    g.add(mesh(rbox(1.3, 1.8, 0.06, 0.03), std(0xffffff), 0, 0, 0, false));
    const tex = canvasTex(128, 180, (c, w, h) => { const gr = c.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#ffb3d1'); gr.addColorStop(1, '#b9a6ff'); c.fillStyle = gr; c.fillRect(0, 0, w, h); c.fillStyle = '#fff'; c.beginPath(); c.arc(64, 70, 30, 0, 7); c.fill(); c.fillStyle = '#ff5fa8'; c.beginPath(); c.moveTo(64, 92); c.bezierCurveTo(30, 66, 48, 44, 64, 58); c.bezierCurveTo(80, 44, 98, 66, 64, 92); c.fill(); c.fillStyle = '#fff'; for (let i = 0; i < 8; i++) { c.beginPath(); c.arc(14 + (i * 37) % 100, 130 + (i * 17) % 40, 3, 0, 7); c.fill(); } c.fillRect(24, 150, 80, 6); });
    g.add(mesh(new THREE.PlaneGeometry(1.14, 1.64), new THREE.MeshBasicMaterial({ map: tex }), 0, 0, 0.04, false)); return g;
  },
  catbed() {
    const g = new THREE.Group();
    g.add(mesh(new THREE.CylinderGeometry(0.62, 0.66, 0.22, 28), std(0xffd9a8), 0, 0.11, 0)); const rim = mesh(new THREE.TorusGeometry(0.58, 0.12, 10, 28), std(0xffc27a), 0, 0.24, 0); rim.rotation.x = Math.PI / 2; g.add(rim);
    g.add(mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.1, 24), std(0xff9ec8), 0, 0.2, 0));
    const cm = std(0xf2a65a); g.add(sph(0.26, cm, 1.2, 0.8, 1, 0, 0.42, 0)); g.add(sph(0.17, cm, 1, 1, 1, 0.22, 0.52, 0.06));
    [-1, 1].forEach((s2) => { const e = mesh(new THREE.ConeGeometry(0.06, 0.12, 4), cm, 0.26, 0.68, 0.06 + s2 * 0.09, false); g.add(e); });
    g.add(sph(0.02, std(C.ink), 1, 1, 1, 0.37, 0.54, 0.02)); g.add(sph(0.02, std(C.ink), 1, 1, 1, 0.37, 0.54, 0.12));
    const tail = mesh(new THREE.TorusGeometry(0.16, 0.04, 8, 14, 4), cm, -0.3, 0.36, 0.0, false); g.add(tail); return g;
  },
  disco() {
    const g = new THREE.Group();
    g.add(mesh(new THREE.CylinderGeometry(0.012, 0.012, 1.2, 6), std(0xffffff), 0, 0.6, 0, false));
    const tex = canvasTex(128, 64, (c, w, h) => { for (let y = 0; y < 8; y++) for (let x = 0; x < 16; x++) { c.fillStyle = ['#ffffff', '#cfe9ff', '#ffd1e3', '#e7ddff'][(x * 3 + y * 5) % 4]; c.fillRect(x * 8, y * 8, 7, 7); } });
    const ball = sph(0.3, new THREE.MeshStandardMaterial({ map: tex, emissive: 0xffffff, emissiveIntensity: 0.35, metalness: 0.6, roughness: 0.25 }), 1, 1, 1, 0, 0, 0); g.add(ball); g.userData.spin = ball; return g;
  }
};
export const DECOR_IDS = Object.keys(DECOR_BUILD);


/* ================= La chambre (scène principale, grande, interactive) ================= */
const BED_X = -2.6, BED_Z = -3.0;
const SPOTS_OBJ = {
  fridge: [2.9, -2.45], pc: [4.4, -1.55], door: [6.3, -3.0], bath: [-6.0, -2.15], toilet: [-4.35, -2.45], bed: [BED_X + 0.45, BED_Z + 0.05],
  plant0: [-0.75, -2.55], plant1: [1.65, -2.55], lamp: [-0.9, -1.0], fries: [4.3, -2.0]
};
const BLOCK = [[-3.95, -1.2, -4.0, -2.05], [-7.1, -4.85, -4.0, -2.7], [2.25, 3.55, -4.0, -3.0], [3.4, 5.45, -4.0, -2.95], [-1.15, -0.3, -4.0, -3.05], [1.25, 2.05, -4.0, -3.05], [-4.85, -4.0, -4.0, -3.05], [5.6, 7.1, -4.0, -3.4]];
function freePoint(x, z) {
  x = Math.max(-6.6, Math.min(6.6, x)); z = Math.max(-3.4, Math.min(3.6, z));
  BLOCK.forEach((b) => { if (x > b[0] && x < b[1] && z > b[2] && z < b[3]) z = b[3] + 0.2; });
  return [x, z];
}
function buildRoom(scene) {
  const room = new THREE.Group(); scene.add(room);
  const floorTex = canvasTex(512, 512, (g, w, h) => {
    g.fillStyle = '#F2D8B8'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? '#EFD0AB' : '#F5DDBF'; g.fillRect(0, i * 64, w, 64); g.fillStyle = 'rgba(160,110,60,.22)'; g.fillRect(0, i * 64, w, 2); }
    for (let i = 0; i < 26; i++) { g.fillStyle = 'rgba(160,110,60,.18)'; g.fillRect(Math.random() * w, Math.floor(Math.random() * 8) * 64, 2, 64); }
  });
  floorTex.wrapS = floorTex.wrapT = THREE.RepeatWrapping; floorTex.repeat.set(3, 1.8);
  room.add(mesh(rbox(14.6, 0.4, 8.8, 0.12), std(0xffffff, { map: floorTex }), 0, -0.2, 0.1));
  const wallTex = (a, dots) => canvasTex(256, 256, (g, w, h) => { g.fillStyle = a; g.fillRect(0, 0, w, h); g.fillStyle = dots; for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) { g.beginPath(); g.arc(32 + x * 64 + (y % 2) * 32, 32 + y * 64, 5, 0, 7); g.fill(); } });
  const wt1 = wallTex('#E9DEFE', 'rgba(255,255,255,.85)'); wt1.wrapS = wt1.wrapT = THREE.RepeatWrapping; wt1.repeat.set(6, 2.3);
  const wt2 = wallTex('#FFE3F1', 'rgba(255,255,255,.85)'); wt2.wrapS = wt2.wrapT = THREE.RepeatWrapping; wt2.repeat.set(3.4, 2.3);
  room.add(mesh(rbox(14.6, 4.4, 0.3, 0.1), std(0xffffff, { map: wt1 }), 0, 2.2, -4.3));
  room.add(mesh(rbox(0.3, 4.4, 8.8, 0.1), std(0xffffff, { map: wt2 }), -7.2, 2.2, 0.1));
  room.add(mesh(rbox(14.4, 0.22, 0.1, 0.05), std(0xffffff), 0, 0.12, -4.1));
  room.add(mesh(rbox(0.1, 0.22, 8.6, 0.05), std(0xffffff), -7.0, 0.12, 0.1));
  // coin salle de bain : carrelage
  const tileTex = canvasTex(128, 128, (g, w, h) => { for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) { g.fillStyle = (x + y) % 2 ? '#DDF3FF' : '#F4FBFF'; g.fillRect(x * 32, y * 32, 32, 32); } });
  tileTex.wrapS = tileTex.wrapT = THREE.RepeatWrapping; tileTex.repeat.set(3, 3);
  room.add(mesh(rbox(3.2, 0.05, 3.2, 0.02), std(0xffffff, { map: tileTex }), -5.45, 0.03, -2.45, false));
  const wallTile = canvasTex(256, 128, (g, w, h) => { g.fillStyle = '#DDF3FF'; g.fillRect(0, 0, w, h); g.strokeStyle = 'rgba(255,255,255,.9)'; g.lineWidth = 3; for (let i = 0; i <= 8; i++) { g.beginPath(); g.moveTo(i * 32, 0); g.lineTo(i * 32, h); g.stroke(); } for (let i = 0; i <= 4; i++) { g.beginPath(); g.moveTo(0, i * 32); g.lineTo(w, i * 32); g.stroke(); } });
  room.add(mesh(new THREE.PlaneGeometry(3.2, 1.3), new THREE.MeshBasicMaterial({ map: wallTile }), -5.45, 0.8, -4.13, false));

  // fenêtre
  const win = new THREE.Group(); win.position.set(0.2, 2.45, -4.11); room.add(win);
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
  const rug = new THREE.Group(); rug.position.set(0, 0, 0.9); room.add(rug);
  rug.add(mesh(new THREE.CylinderGeometry(2.5, 2.5, 0.06, 48), std(0xffd0ea), 0, 0.03, 0));
  rug.add(mesh(new THREE.CylinderGeometry(2.15, 2.15, 0.08, 48), std(0xbdf3dc), 0, 0.035, 0));
  rug.add(mesh(new THREE.CylinderGeometry(1.5, 1.5, 0.1, 48), std(0xfff6ea), 0, 0.04, 0));

  const root = (g) => g.traverse((o) => { if (o.isMesh) o.userData.root = g; });
  // lit
  const bed = new THREE.Group(); bed.position.set(BED_X, 0, BED_Z); bed.userData.pick = 'bed'; room.add(bed);
  bed.add(mesh(rbox(2.5, 0.5, 1.75, 0.12), std(0xe2b98a), 0, 0.25, 0));
  bed.add(mesh(rbox(2.4, 0.4, 1.65, 0.16), std(0xd9ccff), 0, 0.68, 0));
  bed.add(mesh(rbox(1.65, 0.2, 1.7, 0.1), std(0xbdf3dc), 0.38, 0.92, 0.0));
  const pil = mesh(rbox(0.7, 0.25, 0.9, 0.12), std(0xffc0dc), -0.78, 0.98, 0); pil.rotation.z = 0.08; bed.add(pil);
  bed.add(mesh(rbox(0.14, 1.4, 1.75, 0.06), std(0xe2b98a), -1.3, 0.7, 0)); root(bed);
  // cadre cœur au-dessus du lit
  const pic = new THREE.Group(); pic.position.set(BED_X, 3.05, -4.1); room.add(pic);
  pic.add(mesh(rbox(0.9, 0.9, 0.08, 0.05), std(0xffffff), 0, 0, 0));
  const hm = new THREE.Mesh(new THREE.ExtrudeGeometry(heartShape(0.55), { depth: 0.04, bevelEnabled: false }), std(C.pink)); hm.position.set(0, 0.03, 0.05); pic.add(hm);

  // plantes à arroser
  const plants = [];
  [[-0.7, -3.45, 0.95], [1.65, -3.45, 1.1]].forEach((pp, i) => {
    const plant = new THREE.Group(); plant.position.set(pp[0], 0, pp[1]); plant.userData.pick = 'plant'; plant.userData.idx = i; room.add(plant);
    plant.add(mesh(new THREE.CylinderGeometry(0.42, 0.32, 0.6, 20), std(i ? 0xbdd8ff : 0xffb89a), 0, 0.3, 0));
    const leaves = new THREE.Group(); plant.add(leaves);
    const leafM = std(0x74e08f);
    for (let k = 0; k < 7; k++) { const a = k / 7 * Math.PI * 2; const l = sph(0.34, leafM, 0.55, 1.25, 0.28, Math.cos(a) * 0.3, 1.0 + (k % 2) * 0.22, Math.sin(a) * 0.3); l.rotation.z = Math.cos(a) * 0.5; l.rotation.x = Math.sin(a) * 0.5; leaves.add(l); }
    leaves.add(sph(0.32, std(0x5fd07a), 1, 1, 1, 0, 1.15, 0));
    plant.scale.setScalar(pp[2]);
    const thirst = new THREE.Sprite(new THREE.SpriteMaterial({ map: glyph('drop'), transparent: true, depthTest: false, opacity: 0 })); thirst.scale.setScalar(0.5); thirst.position.set(0, 2.3, 0.3); thirst.renderOrder = 11; plant.add(thirst);
    root(plant); plants.push({ g: plant, leaves, thirst, pop: 0 });
  });

  // frigo kawaii
  const fridge = new THREE.Group(); fridge.position.set(2.9, 0, -3.5); fridge.userData.pick = 'fridge'; room.add(fridge);
  const fMat = std(0xbdf3dc, { emissive: 0x9fe6c8, emissiveIntensity: 0.2 });
  fridge.add(mesh(rbox(1.2, 2.5, 0.9, 0.12), fMat, 0, 1.25, 0));
  fridge.add(mesh(rbox(1.16, 0.06, 0.04, 0.02), std(0x7fcfae), 0, 1.55, 0.46, false));
  fridge.add(mesh(rbox(0.06, 0.5, 0.08, 0.03), std(0xffffff), 0.48, 1.9, 0.48)); fridge.add(mesh(rbox(0.06, 0.7, 0.08, 0.03), std(0xffffff), 0.48, 1.0, 0.48));
  [-1, 1].forEach((s2) => fridge.add(sph(0.05, std(C.ink), 1, 1.3, 0.6, s2 * 0.2, 1.95, 0.46)));
  [-1, 1].forEach((s2) => fridge.add(sph(0.07, std(0xff8fc0), 1.3, 0.7, 0.3, s2 * 0.34, 1.86, 0.46, false)));
  fridge.add(mesh(new THREE.TorusGeometry(0.05, 0.015, 6, 12, Math.PI), std(C.ink), 0, 1.86, 0.47, false).rotateZ(Math.PI));
  { const mg = new THREE.Mesh(new THREE.ExtrudeGeometry(heartShape(0.2), { depth: 0.02, bevelEnabled: false }), std(0xff5fa8)); mg.position.set(-0.3, 1.1, 0.46); fridge.add(mg); }
  root(fridge);

  // bureau + ordinateur (le lien avec le monde)
  const desk = new THREE.Group(); desk.position.set(4.4, 0, -3.5); desk.userData.pick = 'pc'; room.add(desk);
  desk.add(mesh(rbox(1.9, 0.1, 0.9, 0.04), std(0xe2b88a), 0, 0.85, 0));
  [-0.8, 0.8].forEach((x) => desk.add(mesh(rbox(0.1, 0.85, 0.8, 0.03), std(0xc79870), x, 0.42, 0)));
  desk.add(mesh(rbox(0.1, 0.35, 0.1, 0.03), std(0xffffff), 0, 1.07, -0.12));
  const monTex = canvasTex(256, 160, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#9fdcff'); gr.addColorStop(1, '#d9ccff'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.fillStyle = '#fff'; g.beginPath(); g.arc(70, 46, 22, 0, 7); g.arc(96, 50, 18, 0, 7); g.fill();
    g.fillStyle = '#5de3b4'; g.beginPath(); g.arc(190, 70, 30, 0, 7); g.fill(); g.strokeStyle = '#fff'; g.lineWidth = 4; g.beginPath(); g.arc(190, 70, 30, 0, 7); g.moveTo(160, 70); g.lineTo(220, 70); g.stroke();
    g.fillStyle = '#2a1b5e'; g.font = '800 22px sans-serif'; g.fillText('MONDE', 24, 130);
  });
  desk.add(mesh(rbox(1.2, 0.8, 0.08, 0.05), std(0xffffff), 0, 1.5, -0.12));
  desk.add(mesh(new THREE.PlaneGeometry(1.06, 0.66), new THREE.MeshBasicMaterial({ map: monTex }), 0, 1.5, -0.075, false));
  desk.add(mesh(rbox(0.7, 0.04, 0.24, 0.02), std(0xffd1e3), 0, 0.92, 0.2, false));
  const chair = new THREE.Group(); chair.position.set(0, 0, 0.8); chair.add(mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.12, 20), std(0xff9ac4), 0, 0.5, 0)); chair.add(mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.5, 8), std(0xffffff), 0, 0.25, 0)); chair.add(mesh(rbox(0.6, 0.5, 0.1, 0.06), std(0xff9ac4), 0, 0.85, -0.3)); desk.add(chair);
  root(desk);

  // porte vers le Monde
  const door = new THREE.Group(); door.position.set(6.3, 0, -4.08); door.userData.pick = 'door'; room.add(door);
  door.add(mesh(rbox(1.55, 2.95, 0.12, 0.06), std(0xffffff), 0, 1.47, 0));
  door.add(mesh(rbox(1.2, 2.7, 0.1, 0.08), std(0xff9ac4), 0, 1.35, 0.07));
  door.add(sph(0.07, std(0xffd24a, { metalness: 0.4, roughness: 0.4 }), 1, 1, 1, 0.38, 1.3, 0.16));
  { const wm = new THREE.Mesh(new THREE.ExtrudeGeometry(heartShape(0.4), { depth: 0.03, bevelEnabled: false }), std(0xffffff)); wm.position.set(0, 1.85, 0.13); door.add(wm); }
  const signTex = canvasTex(256, 96, (g, w, h) => { g.fillStyle = '#ffffff'; g.fillRect(0, 0, w, h); g.fillStyle = '#7c5cff'; g.font = '800 44px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('→ MONDE', 128, 50); });
  door.add(mesh(new THREE.PlaneGeometry(1.2, 0.45), new THREE.MeshBasicMaterial({ map: signTex }), 0, 3.3, 0.04, false));
  door.add(mesh(rbox(1.5, 0.05, 0.9, 0.02), std(0xffd0ea), 0, 0.03, 0.8, false));
  root(door);

  // salle de bain : baignoire + petit coin
  const tub = new THREE.Group(); tub.position.set(-6.0, 0, -3.3); tub.userData.pick = 'bath'; room.add(tub);
  tub.add(mesh(rbox(2.1, 0.75, 1.0, 0.18), std(0xffffff), 0, 0.38, 0));
  tub.add(mesh(rbox(1.8, 0.04, 0.72, 0.02), std(0x9fe0ff, { emissive: 0x6ac8f5, emissiveIntensity: 0.3 }), 0, 0.72, 0, false));
  for (let i = 0; i < 9; i++) tub.add(sph(0.1 + (i % 3) * 0.04, std(0xffffff), 1, 0.8, 1, -0.7 + (i * 0.19) % 1.5, 0.78 + (i % 2) * 0.05, -0.15 + (i % 3) * 0.14, false));
  tub.add(sph(0.1, std(0xffe14a), 1.1, 0.9, 1, 0.55, 0.85, 0.1)); tub.add(sph(0.04, std(0xff9a4a), 1.4, 0.8, 0.8, 0.65, 0.85, 0.1));
  tub.add(mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.4, 8), std(0xc9d6df, { metalness: 0.5 }), -0.95, 0.95, -0.3));
  root(tub);
  const toilet = new THREE.Group(); toilet.position.set(-4.4, 0, -3.6); toilet.userData.pick = 'toilet'; room.add(toilet);
  toilet.add(mesh(rbox(0.5, 0.5, 0.3, 0.08), std(0xffffff), 0, 0.6, -0.15)); toilet.add(mesh(new THREE.CylinderGeometry(0.26, 0.2, 0.42, 20), std(0xffffff), 0, 0.22, 0.12)); toilet.add(mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.06, 20), std(0xffd1e3), 0, 0.46, 0.14)); root(toilet);
  const bsign = canvasTex(256, 96, (g, w, h) => { g.fillStyle = '#ffffff'; g.fillRect(0, 0, w, h); g.fillStyle = '#3aa7e8'; g.font = '800 40px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('BAIN', 128, 50); });
  room.add(mesh(new THREE.PlaneGeometry(1.0, 0.38), new THREE.MeshBasicMaterial({ map: bsign }), -5.45, 2.3, -4.12, false));

  // étagère + frites (au-dessus du bureau)
  const shelf = new THREE.Group(); shelf.position.set(4.4, 3.15, -3.9); room.add(shelf);
  shelf.add(mesh(rbox(2.4, 0.1, 0.5, 0.04), std(C.woodDark), 0, 0, 0));
  [0xff8fc0, 0x8edbff, 0xffe27a, 0xb9a6ff, 0x74e08f].forEach((c, i) => shelf.add(mesh(rbox(0.14, 0.55 + (i % 3) * 0.08, 0.3, 0.03), std(c), -1.0 + i * 0.17, 0.35 + (i % 3) * 0.04, 0)));
  const fries = new THREE.Group(); fries.position.set(0.75, 0.05, 0); fries.userData.pick = 'fries'; shelf.add(fries);
  fries.add(mesh(rbox(0.36, 0.34, 0.36, 0.06), std(0xff5a5a), 0, 0.17, 0));
  for (let i = 0; i < 6; i++) fries.add(mesh(rbox(0.07, 0.34, 0.07, 0.02), std(0xffd24a), -0.12 + (i % 3) * 0.12, 0.45, -0.08 + Math.floor(i / 3) * 0.16));
  fries.add(sph(0.025, std(C.ink), 1, 1, 1, -0.07, 0.2, 0.19)); fries.add(sph(0.025, std(C.ink), 1, 1, 1, 0.07, 0.2, 0.19));
  root(fries);

  // lampadaire (interrupteur)
  const lamp = new THREE.Group(); lamp.position.set(-0.9, 0, -1.6); lamp.userData.pick = 'lamp'; room.add(lamp);
  lamp.add(mesh(new THREE.CylinderGeometry(0.28, 0.32, 0.08, 20), std(C.woodDark), 0, 0.04, 0));
  lamp.add(mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.9, 10), std(C.woodDark), 0, 1.0, 0));
  const shadeMat = new THREE.MeshStandardMaterial({ color: 0xfff0c9, emissive: 0xffc15a, emissiveIntensity: 0.0, roughness: 0.8 }); shadeMat.side = THREE.DoubleSide;
  lamp.add(mesh(new THREE.CylinderGeometry(0.28, 0.45, 0.5, 24, 1, true), shadeMat, 0, 2.15, 0));
  root(lamp);
  // pouf
  room.add(mesh(new THREE.CylinderGeometry(0.5, 0.52, 0.5, 28), std(0xffc0dc), 2.2, 0.25, 1.6));
  room.add(sph(0.52, std(0xffc0dc), 1, 0.35, 1, 2.2, 0.5, 1.6));

  // guirlande lumineuse
  const bulbs = [];
  for (let i = 0; i < 27; i++) {
    const t = i / 26, x = -6.4 + t * 12.8, y = 3.95 - Math.sin(t * Math.PI * 3) * 0.2;
    const m = new THREE.MeshBasicMaterial({ color: [0xfff1a8, 0xffb3d1, 0xbdf3dc, 0xd9ccff][i % 4] });
    const b = sph(0.06, m, 1, 1, 1, x, y, -4.05); b.castShadow = false; b.receiveShadow = false; room.add(b); bulbs.push(b);
  }
  // particules
  const dust = []; const dustTex = glyphTexture('star');
  for (let i = 0; i < 18; i++) {
    const s2 = new THREE.Sprite(new THREE.SpriteMaterial({ map: dustTex, transparent: true, opacity: 0.0, depthWrite: false }));
    s2.scale.setScalar(0.16 + Math.random() * 0.1); s2.userData = { ph: Math.random() * 6, sp: 0.25 + Math.random() * 0.3, x: (Math.random() - 0.5) * 12, z: (Math.random() - 0.5) * 6 };
    scene.add(s2); dust.push(s2);
  }
  // décorations à débloquer
  const decor = {}; const anim = [];
  Object.keys(DECOR_BUILD).forEach((id) => {
    const g = DECOR_BUILD[id](); const sl = DECOR_SLOT[id];
    g.position.set(sl.p[0], sl.p[1], sl.p[2]); g.rotation.y = sl.r; g.visible = false; room.add(g); decor[id] = g;
    if (g.userData.fish || g.userData.spin) anim.push(g);
  });
  function update(T) {
    anim.forEach((g) => {
      if (g.userData.fish) g.userData.fish.forEach((f, i) => { const u = f.userData, t = T * (0.5 + i * 0.12) + u.ph; f.position.set(Math.sin(t) * 0.5, u.y + Math.sin(t * 2) * 0.04, 0.05 * Math.cos(t)); f.rotation.y = Math.cos(t) > 0 ? 0 : Math.PI; });
      if (g.userData.spin) g.userData.spin.rotation.y = T * 0.6;
    });
  }
  return { skyMat, shadeMat, bulbs, dust, decor, plants, update, room };
}

/* ---- animations communes (réactions) ---- */
function emoteChar(ch, k, fx, sc) {
  if (k === 'wave') { ch.hop(4.2); ch.setEmotion('happy'); }
  else if (k === 'heart') { ch.setEmotion('love'); ch.hop(4.6); fx.emit('heart', 6, ch.root.position, sc); }
  else if (k === 'happy') { ch.setEmotion('happy'); ch.hop(5); }
  else if (k === 'wow') { ch.setEmotion('wow'); ch.hop(4); }
  else if (k === 'dance') { ch.setEmotion('happy'); ch.dance = 2.4; }
  setTimeout(() => ch.setEmotion('neutral'), 2200);
}

/* ================= La chambre : init ================= */
export function init(host, opts) {
  opts = opts || {};
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'low-power', preserveDrawingBuffer: !!opts.preserve }); } catch (e) { return null; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
  const canvas = renderer.domElement; canvas.className = 'scene3d'; canvas.setAttribute('aria-hidden', 'true');
  host.insertBefore(canvas, host.firstChild);
  const ov = document.createElement('div'); ov.className = 'st3-ov'; host.appendChild(ov);
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0xf3e6ff);
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 60);
  const camPos = new THREE.Vector3(1.3, 4.0, 8.2), camLook = new THREE.Vector3(0, 1.0, 0.3); let camX = 0;
  const hemi = new THREE.HemisphereLight(0xffffff, 0xffd6e8, 1.0); scene.add(hemi);
  const sunL = new THREE.DirectionalLight(0xffffff, 1.5); sunL.position.set(-3, 7, 5); sunL.castShadow = true; sunL.shadow.mapSize.set(1024, 1024);
  Object.assign(sunL.shadow.camera, { left: -9, right: 9, top: 7, bottom: -6, near: 1, far: 22 }); sunL.shadow.bias = -0.0006; scene.add(sunL);
  const lampL = new THREE.PointLight(0xffc27a, 0, 8, 1.6); lampL.position.set(-0.9, 2.3, -1.4); scene.add(lampL);
  const R = buildRoom(scene);
  const fx = createFx(scene);
  let mika = createCharacter(opts.look || { mika: true });
  const start = opts.start || [0.2, 1.0];
  mika.root.position.set(start[0], 0, start[1]); mika.root.scale.setScalar(1.3); scene.add(mika.root);
  mika.root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  let lastAcc = opts.acc || []; mika.setAccessories(lastAcc);
  const blob = softShadow(); scene.add(blob);
  mika.fx = (k, n) => fx.emit(k, n, mika.root.position, 1.3);
  const st = { job: null, pending: null, target: new THREE.Vector3(start[0], 0, start[1]), nextWander: 4, hold: 0, busy: false, lampOn: false, lampT: 0, lampTouched: false, walkEmit: false };
  const visit = !!opts.visit;
  const SPOTS = [[0.2, 1.0], [1.0, 0.1], [-1.4, 0.6], [2.4, -1.4], [-3.2, -0.6], [3.8, -1.2], [-5.2, -0.8], [-0.6, -1.5], [4.8, 1.0], [1.6, 1.8], [-3.4, 1.4], [5.5, -2.2]];
  const guests = {}; let T = 0, running = true;
  function mkLabel(name) { const n = document.createElement('span'); n.className = 'st3-n'; n.textContent = name; n.style.opacity = 1; ov.appendChild(n); return n; }
  const myLabel = opts.label ? mkLabel(opts.label) : null;
  const bubbles = { me: null };
  function bubble(owner, text, cls) {
    if (owner.b) owner.b.remove();
    const b = document.createElement('div'); b.className = 'st3-b ' + (cls || ''); b.textContent = text; ov.appendChild(b); owner.b = b;
    setTimeout(() => { if (owner.b === b) { b.remove(); owner.b = null; } }, Math.min(9000, 2600 + text.length * 60));
  }
  const meOwner = { b: null };
  const JOBS = {
    eat: { spot: SPOTS_OBJ.fridge, dur: 2.8, start() { mika.face(0); mika.setEmotion('happy'); mika.setTalking(true); }, end() { mika.setTalking(false); mika.fx('heart', 5); mika.setEmotion('love'); setTimeout(() => mika.setEmotion('neutral'), 2200); } },
    hug: { spot: [0.2, 1.3], dur: 2.6, start() { mika.setEmotion('love'); mika.hop(4.8); mika.fx('heart', 7); mika.face(0); }, end() { mika.setEmotion('neutral'); } },
    play: { spot: [0.4, 1.2], dur: 3.2, tick(job) { if (T > job.next) { mika.hop(4.2); mika.fx('star', 2); job.next = T + 0.55; } }, start() { mika.setEmotion('happy'); }, end() { mika.setEmotion('neutral'); } },
    wash: { spot: SPOTS_OBJ.bath, dur: 3.6, tick(job) { if (T > job.next) { mika.fx('bubble', 2); job.next = T + 0.45; } }, start() { mika.setEmotion('happy'); mika.face(0); }, end() { mika.fx('star', 5); mika.setEmotion('love'); setTimeout(() => mika.setEmotion('neutral'), 2000); } },
    toilet: { spot: SPOTS_OBJ.toilet, dur: 2.4, start() { mika.setEmotion('shy'); mika.face(0.4); }, end() { mika.fx('star', 3); mika.setEmotion('happy'); setTimeout(() => mika.setEmotion('neutral'), 1600); } },
    water: { spot: SPOTS_OBJ.plant0, dur: 3.0, tick(job) { if (T > job.next) { fx.emit('drop', 2, { x: R.plants[job.idx || 0].g.position.x, y: 0.6, z: R.plants[job.idx || 0].g.position.z + 0.5 }, 1); job.next = T + 0.4; } }, start(job) { mika.setEmotion('happy'); mika.face(-0.3); R.plants[job.idx || 0].pop = 1; }, end() { mika.fx('heart', 4); mika.setEmotion('neutral'); } },
    nap: { spot: SPOTS_OBJ.bed, dur: 7, start() { mika.setEmotion('sleep'); mika.face(0.3); }, tick() { mika.baseY += (1.0 - mika.baseY) * 0.08; mika.roll += (-1.25 - mika.roll) * 0.06; }, wake: true, end() { mika.setEmotion('happy'); mika.hop(4.4); mika.fx('star', 5); } }
  };
  function startJob(kind, extra) {
    const J = JOBS[kind]; if (!J) return;
    let spot = J.spot;
    if (kind === 'water' && extra && extra.idx != null) spot = SPOTS_OBJ['plant' + extra.idx];
    st.job = { kind, J, state: 'go', until: 0, next: 0, idx: extra && extra.idx, spot, ms: extra && extra.ms };
    st.target.set(spot[0], 0, spot[1]); st.hold = 99; st.pending = null;
  }
  function rise(dt) { mika.baseY += (0 - mika.baseY) * Math.min(1, dt * 5); mika.roll += (0 - mika.roll) * Math.min(1, dt * 6); }
  function mkGuest(id, o2) {
    const ch = createCharacter(o2.look || avatarOpts(o2.code)); ch.root.scale.setScalar(1.3); ch.root.position.set(o2.x || 0, 0, o2.z || 1); scene.add(ch.root);
    ch.root.traverse((x) => { if (x.isMesh) x.castShadow = true; }); ch.fx = (k, n) => fx.emit(k, n, ch.root.position, 1.3);
    if (o2.acc) ch.setAccessories(o2.acc);
    return { ch, tx: o2.x || 0, tz: o2.z || 1, label: mkLabel(o2.nick || ''), b: null };
  }
  const bridge = {
    setEmotion: (e) => mika.setEmotion(e), setAccessories: (l) => { lastAcc = l; mika.setAccessories(l); }, hop: (p) => mika.hop(p),
    setLook(o) {
      const old = mika, nm = createCharacter(o);
      nm.root.position.copy(old.root.position); nm.root.scale.copy(old.root.scale); nm.root.traverse((x) => { if (x.isMesh) x.castShadow = true; });
      scene.add(nm.root); nm.fx = (k, n) => fx.emit(k, n, nm.root.position, 1.3); nm.setAccessories(lastAcc); nm.setEmotion(old.st.emo === 'sleep' ? 'neutral' : old.st.emo);
      old.dispose(); mika = nm; st.job = null; nm.hop(4);
    },
    act(name, ms, extra) {
      if (name === 'rumble') { mika.setEmotion('worry'); setTimeout(() => mika.setEmotion('neutral'), 2200); return; }
      if (visit) return;
      startJob(name, Object.assign({ ms: ms }, extra || {}));
    },
    goTo(spotName) { const s2 = SPOTS_OBJ[spotName]; if (s2) { st.target.set(s2[0], 0, s2[1]); st.hold = 3; } },
    debug() { return { roll: mika.roll, baseY: mika.baseY, job: st.job ? st.job.kind + ':' + st.job.state : null }; },
    walkTo(x, z) { const f = freePoint(x, z); st.target.set(f[0], 0, f[1]); st.hold = 6; st.job = null; st.pending = null; },
    talking(on) { mika.setTalking(on); if (on && !visit && !st.job) { st.target.set(0.2, 0, 1.2); mika.face(0); st.hold = 2.5; } },
    look(dx, dy) { mika.look(dx, dy); },
    busy(on) { st.busy = !!on; if (on && !st.job) { st.target.set(0.2, 0, 1.2); st.hold = 3; } },
    emit(kind, n) { mika.fx(kind, n); },
    emote(k) { emoteChar(mika, k, fx, 1.3); },
    say(text, cls) { bubble(meOwner, text, cls || 'mk'); mika.setTalking(true); setTimeout(() => mika.setTalking(false), Math.min(2800, 700 + text.length * 40)); },
    setDecor(list) { Object.keys(R.decor).forEach((k) => { R.decor[k].visible = list.indexOf(k) >= 0; }); },
    setPlants(level) { R.plantLevel = Math.max(0, Math.min(1, level)); },
    pos() { return { x: mika.root.position.x, z: mika.root.position.z }; },
    addGuest(id, o2) { if (guests[id]) return; guests[id] = mkGuest(id, o2); guests[id].ch.hop(4); },
    moveGuest(id, x, z) { const g = guests[id]; if (g) { g.tx = x; g.tz = z; } },
    guestEmote(id, k) { const g = guests[id]; if (g) emoteChar(g.ch, k, fx, 1.3); },
    guestSay(id, text) { const g = guests[id]; if (!g) return; g.ch.hop(3.4); g.ch.setTalking(true); setTimeout(() => g.ch.setTalking(false), Math.min(2600, 700 + text.length * 40)); bubble(g, text, 'me'); },
    removeGuest(id) { const g = guests[id]; if (!g) return; g.ch.dispose(); g.label.remove(); if (g.b) g.b.remove(); delete guests[id]; },
    guestCount: () => Object.keys(guests).length,
    destroy() { running = false; Object.keys(guests).forEach((id) => bridge.removeGuest(id)); renderer.dispose(); renderer.forceContextLoss && renderer.forceContextLoss(); if (canvas.parentNode) canvas.parentNode.removeChild(canvas); ov.remove(); }
  };
  const ray = new THREE.Raycaster(), ptr = new THREE.Vector2(), plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), hit = new THREE.Vector3();
  let down = null, hovered = false; const camOff = new THREE.Vector2(), camOffT = new THREE.Vector2();
  canvas.style.touchAction = 'none';
  const setPtr = (e) => { const r = canvas.getBoundingClientRect(); ptr.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1); return ptr; };
  const fire = (detail) => host.dispatchEvent(new CustomEvent('mika3d', { detail }));
  canvas.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY }; });
  canvas.addEventListener('pointermove', (e) => { if (e.pointerType === 'touch') return; const p = setPtr(e); camOffT.set(p.x * 0.5, p.y * 0.25); hovered = true; mika.look(p.x * 0.9, -p.y * 0.6); });
  canvas.addEventListener('pointerleave', () => { camOffT.set(0, 0); hovered = false; });
  canvas.addEventListener('pointerup', (e) => {
    if (!down || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 8) { down = null; return; }
    down = null; setPtr(e); ray.setFromCamera(ptr, camera);
    for (const h of ray.intersectObjects(scene.children, true)) {
      let o = h.object, name = null, node = null;
      while (o) { if (o === mika.root) { name = 'mika'; break; } if (o.userData && o.userData.pick) { name = o.userData.pick; node = o; break; } if (o.userData && o.userData.root && o.userData.root.userData.pick) { node = o.userData.root; name = node.userData.pick; break; } o = o.parent; }
      if (!name) continue;
      if (name === 'mika') { mika.hop(4.6); mika.setEmotion('happy'); setTimeout(() => mika.setEmotion('neutral'), 1200); fire({ name: 'mika' }); return; }
      if (name === 'lamp') { st.lampOn = !st.lampOn; st.lampTouched = true; fire({ name: 'lamp' }); return; }
      if (name === 'fries') { fire({ name: 'fries' }); return; }
      if (visit) { continue; }
      const key = name === 'plant' ? 'plant' + (node.userData.idx || 0) : name;
      const sp = SPOTS_OBJ[key]; if (!sp) continue;
      st.job = null; st.target.set(sp[0], 0, sp[1]); st.hold = 99; st.pending = { name, idx: node.userData.idx };
      return;
    }
    if (ray.ray.intersectPlane(plane, hit)) {
      const f = freePoint(hit.x, hit.z);
      if (!visit) { st.job = null; st.pending = null; st.target.set(f[0], 0, f[1]); st.hold = 8; }
      fire({ name: 'walk', x: f[0], z: f[1] });
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
  ambiance(); const ambTimer = setInterval(ambiance, 60000);
  let visible = true; const clock = new THREE.Clock(); const tmp = new THREE.Vector3(); const pv = new THREE.Vector3();
  if ('IntersectionObserver' in window) new IntersectionObserver((es) => { visible = es[0].isIntersecting; }, { threshold: 0.01 }).observe(host);
  function place(el, wp, dy) { pv.set(wp.x, wp.y + dy, wp.z).project(camera); const w = host.clientWidth, h = host.clientHeight; const half = (el.offsetWidth || 40) / 2 + 4; el.style.left = Math.max(half, Math.min(w - half, (pv.x * 0.5 + 0.5) * w)) + 'px'; el.style.top = ((-pv.y * 0.5 + 0.5) * h) + 'px'; }
  R.plantLevel = 1;
  function frame() {
    if (!running) { clearInterval(ambTimer); return; } requestAnimationFrame(frame);
    if (!visible || document.hidden) { clock.getDelta(); return; }
    const dt = Math.min(0.05, clock.getDelta()); T += dt;
    const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    st.hold = Math.max(0, st.hold - dt);
    const ms = mika.st, p = mika.root.position;
    const dx = st.target.x - p.x, dz = st.target.z - p.z, dist = Math.hypot(dx, dz);
    if (st.job) {
      const j = st.job;
      if (j.state === 'go' && dist < 0.12) { j.state = 'do'; j.until = T + (j.ms ? j.ms / 1000 : j.J.dur); if (j.J.start) j.J.start(j); }
      else if (j.state === 'do') {
        if (j.J.tick) j.J.tick(j);
        if (T > j.until) { if (j.J.end) j.J.end(j); if (j.J.wake) { j.state = 'wake'; j.until = T + 0.9; } else { host.dispatchEvent(new CustomEvent('mika3d', { detail: { name: 'done-' + j.kind } })); st.job = null; st.hold = 2; } }
      } else if (j.state === 'wake') {
        rise(dt);
        if (T > j.until) { mika.baseY = 0; mika.roll = 0; host.dispatchEvent(new CustomEvent('mika3d', { detail: { name: 'done-' + j.kind } })); st.job = null; st.hold = 2; st.target.set(SPOTS_OBJ.bed[0] + 1.6, 0, SPOTS_OBJ.bed[1] + 1.4); }
      }
    } else if (st.pending && dist < 0.12) {
      const pe = st.pending; st.pending = null; st.hold = 1.5; mika.face(0);
      host.dispatchEvent(new CustomEvent('mika3d', { detail: { name: pe.name, idx: pe.idx } }));
    }
    if (!visit && !reduce && !ms.sleeping && !st.busy && !ms.talking && !st.job && !st.pending && st.hold <= 0 && T > st.nextWander) { const sp = SPOTS[Math.floor(Math.random() * SPOTS.length)]; st.target.set(sp[0], 0, sp[1]); st.nextWander = T + 5 + Math.random() * 6; }
    if (!st.job || st.job.state === 'go') { if (Math.abs(mika.roll) > 0.002 || Math.abs(mika.baseY) > 0.002) rise(dt); else { mika.roll = 0; mika.baseY = 0; } }
    let moving = false;
    if (dist > 0.06) { moving = true; const sp = Math.min(dist, (ms.talking ? 1.6 : (st.hold > 3 ? 2.0 : 1.4)) * dt); p.x += dx / dist * sp; p.z += dz / dist * sp; mika.face(Math.atan2(dx, dz) * 0.7); }
    else if (!ms.talking && ms.emo !== 'shy' && !(st.job && st.job.kind === 'nap')) mika.face(0);
    if (mika.dance > 0) { mika.dance -= dt; if (ms.y < 0.02) mika.hop(3.2); mika.face(Math.sin(T * 10) * 0.8); }
    mika.update(dt, T, moving, hovered);
    blob.position.set(p.x, 0.012, p.z + 0.02);
    const sc = Math.max(0.5, 1 - ms.y * 0.4) * 1.3; blob.scale.set(sc * (1.05 + ms.squash), sc * (1.05 + ms.squash), 1); blob.material.opacity = (mika.baseY > 0.3) ? 0 : Math.max(0.35, 1 - ms.y * 0.7);
    Object.keys(guests).forEach((id) => {
      const g = guests[id], q = g.ch.root.position, gx = g.tx - q.x, gz = g.tz - q.z, gd = Math.hypot(gx, gz); let mv = false;
      if (g.ch.dance > 0) { g.ch.dance -= dt; if (g.ch.st.y < 0.02) g.ch.hop(3.2); g.ch.face(Math.sin(T * 10) * 0.8); }
      else if (gd > 0.06) { mv = true; const sp = Math.min(gd, 2.0 * dt); q.x += gx / gd * sp; q.z += gz / gd * sp; g.ch.face(Math.atan2(gx, gz) * 0.7); } else g.ch.face(0);
      g.ch.update(dt, T + id.length, mv, false);
      place(g.label, q, -0.12); if (g.b) place(g.b, q, 2.35);
    });
    if (myLabel) place(myLabel, p, -0.12);
    if (meOwner.b) place(meOwner.b, p, 2.35 + (mika.baseY || 0));
    fx.update(dt); R.update(T);
    // plantes : s'affaissent quand elles ont soif
    R.plants.forEach((pl, i) => { const dry = 1 - R.plantLevel; pl.pop = Math.max(0, pl.pop - dt * 0.8); pl.leaves.scale.set(1 + pl.pop * 0.15, 1 - dry * 0.38 + pl.pop * 0.12, 1 + pl.pop * 0.15); pl.leaves.rotation.z = Math.sin(T * 1.3 + i) * 0.02 + dry * 0.12; pl.thirst.material.opacity = dry > 0.6 ? 0.6 + 0.4 * Math.sin(T * 4) : 0; pl.thirst.position.y = 2.3 + Math.sin(T * 3) * 0.08; });
    R.dust.forEach((d) => { const u = d.userData, f = (T * u.sp * 0.3 + u.ph) % 1; d.position.set(u.x + Math.sin(T * u.sp + u.ph) * 0.4, 0.9 + f * 3, u.z); d.material.opacity = 0.55 * Math.sin(f * Math.PI); d.material.rotation = T * 0.3 + u.ph; });
    R.bulbs.forEach((b, i) => b.scale.setScalar(0.85 + 0.25 * Math.sin(T * 2.4 + i * 1.3)));
    st.lampT += ((st.lampOn ? 1 : 0) - st.lampT) * Math.min(1, dt * 4); lampL.intensity = st.lampT * 2.2; R.shadeMat.emissiveIntensity = st.lampT * 1.3;
    // caméra : suit l'avatar dans la grande chambre
    camX += ((visit ? 0 : Math.max(-4.3, Math.min(4.3, p.x * 0.85))) - camX) * Math.min(1, dt * 2.2);
    camOff.lerp(hovered ? camOffT : tmp.set(Math.sin(T * 0.25) * 0.2, Math.sin(T * 0.18) * 0.08, 0), Math.min(1, dt * 3));
    const ck = visit ? 1.5 : 1; camera.position.set(camX + (visit ? 0 : 1.0) + camOff.x, camPos.y * ck + camOff.y, camPos.z * ck); camera.lookAt(camX, camLook.y, camLook.z);
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
  let ch = null, T = 0, running = true, drag = null, spin = 0, spinT = 0, decorG = null;
  const floor2 = mesh(new THREE.CylinderGeometry(1.15, 1.2, 0.08, 40), std(0xf3e6ff), 1.3, -0.04, 0, false); floor2.visible = false; scene.add(floor2);
  function setDecor(id) {
    if (decorG) { scene.remove(decorG); decorG = null; }
    if (id && DECOR_BUILD[id]) {
      const g = DECOR_BUILD[id](); const sl = DECOR_SLOT[id], bb = new THREE.Box3().setFromObject(g), sz = bb.getSize(new THREE.Vector3());
      const k = Math.max(0.35, Math.min(1.1, 2.0 / Math.max(sz.x, sz.y, sz.z, 0.1)));
      g.scale.setScalar(k); g.position.set(1.3, sl.p[1] > 1.5 ? 1.2 : (sl.p[1] > 0.5 ? 0 : sl.p[1]), 0); g.rotation.y = sl.p[1] > 1.5 || id === 'poster' ? 0 : 0.5; if (id === 'starrug' || id === 'poster' || id === 'neon' || id === 'disco' || id === 'cloud') g.rotation.y = 0;
      if (id === 'poster') g.rotation.y = 0; scene.add(g); decorG = g;
      if (g.userData.fish || g.userData.spin) decorG.userData.anim = true;
    }
    floor2.visible = !!decorG; camera.position.set(decorG ? 0.55 : 0, 1.5, decorG ? 6.6 : 4.6); camera.lookAt(decorG ? 0.55 : 0, 0.82, 0);
    if (ch) { ch.root.position.x = decorG ? -0.85 : 0; plat.position.x = ch.root.position.x; }
  }
  function build() {
    if (ch) ch.dispose();
    ch = createCharacter(getOpts()); ch.root.scale.setScalar(1.25); ch.fx = (k, n) => fx.emit(k, n, ch.root.position, 1.25); scene.add(ch.root);
    ch.root.position.x = decorG ? -0.85 : 0; plat.position.x = ch.root.position.x;
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
    if (decorG && decorG.userData.fish) decorG.userData.fish.forEach((f, i) => { const u = f.userData, t = T * (0.5 + i * 0.12) + u.ph; f.position.set(Math.sin(t) * 0.5, u.y + Math.sin(t * 2) * 0.04, 0.05 * Math.cos(t)); f.rotation.y = Math.cos(t) > 0 ? 0 : Math.PI; });
    if (decorG && decorG.userData.spin) decorG.userData.spin.rotation.y = T * 0.6;
    renderer.render(scene, camera);
  }
  frame();
  return {
    setDecor,
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
  tree(-4.6, -2.6, 0xffb3d1, 1.2); tree(4.8, -2.4, 0xffc6dc, 1.1); tree(-5.2, 2.6, 0xbdf3dc, 1); tree(5.3, 2.8, 0xffb3d1, 0.95);
  function lamp(x, z) { const g = new THREE.Group(); g.position.set(x, 0, z); g.add(mesh(new THREE.CylinderGeometry(0.05, 0.07, 1.7, 8), std(0x6b5a8e), 0, 0.85, 0)); g.add(sph(0.2, new THREE.MeshBasicMaterial({ color: 0xfff1a8 }), 1, 1, 1, 0, 1.8, 0)); scene.add(g); }
  lamp(-2.6, -2.2); lamp(2.6, -2.2); lamp(-3.4, 3.2); lamp(3.4, 3.2);
  // bâtiments cliquables, alignés le long du fond de la place
  const buildings = [];
  function building(id, x, z, wall, roof, emoji, label, w, h, props) {
    const g = new THREE.Group(); g.position.set(x, 0, z); g.userData.pick = id;
    g.add(mesh(rbox(w, h, 1.5, 0.14), std(wall, { emissive: wall, emissiveIntensity: 0.12 }), 0, h / 2, 0));
    g.add(mesh(rbox(w + 0.16, 0.14, 1.7, 0.05), std(0xffffff), 0, 0.07, 0.05, false));
    // auvent à festons
    const n = Math.max(4, Math.round(w / 0.3));
    for (let i = 0; i < n; i++) g.add(sph(w / n * 0.62, std(i % 2 ? 0xffffff : roof), 1, 0.9, 1.1, -w / 2 + (i + 0.5) * w / n, h * 0.7, 0.88));
    g.add(mesh(rbox(w + 0.1, 0.1, 1.2, 0.04), std(roof), 0, h * 0.78, 0.55, false));
    g.add(mesh(rbox(w * 0.46, 0.14, 0.9, 0.05), std(roof), 0, h + 0.06, 0, false));
    // porte et grande vitrine avec petits objets
    g.add(mesh(rbox(0.46, 0.8, 0.08, 0.04), std(0xb98a63), w * 0.26, 0.42, 0.78));
    g.add(mesh(rbox(w * 0.46, 0.6, 0.06, 0.04), std(0xcfeeff, { emissive: 0xffe9b8, emissiveIntensity: 0.55 }), -w * 0.2, 0.62, 0.78, false));
    if (props) props.forEach((c, i) => g.add(sph(0.11, std(c, { emissive: c, emissiveIntensity: 0.3 }), 1, 1, 0.8, -w * 0.2 + (i - (props.length - 1) / 2) * 0.28, 0.5, 0.83, false)));
    const tex = canvasTex(256, 96, (c, ww, hh) => { c.fillStyle = '#ffffff'; c.beginPath(); c.roundRect ? c.roundRect(4, 4, ww - 8, hh - 8, 28) : c.rect(4, 4, ww - 8, hh - 8); c.fill(); c.fillStyle = '#2A1B5E'; c.font = '700 40px DynaPuff, Fredoka, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(emoji + ' ' + label, ww / 2, hh / 2 + 2); });
    const sg = mesh(new THREE.PlaneGeometry(w * 0.9, w * 0.9 * 96 / 256), new THREE.MeshBasicMaterial({ map: tex, transparent: true }), 0, h + 0.5, 0.2, false); g.add(sg);
    g.scale.setScalar(1.1);
    g.traverse((o) => { if (o !== g) o.userData.root = g; });
    scene.add(g); buildings.push(g); return g;
  }
  building('home', -5.8, -5.2, 0xffd9e8, 0xff8fc0, '🏠', 'Chambre', 2.0, 1.7, [0xff8fc0, 0xffe27a]);
  building('bakery', -3.4, -5.2, 0xfff1d9, 0xff8fc0, '🥐', 'Boulangerie', 2.1, 1.7, [0xe8a95b, 0xffb3d1, 0xbdf3dc]);
  building('thrift', -1.0, -5.2, 0xd9f1e4, 0x5de3b4, '👗', 'Friperie', 2.0, 1.8, [0xff8fc0, 0x8edbff, 0xb9a6ff]);
  building('deco', 1.4, -5.2, 0xfff4cf, 0xffc24a, '🪴', 'Déco', 2.0, 1.7, [0x6bcf7a, 0xffb3d1]);
  building('karaoke', 3.8, -5.2, 0xe0d4ff, 0x7c5cff, '🎤', 'Karaoké', 2.0, 1.9, [0xff6fc8, 0x7df9ff]);
  // parc d'attractions : grande roue
  const wheel = new THREE.Group(); wheel.position.set(6.4, 1.7, -6.2); wheel.scale.setScalar(0.62); wheel.userData.pick = 'park';
  { const ring = mesh(new THREE.TorusGeometry(1.55, 0.07, 8, 40), std(0xff8fc0), 0, 0, 0, false); wheel.add(ring); const ring2 = mesh(new THREE.TorusGeometry(0.85, 0.05, 8, 32), std(0xffe27a), 0, 0, 0, false); wheel.add(ring2);
    for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2; const sp = mesh(new THREE.CylinderGeometry(0.03, 0.03, 3.1, 6), std(0xffffff), 0, 0, 0, false); sp.rotation.z = a; wheel.add(sp); const gd = mesh(rbox(0.38, 0.3, 0.3, 0.08), std([0xffb3d1, 0x8edbff, 0xffe27a, 0xbdf3dc][i % 4]), Math.cos(a) * 1.55, Math.sin(a) * 1.55, 0); gd.userData.gond = 1; wheel.add(gd); } }
  const mast = new THREE.Group(); mast.userData.pick = 'park'; mast.position.set(6.4, 0, -6.2); mast.scale.setScalar(0.62);
  [-1, 1].forEach((sd) => { const l = mesh(rbox(0.16, 2.3, 0.16, 0.05), std(0x7c5cff), sd * 0.55, 1.05, 0); l.rotation.z = -sd * 0.28; mast.add(l); });
  mast.add(mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.5, 10), std(0xffffff), 0, 2.1, 0));
  scene.add(mast); scene.add(wheel); buildings.push(wheel, mast);
  wheel.traverse((o) => { if (o !== wheel) o.userData.root = wheel; }); mast.traverse((o) => { if (o !== mast) o.userData.root = mast; });

  scene.add(mesh(rbox(1.6, 0.18, 0.5, 0.05), std(0xe2b88a), 3.1, 0.45, -3.3)); scene.add(mesh(rbox(1.6, 0.5, 0.1, 0.04), std(0xe2b88a), 3.1, 0.75, -3.5));
  const fx = createFx(scene);
  let ride = 0;
  const cast = {}; let T = 0, running = true; const clock = new THREE.Clock();
  function mkLabel(name, me) { const n = document.createElement('span'); n.className = 'st3-n' + (me ? ' mk' : ''); n.textContent = name; n.style.opacity = 1; ov.appendChild(n); return n; }
  function add(p) {
    if (cast[p.pid]) return;
    const ch = createCharacter(p.npc ? { mika: true, acc: p.acc || [] } : avatarOpts(p.code)); ch.root.scale.setScalar(p.npc ? 0.75 : 0.85); ch.root.position.set(p.x || 0, 0, p.z || 2); scene.add(ch.root);
    ch.fx = (k, n) => fx.emit(k, n, ch.root.position, 0.85);
    cast[p.pid] = { ch, tx: p.x || 0, tz: p.z || 2, label: mkLabel(p.me ? 'Moi' : p.nick, p.me), me: !!p.me, npc: !!p.npc, next: 0, dance: 0, bub: null, bubT: 0 };
    ch.hop(4);
  }
  function say(pid, text) {
    const c = cast[pid]; if (!c) return;
    if (c.bub) c.bub.remove();
    const b = document.createElement('div'); b.className = 'st3-b'; b.textContent = String(text).slice(0, 80); ov.appendChild(b); c.bub = b; c.bubT = 5 + Math.min(4, String(text).length / 25);
    c.ch.setTalking(true); setTimeout(() => c.ch && c.ch.setTalking(false), 1400);
  }
  function remove(pid) { const c = cast[pid]; if (!c) return; if (c.bub) c.bub.remove(); c.ch.dispose(); c.label.remove(); delete cast[pid]; }
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
  function resize() { const w = host.clientWidth || 360, h = host.clientHeight || 280; renderer.setSize(w, h, false); canvas.style.width = '100%'; canvas.style.height = '100%'; camera.aspect = w / h; camera.fov = w / h < 1.2 ? 64 : 42; camera.updateProjectionMatrix(); }
  new ResizeObserver(resize).observe(host); resize();
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), hit = new THREE.Vector3();
  canvas.addEventListener('pointerup', (ev) => {
    const r = canvas.getBoundingClientRect(); ndc.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    for (const h of ray.intersectObjects(buildings, true)) { let o = h.object, id = null; while (o) { if (o.userData && o.userData.pick) { id = o.userData.pick; break; } o = o.parent; } if (id) { host.dispatchEvent(new CustomEvent('plaza3d', { detail: { kind: 'building', id } })); return; } }
    if (!ray.ray.intersectPlane(plane, hit)) return;
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
    wheel.rotation.z -= dt * (ride > 0 ? 1.4 : 0.18); if (ride > 0) ride -= dt;
    wheel.children.forEach((c2) => { if (c2.userData.gond) c2.rotation.z = -wheel.rotation.z; });
    Object.keys(cast).forEach((id) => {
      const c = cast[id], q = c.ch.root.position, dx = c.tx - q.x, dz = c.tz - q.z, d = Math.hypot(dx, dz); let mv = false;
      if (c.dance > 0) { c.dance -= dt; if (c.ch.st.y < 0.02) c.ch.hop(3.2); c.ch.face(Math.sin(T * 10) * 0.8); }
      else if (c.npc && d < 0.06 && T > c.next) { c.tx = (Math.random() - 0.5) * 8; c.tz = -1 + Math.random() * 4.5; c.next = T + 3 + Math.random() * 4; }
      else if (d > 0.06) { mv = true; const sp = Math.min(d, (c.npc ? 0.9 : 2.0) * dt); q.x += dx / d * sp; q.z += dz / d * sp; c.ch.face(Math.atan2(dx, dz) * 0.8); } else c.ch.face(0);
      c.ch.update(dt, T + id.length, mv, false);
      place(c.label, q, -0.12);
      if (c.bub) { c.bubT -= dt; if (c.bubT <= 0) { c.bub.remove(); c.bub = null; } else place(c.bub, q, 1.55); }
    });
    fx.update(dt);
    renderer.render(scene, camera);
  }
  frame();
  function rideWheel() { ride = 4.5; }
  function reset() { Object.keys(cast).forEach((id) => { if (!cast[id].npc) remove(id); }); }
  return { add, remove, reset, rideWheel, moveTo, emote, say, has: (pid) => !!cast[pid], count: () => Object.keys(cast).length, destroy() { running = false; Object.keys(cast).forEach(remove); renderer.dispose(); renderer.forceContextLoss && renderer.forceContextLoss(); canvas.remove(); ov.remove(); } };
}

/* ================= Intérieurs de magasins (boulangerie, friperie, déco, karaoké) ================= */
function stripeTex(c1, c2, n) { const t = canvasTex(256, 64, (g, w, h) => { const sw = w / n; for (let i = 0; i < n; i++) { g.fillStyle = i % 2 ? c2 : c1; g.fillRect(i * sw, 0, sw, h); } }); t.wrapS = THREE.RepeatWrapping; return t; }
function checkTex(c1, c2, rep) { const t = canvasTex(128, 128, (g, w, h) => { g.fillStyle = c1; g.fillRect(0, 0, w, h); g.fillStyle = c2; g.fillRect(0, 0, w / 2, h / 2); g.fillRect(w / 2, h / 2, w / 2, h / 2); }); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep, rep * 0.6); return t; }
function signTex(text, fg, bg, glow) { return canvasTex(512, 160, (g, w, h) => { if (bg) { g.fillStyle = bg; g.fillRect(0, 0, w, h); } g.font = '700 78px DynaPuff, Fredoka, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; if (glow) { g.shadowColor = glow; g.shadowBlur = 24; } g.fillStyle = fg; g.fillText(text, w / 2, h / 2 + 4); g.fillText(text, w / 2, h / 2 + 4); }); }
const PASTRY = {
  cake(x, y, z, c) { const g = new THREE.Group(); g.position.set(x, y, z); g.add(mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.2, 20), std(c || 0xffd1e3), 0, 0.1, 0, false)); const t = mesh(new THREE.TorusGeometry(0.16, 0.035, 8, 20), std(0xffffff), 0, 0.2, 0, false); t.rotation.x = Math.PI / 2; g.add(t); g.add(sph(0.05, std(0xff3b5c, { emissive: 0xff3b5c, emissiveIntensity: 0.25 }), 1, 1, 1, 0, 0.27, 0)); return g; },
  macaron(x, y, z, c) { const g = new THREE.Group(); g.position.set(x, y, z); const m = std(c, { emissive: c, emissiveIntensity: 0.18 }); g.add(sph(0.1, m, 1, 0.42, 1, 0, 0.05, 0)); g.add(sph(0.09, std(0xfff7ee), 1, 0.3, 1, 0, 0.1, 0)); g.add(sph(0.1, m, 1, 0.42, 1, 0, 0.15, 0)); return g; },
  croissant(x, y, z) { const g = new THREE.Group(); g.position.set(x, y, z); const t = mesh(new THREE.TorusGeometry(0.13, 0.065, 10, 16, Math.PI * 1.15), std(0xe8a95b), 0, 0.09, 0, false); t.rotation.set(Math.PI / 2.4, 0, Math.PI * 0.9); t.scale.set(1.2, 1, 1); g.add(t); return g; },
  donut(x, y, z, c) { const g = new THREE.Group(); g.position.set(x, y, z); const t = mesh(new THREE.TorusGeometry(0.1, 0.055, 10, 18), std(0xf0b36b), 0, 0.08, 0, false); t.rotation.x = Math.PI / 2.3; g.add(t); const t2 = mesh(new THREE.TorusGeometry(0.1, 0.05, 10, 18), std(c || 0xff9ac8, { emissive: c || 0xff9ac8, emissiveIntensity: 0.15 }), 0, 0.1, 0.005, false); t2.rotation.x = Math.PI / 2.3; t2.scale.set(1, 1, 0.9); g.add(t2); return g; },
  cupcake(x, y, z, c) { const g = new THREE.Group(); g.position.set(x, y, z); const b = mesh(new THREE.CylinderGeometry(0.1, 0.07, 0.12, 12), std(0xf5d0a0), 0, 0.06, 0, false); g.add(b); g.add(sph(0.11, std(c || 0xffb3d1, { emissive: c || 0xffb3d1, emissiveIntensity: 0.15 }), 1, 0.8, 1, 0, 0.17, 0)); g.add(sph(0.035, std(0xff3b5c), 1, 1, 1, 0, 0.27, 0)); return g; },
  bread(x, y, z) { const g = new THREE.Group(); g.position.set(x, y, z); g.add(sph(0.2, std(0xd9954a), 1.5, 0.7, 0.8, 0, 0.12, 0)); for (let i = -1; i <= 1; i++) { const sl = mesh(rbox(0.02, 0.012, 0.18, 0.005), std(0xf2d3a0), i * 0.09, 0.22, 0, false); sl.rotation.y = 0.5; g.add(sl); } return g; }
};
function garment(x, y, z, col, kind) {
  const g = new THREE.Group(); g.position.set(x, y, z);
  g.add(mesh(new THREE.TorusGeometry(0.05, 0.008, 6, 12, Math.PI), std(0xcfcfdc, { metalness: 0.5, roughness: 0.4 }), 0, 0.05, 0, false));
  const m = std(col, { emissive: col, emissiveIntensity: 0.1 });
  if (kind === 'dress') { g.add(mesh(new THREE.CylinderGeometry(0.1, 0.22, 0.5, 14), m, 0, -0.22, 0, false)); g.add(mesh(rbox(0.2, 0.14, 0.05, 0.02), m, 0, 0.0, 0, false)); }
  else { g.add(mesh(rbox(0.3, 0.38, 0.06, 0.03), m, 0, -0.17, 0, false)); [-1, 1].forEach((sd) => { const sl = mesh(rbox(0.16, 0.08, 0.06, 0.03), m, sd * 0.2, -0.04, 0, false); sl.rotation.z = -sd * 0.5; g.add(sl); }); }
  return g;
}
export function initInterior(host, theme, getOpts) {
  let renderer; try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'low-power' }); } catch (e) { return null; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  const canvas = renderer.domElement; canvas.className = 'scene3d'; host.insertBefore(canvas, host.firstChild);
  const scene = new THREE.Scene(); const BG = { bakery: 0xffe9f0, thrift: 0xefe3d0, deco: 0xe6f3ee, karaoke: 0x241447 }[theme] || 0xffffff; scene.background = new THREE.Color(BG);
  standardLights(scene);
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 40); camera.position.set(0, 1.9, 6.6); camera.lookAt(0, 1.25, 0);
  const fx = createFx(scene), anim = [];
  const room = new THREE.Group(); scene.add(room);
  const add = (o) => { room.add(o); return o; };
  const floorMat = { bakery: () => std(0xffffff, { map: checkTex('#fff4f8', '#ffc4dc', 5) }), thrift: () => std(0xd8a56e, { map: stripeTex('#d9a96f', '#c8935b', 14) }), deco: () => std(0xf3e6d3, { map: checkTex('#f6ece0', '#e9d9c3', 5) }), karaoke: () => std(0x3a2370, { roughness: 0.3 }) }[theme]();
  const fl = mesh(new THREE.PlaneGeometry(26, 16), floorMat, 0, 0, 4.5, false); floorMat.map && floorMat.map.repeat.multiplyScalar(1.8); fl.rotation.x = -Math.PI / 2; add(fl);
  const wallCol = { bakery: 0xffd6e6, thrift: 0xc7e3d4, deco: 0xfff3e0, karaoke: 0x2f1a63 }[theme];
  const wallTex = theme === 'bakery' ? stripeTex('#ffd6e6', '#fff0f6', 14) : null; if (wallTex) wallTex.repeat.set(3.4, 1);
  add(mesh(rbox(26, 10, 0.2, 0.05), std(wallCol, wallTex ? { map: wallTex } : { emissive: wallCol, emissiveIntensity: theme === 'karaoke' ? 0.35 : 0.12 }), 0, 4.7, -3.0, false));
  add(mesh(rbox(14, 0.18, 0.2, 0.04), std(0xffffff), 0, 0.09, -2.88, false));
  const sign = mesh(new THREE.PlaneGeometry(2.9, 0.9), new THREE.MeshBasicMaterial({ map: signTex({ bakery: 'Boulangerie', thrift: 'Friperie', deco: 'Déco', karaoke: 'Karaoké' }[theme], { bakery: '#e0457b', thrift: '#ff7ac8', deco: '#2f8f6b', karaoke: '#7df9ff' }[theme], { bakery: '#fffaf0', thrift: null, deco: '#fffaf0', karaoke: null }[theme], { thrift: '#ff3fa8', karaoke: '#18c8ff' }[theme]), transparent: true }), 0, 3.85, -2.86, false);
  add(sign);
  let item = null, decorG = null, ch = null, spinT = 0, singing = false, T = 0, running = true, camZ = 6.6, narrow = false;
  let pos = [0, 0, 1.4], sc = 1.25;
  if (theme === 'bakery') {
    pos = [-1.5, 0, 1.2];
    const counter = mesh(rbox(5.4, 1.0, 1.2, 0.14), std(0xfff7ee), 0.9, 0.5, -1.6); add(counter);
    add(mesh(rbox(5.5, 0.12, 1.3, 0.05), std(0xf5c28a), 0.9, 1.04, -1.6, false));
    const glass = mesh(rbox(3.6, 0.95, 1.0, 0.08), new THREE.MeshStandardMaterial({ color: 0xdff6ff, transparent: true, opacity: 0.22, roughness: 0.05, metalness: 0.1 }), 0.5, 1.6, -1.55, false); add(glass);
    add(mesh(rbox(3.7, 0.06, 1.05, 0.02), std(0xfff7ee), 0.5, 1.12, -1.55, false));
    add(mesh(rbox(3.4, 0.05, 0.8, 0.02), std(0xfff7ee), 0.5, 1.5, -1.55, false));
    add(mesh(rbox(3.7, 0.07, 1.05, 0.02), std(0xffb3d1), 0.5, 2.1, -1.55, false));
    const cols = [0xffb3d1, 0xbdf3dc, 0xfff1a8, 0xd9ccff, 0xffc9a8, 0x8edbff];
    for (let i = 0; i < 6; i++) add(PASTRY.macaron(-0.95 + i * 0.22, 1.5, -1.3, cols[i]));
    add(PASTRY.cake(-1.0, 1.15, -1.7, 0xffd1e3)); add(PASTRY.cake(-0.4, 1.15, -1.7, 0xbdf3dc)); add(PASTRY.cake(0.2, 1.15, -1.7, 0xfff1a8));
    add(PASTRY.cupcake(0.85, 1.15, -1.7, 0xffb3d1)); add(PASTRY.cupcake(1.2, 1.15, -1.5, 0xd9ccff)); add(PASTRY.donut(1.25, 1.55, -1.35, 0xff9ac8));
    add(PASTRY.croissant(0.4, 1.55, -1.3)); add(PASTRY.croissant(0.75, 1.55, -1.3)); add(PASTRY.donut(1.05, 1.55, -1.7, 0xbdf3dc));
    // étagères de pains à droite
    add(mesh(rbox(1.6, 2.4, 0.5, 0.06), std(0xf5c28a), 3.95, 1.2, -2.4)); [0.6, 1.2, 1.8].forEach((y) => { add(mesh(rbox(1.5, 0.06, 0.45, 0.02), std(0xfff0d8), 3.95, y, -2.35, false)); for (let k = 0; k < 3; k++) add(PASTRY.bread(3.5 + k * 0.45, y + 0.04, -2.3)); });
    // auvent rayé festonné
    const aw = mesh(new THREE.BoxGeometry(11, 0.5, 1.6), std(0xffffff, { map: stripeTex('#ff8fc0', '#ffffff', 16) }), 0, 4.6, -2.2, false); const t2 = stripeTex('#ff8fc0', '#ffffff', 16); t2.repeat.set(1, 1); add(aw);
    for (let i = 0; i < 22; i++) add(sph(0.26, std(i % 2 ? 0xffffff : 0xff8fc0), 1, 0.9, 0.9, -5.2 + i * 0.5, 4.3, -1.45));
    for (let i = -1; i <= 1; i += 2) { const l = new THREE.Group(); l.position.set(i * 2.4, 3.1, -1.2); l.add(mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.9, 4), std(0x999999), 0, 0.5, 0, false)); const sh = mesh(new THREE.ConeGeometry(0.3, 0.3, 14, 1, true), std(0xffe3a8, { side: THREE.DoubleSide, emissive: 0xffd37a, emissiveIntensity: 0.6 }), 0, 0, 0, false); l.add(sh); l.add(sph(0.08, new THREE.MeshBasicMaterial({ color: 0xfff1b8 }), 1, 1, 1, 0, -0.05, 0)); add(l); anim.push((t) => { l.rotation.z = Math.sin(t * 1.2 + i) * 0.03; }); }
    const pl = new THREE.PointLight(0xffd9a8, 1.0, 12); pl.position.set(0, 3.2, 1); scene.add(pl);
  } else if (theme === 'thrift') {
    pos = [0.2, 0, 1.4];
    const rail = (x, y, z, w, cols, kinds) => { add(mesh(new THREE.CylinderGeometry(0.03, 0.03, w, 8), std(0xd8c7a8, { metalness: 0.5 }), x, y, z, false)).rotation.z = Math.PI / 2; [-1, 1].forEach((sd) => add(mesh(new THREE.CylinderGeometry(0.03, 0.04, y, 8), std(0xd8c7a8, { metalness: 0.5 }), x + sd * w / 2, y / 2, z, false))); const n = Math.floor(w / 0.32); for (let i = 0; i < n; i++) { const gm = garment(x - w / 2 + 0.2 + i * 0.32, y - 0.05, z, cols[i % cols.length], kinds[i % kinds.length]); gm.rotation.y = 0.3; add(gm); } };
    rail(-2.6, 2.1, -1.8, 2.4, [0xff8fc0, 0x8edbff, 0xfff1a8, 0xb9a6ff, 0xa8e86b], ['shirt', 'dress']);
    rail(2.7, 2.1, -1.8, 2.2, [0xffa8cf, 0xffc9a8, 0xbdf3dc, 0xe7ddff], ['dress', 'shirt']);
    rail(-0.4, 1.7, -2.4, 3.0, [0xf2b27a, 0xe0457b, 0x7c5cff, 0xffe27a], ['shirt', 'shirt', 'dress']);
    // miroir ovale
    const mir = mesh(new THREE.CircleGeometry(0.75, 30), new THREE.MeshStandardMaterial({ color: 0xe4f6ff, metalness: 0.9, roughness: 0.08, emissive: 0xbfe6ff, emissiveIntensity: 0.25 }), 3.75, 1.7, -1.1, false); mir.scale.set(0.8, 1.35, 1); mir.rotation.y = -0.45; add(mir);
    const fr = mesh(new THREE.TorusGeometry(0.75, 0.07, 8, 32), std(0xf2b27a), 3.75, 1.7, -1.11, false); fr.scale.set(0.8, 1.35, 1); fr.rotation.y = -0.45; add(fr);
    // chaussures et chapeaux sur étagère
    add(mesh(rbox(2.2, 0.08, 0.45, 0.03), std(0xc9955c), -3.6, 2.9, -2.6, false)); const hc = [0xff8fc0, 0x7c5cff, 0xffe27a, 0x5de3b4];
    for (let i = 0; i < 4; i++) { add(mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.04, 16), std(hc[i]), -4.2 + i * 0.5, 2.97, -2.6, false)); add(sph(0.13, std(hc[i]), 1, 0.8, 1, -4.2 + i * 0.5, 3.04, -2.6)); }
    // guirlande lumineuse + néon cœur
    for (let i = 0; i < 24; i++) { const t = i / 23; const b = sph(0.06, new THREE.MeshBasicMaterial({ color: [0xfff1a8, 0xffb3d1, 0xbdf3dc, 0x8edbff][i % 4] }), 1, 1, 1, -5 + t * 10, 4.7 - Math.sin(t * Math.PI * 3) * 0.2, -2.7); add(b); anim.push((tt) => { b.scale.setScalar(0.85 + Math.sin(tt * 3 + i) * 0.25); }); }
    const nh = new THREE.Mesh(new THREE.ExtrudeGeometry(heartShape(0.9), { depth: 0.04, bevelEnabled: false }), new THREE.MeshBasicMaterial({ color: 0xff4fa8 })); nh.position.set(-3.5, 1.4, -2.8); add(nh); anim.push((tt) => { nh.scale.setScalar(1 + Math.sin(tt * 3) * 0.05); });
    const rug = mesh(new THREE.CylinderGeometry(1.5, 1.5, 0.03, 36), std(0xffb3d1), 0.2, 0.02, 1.4, false); add(rug); add(mesh(new THREE.TorusGeometry(1.2, 0.04, 8, 36), std(0xffffff), 0.2, 0.04, 1.4, false)).rotation.x = Math.PI / 2;
    const pl = new THREE.PointLight(0xffd9ec, 0.9, 14); pl.position.set(0, 3.4, 2); scene.add(pl);
  } else if (theme === 'deco') {
    pos = [-1.4, 0, 1.2];
    const plant = (x, z, h, c) => { add(mesh(new THREE.CylinderGeometry(0.22, 0.17, 0.4, 14), std(0xffc9a8), x, 0.2, z)); for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2; add(sph(0.2, std(c || 0x6bcf7a), 0.6, 1.8 * h, 0.35, x + Math.cos(a) * 0.12, 0.7 + 0.2 * h, z + Math.sin(a) * 0.12)).rotation.z = Math.cos(a) * 0.35; } };
    plant(-3.6, -1.8, 1.4); plant(3.8, -1.6, 1.0, 0x8ce08a); plant(-2.3, -2.4, 0.8, 0x5fc9a0);
    add(mesh(rbox(2.6, 0.7, 0.9, 0.18), std(0xffb3d1), 1.2, 0.35, -1.9)); add(mesh(rbox(2.6, 0.7, 0.3, 0.14), std(0xff9ac8), 1.2, 0.95, -2.25)); [-1, 1].forEach((sd) => add(mesh(rbox(0.3, 0.55, 0.9, 0.12), std(0xff9ac8), 1.2 + sd * 1.3, 0.5, -1.9)));
    add(mesh(rbox(0.5, 0.5, 0.18, 0.06), std(0xfff1a8), 0.5, 0.75, -1.85)); add(mesh(rbox(0.5, 0.5, 0.18, 0.06), std(0xbdf3dc), 1.9, 0.75, -1.85));
    // lampadaire + cadres + arche
    add(mesh(new THREE.CylinderGeometry(0.02, 0.02, 2.4, 6), std(0xcccccc), 3.0, 1.2, -1.2, false)); add(sph(0.3, std(0xffe3a8, { emissive: 0xffd37a, emissiveIntensity: 0.9 }), 1, 0.8, 1, 3.0, 2.5, -1.2));
    [[-2.2, 3.1, 0xffb3d1], [-1.4, 3.3, 0x8edbff], [-0.6, 3.0, 0xfff1a8]].forEach((f) => { add(mesh(rbox(0.6, 0.8, 0.06, 0.02), std(0xf2b27a), f[0], f[1], -2.85, false)); add(mesh(rbox(0.46, 0.64, 0.02, 0.01), std(f[2], { emissive: f[2], emissiveIntensity: 0.3 }), f[0], f[1], -2.81, false)); });
    const arch = mesh(new THREE.TorusGeometry(0.9, 0.08, 8, 28, Math.PI), std(0xffffff), 2.2, 2.6, -2.85, false); add(arch); add(mesh(new THREE.CircleGeometry(0.9, 28, 0, Math.PI), new THREE.MeshBasicMaterial({ color: 0xbfe9ff }), 2.2, 2.6, -2.86, false));
    add(mesh(new THREE.CylinderGeometry(0.62, 0.7, 0.2, 28), std(0xffffff), 1.5, 0.1, 1.3)); // piédestal
    const pl = new THREE.PointLight(0xfff0d0, 0.8, 14); pl.position.set(0, 3.6, 2); scene.add(pl);
  } else {
    pos = [0, 0.34, 0.6]; sc = 1.3;
    add(mesh(rbox(5.6, 0.34, 2.8, 0.1), std(0x5b3fd6, { emissive: 0x3a2370, emissiveIntensity: 0.5 }), 0, 0.17, 0.6, false));
    add(mesh(rbox(5.7, 0.05, 2.9, 0.02), new THREE.MeshBasicMaterial({ color: 0xff6fc8 }), 0, 0.36, 0.6, false)).scale.set(1, 1, 1);
    [-1, 1].forEach((sd) => { add(mesh(rbox(1.4, 5, 0.5, 0.15), std(0xe0457b, { emissive: 0xb02a60, emissiveIntensity: 0.3 }), sd * 3.3, 2.5, -1.8)); add(mesh(rbox(1.0, 1.7, 0.8, 0.08), std(0x241447), sd * 2.9, 0.85, -1.2)); add(sph(0.3, std(0x44307a), 1, 1, 0.5, sd * 2.9, 0.65, -0.79)); add(sph(0.16, std(0x44307a), 1, 1, 0.5, sd * 2.9, 1.3, -0.79)); });
    const scr = canvasTex(512, 256, (g, w, h) => { g.fillStyle = '#12082c'; g.fillRect(0, 0, w, h); }); const scrM = mesh(new THREE.PlaneGeometry(3.6, 1.8), new THREE.MeshBasicMaterial({ map: scr }), 0, 3.1, -2.8, false); add(scrM);
    add(mesh(rbox(3.8, 2.0, 0.08, 0.05), new THREE.MeshBasicMaterial({ color: 0x7df9ff }), 0, 3.1, -2.9, false));
    const ctx = scr.image.getContext('2d');
    function drawLyrics(a, b, prog, title) { const g = ctx; g.fillStyle = '#12082c'; g.fillRect(0, 0, 512, 256); g.textAlign = 'center'; g.textBaseline = 'middle'; g.font = '700 22px DynaPuff, Fredoka, sans-serif'; g.fillStyle = '#7df9ff'; g.fillText(title || '♪ Karaoké ♪', 256, 28); let fs = 38; if (a) { g.font = '700 38px DynaPuff, Fredoka, sans-serif'; while (g.measureText(a).width > 470 && fs > 18) { fs -= 2; g.font = '700 ' + fs + 'px DynaPuff, Fredoka, sans-serif'; } g.fillStyle = '#4b3a8f'; g.fillText(a, 256, 120); g.save(); g.beginPath(); g.rect(256 - g.measureText(a).width / 2 - 4, 80, (g.measureText(a).width + 8) * Math.max(0, Math.min(1, prog || 0)), 80); g.clip(); g.fillStyle = '#ff6fc8'; g.fillText(a, 256, 120); g.restore(); } if (b) { g.font = '600 26px DynaPuff, Fredoka, sans-serif'; g.fillStyle = '#9d8cff'; g.fillText(b, 256, 200); } scr.needsUpdate = true; }
    drawLyrics('', '', 0, '♪ Choisis une chanson ♪');
    camera.userData.lyrics = drawLyrics;
    const ball = mesh(new THREE.IcosahedronGeometry(0.5, 1), new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 1, roughness: 0.15, flatShading: true, emissive: 0x9d8cff, emissiveIntensity: 0.5 }), 0, 4.4, -0.2, false); add(ball); add(mesh(new THREE.CylinderGeometry(0.01, 0.01, 1.2, 4), std(0xaaaaaa), 0, 5.2, -0.2, false));
    anim.push((t) => { ball.rotation.y = t * 0.8; });
    const cols = [0xff6fc8, 0x7df9ff, 0xffe27a];
    cols.forEach((c, i) => { const beam = mesh(new THREE.ConeGeometry(0.9, 4.2, 20, 1, true), new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0.13, side: THREE.DoubleSide, depthWrite: false }), (i - 1) * 2.2, 2.4, -0.4, false); beam.position.y = 2.6; add(beam); anim.push((t) => { beam.rotation.z = Math.sin(t * 0.9 + i * 2) * 0.35; beam.rotation.x = Math.cos(t * 0.7 + i) * 0.15; }); });
    const bars = []; for (let i = 0; i < 14; i++) { const b = mesh(rbox(0.2, 1, 0.12, 0.04), new THREE.MeshBasicMaterial({ color: [0xff6fc8, 0x7df9ff, 0xffe27a][i % 3] }), -2.7 + i * 0.42, 0.55, -1.6, false); bars.push(b); add(b); }
    anim.push((t) => { bars.forEach((b, i) => { const k = singing ? 0.4 + Math.abs(Math.sin(t * 6 + i * 0.9)) * 1.6 : 0.25 + Math.abs(Math.sin(t * 1.2 + i)) * 0.15; b.scale.y = k; b.position.y = 0.4 + k * 0.5; }); });
    // micro sur pied
    add(mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.0, 6), std(0xcccccc, { metalness: 0.6 }), 0.9, 0.9, 1.2, false)); add(sph(0.07, std(0x2a1b5e), 1, 1.3, 1, 0.9, 1.45, 1.2));
    const pl = new THREE.PointLight(0xc79bff, 1.2, 14); pl.position.set(0, 3, 2); scene.add(pl);
  }
  function build() {
    if (ch) ch.dispose();
    ch = createCharacter(getOpts()); ch.root.scale.setScalar(sc); ch.root.position.set(pos[0] * (narrow ? 0.55 : 1), pos[1], pos[2]); ch.face(theme === 'bakery' ? 0.45 : 0);
    ch.fx = (k, n) => fx.emit(k, n, ch.root.position, sc); scene.add(ch.root); ch.setEmotion(singing ? 'happy' : 'neutral');
  }
  build();
  function setItem(kind, id) {
    item = id; if (decorG) { room.remove(decorG); decorG = null; }
    if (theme === 'deco' && kind === 'decor' && id && DECOR_BUILD[id]) {
      const g = DECOR_BUILD[id](); const bb = new THREE.Box3().setFromObject(g), z = bb.getSize(new THREE.Vector3());
      const k = Math.max(0.3, Math.min(1.0, 1.9 / Math.max(z.x, z.y, z.z, 0.1))); g.scale.setScalar(k);
      const b2 = new THREE.Box3().setFromObject(g); g.position.set(1.5 - (b2.min.x + b2.max.x) / 2, 0.2 - b2.min.y, 1.3 - (b2.min.z + b2.max.z) / 2); room.add(g); decorG = g;
    }
  }
  function resize() { const w = host.clientWidth || 320, h = host.clientHeight || 300; renderer.setSize(w, h, false); canvas.style.width = '100%'; canvas.style.height = '100%'; camera.aspect = w / h; camera.fov = w / h < 1 ? 44 : 34; camZ = w / h < 0.8 ? 9.6 : 6.6; camera.position.z = camZ; narrow = w / h < 0.8; if (ch) ch.root.position.x = pos[0] * (narrow ? 0.55 : 1); camera.updateProjectionMatrix(); }
  new ResizeObserver(resize).observe(host); resize();
  canvas.style.touchAction = 'none';
  canvas.addEventListener('pointerup', () => { if (ch) { ch.hop(4.6); ch.setEmotion('happy'); fx.emit('heart', 4, ch.root.position, sc); setTimeout(() => ch && ch.setEmotion(singing ? 'happy' : 'neutral'), 1400); } });
  const clock = new THREE.Clock(); let visible = true;
  if ('IntersectionObserver' in window) new IntersectionObserver((es) => { visible = es[0].isIntersecting; }, { threshold: 0.01 }).observe(host);
  function frame() {
    if (!running) return; requestAnimationFrame(frame);
    if (!visible || document.hidden) { clock.getDelta(); return; }
    const dt = Math.min(0.05, clock.getDelta()); T += dt;
    camera.position.x = Math.sin(T * 0.25) * 0.35; camera.lookAt(camera.position.x * 0.3, 1.25, 0);
    anim.forEach((f) => f(T));
    if (decorG) { decorG.rotation.y += dt * 0.5; }
    if (singing && ch) { ch.setTalking(Math.sin(T * 9) > -0.2); ch.face(Math.sin(T * 2) * 0.35); if (ch.st.y < 0.02 && Math.random() < dt * 1.2) ch.hop(2.6); if (Math.random() < dt * 2) fx.emit('star', 1, ch.root.position, sc); }
    else if (ch) { ch.setTalking(false); if (theme !== 'bakery') ch.face(Math.sin(T * 0.6) * 0.3); }
    if (ch) ch.update(dt, T, false, false); fx.update(dt);
    if (Math.random() < dt * 0.6) fx.emit('star', 1, new THREE.Vector3((Math.random() - 0.5) * 6, 1 + Math.random() * 2, 0.5), 1);
    renderer.render(scene, camera);
  }
  frame();
  return {
    setItem, rebuild() { build(); ch.hop(3.6); },
    emote(e) { if (ch) { ch.setEmotion(e); ch.hop(4); } },
    sing(on) { singing = !!on; if (ch) ch.setEmotion(singing ? 'happy' : 'neutral'); },
    lyrics(a, b, prog, title) { if (camera.userData.lyrics) camera.userData.lyrics(a, b, prog, title); },
    destroy() { running = false; if (ch) ch.dispose(); renderer.dispose(); renderer.forceContextLoss && renderer.forceContextLoss(); if (canvas.parentNode) canvas.parentNode.removeChild(canvas); }
  };
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
