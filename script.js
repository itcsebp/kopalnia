document.addEventListener('DOMContentLoaded', function() {
    // Cookies consent
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookies-alert').style.display = 'block';
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Przycisk "Na górę"
        const backToTopButton = document.getElementById('backToTop');
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

    // Gallery modal
    const galleryModal = document.getElementById('galleryModal');
    if (galleryModal) {
        galleryModal.addEventListener('show.bs.modal', function(event) {
            const button = event.relatedTarget;
            const imgSrc = button.getAttribute('data-bs-img');
            const modalImage = document.getElementById('modalImage');
            modalImage.setAttribute('src', imgSrc);
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
            
            contactForm.reset();
        });
    }

    // Inicjalizacja przycisku "Na górę"
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Accept cookies
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookies-alert').style.display = 'none';
}
// Obsługa przycisku "Pokaż więcej opinii"
document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.getElementById('loadMoreOpinions');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Tutaj można dodać kod do ładowania kolejnych opinii
            // np. poprzez AJAX lub pokazanie ukrytych elementów
            alert('W prawdziwej implementacji tutaj zostałby załadowany kolejny zestaw opinii');
        });
    }
	
	
	
/*	// Prosta ochrona przed spamem
if (document.getElementById('email').value.toLowerCase().includes('@gmail.com')) {
    alert("Proszę użyć firmowego adresu email");
    return false;
}*/

// Filtrowanie galerii
document.querySelectorAll('.gallery-filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Usuń active ze wszystkich przycisków
        document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Dodaj active do klikniętego
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        
        // Filtruj zdjęcia
        document.querySelectorAll('.gallery-item').forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

});
