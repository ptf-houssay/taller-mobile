// script completo
var guardar = document.getElementById("guardar");

function armarObjeto() {
  var formulario = document.getElementById("form").elements;
  var objeto = {
    nombre: formulario.nombre.value,
    mail: formulario.mail.value,
    tipo: formulario.tipo.value,
    gradDer: formulario.der.value,
    gradIzq: formulario.izq.value
  };
  console.log(objeto);
  return objeto;
}

guardar.addEventListener("click", armarObjeto);
