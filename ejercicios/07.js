//Crear un algoritmo que devuelva  el precio del producto + el impuesto
//impuesto del 15%
function precio(base,impuesto){
    let precio = base +  base * impuesto;
    return precio;
}

console.log(precio(5,0.50));