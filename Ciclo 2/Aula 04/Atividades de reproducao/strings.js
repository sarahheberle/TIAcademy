/*var nome ="Marcelo";
console.log(nome.length);
console.log(nome[0]);*/

//*match () busca dentro de uma string

var palavras="Maçã doce";

//console.log(palavras.match(/D/gi));

//*search

//console.log(palavras.search(/d/gi));

//*replace() MUITO UTILIZADA, pois pode substituir

 /*var str="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem asperiores, cumque fugit labore"+
 "nam molestiae commodi, minima harum, repellat veritatis autem odit molestias. Aut molestias non minima, voluptas consectetur"

 var mudarStr=str.replace(/consectetur/gi, 'Xxxxx');

 console.log(mudarStr);*/

 //*localeCompare() compara, se achar duas strings iguais, retorna zero

 /*var comp1="Comparar";
 var comp2="comparar";

 var c1=comp1.toLowerCase();
 var c2=comp2.toLowerCase();

 //console.log(`Este é o c1:${c1} Este é o c2: ${c2}`)

 var comparacao=c1.localeCompare(c2);
 console.log(comparacao);

 //console.log(comparacao);*/

 //*trim-remove espaçoes de direita e esquerda

 var p='   fpalavra+ ';

var r=p.trim();
 console.log(r)
var s = r.replace(/f/gi,'');
console.log(s); 
sub_a=s.replace('+','')

 //console.log(p.replace(/f/gi,''));
 //console.log(p);

 console.log(`Removido: ${sub_a}`);

 //toLocateString-formatar moeda

 var valor=1.357
 var formatarMoeda=valor.toLocaleString('pt-br', {
 	style:'currency',
 	currency:'BRL'
 })

 console.log(formatarMoeda);