// Konstanty s odkazy na objekty
const cislo1 = document.getElementById("cislo1");
const cislo2 = document.getElementById("cislo2");
const cislo3 = document.getElementById("cislo3");
const vysledek = document.getElementById("vysledek");

function hledaniMax() {
    const number1 = Number(cislo1.value);
    const number2 = Number(cislo2.value);
    const number3 = Number(cislo3.value);

    let max = number1;
    if (number2 > max) {
        max = number2;
    }
    if (number3 > max) {
        max = number3;
    }

    let poziceText = "";
    let prvni = true;
    if (number1 === max) {
        poziceText += "Číslo 1";
        prvni = false;
    }
    if (number2 === max) {
        poziceText += (prvni ? "" : ", ") + "Číslo 2";
        prvni = false;
    }
    if (number3 === max) {
        poziceText += (prvni ? "" : ", ") + "Číslo 3";
    }

    vysledek.textContent = `Největší číslo je ${max}, nalezeno v pozicích: ${poziceText}.`;
}