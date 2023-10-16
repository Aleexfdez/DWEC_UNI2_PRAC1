const SIMBOLOS = ["1", "x", "2"];
const QUINIELA = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "];
const EQUIPOS = ["Alavés", "Atl.Madrid", "Villareal", "Barcelona", "Real Madrid", "Getafe", "Espanyol", "Málaga",
    "Sevilla", "Levante", "Valencia", "Betis", "Celta", "Atl Bilbao", "Real Sociedad", "Rayo Vallecano", "Osasuna", "Mallorca", "Cádiz", "Granada"];

//Genera de manera aleatoria un símbolo (1, X o 2).
function generarSimbolo() {
    var simbolo = SIMBOLOS[Math.floor(Math.random() * 3)];
    return simbolo;
}
// Muestra los equipos en una tabla.
function muestraEquipos(EQUIPOS) {

    var tablaEquipos = new Array(EQUIPOS.length);
    for (var i = 1; i < EQUIPOS.length; i++) {

        tablaEquipos[i] = (i) + " -> " + EQUIPOS[i];
    }
    console.table(tablaEquipos);
}

//Rellena la tabla quinielas que se pasa como parámetro con símbolos generados de manera aleatoria.
function generarResultados(QUINIELA) {
    for (var i = 0; i < QUINIELA.length; i++) {
        QUINIELA[i] = new Array(QUINIELA.length);
        for (var j = 0; j < QUINIELA.length; j++) {
            if (i === j) {
                QUINIELA[i][j] = "-";
            } else {
                QUINIELA[i][j] = generarSimbolo();
            }
        }
    }
    console.table(QUINIELA);
}
//Permite generar y consultar las quinielas de una temporada. Es la función principal que se ejecuta al cargarse la página.
function quinielas(EQUIPOS) {

    do {
        var elegir = prompt("OPCIONES: " + "1: Ver Equipos" + " | | " + "2: Ver/Generar Quinielas" + " | | " + "3: Terminar programa");
        switch (elegir) {
            case ("1"):
                muestraEquipos(EQUIPOS);
                break;
            case ("2"):
                generarResultados(QUINIELA);
                break;
        }
    }
    while (elegir != "3");

}

quinielas(EQUIPOS);

//El Bonus Track me fue imposible de hacer :(