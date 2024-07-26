

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

//-----------------------------------------------------------------//
const videos = document.querySelectorAll('.main-video-content__content');
let currentVideoIndex = 0;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            switchVideo();
        }
    });
}, { threshold: 0 });

observer.observe(document.querySelector('.main-video-content'));

function switchVideo() {
    videos[currentVideoIndex].classList.remove('active');
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videos[currentVideoIndex].classList.add('active');
}

//----------------------------------------------------------------------------//
const videosBig = document.querySelectorAll('.big-video__content');
let currentVideoBigIndex = 0;

const observerBig = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            switchVideoBig();
        }
    });
}, { threshold: 0 });

observerBig.observe(document.querySelector('.big-video__video'));

function switchVideoBig() {
    videosBig[currentVideoBigIndex].classList.remove('active');
    currentVideoBigIndex = (currentVideoBigIndex + 1) % videosBig.length;
    videosBig[currentVideoBigIndex].classList.add('active');
}

//--------------------------------------------------------------------//
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


//----------------------------------------------------------------//

const swiper = new Swiper('.swiper-container', {

  slidesPerView: 'auto',
  spaceBetween: 12,
  // using "ratio" endpoints
  breakpoints: {

  },
  freeMode:true,
});

const swiperAdvantage = new Swiper('.swiper-advantage', {

    slidesPerView: 'auto',
    spaceBetween: 1,
    // using "ratio" endpoints
    breakpoints: {
  
    },
    freeMode:true,
  });

const swiperResults = new Swiper('.results__slider', {

    slidesPerView: 'auto',
    spaceBetween: 1,

    freeMode:true,
});
//----------------------------------------------------------------//
document.querySelectorAll('.results-slide-before-after').forEach(container => {
    const handleLine = container.querySelector('.handle-line');
    const handleArrow = container.querySelector('.handle-arrow');
    const afterImage = container.querySelector('.results__img-after');

    const minPercentage = 5; // Минимальный процент (10%)
    const maxPercentage = 95; // Максимальный процент (90%)

    let isDragging = false;

    const startDragging = (e) => {
        e.preventDefault(); // Предотвращаем действия по умолчанию, такие как выделение текста
        e.stopPropagation(); // Остановить распространение события
        isDragging = true;
    };

    const stopDragging = (e) => {
        e.preventDefault(); // Предотвращаем действия по умолчанию, такие как выделение текста
        e.stopPropagation(); // Остановить распространение события
        isDragging = false;
    };

    const onMove = (e) => {
        // Предотвращаем действия по умолчанию, такие как выделение текста
        if (!isDragging) return;

        let clientX;
        if (e.type === 'touchmove' || e.type === 'touchstart') {
            clientX = e.touches[0].clientX; // Для сенсорного ввода
        } else {
            clientX = e.clientX; // Для мыши
        }

        const containerRect = container.getBoundingClientRect();
        let offsetX = clientX - containerRect.left;
        let percentage = (offsetX / containerRect.width) * 100;

        if (percentage < minPercentage) percentage = minPercentage;
        if (percentage > maxPercentage) percentage = maxPercentage;

        handleLine.style.left = `${percentage}%`;
        handleArrow.style.left = `${percentage}%`;
        afterImage.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
    };

    handleLine.addEventListener('pointerdown', startDragging);
    handleArrow.addEventListener('pointerdown', startDragging);
    handleLine.addEventListener('touchstart', startDragging);
    handleArrow.addEventListener('touchstart', startDragging);
    
    document.addEventListener('pointerup', stopDragging);
    container.addEventListener('pointerhend', stopDragging);
    document.addEventListener('pointermove', onMove);

});
//-----------------------------------------------------------//

document.addEventListener("DOMContentLoaded", function() {
    var eventCalllback = function(e) {
      var el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+375(__)___-__-__",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
      if (clearVal !== 'false' && e.type === 'blur') {
        if (val.length < matrix.match(/([\_\d])/g).length) {
          e.target.value = '';
          return;
        }
      }
      if (def.length >= val.length) val = def;
      e.target.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
      });
    }
    var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
      for (let ev of ['input', 'blur', 'focus']) {
        elem.addEventListener(ev, eventCalllback);
      }
    }
});