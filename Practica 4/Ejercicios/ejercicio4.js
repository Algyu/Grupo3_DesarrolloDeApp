const funciones = [
    {
        id: 1,
        pelicula: "Interstellar",
        sala: 1,
        precio: 18,
        disponibles: 12
    },
    {
        id: 2,
        pelicula: "Dune",
        sala: 2,
        precio: 20,
        disponibles: 5
    },
    {
        id: 3,
        pelicula: "Avengers",
        sala: 3,
        precio: 16,
        disponibles: 0
    },
    {
        id: 4,
        pelicula: "Inception",
        sala: 1,
        precio: 18,
        disponibles: 8
    }
];

function buscarFuncion(id) {
    const funcion = funciones.find(funcion => funcion.id === id);

    if (!funcion) {
        throw new Error("La función no existe");
    }

    return funcion;
}

function funcionesDisponibles() {
    return funciones.filter(funcion => funcion.disponibles > 0);
}

function comprarEntradas(id, cantidad) {
    const funcion = buscarFuncion(id);

    cantidad = Number(cantidad);

    if (isNaN(cantidad) || cantidad <= 0) {
        throw new Error("La cantidad de entradas no es válida");
    }

    if (cantidad > funcion.disponibles) {
        throw new Error("No hay suficientes entradas disponibles");
    }

    funcion.disponibles -= cantidad;

    return {
        pelicula: funcion.pelicula,
        cantidad: cantidad,
        total: funcion.precio * cantidad
    };
}

console.log("funciones disponibles:");
console.log(funcionesDisponibles());

console.log("compra válida:");
console.log(comprarEntradas(1, 3));

console.log("compra superior a las disponibles:");
try {
    comprarEntradas(2, 10);
} catch (error) {
    console.log(error.message);
}

console.log("búsqueda de función inexistente:");
try {
    buscarFuncion(10);
} catch (error) {
    console.log(error.message);
}