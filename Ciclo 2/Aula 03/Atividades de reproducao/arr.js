



var frutas1=["Uva", "Banana", "Amora", "Melão"]; //var frutas=array()
console.log(`Quantidade do arr: ${frutas1.length} fruta: ${frutas1[0]}`);

var frutas2=["Maçã", "Pêra", "LAranja"];

var todasAsFrutas=frutas1.concat(frutas2);
console.log(frutas1);
console.log(todasAsFrutas);

/*indexOf() procura por um elemento específico no array e retorna a sua posição*/

var retornoIndexOf= todasAsFrutas.indexOf("Amora");
console.log(retornoIndexOf);//2

/*join() JUnta todos os elementos de um array em outra string*/

var stringDeArray=todasAsFrutas.join();
console.log(stringDeArray);


/*push() Insere um novo elemento no final do array*/

var outraLista=["Bola","Peteca"];

var novaLista=outraLista.push("Boneca", "Qualquer brinquedo");
 
 console.log(novaLista);
 console.log(outraLista);
 console.log(outraLista[3]);

/*pop() remove o ultimo elemento da array*/

console.log(outraLista.pop());
console.log(outraLista);

/*reverse() inverte a ordem dos elementos array*/

console.log(outraLista.reverse());


/*shift() remove o primeiro elemento do array*/

var removerPrimeiro=["Fusca", "Variante"];
removerPrimeiro.shift();
console.log(removerPrimeiro);

/* sort() ordena elementos do array*/

var alfa=[4,6,9,2];
alfa.sort();

console.log(alfa);

/*toString() converte array em string e retorna essa string-igual join */
 
 /*unshift Insere novo elemento no inicio do array*/

 alfa.unshift(10);
 console.log(alfa);


 /*splice() corta o array indicado dois paramentos indice e quantos elementos quer remover a partir da posição*/

var f =["Uva", "Banana", "Amora", "Melão"]; 
var idx=f.indexOf("Banana")
console.log(idx);
console.log(f.splice(idx, 2));
console.log(f);

//var r = f.splice();
//console.log(f);


//array de objetos

var dados=[
			{nome:"Marcelo"},//0
			{nome:"Rafael"}//1
				]

//console.log(dados[0].nome)
//console.log(dados[1].nome)

function Pessoa2(nome, sobrenome, idade, doc=[]){
	this.nome=nome;
	this.sobrenome=sobrenome;
	this.idade=idade;
	this.doc= {
		rg:doc[0],
		cpf: doc[1]
	}
}

var pessoa2=new Pessoa2('Raphael',"","",['22', '555']);
//console.log("NOme: "+pessoa2.nome+' '+pessoa2.doc.rg);
console.log(`Nome ${pessoa2.nome} - CPF: ${pessoa2.doc.cpf}`);//mais usada
			
