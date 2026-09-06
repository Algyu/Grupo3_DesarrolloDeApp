function pipeline(...transformaciones) {
    return function(valor) {
        let resultado = valor;

        for (const transformacion of transformaciones) {
            resultado = transformacion(resultado);
        }

        return resultado;
    };
}

const duplicar = n => n * 2;
const sumarDiez = n => n + 10;
const cuadrado = n => n ** 2;

const operacion1 = pipeline(duplicar, sumarDiez, cuadrado);

console.log("primer pipeline:");
console.log(operacion1(5));

const operacion2 = pipeline(sumarDiez, duplicar);

console.log("segundo pipeline:");
console.log(operacion2(5));