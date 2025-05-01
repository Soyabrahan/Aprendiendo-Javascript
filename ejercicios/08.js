//Funcion que muestra los objetos de un arreglo como pares

let arreglo = [
    {id:1,nombre:'Abrahan'},
    {id:2,nombre:"Alberto"},
    {id:3,nombre:"Jesus"},
    {id:4,nombre:"Luis"}
];

function ArregloObjetos(arr){

    for (numero of arr){
        console.log(numero,arr)
    }

};

console.log(ArregloObjetos(arreglo));