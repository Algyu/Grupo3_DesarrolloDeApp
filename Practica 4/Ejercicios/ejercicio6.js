function registrarParticipante(nombre, edad, correo, tipo = "general") {
    if (nombre.trim() === "") {
        throw new Error("El nombre no puede estar vacío");
    }

    edad = Number(edad);

    if (isNaN(edad) || edad < 18) {
        throw new Error("La edad debe ser mayor o igual a 18");
    }

    if (correo.trim() === "") {
        throw new Error("El correo no puede estar vacío");
    }

    if (tipo !== "general" && tipo !== "estudiante") {
        throw new Error("El tipo no es válido");
    }

    let costo = tipo === "estudiante" ? 30 : 50;

    return {
        nombre: nombre,
        edad: edad,
        correo: correo,
        tipo: tipo,
        costo: costo
    };
}

const participantes = [];

try {
    participantes.push(registrarParticipante("Andrea", 20, "andrea@gmail.com"));
    participantes.push(registrarParticipante("Carlos", 22, "carlos@gmail.com", "estudiante"));
    participantes.push(registrarParticipante("Lucía", 19, "lucia@gmail.com", "estudiante"));
    participantes.push(registrarParticipante("Mateo", 25, "mateo@gmail.com"));
    participantes.push(registrarParticipante("Valeria", 21, "valeria@gmail.com", "estudiante"));
} catch (error) {
    console.log(error.message);
}

console.log("participantes:");
console.log(participantes);

const estudiantes = participantes.filter(participante => participante.tipo === "estudiante");

console.log("participantes estudiantes:");
console.log(estudiantes);

const nombres = estudiantes.map(participante => participante.nombre);

console.log("nombres de estudiantes:");
console.log(nombres);

const totalRecaudado = participantes.reduce((total, participante) => {
    return total + participante.costo;
}, 0);

console.log("total recaudado:");
console.log(totalRecaudado);

const participanteBuscado = participantes.find(
    participante => participante.correo === "lucia@gmail.com"
);

console.log("participante buscado:");
console.log(participanteBuscado);