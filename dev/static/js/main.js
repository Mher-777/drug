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
                        autoplay: false,
                    }
                }
            ]
        })
    }
    products()
    const counter = () => {
        const counterPlus = (el, val) => {
            el.val(+val + 1);
        };

        const counterMinus = (el, val) => {
            if (val - 1) {
                el.val(+val - 1);
            }
        };
        $('.counter__btn').each(function () {

            let btn = $(this)
            btn.on('click', function (e) {
                e.preventDefault()
                if ($(this).attr('data-direction') === 'plus') {
                    counterPlus(btn.prev(), btn.prev().val())
                } else {
                    counterMinus(btn.next(), btn.next().val())
                }
            })
        })
    }
    counter()
    $('select').customSelectBox({
        selectboxClass: "select",
        buttonClass: "current",
        arrow: '<svg class="icon icon-arrow-down ">\n' +
            '                    <use xlink:href="static/images/sprite/symbol/sprite.svg#arrow-down"></use>\n' +
            '                  </svg>'
    })
    const documents = () => {
        $('.documents__slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="arrow arrow--hexagon arrow--left"><svg class="icon icon-arrow-left ">\n' +
                '                    <use xlink:href="static/images/sprite/symbol/sprite.svg#arrow-hexagon--left"></use>\n' +
                '                  </svg></button>',
            nextArrow: '<button type="button" class="arrow arrow--hexagon arrow--right"><svg class="icon icon-arrow-right ">\n' +
                '                    <use xlink:href="static/images/sprite/symbol/sprite.svg#arrow-hexagon--right"></use>\n' +
                '                  </svg></button>',
            responsive: [
                {
                    breakpoint: 871,
                    settings: {
                        appendArrows: '.documents__arrows'
                    }
                }
            ]
        })
    }
    documents()
    const review = () => {
        $('.reviews__slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            touchThreshold: 40,
            autoplay: true,
            autoplaySpeed: 1500,
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
                        autoplay: false
                    }
                }
            ]
        })
    }
    review()
    const accordionMenu = () => {
        $('.js-dropdown').on('click', function (e) {
            e.preventDefault()
            $(this).toggleClass('active').next().slideToggle()

        })
    }
    accordionMenu()
    const controlCatalog = () => {
        const btn = $('.js-btn')
        btn.on('click', function (e) {
            e.preventDefault()
            const $this = $(this)
            const data = $this.attr('data-control')
            const content = $('.catalogs__row')
            if(data === 'list') {
                content.removeClass('grid')
                content.addClass('list')
                content.find('.catalog').removeClass('grid')
                content.find('.catalog').addClass('list')
                btn.removeClass('active')
                $this.addClass('active')
            } else {
                content.removeClass('list')
                content.addClass('grid')
                content.find('.catalog').removeClass('list')
                content.find('.catalog').addClass('grid')
                btn.removeClass('active')
                $this.addClass('active')
            }
        })
    }
    controlCatalog()
    const inputCustom = () => {
        $('.js-input-slider').ionRangeSlider({
            skin: "square"
        });

        $('.group-input').on('input', function () {
            console.log()
            if($(this).val().length > 0) {
                $(this).addClass('group-input--no-empty')
            } else {
                $(this).removeClass('group-input--no-empty')
            }
        })
    }
    inputCustom()
    const stars = () => {
        $('.js-stars').rateYo({
            normalFill: "transparent",
            spacing: '3px',
            ratedFill: "#b87e28",
            starSvg: `
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 15 15">
                    <g>
                        <g>
                            <path stroke="#b87e28" d="M13.94 5.553c0-.252-.269-.352-.47-.386l-4.205-.611L7.38.744C7.305.585 7.162.401 6.97.401c-.193 0-.335.184-.41.343L4.673 4.556.47 5.167c-.21.034-.47.134-.47.386 0 .15.11.293.21.402L3.26 8.92l-.72 4.189c-.01.058-.018.109-.018.167 0 .218.11.42.352.42a.708.708 0 0 0 .335-.101l3.762-1.977 3.761 1.977c.1.058.218.1.335.1.243 0 .344-.2.344-.419 0-.058 0-.109-.009-.167l-.72-4.189 3.04-2.965c.11-.109.218-.251.218-.402z"/>
                        </g>
                    </g>
                </svg>
            `
        })
    }
    stars()
    const sliderViewProduct = () => {
        const vertical = $('.product-vertical__slider')
        const horizontal = $('.product-horizontal__slider')
        vertical.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            focusOnSelect: true,
            vertical: true,
            arrows: false,
            asNavFor: '.product-horizontal__slider',

        });
        horizontal.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.product-vertical__slider'
        });

    }
    sliderViewProduct()
    const popup = () => {
        var dataFancybox = $('[data-fancybox]');
        $('.js-popup').on('click', function (e) {
            e.preventDefault()
            const src = $(this).attr('data-src')
            $.fancybox.open({
                src: src,
            })
        })
        dataFancybox.fancybox({
            keyboard: true,
            image: {
                preload: true
            },
            infobar: false,
            clickContent: function clickContent(current, event) {
                return current.type === "image" ? "zoom" : false;
            },
            lang: "ru",
        })
        $.fancybox.defaults.animationEffect = "circular";
        $.fancybox.defaults.animationDuration = 500;
    }
    popup()
    const fileUpload = () => {
        $(".file-upload input[type=file]").change(function () {
            let filename = $(this).val().replace(/.*\\/, "");
            $(this).closest('.file-upload').find('.file-upload__text').html(filename);
        });
    }
    fileUpload()
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
