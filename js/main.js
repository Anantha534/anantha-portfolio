// Site interactions: mobile menu, escape key handling, current year, external link security, image lightbox
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');

if (menuButton && navigation) {
  function toggleMenu(open) {
    const shouldOpen = typeof open === 'boolean' ? open : !navigation.classList.contains('is-open');
    menuButton.setAttribute('aria-expanded', String(shouldOpen));
    menuButton.setAttribute('aria-label', shouldOpen ? 'Close navigation' : 'Open navigation');
    navigation.classList.toggle('is-open', shouldOpen);
    menuButton.classList.toggle('is-active', shouldOpen);
  }

  menuButton.addEventListener('click', () => toggleMenu());

  navigation.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navigation.classList.contains('is-open')) {
      toggleMenu(false);
      menuButton.focus();
    }
  });

  document.addEventListener('click', (e) => {
    if (navigation.classList.contains('is-open') && !navigation.contains(e.target) && !menuButton.contains(e.target)) {
      toggleMenu(false);
    }
  });
}

// Year update
const yearNode = document.getElementById('year');
if (yearNode) yearNode.textContent = new Date().getFullYear();
document.querySelectorAll('.year').forEach(node => {
  node.textContent = new Date().getFullYear();
});

// Interactive Lightbox for Certificate and Project Images
(function initLightbox() {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox-backdrop';
  lightbox.innerHTML = `
    <div class="lightbox-dialog" role="dialog" aria-modal="true" aria-label="Certificate preview">
      <button class="lightbox-close" type="button" aria-label="Close preview">×</button>
      <img class="lightbox-image" src="" alt="Enlarged certificate preview">
      <p class="lightbox-caption"></p>
    </div>
  `;
  document.body.appendChild(lightbox);

  const imgElem = lightbox.querySelector('.lightbox-image');
  const captionElem = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  function openLightbox(src, caption) {
    imgElem.src = src;
    captionElem.textContent = caption || '';
    lightbox.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('is-active');
    document.body.style.overflow = '';
    imgElem.src = '';
  }

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-active')) {
      closeLightbox();
    }
  });

  // Attach to cert preview images and gallery figures
  const inspectableImgs = document.querySelectorAll('.cert-card img, .timeline-img-wrap img, .event-card img, .gallery img, .cert-preview-trigger');
  inspectableImgs.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      const caption = img.alt || img.closest('figure')?.querySelector('figcaption')?.textContent || '';
      openLightbox(img.src, caption);
    });
  });
})();
