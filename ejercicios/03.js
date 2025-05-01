//Realizar una funcion que devuelva el  valor de un arreglo segun su indice
function valorArreglo(arreglo,indice){
    if(indice => 0 && indice < arreglo.legth){
        return arreglo[indice];
    }
    else{
        return "fuera de rango";
    }
}

console.log(valorArreglo([1,2,3,4,5],0));