const arrUsuarios = [];

class Usuario{
    constructor(id, nombre, apellido, usuario){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
    }
}


function menu(){

    alert('Bienvenido a Moda NR');
    let opcion;

    while(opcion != 4){

        opcion = parseInt(prompt(`Ingrese la opcion deseada
                                        1- Agregar usuario
                                        2- Eliminar usuario
                                        3- Mostrar usuario/s
                                        4- Salir`));
        
        switch(opcion){

            case 1:
                agregarUsuario();
                break;
            case 2:
                eliminarUsuario();
                break;
            case 3:
                mostrarUsuarios();
                break;
        }

    }
}
function solicitarEmail(){
    let ingreseEmail = prompt("Ingrese su Email");
    console.log("Su mail es: " + ingreseEmail);
    return ingreseEmail;
}


function agregarUsuario(){
    const nombre = prompt('Ingrese el nombre');
    const apellido = prompt('Ingresar el apellido');
    const nombreUsuario = prompt('Ingresar nombre de usuario');

    let objeto = {};
    if(arrUsuarios.length === 0){
        objeto = new Usuario( 0, nombre, apellido, nombreUsuario);
    }else{
        const id = arrUsuarios[arrUsuarios.length - 1].id + 1;
        objeto = new Usuario(id, nombre, apellido, nombreUsuario);
    }
    arrUsuarios.push(objeto);
    alert('Agregaste un usuario correctamente');
}

function eliminarUsuario(){
    const idUsuario = parseInt(prompt('Ingresa el id de usuario a eliminar'));

    const usuarioEncontrado = arrUsuarios.findIndex( (usuario) => {
        return usuario.id === idUsuario;
    });

    if(usuarioEncontrado === -1){
        alert('No existe el usuario con id' + idUsuario)
    }


    arrUsuarios.splice(usuarioEncontrado, 1);
    alert('Se elimino el usuario correctamente');

}

function mostrarUsuarios(){
    let msg = '';
    if(arrUsuarios.length > 0){
        arrUsuarios.forEach( (usuario) => {
            msg += `${usuario.nombre} ${usuario.apellido}, nombre de usuario: ${usuario.usuario}\n`
        });
        alert(msg);
    }else{
        alert('No hay usuarios agregados');
    }
}
menu();
solicitarEmail();
