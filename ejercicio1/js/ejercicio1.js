var cadena = prompt("Introduce palabra o frase");

function separarPalabras(cadena) {
    
    var cadenaSeparada = cadena.split(" ");
    return cadenaSeparada
}

function girarPalabras(cadena) {

    cadenaResultado = " ";
    for (var i = 0; i < cadena.length; i++) {
       cadenaSeparada = cadena[i].split("");
        cadenaGirada = cadenaSeparada.reverse();
        cadenaInvertida = cadenaGirada.join("");
        cadenaResultado += cadenaInvertida  + " "; 
    }
    return cadenaResultado;
}
console.log(girarPalabras(separarPalabras(cadena)));