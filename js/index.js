const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const mainSlide = document.querySelector('.main-slide');
const sideBar = document.querySelector('.sidebar');
const numberMainSlideLength = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');
const height = container.clientHeight;

// ----------------->>>> Мой 1-ый вариант

// let numberStyleTopMainSlide = 0;
// let numberStyleTopSideBar = calc(numberMainSlideLength);
// let countAnimate = 0;

// sideBar.style.top = `-${numberStyleTopSideBar}vh`;

// function calc(num) {
//   return (num - 1) * 100;
// }

// upBtn.addEventListener('click', (event) => {
//   console.log('1111111', numberStyleTopMainSlide);
//   if (numberStyleTopMainSlide >= calc(numberMainSlideLength)) {
//     numberStyleTopMainSlide = 0;
//     numberStyleTopSideBar = calc(numberMainSlideLength);
//     countAnimate = 0;
//     console.log('222222', numberStyleTopMainSlide);
//   } else if (numberStyleTopMainSlide >= 0) {
//     countAnimate += 1;
//     numberStyleTopMainSlide += 100;
//     numberStyleTopSideBar -= 100;
//     console.log('333333', numberStyleTopMainSlide);
//   }
//   console.log('444444', numberStyleTopMainSlide);
//   //   mainSlide.style.top = `-${numberStyleTopMainSlide}vh`;
//   //   sideBar.style.top = `-${numberStyleTopSideBar}vh`;
//   sideBar.style.transform = `translateY(${countAnimate * height}px)`;
//   mainSlide.style.transform = `translateY(-${countAnimate * height}px)`;
// });

// downBtn.addEventListener('click', (event) => {
//   if (numberStyleTopMainSlide === 0) {
//     numberStyleTopMainSlide = calc(numberMainSlideLength);
//     numberStyleTopSideBar = 0;
//     countAnimate = numberMainSlideLength - 1;
//   } else if (numberStyleTopMainSlide > 0) {
//     numberStyleTopMainSlide -= 100;
//     numberStyleTopSideBar += 100;
//     countAnimate -= 1;
//   }
//   //   mainSlide.style.top = `-${numberStyleTopMainSlide}vh`;
//   //   sideBar.style.top = `-${numberStyleTopSideBar}vh`;
//   sideBar.style.transform = `translateY(${countAnimate * height}px)`;
//   mainSlide.style.transform = `translateY(-${countAnimate * height}px)`;
// });

// ----------->>>>>>   Мой 2-ой вариант

sideBar.style.top = `-${(numberMainSlideLength - 1) * 100}vh`;
let slideIndex = 0;

upBtn.addEventListener('click', () => {
  changeSlide('up');
});

downBtn.addEventListener('click', () => {
  changeSlide('down');
});

const changeSlide = (direction) => {
  if (direction === 'up') {
    slideIndex++;
    if (slideIndex === numberMainSlideLength) {
      slideIndex = 0;
    }
  } else if (direction === 'down') {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = numberMainSlideLength - 1;
    }
  }
  mainSlide.style.transform = `translateY(-${slideIndex * height}px)`;
  sideBar.style.transform = `translateY(${slideIndex * height}px)`;
};

// -------------->>>>>>  Вариант Владилена

// let activeSlideIndex = 0

// sideBar.style.top = `-${(numberMainSlideLength - 1) * 100}vh`

// upBtn.addEventListener('click',() => {
//     changeSlide('up')
// })

// downBtn.addEventListener('click',() => {
//     changeSlide('down')
// })

// const changeSlide = (direction) => {
// if (direction === 'up') {
//     activeSlideIndex++
//     if (activeSlideIndex === numberMainSlideLength) {
//         activeSlideIndex = 0
//     }
// } else if(direction === 'down') {
//     activeSlideIndex--
//     if (activeSlideIndex < 0) {
//         activeSlideIndex = numberMainSlideLength - 1
//     }
// }

//   sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`;
//   mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;

// }
