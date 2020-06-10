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
const entryInput = document.querySelector('.editor-textarea--js');
const saveButton = document.querySelector('.save-button--js');
const loadButton = document.querySelector('.load-button--js');
const clearButton = document.querySelector('.clear-button--js');
entryInput.classList.add('do-not-save--js');

saveButton.addEventListener('click', () => {
    if ((entryInput.classList.contains('red-alert--js')) || (entryInput.classList.contains('do-not-save--js'))) {
        entryInput.classList.add('red-alert--js');
        entryInput.value = "KLIKNIJ i pisz lub ZAŁADUJ dane:)";
    } else {
        localStorage.setItem('entry', entryInput.value);
    }
});

loadButton.addEventListener('click', () => {
    entryInput.classList.add('do-not-save--js');
    result = localStorage.getItem('entry');
    if (result) {
        entryInput.value = result;
        entryInput.classList.remove('red-alert--js');
        entryInput.value = `Załadowano dane które zapisałeś podczas ostatniej wizyty: „${result}”`;
    } else {
        entryInput.value = "Brak danych do załadowania. Wpisz nowe dane i naciśnij ENTER!";
        entryInput.classList.add('red-alert--js');
    }

});

clearButton.addEventListener('click', () => {
    entryInput.value = 'Wyczyściłeś ekran. ZAŁADUJ ponownie dane lub DODAJ nowe.';
    entryInput.classList.add('red-alert--js');
});

entryInput.addEventListener('click', () => {
    entryInput.classList.remove('do-not-save--js');
    entryInput.classList.remove('red-alert--js');
    entryInput.value = '';

});