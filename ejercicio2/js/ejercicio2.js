const maximo = 99999;
const minimo = 0;
var decimosLoteria = [];
var intentosBuscar = 0;
var coincide = false;

var numero = prompt("Introduce el nº de décimo entre 99999 y 0");
while ((numero > 99999) && (numero < 0)) {
  numero = prompt("El décimo debe de estar entre 0 y 99999, introdúcelo");
}

generarNAleatorios(minimo, maximo, numero);

while (!coincide && intentosBuscar < 999999) {
  const numeroAleatorio = generaAleatorio(0, 99999);
  intentosBuscar++;

  if (decimosLoteria.includes(numeroAleatorio)) {
    coincide = true;
  }
}

if (coincide) {
  alert("Después de " + intentosBuscar + " veces, se encontró una coincidencia");
} else {
  alert("Después de " + intentosBuscar + " veces, NO se encontró una coincidencia");
}

// Genera un número entero aleatorio entre el máximo y el mínimo, ambos inclusive. 
function generaAleatorio(minimo, maximo) {
  return Math.round(Math.random() * (maximo - minimo + 1) + minimo);
}

// Genera un array con tantos números enteros como indique cantidad entre el máximo y el mínimo indicados.
function generarNAleatorios(minimo, maximo, cantidadNumeros) {
  for (var i = 0; i <= cantidadNumeros; i++) {
    decimosLoteria[i] = generaAleatorio(minimo, maximo);
  }
}