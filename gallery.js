document.addEventListener('DOMContentLoaded', function() {
  // Konfiguracja
  const imageData = [
    { src: 'assets/images/kopalnia/kopalnia1.jpg', category: 'kopalnia', title: 'Kopalnia piasku' },
    { src: 'assets/images/beton/beton1.jpg', category: 'beton', title: 'Wylewanie betonu' },
    { src: 'assets/images/transport1.jpg', category: 'transport', title: 'Transport materiałów' },
    // Nowe zdjęcia dodajesz tylko tutaj
  ];

  // Generuj galerię
  const galleryContainer = document.getElementById('galleryContainer');
  
  imageData.forEach(image => {
    const item = document.createElement('div');
    item.className = `gallery-item ${image.category}`;
    item.innerHTML = `
      <div class="gallery-card">
        <img src="${image.src}" alt="${image.title}" class="gallery-image">
        <div class="gallery-overlay">
          <button class="view-btn" data-src="${image.src}" data-title="${image.title}">
            <i class="fas fa-search-plus"></i>
          </button>
        </div>
      </div>
      <div class="image-caption">${image.title}</div>
    `;
    galleryContainer.appendChild(item);
  });

  // Filtrowanie
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const filter = this.dataset.filter;
      const items = document.querySelectorAll('.gallery-item');
      
      items.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Modal
  const modal = new bootstrap.Modal(document.getElementById('imageModal'));
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.getElementById('modalImage').src = this.dataset.src;
      document.getElementById('modalTitle').textContent = this.dataset.title;
      modal.show();
    });
  });
});