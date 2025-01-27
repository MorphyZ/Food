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