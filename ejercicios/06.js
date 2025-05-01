//Realizar un algoritmo que devuelva solo los numeros positivos de un arreglo
let arreglo=[1,2,3,-1,-2,-3]
function DevolverPositivos(arr){
let contar = 0;
    for (numero of arr){
       if (numero >= 0) {
        contar ++;
       }
    }
    return contar;
}

console.log("cantidad de positivos :",DevolverPositivos(arreglo));