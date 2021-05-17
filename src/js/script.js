$(function(){
   'use strict';

   // burger menu
   $(".burger").click(function(event) {
      event.preventDefault();
      $(this).toggleClass("burger--active");
      $("body").toggleClass("body-lock");
      $(".menu").toggleClass("menu--active");
      $(".header").toggleClass("header--active");
   });

   // sliders
   $('.customize__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
   });

   $(".inspiration__slider").slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      rows: 2,
      arrows: true,
      prevArrow:
         "<button aria-label='arrow-left' class='inspiration__slider-arrow inspiration__arrow-left'> <img aria-hidden='true' alt='' class='a-left control-c prev slick-prev' src='./img/arrow-left.svg'> </button>",
      nextArrow:
         "<button aria-label='arrow-right' class='inspiration__slider-arrow inspiration__arrow-right'> <img aria-hidden='true' alt='' class='a-right control-c next slick-next' src='./img/arrow-right.svg'> </button>",
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 4,
            },
         },
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 3,
            },
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 2,
               rows: 1,
            },
         },
      ],
   });

   $(".preview__slider").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow:
         "<button aria-label='arrow-left' class='preview__slider-arrow preview__arrow-left'> <img aria-hidden='true' alt='' class='a-left control-c prev slick-prev' src='./img/arrow-rectleft.svg'> </button>",
      nextArrow:
         "<button aria-label='arrow-right' class='preview__slider-arrow preview__arrow-right'> <img aria-hidden='true' alt='' class='a-right control-c next slick-next' src='./img/arrow-rectright.svg'> </button>",
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 3,
            },
         },
         {
            breakpoint: 900,
            settings: {
               slidesToShow: 2,
            },
         },
      ],
   });

   // tile border animation
   let prevTile = $('.customize__tile-color:first-child');
   $('.customize__tile-color').click(function(event) {
      $(this).css("border", "1px solid #000");
      $(prevTile).css("border", "none");
      prevTile = this;
   });

   //  buttons price 'mat' calculate
   let curCount = Number($(".customize__count-number").text());
   let curPrice = Number($(".customize__price-total").text().slice(0, -1));
   let startMatPrice = 75;

   $(".customize__count-minus").click(() => {
      if (curCount > 1) {
         curCount--;
         curPrice -= startMatPrice;
      }
      $(".customize__count-number").text(curCount);
      $(".customize__price-total").text(curPrice + "$");
   });
   $(".customize__count-plus").click(() => {
      curCount++;
      curPrice += startMatPrice;
      $(".customize__count-number").text(curCount);
      $(".customize__price-total").text(curPrice + "$");
   });

   // tabs
   $(".tabs-triggers__item").click(function(event){
      event.preventDefault();

      $(".tabs-triggers__item").removeClass("tabs-triggers__item--active");
      $(".tabs-content__item").removeClass("tabs-content__item--active");

      $(this).addClass("tabs-triggers__item--active");
      $("#" + $(this).attr("aria-describedby")).addClass("tabs-content__item--active");
   });

   // smoothScroll
   function smoothScroll() {
      const navBarLink = $(".menu__link");
      const navHeight = $('.header').outerHeight();

      navBarLink.click((event) => {
         event.preventDefault();
         const target = event.target;
         const data = target.dataset.scrollto;

         $(".burger").click();

         const elementOffset = $(data).offset().top;
         window.scroll(0, elementOffset - navHeight);
      });
   }
   smoothScroll();

   // hover nav-bar links
   function hoverNavBarLinks() {
      const navBar = $(".header");

      const navHeight = navBar.outerHeight();
      const navBarLinks = document.querySelectorAll(".menu__link");

      $(window).scroll(function () {
         const windowTop = $(window).scrollTop();

         // === hover nav-menu link by scrolling ===
         for (let index = 0; index < navBarLinks.length; ++index) {
            const data = navBarLinks[index].dataset.scrollto;
            const elementOffset = $(data).offset().top;
            const elementHeight = $(data).outerHeight();

            if (windowTop + navHeight + 1 > elementOffset && elementOffset + elementHeight - navHeight - 1 > windowTop) {
               $(navBarLinks[index]).addClass("menu__link--active");
            } else {
               $(navBarLinks[index]).removeClass("menu__link--active");
            }
         }
         // === /hover nav-menu link by scrolling ===
      });
   }
   hoverNavBarLinks();
});
