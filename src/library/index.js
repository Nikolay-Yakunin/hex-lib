import { clamp, toHex } from './utils.js'

export function rgbToHex(r, g, b) {
    r = clamp(r);
    g = clamp(g);
    b = clamp(b);
    return toHex(r) + toHex(g) + toHex(b);
}

export function hexToRgb(hex) {
    if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) return null;
    let c = hex.substring(1).split('');
    if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    const result = [
        parseInt(c[0] + c[1], 16),
        parseInt(c[2] + c[3], 16),
        parseInt(c[4] + c[5], 16)
    ];
    return { r: result[0], g: result[1], b: result[2] };
}

export function isHexValid(hex) {
    return /^#([A-Fa-f0-9]{3}){1,2}$/.test(hex);
}

export function adjustBrightness(hex, percent) {
    const { r, g, b } = hexToRgb(hex);
    const t = percent < 0 ? 0 : 255;
    const p = percent < 0 ? percent * -1 : percent;
    const R = parseInt((t - r) * p) + r;
    const G = parseInt((t - g) * p) + g;
    const B = parseInt((t - b) * p) + b;
    return rgbToHex(R, G, B);
}