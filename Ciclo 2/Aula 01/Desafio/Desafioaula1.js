var nome = prompt("Digite seu nome:"); 
var n = parseInt(prompt("Olá"+" "+ nome + ". Digite um número:"));

document.write("Seja bem vindo(a)..: "+ nome + "<br/>");

document.write("Você digitou o número..: "+ n + "<br/>");

var compare= n==n
document.write("O retorno da comparação booleana é..:"+ compare + "<br/>");

var soma= n+n
document.write("A soma dos valores é..:"+ soma +"<br/>");

var subtracao = n-n
document.write("A subtração dos valores é..:"+ subtracao +"<br/>");

var restDivisao= n%n
document.write("O resto da divisão é..:"+ restDivisao +"<br/>");

var quadrado=n*n
document.write("O quadrado do número digitado é..:"+ quadrado);