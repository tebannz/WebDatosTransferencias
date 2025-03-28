function mostrarDatos(id) {
  const seccion = document.getElementById(id);
  const texto = document.getElementById("texto" + capitalize(id)).innerText;

  // Toggle (si ya está visible, ocultar)
  if (seccion.style.display === "block") {
    seccion.style.display = "none";
    return;
  }

  // Ocultar todas las otras secciones
  document
    .querySelectorAll(".datos-banco")
    .forEach((div) => (div.style.display = "none"));

  // Mostrar esta
  seccion.style.display = "block";

  // Copiar al portapapeles
  copiarTexto(texto);

  // Mostrar mensaje de copiado
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
