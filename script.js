// ASIGNACION 1
// Función para color aleatorio
function getRandomColor() {
    const colors = ["green", "blue", "red"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Seleccionamos todos los h3 con clase "random_color"
const textos = document.querySelectorAll(".random_color");

textos.forEach(function(texto) {
    // Estilo inicial
    texto.style.cursor = "pointer";
    texto.style.transition = "color 0.3s ease";

    // Color inicial
    texto.style.color = getRandomColor();

    // Cambiar color al hacer clic
    texto.addEventListener("click", function() {
        texto.style.color = getRandomColor();
    });
});

// Seleccionar todos los h5
const h5Elements = document.querySelectorAll("h5");

// Agregar evento a cada h5
h5Elements.forEach(h5 => {
  h5.addEventListener("click", function() {
    this.style.color = getRandomColor();
  });
});