//constructor
function PresupuestoWeb(tipoWeb , cantPaginas, diseno, metPago, regisUser) 
{
    this.tipoWeb        = tipoWeb;
    this.cantPaginas    = cantPaginas;
    this.diseno         = diseno; 
    this.metPago        = metPago;
    this.regisUser      = regisUser;
}

    // Generar opciones del select para cantidad de páginas
    function opcionesPaginas(){
        let padre = document.getElementById("cantPaginas");
        let inner = "";
        for (const elemento of PAGINAS) {
          inner += `<option value="${elemento}">${elemento}</option>`;
        }
        padre.innerHTML = inner;
      }

      opcionesPaginas();

    // Generar opciones del select para método de pago
    function opcionesPago(){
        let padre = document.getElementById("metPago");
        let inner = "";
        for (const opcinoes of PAGO) {
          inner += `<option value="${opcinoes}">${opcinoes}</option>`;
        }
        padre.innerHTML = inner;
      }

      opcionesPago();

          // Generar opciones del select para registro de usuario
    function opcionesRegistro(){
        let padre = document.getElementById("regisUser");
        let inner = "";
        for (const opcinoes of USUARIO) {
          inner += `<option value="${opcinoes}">${opcinoes}</option>`;
        }
        padre.innerHTML = inner;
      }

      opcionesRegistro();


//cotizar presupuesto
PresupuestoWeb.prototype.cotizarPresupuestoWeb = function () {

    let cantidad =0;
    const base = 10000;

    switch (this.tipoWeb) {
        case '1':
            cantidad = base * 1.05;
            break;
        case '2':
            cantidad = base * 1.20;
            break;
        case '3':
            cantidad = base * 2.35;
            break;
        case '4':
            cantidad = base * 1.95;
            break;
    }

    let pagina =0;
    const base2 = 5000;

    switch (this.cantPaginas) {
        case '5 - 10 páginas':
            pagina = base2 * 1.05;
            break;
        case '20 - 30 páginas':
            pagina = base2 * 1.20;
            break;
        case '50 páginas':
            pagina = base2 * 2.35;
            break;
        case 'Más de 100':
            pagina = base2 * 1.95;
            break;
    }

    let pagos =0;
    const base3 = 1500;

    switch (this.metpago) {
        case 'Si':
            pagos = base3 * 1.15;
            break;
        case 'No':
            pagos = base3 * 0.60;
            break;
    }

    let user =0;
    const base4 = 2500;

    switch (this.regisUser) {
        case 'Si':
            user = base4 * 1.15;
            break;
        case 'No':
            user = base4 * 0.60;
            break;
    }

   if (this.diseno === 'Plantilla') {
    cantidad    *= 1.30;
} else if (this.diseno === 'A medida') {
    cantidad *= 1.50;

   }else {
    cantidad    *= 1.20;

}

return cantidad + pagina + pagos + user;
}




function Interfaz(){}

Interfaz.prototype.mostarMensaje = function(mensaje, diseno) {
  const div = document.createElement("div");

  if (diseno === 'error') {
    div.classList.add('mensaje', 'error');
  } else {
    div.classList.add("mensaje", "correcto");
  }

  div.innerHTML = `${mensaje}`;
  formulario.insertBefore(div, document.querySelector(".form-group"));

  setTimeout(function() {
      document.querySelector('.mensaje').remove();
  }, 800);
};

//imprime resultado de presupuesto
Interfaz.prototype.mostrarResultado = function (presupuestoWeb, total) {
    const resultado = document.getElementById('resultado');
    let tipoWeb;

    switch (presupuestoWeb.tipoWeb) {
        case '1':
            tipoWeb = 'Institucional';            
            break;
        case '2':
            tipoWeb = 'Blog';
            break;
        case '3':
            tipoWeb = 'E-commerce';
            break; 
        case '4':
            tipoWeb = 'A medida';
            break;     
    }

    let cantPaginas;

    switch (presupuestoWeb.cantPaginas) {

        case '5 - 10 páginas':
            cantPaginas = '5 - 10 páginas';            
            break;
        case '20 - 30 páginas':
            cantPaginas = '20 - 30 páginas';
            break;
        case '50 páginas':
            cantPaginas = '50 páginas';
            break; 
        case 'Más de 100':
            cantPaginas = 'Más de 100';
            break;     
    }

    let metPago;
    switch (presupuestoWeb.metPago) {

        case 'Si':
            metPago = 'Si';            
            break;
        case 'No':
            metPago = 'No';
            break; 
    }

    let regisUser;
    switch (presupuestoWeb.regisUser) {

        case 'Si':
            regisUser = 'Si';            
            break;
        case 'No':
            regisUser = 'No';
            break; 
    }

    //crear un div
    const div = document.createElement('div');
    //insertar la información
    div.innerHTML = `
        <p class="header">Detalle presupuesto</p>
        <p class="text-left ml-4"><b>Tipo de web:</b> ${tipoWeb}</p>
        <p class="text-left ml-4"><b>Páginas:</b> ${cantPaginas}</p>
        <p class="text-left ml-4"><b>Diseño:</b> ${presupuestoWeb.diseno}</p>
        <p class="text-left ml-4"><b>Método de pago:</b> ${metPago}</p>
        <p class="text-left ml-4"><b>Login o registro de usuarios:</b> ${regisUser}</p>
        <p class="text-left ml-4"><b>Total:</b> $ ${total}</p>      
    `;
    const spinner = document.querySelector('#cargando img');
    spinner.style.display = 'block';
    
    setTimeout(function(){
        spinner.style.display = 'none';
        resultado.appendChild(div);
    }, 2500);   
    
}

//capturar datos del formulario
const formulario = document.getElementById('cotizar-web');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    //leer el tipo de web seleccionada
    const tipoWeb = document.getElementById('tipoWeb');
    const tipoWebSeleccionada = tipoWeb.options[tipoWeb.selectedIndex].value;

    //leer páginas seleccionadas
    const cantPaginas = document.getElementById("cantPaginas");
    const cantPaginasSeleccionado = cantPaginas.options[cantPaginas.selectedIndex].value; 

    //leer dato del radio Button
    const diseno = document.querySelector('input[name="diseno"]:checked').value;

    //leer método de pago seleccionado
    const metPago = document.getElementById('metPago');
    const metPagoSeleccionado = metPago.options[metPago.selectedIndex].value; 

    //leer método de pago seleccionado
    const regisUser = document.getElementById('regisUser');
    const regisUserSeleccionado = regisUser.options[regisUser.selectedIndex].value; 
    

    const interfaz = new Interfaz();

    if (tipoWebSeleccionada === '' || cantPaginasSeleccionado === '' || diseno === '' || metPagoSeleccionado === '' ||regisUserSeleccionado === '' ) {
        interfaz.mostarMensaje('Faltan Datos, revisa e intenta de nuevo', 'error');
    } else {
        const resultados = document.querySelector('#resultado div');
        if (resultados != null) {
            resultados.remove();
        }

        const presupuestoWeb = new PresupuestoWeb(tipoWebSeleccionada, cantPaginasSeleccionado, diseno, metPagoSeleccionado, regisUserSeleccionado);
        
        //Cotizar el presupuesto web
        const cantidad = presupuestoWeb.cotizarPresupuestoWeb(presupuestoWeb);
        
        //mostrar resultado
        interfaz.mostrarResultado(presupuestoWeb, cantidad);
        interfaz.mostarMensaje('Cotizando', 'correcto');

    }

});