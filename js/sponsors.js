/* Patrocinadores: colocar patrocinador1.png ... patrocinador5.png en assets/sponsors/.
   Los nombres institucionales pueden sustituirse en la lista cuando se confirmen. */
(() => {
  'use strict';
  const sponsors = Array.from({length: 9}, (_, i) => ({
    name: `Patrocinador ${i + 1}`,
    image: `assets/sponsors/patrocinador${i + 1}.png`
  }));
  const grid = document.getElementById('sponsors-grid');
  if (!grid) return;
  sponsors.forEach((sponsor) => {
    const card = document.createElement('div');
    card.className = 'sponsor-card';
    const img = document.createElement('img');
    img.src = sponsor.image;
    img.alt = `Logotipo de ${sponsor.name}`;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.addEventListener('error', () => {
      img.remove();
      const placeholder = document.createElement('span');
      placeholder.className = 'sponsor-placeholder';
      placeholder.textContent = `${sponsor.name} — imagen pendiente`;
      card.appendChild(placeholder);
    }, {once: true});
    card.appendChild(img);
    grid.appendChild(card);
  });
})();
