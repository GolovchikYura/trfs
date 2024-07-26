
const swiper = new Swiper('.item-jump__slider', {

    slidesPerView: 'auto',
    spaceBetween: 1,
    freeMode:true,
});

//----------------------header бургер----------------------------------/
document.addEventListener("DOMContentLoaded", function() {
    const burgerBtn = document.querySelector(".icon-menu");
    const body = document.body;
    const html = document.documentElement;
    const blurBackground = document.querySelector(".menu-body-blur");

    burgerBtn.addEventListener("click", function() {
        if (!html.classList.contains("menu-open")) {
            blurBackground.classList.add("blur-open");
            burgerBtn.classList.add("button-close");
            html.classList.add("menu-open");
            body.classList.add("lock");
        } else {
            blurBackground.classList.remove("blur-open");
            burgerBtn.classList.remove("button-close");
            html.classList.remove("menu-open");
            body.classList.remove("lock");
        }
    });
    document.addEventListener('click', function(event) {
        var menuBody = document.querySelector('.menu__body');
        var header = document.querySelector('header');
        var menuBlur = document.querySelector('.menu-body-blur');
        var isClickInsideMenuBlur = menuBlur.contains(event.target);
        var isClickInsideMenu = menuBody.contains(event.target);
        var isClickInsideHeader = header.contains(event.target);
      
        if (isClickInsideHeader && isClickInsideMenuBlur) {
            blurBackground.classList.remove("blur-open");
            burgerBtn.classList.remove("button-close");
            html.classList.remove("menu-open");
            body.classList.remove("lock");
        } 
      });
});

//------------------------------------------------------//
document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");
    const menuSocialPosition = document.querySelector(".social__position");
    let lastScrollY = window.scrollY;

    function handleScroll() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 0) {
            // Прокрутка вниз
            header.style.top = "-100px"; // скрываем заголовок (можно настроить значение в зависимости от высоты заголовка)
            if (menuSocialPosition) {
                header.classList.add("show-background");
                menuSocialPosition.classList.add("scrolled-down");
            }
        } else if (currentScrollY === 0) {
            // Достигнут верх страницы или скролл <= -300
            header.style.top = "0"; // показываем заголовок
            if (menuSocialPosition) {
                header.classList.remove("show-background");
                menuSocialPosition.classList.remove("scrolled-down");
            }
        } else if (currentScrollY < lastScrollY) {
            // Прокрутка вверх
            header.style.top = "0"; // показываем заголовок
        }

        lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", function() {
        window.requestAnimationFrame(handleScroll);
    });

});


//----------------------------------------------------//




//---------------------------------------------//

document.addEventListener('DOMContentLoaded', function () {
    function initializeTabs(container) {
        const buttons = container.querySelectorAll('.body-jump-tarifs-button');
        const spans = container.querySelectorAll('.button-jump-body__button span');
        const items = container.querySelectorAll('.items-jump-body__item');

        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                buttons.forEach(btn => btn.classList.remove('active'));
                spans.forEach(span => span.classList.remove('active'));
                items.forEach(item => item.classList.remove('active'));

                button.classList.add('active');
                spans[index].classList.add('active');
                items[index].classList.add('active');
            });
        });

        // Устанавливаем первый таб активным при загрузке страницы
        buttons[0].classList.add('active');
        spans[0].classList.add('active');
        items[0].classList.add('active');
    }

    const tabContainers = document.querySelectorAll('.jump-tarifs__body');
    tabContainers.forEach(container => {
        initializeTabs(container);
    });
});




//------------------------------------------------//