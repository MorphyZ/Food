$(document).ready(function () {
    $('.testimonial-slider').slick({
        infinite: true,       // Бесконечный прокрут
        slidesToShow: 1,      // Сколько слайдов показывать за раз
        slidesToScroll: 1,    // Сколько слайдов прокручивать за раз
        dots: false,           // Точки переключения слайдов
        arrows: true,         // Стрелки переключения
        autoplay: true,       // Автоматическое пролистывание
        autoplaySpeed: 6000   // Скорость автопрокрутки (6 секунд)
    });
});

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');
const desktopMenu = document.querySelector('.menu');

// Клонируем пункты меню в мобильное меню один раз
mobileMenu.innerHTML = desktopMenu.outerHTML;

// Открыть меню
burger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
});

// Закрыть при клике на затемнение или пункт
overlay.addEventListener('click', closeMenu);
mobileMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') closeMenu();
});

function closeMenu() {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
}

const learnMoreBtn = document.getElementById('learn-more');
const popup = document.getElementById('popup');
const popupClose = popup.querySelector('.popup-close');

// Открыть попап
learnMoreBtn.addEventListener('click', () => {
  popup.classList.add('active');
});

// Закрыть по кнопке-крестику
popupClose.addEventListener('click', () => {
  popup.classList.remove('active');
});

// Закрыть по клику на фон
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.remove('active');
  }
});