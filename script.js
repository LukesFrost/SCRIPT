// konstanty s odkazy na objekty
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");

//vystup
const output = document.getElementById("output");        

function hledaniMax() {
    let number1 = Number(num1.value);
    let number2 = Number(num2.value);
    let number3 = Number(num3.value);
    if (number1>number2) {
        output.value = number1;
    }
    else {
        output.value = number2;
    }
}