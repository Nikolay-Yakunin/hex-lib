export function clamp(value) {
    return Math.max(0, Math.min(255, value));
}

export function toHex(value) {
    const hex = value.toString(16).toUpperCase();
    return hex.length === 1 ? '0' + hex : hex;
}
