import Swiper from 'swiper';

export let swiperInstance, swiperMiniInstance;

export function swiperInit(mainContainer, swiperObject, swiperDirection, swiperPagination, loopValue, prevButton, nextButton) {
  swiperObject = new Swiper(mainContainer, {
    // Optional parameters
    direction: swiperDirection,
    loop: loopValue,
    speed: 600,
    parallax: true,
    autoplay: {
      delay: 7000,
    },
    grabCursor: true,

    // Navigation arrows
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
    pagination: {
      el: swiperPagination,
      type: 'fraction',
      renderFraction(currentClass, totalClass) {
        return '<div class="pagination__item flex-item ' + currentClass + '"></div>' +
          '<div class="pagination__bar flex-item"></div>' +
          '<div class="pagination__item flex-item ' + totalClass + '"></div>';
      },
    },
  })
  swiperInstance = swiperObject;
}

export function swiperMiniInit(mainContainer, swiperObject, swiperDirection, loopValue) {
  swiperObject = new Swiper(mainContainer, {
    // Optional parameters
    direction: swiperDirection,
    loop: loopValue,
    speed: 800,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    parallax: true,
  });
  swiperMiniInstance = swiperObject;
}
