document.write("<span>Esto se agrego con js</span>");

var diaDeLaSemana = new Date().getDay();
document.getElementById("dia").innerHTML = dias[diaDeLaSemana - 1];

var boton = document.getElementById("boton");

boton.addEventListener("click", function() {
  var input = document.getElementById("nombre");
  var valor = input.value;

  if (valor.toLowerCase() === "juan") {
    console.log("Hola Juan");
  } else {
    console.log("No te conozco");
  }
});
