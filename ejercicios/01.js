//Realizar una funcion que diga cual es mayor entre dos numeros
function esMayor(a,b){
    if(a>b){
        return a + " es mayor que " + b;
    }
    else if(b>a){
        return b + " es mayor que " + a;
    }
    else{
        return a + " es igual que " + b;
    }
}

//Solucion correcta
/* function esMayor(a,b){
    return a > b ? a : b  : " son iguales "
} */

console.log (esMayor(1,2));