// El menú queda visible sin JavaScript. Lo colapsamos solo en mobile.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobileQuery = window.matchMedia('(max-width: 700px)');

function setMenuOpen(isOpen) {
  navigation.hidden = mobileQuery.matches && !isOpen;
  menuButton.setAttribute('aria-expanded', String(isOpen));
}

function syncNavigation() {
  menuButton.hidden = !mobileQuery.matches;
  setMenuOpen(false);
}

menuButton.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a') && mobileQuery.matches) {
    setMenuOpen(false);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileQuery.matches && !navigation.hidden) {
    setMenuOpen(false);
    menuButton.focus();
  }
});

mobileQuery.addEventListener('change', syncNavigation);
syncNavigation();

// Un único observer. El contenido siempre es visible, incluso si JS falla.
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

if (!motionQuery.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('[data-reveal]').forEach((element) => {
    observer.observe(element);
  });

  motionQuery.addEventListener('change', (event) => {
    if (event.matches) {
      observer.disconnect();
    }
  });
}
