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




const saveText = document.querySelector(".screen-color-input--js");
// const entry = localStorage.getItem('entry');
// let result = '';

// if (entry) {
//     result = entry;
// }

const entryInput = document.querySelector('.form__textarea--js');
// entryInput.value = result;

const saveButton = document.querySelector('.save-button--js');
const loadButton = document.querySelector('.load-button--js');
const clearButton = document.querySelector('.clear-button--js');

saveButton.addEventListener('click', () => {
    localStorage.setItem('entry', entryInput.value);
});

loadButton.addEventListener('click', () => {
    result = localStorage.getItem('entry');
    if (result) {
        entryInput.value = result;
        entryInput.classList.remove('red-alert');
        entryInput.value = `Załadowano dane które zapisałeś podczas ostatniej wizyty: „${result}”`;
    } else {
        entryInput.value = "Brak danych do załadowania. Wpisz nowe dane i naciśnij ENTER!";
        entryInput.classList.add('red-alert');
    }

});

clearButton.addEventListener('click', () => {
    entryInput.value = 'Wyczyściłeś ekran. ZAŁADUJ lub DODAJ nowe dane.';
    entryInput.classList.add('red-alert');
});

entryInput.addEventListener('click', () => {
    entryInput.classList.remove('red-alert');
    entryInput.value = '';

});