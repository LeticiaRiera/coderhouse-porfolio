// SIMULADOR PARA REALIZAR PRESUPUESTOS DE PÁGINAS WEB. Al hacer clic en una imagen (pregunta 1) muestra las siguiente 

$("#resumen").hide();

for (let index = 0; index < TIPOWEB.length; index+=4){
    $("#preguntaUno").append(`<div class="row" id="fila1${TIPOWEB[index].id}"></div><hr>`);
    $(`#fila1${TIPOWEB[index].id}`).append(componente1(TIPOWEB[index]));
    $(`#fila1${TIPOWEB[index].id}`).append(componente1(TIPOWEB[index+1]));
    $(`#fila1${TIPOWEB[index].id}`).append(componente1(TIPOWEB[index+2]));
    $(`#fila1${TIPOWEB[index].id}`).append(componente1(TIPOWEB[index+3]));
}

$('button[id^="pregunta"]').click((e) => {

    let respuestaUno = e.target.id.substr(8).toUpperCase();
    $("#resumen").html(`<h2>Resumen presupuesto</h2> <br>
    <b>Tipo de web:</b> ${respuestaUno}`);
    $("#resumen").fadeIn(2000);


})

function componente1 (pregunta1){
    return `
            <div class="col-md-3">
                <div class="project text-center">
                    <img class="img__tiposweb" src="${pregunta1.avatar}">
                    <div>
                        <button id="pregunta${pregunta1.web}" class="btn btn-primary">${pregunta1.web}</button>
                    </div>
                </div>
            </div>
              `; 
}


for (let preg2 = 0; preg2 < DISENO.length; preg2+=4){
    $("#preguntaDos").append(`<div class="row" id="fila2${DISENO[preg2].id}"></div><hr>`);
    $(`#fila2${DISENO[preg2].id}`).append(componente2(DISENO[preg2]));
    $(`#fila2${DISENO[preg2].id}`).append(componente2(DISENO[preg2+1]));
    $(`#fila2${DISENO[preg2].id}`).append(componente2(DISENO[preg2+2]));
    $(`#fila2${DISENO[preg2].id}`).append(componente2(DISENO[preg2+3]));
}

$('button[id^="pregunta2"]').click((e) => {

    let respuestaDos = e.target.id.substr(9).toUpperCase();
    $("#resumen").html(`<h2>Resumen presupuesto</h2> <br>
    <b>Tipo de diseño:</b> ${respuestaDos}`);
    $("#resumen").fadeIn(2000);


})

function componente2 (pregunta2){
    return `
            <div class="col-md-3">
                <div class="project text-center">
                    <img class="img__tiposweb" src="${pregunta2.avatar}">
                    <div>
                        <button id="pregunta2${pregunta2.tipoDiseno}" class="btn btn-primary">${pregunta2.tipoDiseno}</button>
                    </div>
                </div>
            </div>
              `; 
}