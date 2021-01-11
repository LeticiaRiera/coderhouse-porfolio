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
    let valorTotal = 0;
    for (const amigo of DATOSPRESUPUESTOS) {
      valorTotal += amigo.telefono;
    }
    //SALIDA POR CONSOLA
    console.log("EDADES EN TOTAL "+valorTotal);
  });
  