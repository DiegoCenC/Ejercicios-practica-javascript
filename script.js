//licencia//
function verificarEdad() {
    const edadInput = document.getElementById("edad");
    const edad = parseInt(edadInput.value);

    if (isNaN(edad)) {
        alert("Por favor, ingresa una edad válida.");
    } else if (edad >= 18) {
        mostrarResultado("¡Puedes conducir!");
    } else {
        mostrarResultado("Lo siento, debes tener al menos 18 años para poder conducir.");
    }
}

function mostrarResultado(mensaje) {
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = mensaje;
}

//calificaciones//
function obtenerCalificacion() {
    const notaInput = document.getElementById("nota");
    const nota = parseFloat(notaInput.value);

    if (isNaN(nota) || nota < 0 || nota > 10) {
        alert("Por favor, ingresa una nota válida entre 0 y 10.");
    } else {
        let calificacion;

        if (nota >= 9) {
            calificacion = "Sobresaliente";
        } else if (nota >= 7) {
            calificacion = "Notable";
        } else if (nota >= 6) {
            calificacion = "Bien";
        } else if (nota >= 5) {
            calificacion = "Suficiente";
        } else if (nota >= 3) {
            calificacion = "Insuficiente";
        } else {
            calificacion = "Muy deficiente";
        }

        mostrarCalificacion(calificacion);
    }
}

function mostrarCalificacion(calificacion) {
    const calificacionElement = document.getElementById("calificacion");
    calificacionElement.textContent = "Calificación: " + calificacion;
}

//cadena//
let cadenas = [];

function solicitarCadenas() {
    const cadena = prompt("Ingresa una cadena de texto (o presiona 'cancelar' para salir):");
    
    if (cadena !== null) {
        cadenas.push(cadena);
        solicitarCadenas();
    } else {
        mostrarCadenasConcatenadas();
    }
}

function mostrarCadenasConcatenadas() {
    const resultadoElement = document.getElementById("resultado1");
    const cadenasConcatenadas = cadenas.join("-");
    resultadoElement.textContent = "Cadenas concatenadas: " + cadenasConcatenadas;
}


function calcularLetraDNI() {
    const dniInput = document.getElementById("dni");
    const dni = parseInt(dniInput.value);

    if (isNaN(dni) || dni < 0 || dni > 99999999) {
        alert("Por favor, ingresa un número de DNI válido entre 0 y 99999999.");
        dniInput.value = '';
    } else {
        const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
        const resto = dni % 23;
        const letra = letrasDNI.charAt(resto);

        mostrarResultado(`La letra del DNI ${dni} es: ${letra}`);
        dniInput.value = '';
    }
}

function mostrarResultado(resultado) {
    const resultadoElement = document.getElementById("resultado2");
    resultadoElement.textContent = resultado;
}


