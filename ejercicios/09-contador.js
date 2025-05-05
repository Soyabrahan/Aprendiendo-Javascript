//Realizar contador que cuando presiones un boton este aumente su numero
let conteo = 0; //variable a aumentar

//creo variables de tipo constante y le asigno que es igual al numero a aumentar en el html
//y los const de botones sean igual a los botones del html
const valorContador = document.getElementById('contador');
const botonIncremento = document.getElementById('botonIncrementar');
const botonDescender = document.getElementById('botonDescender');
const botonReiniciar = document.getElementById('botonReiniciar');

function incrementar(){
 conteo++;
 valorContador.textContent = conteo ;
 //la funcion se llamara cuando se presione el boton aumentara la variable conteo y se igualara en el html
}

function reducir(){
    conteo--;
    valorContador.textContent = conteo;
    //Esta funcion se llamara cuando se presione el boton
}

function reiniciar(){
    conteo = 0;
    valorContador.textContent = conteo;
}

botonIncremento.addEventListener('click',incrementar);

botonDescender.addEventListener('click',reducir);

botonReiniciar.addEventListener('click',reiniciar);
