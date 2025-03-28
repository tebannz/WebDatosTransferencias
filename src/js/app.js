function mostrarDatos(id) {
  const seccion = document.getElementById(id);
  const texto = document.getElementById("texto" + capitalize(id)).innerText;

  // Mostrar sección
  seccion.style.display = "block";

  // Copiar al portapapeles
  copiarTexto(texto);

  // Mostrar mensaje
  const mensaje = document.getElementById("mensajeCopiado");
  mensaje.style.display = "block";
  setTimeout(() => (mensaje.style.display = "none"), 2000);
}

function copiarTexto(texto) {
  const input = document.createElement("textarea");
  input.value = texto;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
