//Funcion que muestra los objetos de un arreglo como pares

let arreglo = [
    {id:1,nombre:'Abrahan'},
    {id:2,nombre:"Alberto"},
    {id:3,nombre:"Jesus"},
    {id:4,nombre:"Luis"}
];

function ArregloObjetos(arr){
let pares = [];
for(idx in arr){
    let elemento = arr[idx];
    pares[idx] = [elemento.id,elemento]
}
return pares;
};

console.log(ArregloObjetos(arreglo));