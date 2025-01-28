import { rgbToHex, hexToRgb, isHexValid, adjustBrightness } from '../library/index.js';

document.addEventListener('DOMContentLoaded', () => {
    const colorPalette = document.getElementById('color-palette');
    const colorInput = document.getElementById('color-input');
    const applyColorButton = document.getElementById('apply-color');
    const gradientCanvas = document.getElementById('gradient-canvas');
    const ctx = gradientCanvas.getContext('2d');

    for (let i = 0; i < 10; i++) {
        const colorBox = document.createElement('div');
        colorBox.classList.add('color-box');
        colorBox.style.backgroundColor = `#${rgbToHex(i * 25, i * 25, i * 25)}`;
        colorBox.addEventListener('click', () => {
            colorInput.value = `#${rgbToHex(i * 25, i * 25, i * 25)}`;
        });
        colorPalette.appendChild(colorBox);
    }

    applyColorButton.addEventListener('click', () => {
        const hexColor = colorInput.value;
        if (isHexValid(hexColor)) {
            const { r, g, b } = hexToRgb(hexColor);
            console.log(`RGB: ${r}, ${g}, ${b}`);
   
            const adjustedColor = adjustBrightness(hexColor, 0.2);
            console.log(`Adjusted Color: ${adjustedColor}`);
        } else {
            alert('Invalid Hex Color');
        }
    });

    const gradient = ctx.createLinearGradient(0, 0, gradientCanvas.width, gradientCanvas.height);
    gradient.addColorStop(0, '#FF0000');
    gradient.addColorStop(1, '#0000FF');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, gradientCanvas.width, gradientCanvas.height);
});