class usuario{

    constructor(nombre, apellido, usuario){
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;

    }
}

function menu(){
    alert(`Bienvenidos a Moda NR`);
    let opcion;
    while(){
        let (opcion !=){
         let opcion = parseInt(pront(`ingrese la opcion deseada
                              1- Agregar usuario
                              2- Modificar usuario
                              3- Eliminar usuario
                              4- Mostrar usuario
                              5- Salir`));    
        switch(opcion){
            case 1:
                agregarUsuario();
                break;
        }

        }
    }

}
function agregarUsuario(){
    

}
/*let ingreseNombre
function solicitarNombre(){
    let cliente;

    let bienvenida;

    bienvenida = cliente + "!!! bienvenido a Moda NR ";

    console.log(bienvenida);
    let ingreseNombre = prompt("Ingresar su nombre");
    console.log("Su nombre es: " + ingreseNombre);
    return ingreseNombre; 
} */
function solicitarEmail(){
    let ingreseEmail = prompt("Ingrese su Email");
    console.log("Su mail es: " + ingreseEmail);
    return ingreseEmail;
}
solicitarEmail();
/*function ropaTemporada(){
let invierno;
let verano;
opciones = parseInt(prompt("1-verano/n2-invierno/n3-Salir"));
while (opciones != "3") {
        switch(opciones) {
            case 1:
                console.log(`invierno`);
                break;

            case 2:
                console.log(`verano`);
                break;

             case 3:
                console.log("Salir");
                break;
    
            default:
                console.log("Ingrese por favor un numero de la lista");
          
}
opciones = parseInt(prompt("1-verano/n2-invierno/n3-Salir"));
}

}

function probarCodigo(){

    let opciones;

    let buzo = 1500, campera = 1100, pantalones = 1300, remeras = 1000, camisas = 1100;

    opciones = parseInt(prompt("Ahora podras ver nuestro catalogo\n1-buzo\n2-campera\n3-pantalones\n4. Salir"));


while (opciones != "4") {
        switch (opciones) {
            case 1:
                console.log(`buzo ${buzo}`);
                break;

            case 2:
                console.log(`camisas ${camisas}`);
                break;

            case 3:
                console.log(`pantalones ${pantalones}`);
                break;
                
            case 4:
                console.log("Salir");
                break;

            default:
                console.log("Ingrese por favor un numero de la lista");
        }
        opciones = parseInt(prompt("1-pantalones\n2-campera\n3-buzo\n4-Salir"));
    }

  }
  */
 class Ropa {
    constructor(id,prenda,stock,precio){
    this.id= id;
    this.prenda= prenda;
    this.stock= stock;
    this.precio= precio;
}
 }
 let ropa1= new Ropa(1,"buzo",12,5000)
 let ropa2= new Ropa(2,"campera",10,8000)
 let ropa3= new Ropa(3,"remera",18,2000)
 let ropa4= new Ropa(4,"pantalon",18,8000)
 let ropa5= new Ropa(5,"short",11,3000)

 let ropa = [ropa1,ropa2,ropa3,ropa4,ropa5]
 
 let carrito = [];

 const mostrarProductos = () => {
    let mensaje = "Elije la ropa que quieras:"
   ropa.forEach(idumentaria => {
        mensaje += `
            Opción ${idumentaria.id}: ${idumentaria.prenda} - Stock: ${idumentaria.stock} - $${idumentaria.precio}`
    })
    mensaje += `
            Opción 0: No comprar nada`
    //Opcion para pasar la opción como la marca (Deconmentar lo de abajo nada mas)
    // let opcion = prompt(mensaje).toLowerCase();

    //Opcion para pasar la opción como id
    let opcion = Number(prompt(mensaje))


    return opcion;
}


let comprar = true;

while (comprar) {
    let opcion = mostrarProductos()
    if (opcion >= 1 && opcion <= 5) {
        let ropaElegido = ropa.find(idumentaria => idumentaria.id === opcion)
        if (carrito.length === 0) {
            ropaElegido.cantidad = 1;
            ropaElegido.stock--;
            carrito.push(ropaElegido)
        } else {
            let ropaEnCarrito = carrito.find(idumentaria => idumentaria.id === opcion)
            if (ropaEnCarrito) {
                ropaEnCarrito.cantidad++;
                ropaEnCarrito.stock--;
                if (ropaEnCarrito.stock === 0) {
                    ropa = ropa.filter(idumentaria => idumentaria.id != opcion)
                }
            } else {
                ropaElegido.cantidad = 1;
                ropaElegido.stock--;
                carrito.push(ropaElegido)

            }
        }
    } else {
        comprar = false;
    }
}

const mostrarTotalCarrito = () => {
    let mensajeCarrito = "";
    if (carrito.length > 0) {
        carrito.forEach(idumentaria => {
            mensajeCarrito += `
                prenda: ${idumentaria.prenda} - Cantidad: ${idumentaria.cantidad} - Total: $${idumentaria.cantidad * idumentaria.precio}
            `
        })
        mensajeCarrito += `Total Carrito: ${carrito.reduce((total,ropa) => total + (ropa.precio * ropa.cantidad),0)}`
        alert(mensajeCarrito)
    } else {
        mensajeCarrito += 'No hay productos en el carrito'
        alert(mensajeCarrito)
    }
}

mostrarTotalCarrito();



 /* function CrearListado()
  {
      
      const ListadoProductos = [];
      ListadoProductos.push(new Producto("buzo", "1000",23));
      ListadoProductos.push(new Producto("campera", "1500",12));
      ListadoProductos.push(new Producto("pantalon", "900",4));
  
    
     ListadoProductos[1].VenderPorCantidad(3) ;
    
      for (const elementoTipoProducto of ListadoProductos)
      {
          elementoTipoProducto.MostrarProducto();
          console.log(elementoTipoProducto.nombre);
          elementoTipoProducto.vendido=false;
           
      }
  
      let cantidadParaComprar=prompt("ingrese cantida");
      cantidadParaComprar =parseInt(cantidadParaComprar );
  
      let productoParaComprar=prompt("Ingrese producto");
      productoParaComprar =productoParaComprar.toUpperCase();
  
      for (const elementoTipoProducto of ListadoProductos)
      {
           if(elementoTipoProducto.nombre == productoParaComprar) 
           {
              elementoTipoProducto.VenderPorCantidad(cantidadParaComprar);
           }    
      }
  }
  
  class Cliente {
  
      constructor(nombre, edad,documento) {
          this.nombre  = nombre.toUpperCase();
          this.edad  = parseFloat(edad);
          this.documento = documento;
      }
      
  
    
      MostrarCliente() {
          console.log("nombre: "+this.nombre +" legajo: "+this.documento) ;
      }
  }
  

  class Producto {

    constructor(nombre, precio,stock) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
        this.stock = stock;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }

    VenderPorCantidad(cantidad) {
        if(cantidad > this.stock )
        {
            console.log("no hay stock");
        }
        else
        {
            this.stock  = this.stock-cantidad;
            this.vendido = true;
        }
       
    }
    MostrarProducto() {
        
        console.log("nombre: "+this.nombre +" precio: "+this.precio) ;
        if(this.vendido==true)
        {
            console.log("Se vendio");
        }
        else
        {
             console.log("No se vendio");
        }
    }

}
*/
