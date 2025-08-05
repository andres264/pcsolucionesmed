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
// Menú hamburguesa funcional para móviles (idéntico a index.html)
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');
  if(menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('open');
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !expanded);
    });
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
    function closeMenuOnOutsideOrScroll(e) {
      if (window.innerWidth <= 768) {
        if (navMenu.classList.contains('open')) {
          if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
          }
        }
      }
    }
    function closeMenuOnScroll() {
      if (window.innerWidth <= 768 && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    }
    document.addEventListener('click', closeMenuOnOutsideOrScroll);
    window.addEventListener('scroll', closeMenuOnScroll);
  }
});
