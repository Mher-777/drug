"use strict";

function canUseWebp() {
  var elem = document.createElement('canvas');

  if (!!(elem.getContext && elem.getContext('2d'))) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
  }

  return false;
}

window.onload = function () {
  var images = document.querySelectorAll('[data-bg]');

  for (var i = 0; i < images.length; i++) {
    var image = images[i].getAttribute('data-bg');
    images[i].style.backgroundImage = 'url(' + image + ')';
  }

  var isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
  var firefoxVer = isitFirefox ? parseInt(isitFirefox[1]) : 0;

  if (canUseWebp() || firefoxVer >= 65) {
    var imagesWebp = document.querySelectorAll('[data-bg-webp]');

    for (var _i = 0; _i < imagesWebp.length; _i++) {
      var imageWebp = imagesWebp[_i].getAttribute('data-bg-webp');

      imagesWebp[_i].style.backgroundImage = 'url(' + imageWebp + ')';
    }
  }
};

$(function () {
  svg4everybody({});

  var menu = function menu() {
    var btn = $('.hamburger');
    var menu = $('.menu');
    btn.on('click', function () {
      $(this).toggleClass('is-active');
      menu.slideToggle();
    });

    function responsiveMenu() {
      var w = $(window).width();

      if (w >= 1000) {
        btn.removeClass('is-active');
        menu.removeAttr('style');
      }
    }

    responsiveMenu();
    $(window).resize(function (e) {
      responsiveMenu();
    });
  };

  menu();

  var products = function products() {
    $('.products__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      touchThreshold: 40,
      autoplay: true,
      autoplaySpeed: 1500,
      pauseOnHover: false,
      sped: 2000,
      prevArrow: '<button type="button" class="arrow arrow--left"><svg class="icon icon-arrow-left ">\n' + '                    <use xlink:href="static/images/sprite/symbol/sprite.svg#arrow-left"></use>\n' + '                  </svg></button>',
      nextArrow: '<button type="button" class="arrow arrow--right"><svg class="icon icon-arrow-right ">\n' + '                    <use xlink:href="static/images/sprite/symbol/sprite.svg#arrow-right"></use>\n' + '                  </svg></button>',
      responsive: [{
        breakpoint: 1151,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true
        }
      }]
    });
  };

  products();

  var counter = function counter() {
    var counterPlus = function counterPlus(el, val) {
      el.val(+val + 1);
    };

    var counterMinus = function counterMinus(el, val) {
      if (val - 1) {
        el.val(+val - 1);
      }
    };

    $('.counter__btn').each(function () {
      var btn = $(this);
      btn.on('click', function (e) {
        e.preventDefault();

        if ($(this).attr('data-direction') === 'plus') {
          counterPlus(btn.prev(), btn.prev().val());
        } else {
          counterMinus(btn.next(), btn.next().val());
        }
      });
    });
  };

  counter();
  $('select').customSelectBox({
    selectboxClass: "select",
    buttonClass: "current",
    arrow: '<svg class="icon icon-arrow-down ">\n' + '                    <use xlink:href="static/images/sprite/symbol/sprite.svg#arrow-down"></use>\n' + '                  </svg>'
  });

  var documents = function documents() {
    $('.documents__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="arrow arrow--hexagon arrow--left"><svg class="icon icon-arrow-left ">\n' + '                    <use xlink:href="static/images/sprite/symbol/sprite.svg#arrow-hexagon--left"></use>\n' + '                  </svg></button>',
      nextArrow: '<button type="button" class="arrow arrow--hexagon arrow--right"><svg class="icon icon-arrow-right ">\n' + '                    <use xlink:href="static/images/sprite/symbol/sprite.svg#arrow-hexagon--right"></use>\n' + '                  </svg></button>',
      responsive: [{
        breakpoint: 871,
        settings: {
          appendArrows: '.documents__arrows'
        }
      }]
    });
  };

  documents();
});

var headerSticky = function headerSticky() {
  var scrollPrev = 0;
  var header = document.querySelector('.header');
  window.addEventListener('scroll', function () {
    var scrolled = window.scrollY;

    if (scrolled >= 150 && scrolled > scrollPrev) {
      header.style.top = -header.offsetHeight - 50 + 'px';
    } else {
      header.classList.remove('header--sticky');
      header.style.top = 0;
    }

    scrollPrev = scrolled;
  });
};

headerSticky();