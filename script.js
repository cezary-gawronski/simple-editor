const screenColorInput = document.getElementById("screen-color-input");
const fontColorInput = document.getElementById("font-color-input");

screenColorInput.addEventListener("input", () => {
    let screenColor = screenColorInput.value;
    document.documentElement.style.setProperty('--screen-color', screenColor);
});

fontColorInput.addEventListener("input", () => {
    let fontColor = fontColorInput.value;
    document.documentElement.style.setProperty('--font-color', fontColor);
});