function calcularEnvio(peso, tipo = "normal") {
    peso = Number(peso);

    if (isNaN(peso) || peso <= 0) {
        throw new Error("El peso ingresado no es válido");
    }

    let costoBase;

    if (peso <= 2) {
        costoBase = 8;
    } else if (peso <= 5) {
        costoBase = 12;
    } else {
        costoBase = 18;
    }

    let costoFinal = costoBase;

    if (tipo === "express") {
        costoFinal = Number((costoBase * 1.40).toFixed(2));
    }

    return {
        peso: peso,
        tipo: tipo,
        costoBase: costoBase,
        costoFinal: costoFinal
    };
}

console.log("Envío normal:");
console.log(calcularEnvio(1.5));

console.log("Envío express:");
console.log(calcularEnvio(4, "express"));

console.log("Peso inválido:");
try {
    calcularEnvio("hola", "normal");
} catch (error) {
    console.log(error.message);
}