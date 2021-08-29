
window.onload=function(){



//somar valores cx input text

const valor1=document.querySelector("#v1"); //captura caixa de texto
const valor2=document.querySelector('#v2');
const btnSomar=document.querySelector("#soma");
const rDig=document.querySelector('#resultDigitado')
const spResultado=document.querySelector("#resultado");

btnSomar.addEventListener('click', ()=>{
	 var cx1=valor1.value;
	 var cx2=valor2.value;
	 var cx3=rDig.value;
	 var r=Number(cx1)+Number(cx2);

	 if(cx3==r){
	 	alert('O valor da soma está correto')
	 }else{
	 	alert('O valor da soma está errado')
	 }

})





}//fim
