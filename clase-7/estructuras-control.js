// if: si _ entonces ...

var esMayor = false;
var edad = prompt("¿Cuántos años tenes?");

if (edad >= 18) {
  esMayor = true;
  console.log("Es mayor");
} else {
  esMayor = false;
  console.log("No es mayor");
}

// for: para i desde 0 hasta _ hacer ...

var nombres = [
  "Joe",
  "Diego",
  "Valentin",
  "Paula",
  "Di Maria",
  "Julieta",
  "Erica",
  "Mariana",
  "Francisco"
];

for (var i = 0; i < nombre.length; i++) {
  if (nombres[i] === "Di Maria") {
    break;
  }
  console.log("Hola " + nombres[i]);
}

nombres.forEach(function(unNombre) {
  console.log("Hola " + unNombre);
});

// while: mientras _ hacer ...

// while(true) {}
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ¿Qué pasaría con el caso anterior?
