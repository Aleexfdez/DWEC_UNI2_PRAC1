var cadena = prompt("Introduce palabra o frase");

// Devuelve un array resultante de separar la entrada texto según el carácter indicado.  
function separarPalabras(cadena) {

    var cadenaSeparada = cadena.split(" ");
    return cadenaSeparada
}

// Devuelve el texto de entrada con las letras en orden inverso (no diferencia palabras). 
function girarPalabras(cadena) {

    cadenaResultado = " ";
    for (var i = 0; i < cadena.length; i++) {
        cadenaSeparada = cadena[i].split("");
        cadenaGirada = cadenaSeparada.reverse();
        cadenaInvertida = cadenaGirada.join("");
        cadenaResultado += cadenaInvertida + " ";
    }
    return cadenaResultado;
}
console.log(girarPalabras(separarPalabras(cadena)));