// Build step: add intrinsic width/height to every <img src="/photos|/brand/..."> that lacks them,
// so browsers reserve space (no layout shift). CSS still controls the rendered size, so nothing moves.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

function jpegSize(buf) {
  let i = 2;
  while (i < buf.length) {
    if (buf[i] !== 0xff) return null;
    const m = buf[i + 1];
    const len = buf.readUInt16BE(i + 2);
    if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) {
      return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) };
    }
    i += 2 + len;
  }
  return null;
}
function size(file) {
  const b = readFileSync(file);
  if (b[0] === 0xff && b[1] === 0xd8) return jpegSize(b);
  if (b.toString('ascii', 1, 4) === 'PNG') return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
  if (b.toString('ascii', 8, 12) === 'WEBP' && b.toString('ascii', 12, 16) === 'VP8X')
    return { w: 1 + b.readUIntLE(24, 3), h: 1 + b.readUIntLE(27, 3) };
  return null;
}
function walk(dir, out = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p, out); else if (p.endsWith('.html')) out.push(p);
  }
  return out;
}

export default function imgDims() {
  return {
    name: 'img-dims',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const cache = new Map();
        let n = 0;
        for (const file of walk(root)) {
          const html = readFileSync(file, 'utf8');
          const out = html.replace(/<img\b[^>]*>/g, (tag) => {
            if (/\swidth=/.test(tag)) return tag;
            const src = tag.match(/\ssrc="(\/(?:photos|brand)\/[^"]+)"/)?.[1];
            if (!src) return tag;
            if (!cache.has(src)) { try { cache.set(src, size(join(root, src))); } catch { cache.set(src, null); } }
            const d = cache.get(src);
            if (!d) return tag;
            n++;
            return tag.replace(/^<img/, `<img width="${d.w}" height="${d.h}"`);
          });
          if (out !== html) writeFileSync(file, out);
        }
        logger.info(`added width/height to ${n} images`);
      },
    },
  };
}
