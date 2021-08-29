/*- Utilizar o exercício anterior 
 - verificar se a entrada é um inteiro
 - Enviar um alerta informando que uma string foi enviada
 - Enviar um alerta informando que a string será convertida para número
 - Imprimir os mesmos dados do exercício anterior
 - Posteriormente pedir ao usuário para escolher entre 3 frutas [Laranja, Uva, Pera, Manga] 
 	caso não tenha informa ao usuário de nome (?) que a fruta escolhida não está na lista
*/
var nome = prompt("Digite seu nome:"); 
var n = parseInt(prompt("Olá"+" "+ nome + ". Digite um número:"));
 
		if (Number.isInteger(n)){
    	alert ("O número:..."+n+"...é um número inteiro");
       	}

  		else{
  		alert("Você digitou uma string");
  		n=20
  		alert("A string será convertida para..."+ typeof(n));
  		}
     

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
document.write("O quadrado do número digitado é..:"+ quadrado+"<br/>");


var fruta=prompt ("Escolha uma fruta dentre: Laranja, Uva, Pêra e Manga")

switch(fruta){
	case "Laranja":
  		document.write("Você escolheu a opção Laranja");
  		break;

  		case "Uva":
  		document.write("Você escolheu a opção Uva");
  		break;

  		case "Pêra":
  		document.write("Você escolheu a opção Pêra");
  		break;

  		case "Manga":
  		document.write("Você escolheu a opção Manga");
  		break;

  		default:
  		document.write(nome+",você não escolheu uma opção válida");
  		break;
}