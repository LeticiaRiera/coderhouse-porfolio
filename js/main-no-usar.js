// SIMULADOR PARA REALIZAR PRESUPUESTOS DE PÁGINAS WEB. Al hacer clic en una imagen (pregunta 1) muestra las siguiente 

class Presupuesto {
    constructor (tipoWeb, cantidadPaginas, diseno){
        this.web = tipoWeb;
        this.paginas = parseInt(cantidadPaginas);
        this.diseno = diseno;
    }

}

// FUNCIÓN PARA CREAR UN NUEVO PRESUPUESTO, TOMA LOS DATOS QUE INGRESA EL USUARIO
function nuevoPresupuesto() {

    let entradaWeb = prompt("¿Qué tipo de web quiere hacer? \n  Institucional - E-commerce - Blog - Web a medida" );
    let entradaPaginas = prompt("¿Cuántas páginas tiene su web? \n 5 - 10 - 100");
    let entradaDiseno = prompt("Que tipo de diseño tendrá? \n Plantilla - A medida - No necesito diseño");

    return new Presupuesto (entradaWeb, entradaPaginas, entradaDiseno);
}


let listaPresupuestos = [];
listaPresupuestos.push(nuevoPresupuesto());

for (let presupuesto of listaPresupuestos){
    console.log(presupuesto);
    
}

