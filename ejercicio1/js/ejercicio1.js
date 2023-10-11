

var cadena = prompt("Introduce palabra o frase");
separarPalabras(cadena);


function separarPalabras(cadena) {

    var separarCadena = cadena.split(""); // Separa en subcadenas

    var invertirCadena = separarCadena.reverse(); // Da la vuelta a la subcadema

    var unirCadena = invertirCadena.join(""); // Une nuevamente en cadena las subcadenas

    return console.log(cadena + " -> Pasa A -> " + unirCadena);;
}