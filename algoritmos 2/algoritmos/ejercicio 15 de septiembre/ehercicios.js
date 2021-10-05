//estructuras de condicion

var dinero = 30;
if (dinero < 50) {
    console.log("compra unas papas");
} else {
    console.log("regresa a tu casa");
}


//ejercicio 2

var croquetas = 35;
if (croquetas > 80) {
    console.log("compra 1 kg");
} else {
    console.log("compra 2 kg");
}

//ejercicio 3

var juguete = 20;
if (juguete < 40) {
    console.log("compra un john cena");
} else {
    console.log("compra un undertaker");
}
//ejercicio 4

var mochila = 75;
if (mochila < 50) {
    console.log("llevate una azul");
} else {
    console.log("llevate una gris");
}

//ejercicio 5
var libreta = 15;
if (libreta > 30) {
    console.log("llevate una libreta y una goma");
} else {
    console.log("llevate ua libreta y un lapiz");

}

//ejercicio 1
var mujer = "aylin";
var edad = "16";
var gato = "manchas";
var accion = "dormir";
var indenpendencia = "pozole";
var sombrero = "bigote";
var lluvia = "sol";



switch (mujer) {
    case "aylin":
        console.log("aylin es su nombre y tienes 16 años");
        break;
}

switch (gato) {
    case "manchas":
        console.log("manchas es un gato que le gusta dormir mucho");
        break;
}



switch (indenpendencia) {
    case "pozole":
        console.log("15 de septiembre dia de comer pozole");
        break;
}

switch (sombrero) {
    case "bigote":
        console.log("ponte el sombrero y el bigote");
        break;
        break;
}

switch (lluvia) {
    case "sol":
        console.log("en el dia sol y en la trade lluvia");
        break;
        break;
}

//ejercicio 3

var vestir = "camisa";
var hombre = "pantalon";
var comida = "tinga";
var postre = "flan";
var fruta = "sandia";
var verdura = "brocoli";
var celular = "tablet";
var computadora = "laptop";
var flores = "girasol"
var jardin = "pasto"

switch (vestir) {
    case "camisa":
        if (hombre == "falda") {
            console.log("no es un hombre");

        } else {
            console.log("es un hombre");
        }
        break;


}

switch (comida) {
    case "tinga":
        if (postre == "pambazo") {
            console.log("no quiero");

        } else {
            console.log("si quiero");
        }
        break;


}

switch (fruta) {
    case "sandia":
        if (verdura == "zanahoria") {
            console.log("otra opccion");

        } else {
            console.log("si quiero");
        }
        break;


}

switch (celular) {
    case "tablet":
        if (computadora == "escritorio") {
            console.log("otra opccion");

        } else {
            console.log("ponte aver videos");
        }
        break;


}


switch (flores) {
    case "girasol":
        if (jardin == "arbol") {
            console.log("desentierra");

        } else {
            console.log("mejor una meceta");
        }
        break;


}