/* exercicio 1
const conjunto_de_valores = [4,3,4];
let valores_positivos = [];
let soma_de_valores = 0;
let quantidade_de_valores = 0;

conjunto_de_valores.forEach(valor => {
    
    if(valor >= 0 && valores_positivos.indexOf(valor) != 0){
        valores_positivos.push(valor); 
    }


    soma_de_valores += valor;

    quantidade_de_valores += 1;

});



console.log('os valores positivos são: ' + valores_positivos);
console.log('A media dos valores informados é igual a: ' + (soma_de_valores/quantidade_de_valores).toFixed(2))

*/

/* exercicio 2

let numero_aleatorio = -1;

if(numero_aleatorio % 2 === 0){
    console.log('o numero aleatorio é par')
}else{
    console.log('o numero aleatorio é impar')
}

*/

/* Exercicio 3


let altura_c = 1.5;
let altura_z = 1.1;
let ano = 0;

while(altura_c > altura_z){
    
    altura_c += 0.2
    altura_z += 0.3
    ano += 1;
    console.log('no ano: ' + ano + ' a altura de chico é: ', + altura_c.toFixed(2) + ' e a altura de zé é: ' + altura_z.toFixed(2));
}

console.log('a altura final de chico é: ' + altura_c.toFixed(2) + ' a altura final de zé é: ' + altura_z.toFixed(2));
*/

/* exercicio 4

let lista_votos = [1,1,2,3,4,4,5,5,5,6,6];
let total_votos = 0;
let votos_primeiro = 0;
let votos_segundo = 0;
let votos_terceiro = 0;
let votos_quarto = 0;
let votos_branco = 0;
let votos_nulo = 0;

lista_votos.forEach(voto => {
    
    switch (voto) {
        case 1:
          votos_primeiro += 1;
          break;
        case 2:
          votos_segundo += 1;
          break;
        case 3:
            votos_terceiro += 1;
            break;
        case 4:
            votos_quarto += 1;
            break;
        case 5:
            votos_nulo += 1;
            break;
        case 6:
            votos_branco += 1;
            break;
      }

      total_votos += 1;

});

console.log("os votos do primeiro canditado foi: " + votos_primeiro);
console.log("os votos do segundo canditado foi: " + votos_segundo);
console.log("os votos do terceiro canditado foi: " + votos_terceiro);
console.log("os votos do quarto canditado foi: " + votos_quarto);
console.log("os votos em nulo foi: " + votos_nulo);
console.log("os votos em braco foi: " + votos_branco);
console.log("o total de votos foi: ", total_votos);

*/

/* exercicio 5

let brancos = 0;
let negros = 0;
let asiaticos = 0;
let indigineas = 0;
let nao_informado = 0;

let pessoas = [
    "gustavo",1,"guilherme",1,"gabriel",1,"elvis",2,"joâo",5,
    "kaua",2,"kadu",3,"ana",4,"caua",5,"micael",5,
    "murilo",1,"carlos",2,"irineu",5,"cleiton",4
];


pessoas.forEach(voto => {
    
    switch (voto) {
        case 1:
          brancos += 1;
          break;
        case 2:
          negros += 1;
          break;
        case 3:
            asiaticos += 1;
            break;
        case 4:
            indigineas += 1;
            break;
        case 5:
            nao_informado += 1;
            break;
      }

});

console.log('A quantidade de pessoas brancas são: ' + brancos);
console.log('A quantidade de pessoas negras são: ' + negros);
console.log('A quantidade de pessoas asiaticas são: ' + asiaticos);
console.log('A quantidade de pessoas indigenas são: ' + indigineas);
console.log('A quantidade de pessoas que não informaram sua etinia é: ' + nao_informado);

*/
