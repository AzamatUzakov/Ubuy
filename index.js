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
let countDOWNelTWO = document.querySelector('.timers')


let card_btns = document.querySelectorAll('.s')
let visa_master = document.querySelector('.visa')
let arrowBtn = document.querySelector('.arrow')
let topArrow = document.querySelector('.top_arrow')
let arrowBtn_two = document.querySelector('.arrow_two')
let topArrow_two = document.querySelector('.top_arrow_two')
let arrowBtn_three = document.querySelector('.arrow_three')
let topArrow_three = document.querySelector('.top_arrow_three')
let arrowBtn_foor = document.querySelector('.arrow_foor')
let topArrow_foor = document.querySelector('.top_arrow_foor')
let arrowBtn_five = document.querySelector('.arrow_five')
let topArrow_five = document.querySelector('.top_arrow_five')
let firstShowComment = document.querySelector('.first_btn')
let secondShowComment = document.querySelector('.second_btn')








let heightBox = document.querySelector('.one_select')
let twoHeght_box = document.querySelector('.two_select')
let threeHeght_box = document.querySelector('.three_select')
let foorHeght_box = document.querySelector('.foor_select')
let fiveHeght_box = document.querySelector('.five_select')
let firsCommentMainBox = document.querySelector('.first-show_box')
let secondCommentMainBox = document.querySelector('.second-show_box')
console.log(arrowBtn);
//let visa_btn = document.querySelector('.visa')

let cards = {
  visa: "./img/visa.svg",
  master: "img/master.svg",
  amex: "img/amex.svg",
  pay: "img/pay.svg",
  gpay: "img/gpay.svg",
  apple: "img/apple.svg"
}


card_btns.forEach(btn => {
  btn.onclick = () => {
    let color = btn.name


    btn.src = cards[color]
  }
});

firstShowComment.onclick = () => {
  secondCommentMainBox.style.display = "none"
  firsCommentMainBox.style.display = "block"
}


secondShowComment.onclick = () => {
  firsCommentMainBox.style.display = "none"
  secondCommentMainBox.style.display = "block"
}



setInterval(updateCountdown, 1000)


function updateCountdown() {

  const minet = Math.floor(time / 60)
  let second = time % 60
  second = second < 10 ? "0" + second : second
  countDOWNel.innerHTML = `${minet}:${second}`
  countDOWNelTWO.innerHTML = `${minet}:${second}`
  time--
}


arrowBtn.onclick = () => {
  heightBox.style.height = 100 + "%"
  /* arrowBtn.style.display = 'none' */
  arrowBtn.style.display = "none"
  topArrow.style.display = 'block'
  console.log('clic');
}
topArrow.onclick = () => {
  heightBox.style.height = 50 + "px"
  /* arrowBtn.style.display = 'none' */
  arrowBtn.src = "./img/arrow-point-to-right.png"
  console.log('huy');
  arrowBtn.style.display = "block"
  topArrow.style.display = 'none'
}



arrowBtn_two.onclick = () => {
  twoHeght_box.style.height = 100 + "%"
  /* arrowBtn.style.display = 'none' */
  arrowBtn_two.style.display = "none"
  topArrow_two.style.display = 'block'
  console.log('clic');
}

topArrow_two.onclick = () => {
  twoHeght_box.style.height = 50 + "px"
  /* arrowBtn.style.display = 'none' */
  arrowBtn_two.src = "./img/arrow-point-to-right.png"
  console.log('huy');
  arrowBtn_two.style.display = "block"
  topArrow_two.style.display = 'none'
}





arrowBtn_three.onclick = () => {
  threeHeght_box.style.height = 100 + "%"
  /* arrowBtn.style.display = 'none' */
  arrowBtn_three.style.display = "none"
  topArrow_three.style.display = 'block'
  console.log('clic');
}

topArrow_three.onclick = () => {
  threeHeght_box.style.height = 50 + "px"
  /* arrowBtn.style.display = 'none' */
  arrowBtn_three.src = "./img/arrow-point-to-right.png"
  console.log('huy');
  arrowBtn_three.style.display = "block"
  topArrow_three.style.display = 'none'
}




arrowBtn_foor.onclick = () => {
  foorHeght_box.style.height = 100 + "%"
  /* arrowBtn.style.display = 'none' */
  arrowBtn_foor.style.display = "none"
  topArrow_foor.style.display = 'block'
  console.log('clic');
}

topArrow_foor.onclick = () => {
  foorHeght_box.style.height = 50 + "px"
  /* arrowBtn.style.display = 'none' */
  arrowBtn_foor.src = "./img/arrow-point-to-right.png"
  console.log('huy');
  arrowBtn_foor.style.display = "block"
  topArrow_foor.style.display = 'none'
}






arrowBtn_five.onclick = () => {
  fiveHeght_box.style.height = 100 + "%"
  /* arrowBtn.style.display = 'none' */
  arrowBtn_five.style.display = "none"
  topArrow_five.style.display = 'block'
  console.log('clic');
}

topArrow_five.onclick = () => {
  fiveHeght_box.style.height = 50 + "px"
  /* arrowBtn.style.display = 'none' */
  arrowBtn_five.src = "./img/arrow-point-to-right.png"
  console.log('huy');
  arrowBtn_five.style.display = "block"
  topArrow_five.style.display = 'none'
}