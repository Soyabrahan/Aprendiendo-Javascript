//Realiza un aglrotimo que devuelva el valor mayor y el valor menor de un arreglo
let arreglo = [-1,0,1,2,3,-5]
function valoresArreglo(arr){
let mayor = arr[0];
let menor = arr[0];
for (numero of arr){
    mayor = numero > mayor ? numero : mayor
    menor = numero < menor ? numero : menor
}
return [menor,mayor];
}

console.log(valoresArreglo(arreglo));