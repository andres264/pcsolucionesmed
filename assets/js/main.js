// main.js - PC Soluciones
// Puedes agregar aquí scripts para validación de formulario, animaciones, etc.

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  if(form) {
    form.addEventListener('submit', function(e) {
      //e.preventDefault();
      // Aquí puedes agregar lógica para enviar el formulario por AJAX o mostrar un mensaje personalizado
      alert('¡Gracias por contactarnos! Pronto te responderemos.');
      //form.reset();
    });
  }
});
