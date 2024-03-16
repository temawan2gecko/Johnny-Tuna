// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';

const btnDropdown = document.querySelector('.nav-header__dropdown');
const contentDropdown = document.querySelector('.dropdown-content');
btnDropdown.addEventListener('click', () => {
    if (contentDropdown.classList.contains('show')) {
        contentDropdown.classList.remove('show')
    } else {
        contentDropdown.classList.add('show')
    }
})

let swiper = new Swiper(".swiper", {
    modules: [ Navigation ],
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    speed: 1200,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 5000,
      },
});

const filter = document.querySelector('.fiter-rolls__list');
const items = document.querySelectorAll('.content-rolls__item');
const activeItems = document.querySelectorAll('.fiter-rolls__item');
console.log(activeItems)
filter.addEventListener('click', (e) => {
    let filterClass = e.target.dataset.id
    activeItems.forEach(item => {
        item.classList.remove('active')
        if (item.classList.contains(filterClass)) {
            item.classList.add('active')
        }
    })
    items.forEach((item) => {
        item.classList.remove('hide')
        if (!item.classList.contains(filterClass)) {
            item.classList.add('hide')
        }
    })
})




