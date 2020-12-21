// SIMULADOR PARA REALIZAR PRESUPUESTOS DE PÁGINAS WEB. Al hacer clic en una imagen (pregunta 1) muestra las siguiente 

let primeraPregunta = document.getElementById("preguntaUno");
primeraPregunta.firstElementChild.innerHTML = "¿Qué tipo de web quiere hacer?"


//AGREGAMOS EL NOMBRE DEL PRODUCTO, EN CASO DE CAMBIAR NOMBRE DE ALGUNO HACERLO DESDE ACÁ
let primerProducto = document.getElementById("productoUno");
primerProducto.firstElementChild.innerHTML = "Institucional"

let segundoProducto = document.getElementById("productoDos");
segundoProducto.firstElementChild.innerHTML = "Blog"

let tercerProducto = document.getElementById("productoTres");
tercerProducto.firstElementChild.innerHTML = "E-commerce"

let cuartoProducto = document.getElementById("productoCuatro");
cuartoProducto.firstElementChild.innerHTML = "A medida"




const DATOS = [{
    "id": 1,
    "tipoWeb": "Institucional",
    "paginas": 5,
    "diseno": "Plantilla",
    "precio": 20000,
},
{
    "id": 2,
    "tipoWeb": "Blog",
    "paginas": 100,
    "diseno": "A medida",
    "precio": 60000,

},
{
    "id": 3,
    "tipoWeb": "E-commerce",
    "paginas": 1000,
    "diseno": "Plantilla",
    "precio": 100000,
},
{
    "id": 4,
    "tipoWeb": "Web a medida",
    "paginas": 10,
    "diseno": "A medida",
    "precio": 70000,
}];


class Presupuesto {
    constructor (datos){
        this.id = parseInt(datos.id);
        this.tipoWeb = datos.tipoWeb;
        this.paginas = parseInt(datos.paginas);
        this.diseno = datos.diseno;
        this.precio = parseFloat(datos.precio);
    }

    sumarPrecio(agregado){
        this.precio += agregado;
    }

}



let listaPresupuestos = [];
listaPresupuestos.push(new Presupuesto (DATOS[0]));


    let entradaWeb = prompt("¿Qué tipo de web quiere hacer? \n  Institucional - E-commerce - Blog - Web a medida" );
    // let entradaPaginas = prompt("¿Cuántas páginas tiene su web? \n 5 - 10 - 100");
    // let entradaDiseno = prompt("Que tipo de diseño tendrá? \n Plantilla - A medida - No necesito diseño");



let contenedorPadre = document.getElementById("resultadoPrecio");

for (let presupuesto of listaPresupuestos){

    let precioPresupuesto = document.createElement("h4");
   
    presupuesto.sumarPrecio(400);
    precioPresupuesto.innerHTML = "<b>Presupuesto para web tipo: </b> " + entradaWeb + "<br> <b>Precio:</b> $" + presupuesto.precio;
    contenedorPadre.appendChild(precioPresupuesto);

    
}


 



// FUNCIÓN PARA CREAR UN NUEVO PRESUPUESTO, TOMA LOS DATOS QUE INGRESA EL USUARIO
// function nuevoPresupuesto() {

//     let entradaWeb = prompt("¿Qué tipo de web quiere hacer? \n  Institucional - E-commerce - Blog - Web a medida" );
//     let entradaPaginas = prompt("¿Cuántas páginas tiene su web? \n 5 - 10 - 100");
//     let entradaDiseno = prompt("Que tipo de diseño tendrá? \n Plantilla - A medida - No necesito diseño");

//     return new Presupuesto (entradaWeb, entradaPaginas, entradaDiseno);

    
// }



