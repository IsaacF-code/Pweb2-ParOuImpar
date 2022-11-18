let numUsuario = parseInt(prompt("Digite um número par ou impar entre 0 e 100"));
let numMaquina = Math.floor(Math.random() * 100 + 1);
let result = 0;

if (numUsuario >= 0 && numUsuario <= 100) {
    result = numUsuario + numMaquina;
} else {
    alert("Número maior que 100 ou menor que 0");
}

if (numUsuario % 2 == 0 && result % 2 == 0 && numMaquina % 2 != 0) {
    document.write("Seu número: " + numUsuario + "<br>");
    document.write("Número da Máquina: " + numMaquina + "<br>");
    document.write("O resultado da soma foi: " + result + " e é par. Você ganhou!");
} else if (numUsuario % 2 != 0 && result % 2 == 0 && numMaquina % 2 == 0) {
    document.write("Seu número: " + numUsuario + "<br>");
    document.write("Número da Máquina: " + numMaquina + "<br>");
    document.write("O resultado da soma foi: " + result + " e é par. Você perdeu!");
} else if (numUsuario % 2 == 0 && result % 2 != 0 && numMaquina % 2 == 0) {
    document.write("Seu número: " + numUsuario + "<br>");
    document.write("Número da Máquina: " + numMaquina + "<br>");
    document.write("O resultado da soma foi: " + result + " e é impar. Houve empate!");
} else if (numUsuario % 2 != 0 && result % 2 != 0 && numMaquina % 2 == 0) {
    document.write("Seu número: " + numUsuario + "<br>");
    document.write("Número da Máquina: " + numMaquina + "<br>");
    document.write("O resultado da soma foi: " + result + " e é ímpar. Você ganhou!");
} else if (numUsuario % 2 == 0 && result % 2 != 0 && numMaquina % 2 != 0) {
    document.write("Seu número: " + numUsuario + "<br>");
    document.write("Número da Máquina: " + numMaquina + "<br>");
    document.write("O resultado da soma foi: " + result + " e é ímpar. Você perdeu!");
} else if (numUsuario % 2 == 0 && result % 2 != 0 && numMaquina % 2 == 0) {
    document.write("Seu número: " + numUsuario + "<br>");
    document.write("Número da Máquina: " + numMaquina + "<br>");
    document.write("O resultado da soma foi: " + result + " e é par. Houve empate!");
}
