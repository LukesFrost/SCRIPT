// Konstanty s odkazy na objekty
const cislo1 = document.getElementById("cislo1");
const cislo2 = document.getElementById("cislo2");
const cislo3 = document.getElementById("cislo3");
const vysledek = document.getElementById("vysledek");

function hledaniMax() {
    // Získání hodnot a konverze na čísla
    const number1 = Number(cislo1.value);
    const number2 = Number(cislo2.value);
    const number3 = Number(cislo3.value);

    let max = number1;
    let pozice = 1;

    if (number2 > max) {
        max = number2;
        pozice = 2;
    }
    // Pokud je number2 stejné jako max, pozice zůstává 1 (první výskyt)
    if (number3 > max) {
        max = number3;
        pozice = 3;
    }
    // Pokud je number3 stejné jako max, pozice zůstává na první výskyt

    vysledek.textContent = `Největší číslo je ${max}, nalezeno v pozici Čísla ${pozice}.`;
}