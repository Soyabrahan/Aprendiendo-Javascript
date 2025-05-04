// crear constructor para usuarios

function crearUsuario(email,name){
    return {
        email,
        name,
        activo : true,
        recuperarClave : function (){
            console.log("recuperando clave.....")
        }
    };
}

console.log (crearUsuario('abrahan@gmail.com','abrahan'));