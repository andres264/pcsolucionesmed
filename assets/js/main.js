// Función para manejar el desplazamiento suave
document.addEventListener('DOMContentLoaded', function() {
  // Manejar envío de formulario
  const form = document.querySelector('.contact-form');
  if(form) {
    form.addEventListener('submit', function(e) {
      //e.preventDefault();
      alert('¡Gracias por contactarnos! Pronto te responderemos.');
      //form.reset();
    });
  }

  // Manejar clics en enlaces de navegación
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Calcular la posición de desplazamiento para mostrar el título de la sección en la parte superior
        const headerHeight = document.querySelector('header').offsetHeight;
        const sectionTop = targetElement.offsetTop - headerHeight - 40; // 40px de espacio adicional
        
        // Desplazamiento suave
        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth'
        });
      }
    });
  });
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
