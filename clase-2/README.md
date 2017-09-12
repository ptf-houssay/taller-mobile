# Clase 2

### En esta clase:

- Repasamos los conceptos de html y css que vimos el primer día
- Estuvimos viendo más en detalle HTML y CSS
- Armamos un formulario con html
- Cambiamos estilos de formulario con css 
- Vimos cómo funciona el "modelo de caja" de css (se puede ver más [acá](http://cssreference.io/box-model/))
- Y nos quedo pendiente agregarle algo de JS (javascript) para poder "juntar" los datos que ingrese el usuario

##### Ejemplo:
Así quedo nuestra página al agregar el formulario:

```html
<html>
  <head>
    <link rel="stylesheet" href="nombreDeMiCSS.css">
  </head>
  <body>
    <form id="mi-form">
      <label for="nombre">Nombre: </label><input id="nombre" name="nombre" type="text"><br>
      <label for="mail">Mail: </label><input id="mail" name="mail" type="email"><br>
      <label for="gato">Gato </label><input id="gato" value="gato" name="animal" type="radio">
      <label for="perro">Perro </label><input id="perro" value="perro" name="animal" type="radio"><br>
      <input id="boton" type="button" value="Enviar"><br>
    </form>
  </body>
</html>
```

##### Slides - Presentación:
Las slides las pueden ver haciendo click [acá](https://ptf-houssay.github.io/taller-mobile/clase-2/slides-segundo-encuentro.html)

##### Más recursos
Referencia muy completas sobre HTML y CSS:
- [htmlreference.io](http://htmlreference.io)
- [cssreference.io](http://cssreference.io)

##### Contacto

Les dejo nuevamente el [link](http://bit.ly/slack-ptf-houssay) para que puedan ingresar a slack aqullos que todavía no lo hicieron, ya que ahí vamos a poder estar un contacto mas directo para dudas. La idea es que se unan al "channel" de phonegapp para eso tienen que hacer click en donde dice "Channels" y buscar phonegap y elegir "Join Channel"

También pueden enviar mensajes directos haciendo lo mismo pero con la opción "Direct Messages"

Como siempre me se pueden contactar mandando un mail a juan.cuiule@bue.edu.ar