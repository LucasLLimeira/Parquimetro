function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value) / 100; // Convertendo para metros
    var imc = peso / (altura * altura);
    document.getElementById("resultado").textContent = "Seu IMC é: " + imc.toFixed(2);
    document.getElementById("classificacao").textContent = "Classificação: " + classificarIMC(imc);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 25) {
        return "Peso normal";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}