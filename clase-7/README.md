# Clase 7

### En esta clase:

- Repaso de algunas cosas de js y estructuras de control

### Variables y tipos de datos

Las declaramos usando la _palabra reservada_ *var*

```javascript
var nombre = "Pepe";
var edad = 38;
var esMayor = true;

var amigos = ["Pablo", "Juan", "Maria", "Camila"];
var dias = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo"
];
```

### Funciones

Las declaramos usando la _palabra reservada_ *function*

```javascript
function saludar(nombre) {
  console.log("Hola " + nombre);
}

function calcularPrecioFinal(precioBase, iva) {
  return precioBase + precioBase * iva;
}
```

### DOM y Eventos

```javascript
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
```

### Estructuras de control

#### if

> si _ entonces ...

```javascript
var esMayor = false;
var edad = prompt("¿Cuántos años tenes?");

if (edad >= 18) {
  esMayor = true;
  console.log("Es mayor");
} else {
  esMayor = false;
  console.log("No es mayor");
}
```

#### for y forEach

> for: para i desde 0 hasta _ hacer ...
> forEach: para cada elemento del array ejecutar la siguiente función
```javascript
var nombres = ["Joe", "Diego", "Valentin", "Paula", "Di Maria","Julieta", "Erica", "Mariana", "Francisco"];

for (var i = 0; i < nombre.length; i++) {
  if (nombres[i] === "Di Maria") {
    // Cuando llega a esta línea corta el ciclo
    break;
  }
  console.log("Hola " + nombres[i]);
}

// No podemos cortaar este tipo de "ciclos"
nombres.forEach(function(unNombre) {
  console.log("Hola " + unNombre);
});
```

#### while

> mientras _ hacer ...

---

### Contacto

Les dejo nuevamente el [link](http://bit.ly/slack-houssay) para que puedan ingresar a slack aqullos que todavía no lo hicieron, ya que ahí vamos a poder estar un contacto mas directo para dudas. La idea es que se unan al "channel" de phonegapp para eso tienen que hacer click en donde dice "Channels" y buscar phonegap y elegir "Join Channel"

También pueden enviar mensajes directos haciendo lo mismo pero con la opción "Direct Messages"

Como siempre me se pueden contactar mandando un mail a juan.cuiule@bue.edu.ar