//retornar el nombre de la resolucion dependiendo de su tamaño
function obtenerResolucion(ancho, alto){
    if (ancho >= 7680 && alto >= 4320){
        return "8k";
    }
    else if (ancho >= 3840 && alto >= 2160){
        return "4k";
    }
    else if (ancho >= 1920 && alto >= 1080){
        return "Full HD";
    }
    else if (ancho >= 1280 && alto >= 720){
        return "HD";
    }
    else{
        return false;
    }
}
let resolucion = obtenerResolucion(1100,750);
console.log(resolucion)