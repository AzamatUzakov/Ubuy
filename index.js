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

let card_btns = document.querySelectorAll('.s') 
let visa_master = document.querySelector('.visa')
//let visa_btn = document.querySelector('.visa')

let cards ={
visa:"./img/visa.svg",
master: "img/master.svg",
amex:"img/amex.svg",
pay:"img/pay.svg",
gpay:"img/gpay.svg",
apple:"img/apple.svg"
}

card_btns.forEach(btn => {
  btn.onclick = ()=>{
let color = btn.name


btn.src =cards[color]
  } 
});


setInterval(updateCountdown, 1000)


function updateCountdown() {

  const minet = Math.floor(time / 60)
  let second = time % 60
  second = second < 10 ? "0" + second : second
  countDOWNel.innerHTML =`${minet}:${second}`
  time--
}

