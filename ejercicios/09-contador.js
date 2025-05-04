//Realizar contador que cuando presiones un boton este aumente su numero
let conteo = 0; //variable a aumentar

//creo dos variables de tipo constante y le asigno que es igual al numero a aumentar en el html
//y botonIncremento sera igual al boton de incrementar del index.html
const valorContador = document.getElementById('contador');
const botonIncremento = document.getElementById('botonIncrementar');

function incrementar(){
 conteo++;
 valorContador.textContent = conteo ;
 //la funcion se llamara cuando se presione el boton aumentara la variable conteo y se igualara en el html
}

botonIncremento.addEventListener('click',incrementar());
valorContador.textContent = conteo;