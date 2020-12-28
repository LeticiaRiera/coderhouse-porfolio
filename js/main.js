// SIMULADOR PARA REALIZAR PRESUPUESTOS DE PÁGINAS WEB. Al hacer clic en una imagen (pregunta 1) muestra las siguiente 

let primeraPregunta = document.getElementById("preguntaUno");
primeraPregunta.firstElementChild.innerHTML = "¿Qué tipo de web quiere hacer?"


// //AGREGAMOS EL NOMBRE DEL PRODUCTO, EN CASO DE CAMBIAR NOMBRE DE ALGUNO HACERLO DESDE ACÁ
let primerProducto = document.getElementById("productoUno");
primerProducto.firstElementChild.innerHTML = "Institucional"

let segundoProducto = document.getElementById("productoDos");
segundoProducto.firstElementChild.innerHTML = "Blog"

let tercerProducto = document.getElementById("productoTres");
tercerProducto.firstElementChild.innerHTML = "E-commerce"

let cuartoProducto = document.getElementById("productoCuatro");
cuartoProducto.firstElementChild.innerHTML = "A medida"


class Presupuesto {
    constructor (datos){
        this.id = parseInt(datos.id);
        this.tipoWeb = datos.tipoWeb;
        this.paginas = parseInt(datos.paginas);
        this.diseno = datos.diseno;
        this.precio = parseFloat(datos.precio);
    }

    //ESTO LO VOY A USAR PARA SUMAR EL IVA 
    sumarPrecio(agregado){
        this.precio += agregado;
    }

}

    let listaPresupuestos = [];

    let entradaWeb = prompt("¿Qué tipo de web quiere hacer? \n  Institucional - Blog  - E-commerce - Web a medida" );
    // let entradaPaginas = prompt("¿Cuántas páginas tiene su web? \n 5 - 10 - 100");
    // let entradaDiseno = prompt("Que tipo de diseño tendrá? \n Plantilla - A medida - No necesito diseño");

    if (entradaWeb === "Institucional"){
        listaPresupuestos.push(new Presupuesto (DATOS[0]));
        localStorage.setItem("Producto 1", listaPresupuestos[0].id);
        sessionStorage.setItem("Producto 1", listaPresupuestos[0].precio);
        console.log(listaPresupuestos);
    } 
    else if (entradaWeb === "Blog"){
        listaPresupuestos.push(new Presupuesto (DATOS[1]));
        localStorage.setItem("Producto 1", listaPresupuestos[0].id);
        sessionStorage.setItem("Producto 1", listaPresupuestos[0].precio);
        console.log(listaPresupuestos);
    } 
    else if (entradaWeb === "E-commerce"){
        listaPresupuestos.push(new Presupuesto (DATOS[2]));
        localStorage.setItem("Producto 1", listaPresupuestos[0].id);
        sessionStorage.setItem("Producto 1", listaPresupuestos[0].precio);
        console.log(listaPresupuestos);
    } 
    else (entradaWeb === "Web a medida");{
        listaPresupuestos.push(new Presupuesto (DATOS[3]));
        localStorage.setItem("Producto 1", listaPresupuestos[0].id);
        sessionStorage.setItem("Producto 1", listaPresupuestos[0].precio);
        console.log(listaPresupuestos);
    }


    let contenedorPadre = document.getElementById("resultadoPrecio");
        
        

    let precioPresupuesto = document.createElement("h4");
    // presupuesto.sumarPrecio(400); ACÁ VOY A PASAR EL IVA
    precioPresupuesto.innerHTML = "<b>Presupuesto para web tipo: </b> " + entradaWeb + "<br> <b>Precio:</b> $" + listaPresupuestos[0].precio;
    contenedorPadre.appendChild(precioPresupuesto);



    document.getElementById("btnEnviar").onclick = datosEnviados

    function datosEnviados(evento){
        let padre = document.getElementById("contacto")

        console.log(padre.children [0].value);
        console.log(padre.children [1].value);
        console.log(padre.children [2].value);
        console.log(padre.children [3].value);

        alert('Gracias por escribirnos!')

    }

 