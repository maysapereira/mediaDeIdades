function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var totalFamiliares = parseInt(prompt("Quantidade familiares:"))
var numero = 1
var totalIdades = 0

while(numero <= totalFamiliares) {
    var idade = parseInt(prompt("Informe a idade do familiar"));
    totalIdades = totalIdades + idade;
    numero++;
}

var mediaDasIdades = totalIdades/totalFamiliares
mostra("A média das idades dos familiares é " + mediaDasIdades)
mostra("FIM")