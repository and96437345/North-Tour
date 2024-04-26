      var swiper = new Swiper(".activities--swiper", {
        slidesPerView: 1.2,
        spaceBetween: 19,
        centeredSlides: true,
        loop: true,
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        breakpoints: {
          1280: {
            slidesPerView: 1.75,
            // spaceBetween: 40
          },
        },
      });

      var swiperTours = new Swiper(".tours--swiper", {
        slidesPerView: 1,
        direction: getDirection(),
        navigation: {
          nextEl: ".tours--next",
          prevEl: ".tours--prev",
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            // spaceBetween: 30
          },
          1024: {
            slidesPerView: 3,
            // spaceBetween: 40
          },
        },
        on: {
          resize: function () {
            swiperTours.changeDirection(getDirection());
          },
        },
      });

      var swiperRegions = new Swiper(".regions--swiper", {
        slidesPerView: 1,
        direction: getDirection(),
        navigation: {
          nextEl: ".regions--next",
          prevEl: ".regions--prev",
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
          },
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
        var direction = "horizontal";

        return direction;
      }


      new AirDatepicker("#calendar", {
        range: true,
        multipleDatesSeparator: " - ",
      });

      
      let carts = document.querySelectorAll(".detail__schedule-cart");
      carts.forEach((cart) => {
        let button = cart.querySelector(".detail__schedule-cartDropButton");
        let content = cart.querySelector(".detail__schedule-cartContent");
        button.addEventListener("click", () => {
          button.classList.toggle("schedule--activeButton");
          content.classList.toggle("schedule--active");
        });
      });