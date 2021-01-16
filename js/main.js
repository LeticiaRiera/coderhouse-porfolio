// SIMULADOR PARA REALIZAR PRESUPUESTOS DE PÁGINAS WEB. Al hacer clic en una imagen (pregunta 1) muestra las siguiente 

// const TIPOWEB = [];

// $.getJSON("data/web.json", (respuesta, estado)=> {
//      let TIPOWEB = respuesta;
//     console.log(TIPOWEB);
//     for (const web of TIPOWEB){
//         $("#preguntaUno").append(`<div class="row" id="fila"><img src="${web.avatar}"</div>`);
//         $("preguntaUno").append




        
//     }
// }
// );




const TIPOWEB = [];

$("#resumen").hide();

$.getJSON("data/web.json", (respuesta, estado)=> {
     let TIPOWEB = respuesta;
    console.log({TIPOWEB});
    for (const web of TIPOWEB){
        $("#preguntaUno").append(`<div class="col-md-3 float-left">
                                    <div class="project text-center">
                                        <img class="img__tiposweb"  src="${web.avatar}"/>
                                    </div>
                                    <button id="pregunta${web.web}" class="btn btn-primary">${web.web}</button>
                                    </div>`);
     
        $('button[id^="pregunta"]').click((e) => {
            
            let respuestaUno = e.target.id.substr(8);

            $('#resumen').html(`<h2>Resumen presupuesto</h2> <br>
            <b>Tipo de web:</b> ${respuestaUno}`);
            $("#resumen").fadeIn(2000);

            console.log(respuestaUno);
        }
        )  



        
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