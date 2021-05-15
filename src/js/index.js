import noUiSlider from 'nouislider';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/scss/bootstrap.scss';
import 'nouislider/dist/nouislider.css';
import '../styles/style.scss';

const sliderAmount = document.getElementById('slider-amount');
const sliderDays = document.getElementById('slider-days');

noUiSlider.create(sliderAmount, {
    start: 10,
    connect: [true, false],
    range: {
        'min': 0,
        'max': 100
    }
});

noUiSlider.create(sliderDays, {
    start: 10,
    connect: [true, false],
    range: {
        'min': 0,
        'max': 100
    }
});

const upBtn = document.querySelector('#up-button');

upBtn.addEventListener('click', () => scrollToTop());
window.addEventListener('scroll', () => checkScrollY());


function checkScrollY() {
    const upBtn = document.querySelector('#up-button');

    if (window.scrollY > 200) {
        upBtn.style.opacity = 1;
    } else {
        upBtn.style.opacity = 0;
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}