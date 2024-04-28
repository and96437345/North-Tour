// Initialize Swiper 

  var swiperTours = new Swiper('.tours--swiper', {
    slidesPerView: 1,
    direction: getDirection(),
    navigation: {
      nextEl: '.tours--next',
      prevEl: '.tours--prev',
    },
    breakpoints: {
      768: {
      slidesPerView: 2,
      // spaceBetween: 30
      },
      1024: {
      slidesPerView: 3,
      // spaceBetween: 40
      }
    },
    on: {
      resize: function () {
        swiperTours.changeDirection(getDirection());
      },
    },
  });

  var swiperHotels = new Swiper('.hotels--swiper', {
    slidesPerView: 1,
    direction: getDirection(),
    navigation: {
      nextEl: '.hotels--next',
      prevEl: '.hotels--prev',
    },
    breakpoints: {
      768: {
      slidesPerView: 2,
      // spaceBetween: 30
      },
      1024: {
      slidesPerView: 3,
      // spaceBetween: 40
      }
    },
    on: {
      resize: function () {
        swiperHotels.changeDirection(getDirection());
      },
    },
  });

  var swiperActivities = new Swiper('.activities--swiper', {
    slidesPerView: 1,
    direction: getDirection(),
    navigation: {
      nextEl: '.activities--next',
      prevEl: '.activities--prev',
    },
    breakpoints: {
      768: {
      slidesPerView: 2,
      // spaceBetween: 30
      },
      1024: {
      slidesPerView: 3,
      // spaceBetween: 40
      }
    },
    on: {
      resize: function () {
        swiperActivities.changeDirection(getDirection());
      },
    },
  });

  var swiperArticles = new Swiper('.articles--swiper', {
    slidesPerView: 1,
    direction: getDirection(),
    navigation: {
      nextEl: '.articles--next',
      prevEl: '.articles--prev',
    },
    breakpoints: {
      768: {
      slidesPerView: 2,
      // spaceBetween: 30
      },
      1024: {
      slidesPerView: 3,
      // spaceBetween: 40
      }
    },
    on: {
      resize: function () {
        swiperArticles.changeDirection(getDirection());
      },
    },
  });

  var swiperRegions = new Swiper('.regions--swiper', {
    slidesPerView: 1,
    direction: getDirection(),
    navigation: {
      nextEl: '.regions--next',
      prevEl: '.regions--prev',
    },
    breakpoints: {
      421: {
      slidesPerView: 2,
      // spaceBetween: 40
      },
      768: {
      slidesPerView: 3,
      // spaceBetween: 30
      },
      1024: {
      slidesPerView: 4,
      // spaceBetween: 40
      }
    },
    on: {
      resize: function () {
        swiperRegions.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
  //   var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
    var direction = 'horizontal';

    return direction;
  }

//  Phone mask
  window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.tel'), function(input) {
  var keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+98 ______",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});
});

let burger = document.querySelector('.header__top-burger');
let menu = document.querySelector('.header__menu-list');
let content = document.querySelector('body');
burger.addEventListener('click', () => {
    menu.classList.toggle('burger--active');
    content.classList.toggle('dark');
});
