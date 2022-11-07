const ticketResumen = document.getElementById("btnResumen");
const ticketBorrar = document.getElementById("btnBorrar");
const ticketValor = document.getElementById("totalDinero");
const ticketPrecio = document.getElementById("inputPrecio");
const opcionDescuento = document.getElementById("selectDto");
const ticketNombre = document.getElementById("inputNombre");
const ticketApellido = document.getElementById("inputApellido");
const ticketEmail = document.getElementById("inputEmail");


let precio = 200;
const dtoEstudiante = 0.8;
const dtoTrainee = 0.5;
const dtoJunior = 0.15;

function calcularDescuento(){
    precio = (precio - descuento) * inputPrecio.value;
}

function tomarPrecio() {

    
    const output = opcionDescuento.value;
    let ticketsCant = precio * inputPrecio.value;
    let descuento = 0;

    if (output === 'Estudiante') {
        descuento = precio * dtoEstudiante; 
        precio = (precio - descuento) * inputPrecio.value;
    }

    if (output === 'Trainee') {
        descuento = precio * dtoTrainee; 
        precio = (precio - descuento) * inputPrecio.value;
    }

    if (output === 'Junior') {
        descuento = precio * dtoJunior; 
        precio = (precio - descuento) * inputPrecio.value;
    }

    ticketValor.innerHTML = `Total a pagar: $ ${precio}`;
    ticketResumen.onclick = null;
}

function borrarInputs() {
    ticketNombre.value = '';
    ticketApellido.value = '';
    ticketEmail.value = '';
    ticketPrecio.value = '';
    opcionDescuento.value = 'Estudiante';
    ticketValor.innerHTML = `Total a pagar: $`;
}

ticketResumen.onclick = tomarPrecio;
ticketBorrar.onclick = borrarInputs;
