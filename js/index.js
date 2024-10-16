const burgerMenu = document.querySelector('.burger-menu')

const body = document.querySelector('.body')

function openBurgerMenu() {
  burgerMenu.classList.remove('menu-closed')
  burgerMenu.classList.add('menu-open')

  body.classList.add('overflow')
}

function closedBurgerMenu() {
  burgerMenu.classList.remove('menu-open')
  burgerMenu.classList.add('menu-closed')

  body.classList.remove('overflow')
}

function navItem() {
  burgerMenu.classList.remove('menu-open')
  burgerMenu.classList.add('menu-closed')

  body.classList.remove('overflow')
}


const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    750: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});