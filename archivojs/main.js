
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

function solicitarNombre() {

    const listaNombres = [];
    let   cantidad     = 1;
    do{
       let entrada = prompt("Ingresar nombre");
       listaNombres.push(entrada.toUpperCase());
       console.log(listaNombres.length);
    }while(listaNombres.length != cantidad)
    const nuevaLista = listaNombres.concat(["LUCAS","MANUEL"]);

    alert(nuevaLista.join("\n"));
}
function solicitarEmail(){
    let ingreseEmail = prompt("Ingrese su Email");
    console.log("Su mail es: " + ingreseEmail);
    return ingreseEmail;
}
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


  function CrearListado()
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
