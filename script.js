// 1. Efecto Fade-in al hacer scroll (Intersection Observer)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Aplicar el observador a cada item de la galería
document.querySelectorAll('.item').forEach(item => {
    observer.observe(item);
});

// 2. Funcionalidad del Pop-up (Lightbox)
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector('.close-lightbox');

document.querySelectorAll('.item img').forEach(image => {
    image.onclick = () => {
        lightbox.style.display = "flex";
        lightboxImg.src = image.src;
        // Usamos el texto del atributo 'alt' de la imagen como descripción
        lightboxCaption.innerHTML = image.alt;
    };
});

// Cerrar al hacer clic en la X o fuera de la imagen
closeBtn.onclick = () => { lightbox.style.display = "none"; };
lightbox.onclick = (e) => {
    if (e.target !== lightboxImg && e.target !== lightboxCaption) {
        lightbox.style.display = "none";
    }
};