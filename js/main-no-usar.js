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



    // document.getElementById("btnEnviar").onclick = datosEnviados

    // function datosEnviados(evento){
    //     let padre = document.getElementById("contacto")

    //     console.log(padre.children [0].value);
    //     console.log(padre.children [1].value);
    //     console.log(padre.children [2].value);
    //     console.log(padre.children [3].value);

    //     alert('Gracias por escribirnos!')

    // }

//MANEJO DEL EVENTO SUBMIT DEL FORMULARIO
$("#formCotizar").submit(function (infoEvento) { 
    //EVITAMOS LA RESPUESTA POR DEFECTO DEL EVENTO SUBMIT
    infoEvento.preventDefault();
    //OBTENEMOS LOS IMPURT DEL FORMULARIO
    let inputs = $("#formCotizar :input");
    //CREAMOS UN OBJETO LITERAL CON LOS VALORES DE LOS INPUT
    let nuevaCotizacion = {
      "nombre"      : inputs[0].value,
      "apellido"    : inputs[1].value,
      "telefono"    : parseInt(inputs[2].value),
      "email"      : inputs[3].value,
    }
    //AGREGAMOS EL AMIGO AL ARRAY
    DATOSPRESUPUESTOS.push(nuevaCotizacion);
    //CREAMOS UN FILA CON LA INFORMACION DEL NUEVO AMIGO
    $("#contenidoGenerado").prepend(`<h5>Último pedido de presupuesto: ${nuevaCotizacion.nombre}</h5>`);
    $("#miTabla tbody").append(`<tr>
                                  <th>${nuevaCotizacion.nombre}</th>
                                  <th>${nuevaCotizacion.apellido}</th>
                                  <th>${nuevaCotizacion.telefono}</th>
                                  <th>${nuevaCotizacion.email}</th>
                                </tr>`);
  
    //SOLUCIÓN PARA SUMAR TODAS LAS EDADES DE LOS AMIGOS
//     let valorTotal = 0;
//     for (const amigo of DATOSPRESUPUESTOS) {
//       valorTotal += amigo.telefono;
//     }
//     //SALIDA POR CONSOLA
//     console.log("EDADES EN TOTAL "+valorTotal);
   });
  


   --------------------------------------

   
const TIPOWEB = [];



$("#resumen").hide();

$.getJSON("data/tiposWeb.json", (respuesta, estado)=> {
     let TIPOWEB = respuesta;
    console.log({TIPOWEB});
    for (const tiposWeb of TIPOWEB){
        $("#preguntaUno").append(`<div class="col-md-3 float-left">
                                    <div class="project text-center">
                                        <img class="img__tiposweb"  src="${tiposWeb.avatar}"/>
                                    </div>
                                    <button id="pregunta${tiposWeb.web}" class="btn btn-primary">${tiposWeb.web}</button>
                                    </div>`);
     
        $('button[id^="pregunta"]').click((e) => {
            
            let respuestaUno = e.target.id.substr(8);

            $('#resumen').html(`<h2>Resumen presupuesto</h2> <br>
            <b>Tipo de web:</b> ${respuestaUno}`);
            $("#resumen").fadeIn(2000);

            console.log(respuestaUno);
        }
        )  
        $("#preguntaDos").append(`<div class="col-md-3 float-left">
                                    <div class="project text-center">
                                        <img class="img__tiposweb"  src="${tiposWeb.avatar}"/>
                                    </div>
                                    <button id="pregunta${tiposWeb.web}" class="btn btn-primary">${tiposWeb.web}</button>
                                    </div>`);
    }
}
);


// $('button[id^="pregunta"]').click((e) => {

//     let respuestaUno = e.target.id.substr(8).toUpperCase();
//     $("#resumen").html(`<h2>Resumen presupuesto</h2> <br>
//     <b>Tipo de web:</b> ${respuestaUno}`);
//     $("#resumen").fadeIn(2000);

// $("#resumen").hide();

// for (let index = 0; index < TIPOWEB.length; index+=4){
    // $("#preguntaUno").append(`<div class="row" id="fila1${TIPOWEB[index].id}"></div><hr>`);
    // $(`#fila1${TIPOWEB[index].id}`).append(componente1(TIPOWEB[index]));
    // $(`#fila1${TIPOWEB[index].id}`).append(componente1(TIPOWEB[index+1]));
    // $(`#fila1${TIPOWEB[index].id}`).append(componente1(TIPOWEB[index+2]));
    // $(`#fila1${TIPOWEB[index].id}`).append(componente1(TIPOWEB[index+3]));
// }

// $('button[id^="pregunta"]').click((e) => {

//     let respuestaUno = e.target.id.substr(8).toUpperCase();
//     $("#resumen").html(`<h2>Resumen presupuesto</h2> <br>
//     <b>Tipo de web:</b> ${respuestaUno}`);
//     $("#resumen").fadeIn(2000);


// })

// function componente1 (respuesta){
//     return `
//             <div class="col-md-3">
//                 <div class="project text-center">
//                     <img class="img__tiposweb" src="${respuesta.avatar}"/>
//                     <div>
//                         <button id="pregunta${respuesta.web}" class="btn btn-primary">${respuesta.web}</button>
//                     </div>
//                 </div>
//             </div>
//               `; 
// }


// for (let index = 0; index < DISENO.length; index+=4){
//     $("#preguntaDos").append(`<div class="row" id="fila2${DISENO[index].id}"></div><hr>`);
//     $(`#fila2${DISENO[index].id}`).append(componente2(DISENO[index]));
//     $(`#fila2${DISENO[index].id}`).append(componente2(DISENO[index+1]));
//     $(`#fila2${DISENO[index].id}`).append(componente2(DISENO[index+2]));
//     $(`#fila2${DISENO[index].id}`).append(componente2(DISENO[index+3]));
// }

// $('button[id^="pregunta2"]').click((e) => {

//     let respuestaDos = e.target.id.substr(9).toUpperCase();
//     $("#resumen").html(`<h2>Resumen presupuesto</h2> <br>
//     <b>Tipo de diseño:</b> ${respuestaDos}`);
//     $("#resumen").fadeIn(2000);


// })

// function componente2 (pregunta2){
//     return `
//             <div class="col-md-3">
//                 <div class="project text-center">
//                     <img class="img__tiposweb" src="${pregunta2.avatar}">
//                     <div>
//                         <button id="pregunta2${pregunta2.tipoDiseno}" class="btn btn-primary">${pregunta2.tipoDiseno}</button>
//                     </div>
//                 </div>
//             </div>
//               `; 
// }