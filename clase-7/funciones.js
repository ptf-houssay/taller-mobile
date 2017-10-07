function saludar(nombre) {
  console.log("Hola " + nombre);
}

/**
 * @param {string} precioBase - El precio base del producto.
 * @param {number} iva - El porcentaje de iva a pagar.
 **/
function calcularPrecioFinal(precioBase, iva) {
  return precioBase + precioBase * iva;
}
