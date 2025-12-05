const slides = document.querySelectorAll('.slide');
let indexAtual = 0;

function mostrarSlide(indice) {
    if (indice < 0) {
        indice = slides.length - 1;
    } else if (indice >= slides.length) {
        indice = 0;
    }
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slides[indice].classList.add('active');
    indexAtual = indice;
}

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', function () {
    mostrarSlide(indexAtual - 1);
});

nextBtn.addEventListener('click', function () {
    mostrarSlide(indexAtual + 1);
});

setInterval(function () {
    mostrarSlide(indexAtual + 1);
}, 6000);