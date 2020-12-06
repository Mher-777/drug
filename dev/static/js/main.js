function canUseWebp() {
    let elem = document.createElement('canvas');
    if (!!(elem.getContext && elem.getContext('2d'))) {
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }
    return false;
}

window.onload = function () {
    let images = document.querySelectorAll('[data-bg]');
    for (let i = 0; i < images.length; i++) {
        let image = images[i].getAttribute('data-bg');
        images[i].style.backgroundImage = 'url(' + image + ')';
    }

    let isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
    let firefoxVer = isitFirefox ? parseInt(isitFirefox[1]) : 0;

    if (canUseWebp() || firefoxVer >= 65) {
        let imagesWebp = document.querySelectorAll('[data-bg-webp]');
        for (let i = 0; i < imagesWebp.length; i++) {
            let imageWebp = imagesWebp[i].getAttribute('data-bg-webp');
            imagesWebp[i].style.backgroundImage = 'url(' + imageWebp + ')';
        }
    }
};
$(function () {
    svg4everybody({});
    const menu = () => {
        const btn = $('.hamburger')
        const menu = $('.menu')
        btn.on('click', function () {
            $(this).toggleClass('is-active')
            menu.slideToggle()
        })

        function responsiveMenu() {
            const w = $(window).width()
            if (w >= 1000) {
                btn.removeClass('is-active')
                menu.removeAttr('style')
            }
        }

        responsiveMenu()
        $(window).resize(function (e) {
            responsiveMenu()
        });
    }
    menu()
    const products = () => {
        $('.products__slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            touchThreshold: 40,
            autoplay: true,
            autoplaySpeed: 1500,
            pauseOnHover: false,
            sped: 2000,
            prevArrow: '<button type="button" class="arrow arrow--left"><svg class="icon icon-arrow-left ">\n' +
                '                    <use xlink:href="static/images/sprite/symbol/sprite.svg#arrow-left"></use>\n' +
                '                  </svg></button>',
            nextArrow: '<button type="button" class="arrow arrow--right"><svg class="icon icon-arrow-right ">\n' +
                '                    <use xlink:href="static/images/sprite/symbol/sprite.svg#arrow-right"></use>\n' +
                '                  </svg></button>',

            responsive: [
                {
                    breakpoint: 1151,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 1,
                        adaptiveHeight: true,
                    }
                }
            ]
        })
    }
    products()
})
const headerSticky = () => {
    let scrollPrev = 0;
    let header = document.querySelector('.header')
    window.addEventListener('scroll', () => {
        let scrolled = window.scrollY;
        if (scrolled >= 150 && scrolled > scrollPrev) {
            header.style.top = -header.offsetHeight - 50 + 'px';
        } else {
            header.classList.remove('header--sticky')
            header.style.top = 0;
        }
        scrollPrev = scrolled;
    });
}
headerSticky()
