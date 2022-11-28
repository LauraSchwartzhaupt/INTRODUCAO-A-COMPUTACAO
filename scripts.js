//EXERÍCIO 01 :Crie uma função em JS que recebe um número de tabuada.
// A função deveerá retornar todos os resultados da tabuada passada. 
function tabuadaDo(numero){
    console.log("imprime a tabuada do" + numero);
}
//EXERCÍCIO 02: Crie uma função que recebe dois números e qual operação aritmética deve fazer. 
//Deverá devolver o resultado desta operação com os dois números.
//USANDO SWITCH:
function calcular(oper,n1,n2,){
    var result = 0;

    switch (oper) {
        case "+":
             result = n1 + n2;
            break;
        case "-":
            result = n1 - n2;
            break;
        case "*":
            result = n1 * n2;
            break;
        case "/":
            result = n1 / n2;
            break;
        default:
            return "somente as 4 operações";
    }
    return result;

}
//EXERCÍCIO 03: Crie uma função em JS que recebe um número de tabuada. 
//A função deveerá retornar todos os resultados da tabuada passada.
function tabuadaDo(numero){
    console.log(`Tabuada do ${numero}`);
    console.log('-------------------------------');
    for (i = 0; i <= 10; i++) {
        console.log(i * numero)
        
    }
    //teste de mesa:
    //i=0
    //condicao 0<10
    //resultado = i*numero 0*numero(5)
    //i++
    //numero=5
    //i=9
    //condição 
}
//snippet tipo um atalho para chamar a função pronta você pode criar seus próprios snippet no vs code
//abrir no google como criar snippet no vs code

//EXERCÍCIO 04: Crie uma função que recebe alguns números de telefone e imprima na tela cada número.
 function imprimeFones(fones){
    var phones = '51982257449,51998961483,51981832466';
    var arrPhones = phones.split(',');

    for (i=0; i<arrPhones.length;i++){
        console.log(`fone ${i+1}: ${arrPhones[i]}`)
    }
    console.log(phones);
 }

//EXERCICIO 05: Crie uma função que receba um número binário e retorne o decimal correspondente:
//Fórmula da conversão é (a*(b**p)) Algarismo x Base Elevedo a Posição
//Decompondo o problema :
//01)Pegar um número binário e dividir cada número numa posição do array
//02)Percorrer Cada número do array, ajustar a posição e imprimir na tela
//03)Cada número na posição certa aplica a fórmula
//04)Guardar cada resultado e ir somando a cada resultado elemento do array
//05)Retornar o resultado final

function convertToDecimal(numero){
    //pegar o numero e converter para um array
    //onde cada digito ficará numa posição
    var arrNumero = numero.split("");

    var posicao = arrNumero.length -1;
    var resultDeCadaAlgarismo = 0;
    var resultFinal = 0;
    for (i=0;i<arrNumero.length;i++){
        console.log(`posicao ${i} = ${arrNumero[i]}`);
        console.log(`posicao ${posicao} = ${arrNumero[i]}`);
        //algarismo * base e elevado a posição
        resultDeCadaAlgarismo = (arrNumero[i] * (2**posicao));
        resultFinal = resultFinal + resultDeCadaAlgarismo;
        posicao--;
    }
    return resultFinal;
}
//EXERCÍCIO 06: Converter qualquer número decimal para binário:

function convertToDecimal2(numero,base){
    
    var arrNumero = numero.split("");

    var posicao = arrNumero.length -1;
    var resultDeCadaAlgarismo = 0;
    var resultFinal = 0;
    var numeroNovo = 0;
    for (i=0;i<arrNumero.length;i++){
      console.log (arrNumero[i] + "=" + returnDecimalByHexa(arrNumero[i]));
      if(isNaN(arrNumero[i]))
        numeroNovo = returnDecimalByHexa(arrNumero[i])
     else 
        numeroNovo = arrNumero[i];
     resultDeCadaAlgarismo =(numeroNovo * (base**posicao));
     resultFinal = resultFinal + resultDeCadaAlgarismo;
     posicao--;
    }
    return resultFinal;
}
function returnDecimalByHexa(letra){
    switch (letra){
        case "A":
            return 10;
        case "B":
            return 11;
        case "C":
            return 12;
        case "D":
            return 13;
        default:
            break;
    }

}