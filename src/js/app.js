function mostrarDatos(id) {
  const seccion = document.getElementById(id);
  const texto = document.getElementById("texto" + capitalize(id)).innerText;

  // Toggle visual
  if (seccion.style.display === "block") {
    seccion.style.display = "none";
    return;
  }

  document.querySelectorAll(".datos-banco").forEach((div) => {
    div.style.display = "none";
  });

  seccion.style.display = "block";

  copiarTexto(texto);
  mostrarToast();
  mostrarMensajeFijo(id);
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

// Mostrar notificación tipo toast
function mostrarToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("mostrar");
  setTimeout(() => {
    toast.classList.remove("mostrar");
  }, 2500);
}

// Mostrar mensaje persistente bajo el botón
function mostrarMensajeFijo(id) {
  const todos = document.querySelectorAll(".mensaje-fijo");
  todos.forEach((el) => (el.style.display = "none"));

  const mensaje = document.getElementById("msg" + capitalize(id));
  if (mensaje) mensaje.style.display = "block";
}
