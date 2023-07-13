const inputElement = document.getElementById("input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#resultado");
const botao = document.querySelector("button");
const resultado = document.getElementById("resultado");

function converter() {
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    if (fromValue === toValue) {
        outputElement.value = inputElement.value;
        resultado.textContent = "";
        return;
    }

    let metros;

    switch (fromValue) {
        case "meters":
            metros = inputElement.value;
            break;
        case "kilometers":
            metros = inputElement.value * 1000;
            break;
        case "centimeters":
            metros = inputElement.value / 100;
            break;
        case "millimeter":
            metros = inputElement.value / 1000;
            break;
    }

    let resposta;

    switch (toValue) {
        case "meters":
            resposta = metros;
            break;
        case "kilometers":
            resposta = metros / 1000;
            break;
        case "centimeters":
            resposta = metros * 100;
            break;
        case "millimeter":
            resposta = metros * 1000;
            break;
    }

    outputElement.value = resposta;

    const fromLabel = fromElement.options[fromElement.selectedIndex].text;
    const toLabel = toElement.options[toElement.selectedIndex].text;

    const mensagem = `${inputElement.value} ${fromLabel} equivalem a ${resposta} ${toLabel}`;
    resultado.textContent = mensagem;
}

botao.addEventListener("click", converter);
