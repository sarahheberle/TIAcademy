/*

mouseover Ao mover o cursor do mouse dentro do elemento
mouseout Ao mover o cursor para fora do elemento
dblclick Ao efetuar do duplo click rápido sobre o elemento
blur Ao perder o foco do elemento, geralmente associado ao elemeto HTML.
*/
window.onload=function(){


	//alert("alerta");
	const btn1=document.querySelector(".btn-click"); //capturar elemento, # por causa do id, se for classe usa o ponto
	const legP=document.querySelector(".legenda");
	const cxTexto=document.querySelector("#texto");

//click Ao clicar em algum elemento html

	btn1.addEventListener('click', ()=>{  //capturar todos os metodos

		legP.innerHTML+= cxTexto.value; //escrever no elemento de forma dinamica, o + concatena valor anterior
			
	});  

	legP.addEventListener("click", ()=>{

		legP.innerHTML=''; //apagar o conteudo ao clicar no elemento de parágrafo

	})

	//mousemove Ao mover o cursor do maouse acessa(entra) o elemento
	/*legP.addEventListener("mouseout", ()=>{ //quando o ponteiro do mouse acessar, ele vai emitir alguma operação

		alert("teste");


})*/


/*TROCAR TIPO DO ELEMENTO*/


const trocaSenha=document.querySelector("#verSenha");
const cxSenha=document.querySelector("#senha");

trocaSenha.addEventListener('click',()=>{
	if(cxSenha.getAttribute('type') == 'password'){
		cxSenha.setAttribute('type','text')

	}else{
		cxSenha.setAttribute('type','password')
	}
});



// alterar backgound  caixinha de texto

const cxTrocaBg=document.querySelector("#cxTbg");

cxTrocaBg.addEventListener('blur', ()=>{

	cxTrocaBg.setAttribute('class','corBg');
});

//somar valores cx input text

const valor1=document.querySelector("#v1"); //captura caixa de texto
const valor2=document.querySelector('#v2');
const btnSomar=document.querySelector("#soma");
const spResultado=document.querySelector("#resultado");

btnSomar.addEventListener('click', ()=>{
	 var cx1=valor1.value;
	 var cx2=valor2.value;
	 var r=Number(cx1)+Number(cx2);

	 spResultado.innerHTML=r;




})

//evento modal

const btnModal = document.querySelector("#chamarModal");
const janelaM = document.querySelector("#janModal");

btnModal.addEventListener('click',()=>{

	janelaM.setAttribute('class', 'modal');//impede acessar as outras coisas da pagina
})

janelaM.addEventListener('click',()=>{

	janelaM.classList.remove('modal'); //clicar na propria modal para remover
})

}
