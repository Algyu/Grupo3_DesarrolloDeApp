const estudiantes = [
    { nombre: "Andrea", nota: 17 },
    { nombre: "Carlos", nota: 11 },
    { nombre: "Lucía", nota: 19 },
    { nombre: "Mateo", nota: 8 },
    { nombre: "Valeria", nota: 14 }
];

// nombres
const nombres = estudiantes.map(estudiante => estudiante.nombre);
console.log("Nombres de los estudiantes:");
console.log(nombres);

// estudiantes aprobados
const aprobados = estudiantes.filter(estudiante => estudiante.nota >= 13);
console.log("Estudiantes aprobados:");
console.log(aprobados);

// buscar a Lucia
const lucia = estudiantes.find(estudiante => estudiante.nombre === "Lucía");
console.log("Estudiante buscada:");
console.log(lucia);

//calcular el promedio
const suma = estudiantes.reduce((total, estudiante) => total + estudiante.nota, 0);
const promedio = suma / estudiantes.length;
console.log("Promedio general:");
console.log(promedio);

// contar desaprobados
const desaprobados = estudiantes.filter(estudiante => estudiante.nota < 13);
console.log("Cantidad de desaprobados:");
console.log(desaprobados.length);

// agregar el estado a cada estudiante
const estudiantesConEstado = estudiantes.map(estudiante => ({
    ...estudiante,
    estado: estudiante.nota >= 13 ? "Aprobado" : "Desaprobado"
}));

console.log("Estudiantes con estado:");
console.log(estudiantesConEstado);