const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


let time = 3600
let countDOWNel = document.querySelector('.time')

setInterval(updateCountdown, 1000)


function updateCountdown() {

  const minet = Math.floor(time / 60)
  let second = time % 60
  second = second < 10 ? "0" + second : second
  countDOWNel.innerHTML =`${minet}:${second}`
  time--
}