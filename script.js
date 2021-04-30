window.onload = () => {
    let splides = document.getElementsByClassName('splide');
    for(splide of splides) {
        new Splide(splide, {
            rewind: true,
            perPage: 3,
            perMove: 1,
            autoplay: true,
            breakpoints: {
                1199: {
                    perPage: 2,
                },
                991: {
                    perPage: 3,
                },
                575: {
                    perPage: 2,
                },
                400: {
                    perPage: 1,
                }
            }
          }).mount();
    }
}

email = () => {
window.location.href = "mailto:akram.mohamed.dev@gmail.com";
}

window.addEventListener('load', windowHandler);
window.addEventListener('resize', windowHandler);

function windowHandler() {
    var header = document.getElementById('header');
    var headerText = header.getElementsByClassName('headerText')[0];
    var headerImg = header.getElementsByClassName('headerImg')[0];
    if(window.innerWidth<1300){
        headerText.classList.remove('col-lg-6');
        headerText.classList.add('col-lg-7');
        headerImg.classList.remove('offset-xl-2');
        headerImg.classList.add('offset-xl-1');
    } else {
        headerText.classList.add('col-lg-6');
        headerText.classList.remove('col-lg-7');
        headerImg.classList.add('offset-xl-2');
        headerImg.classList.remove('offset-xl-1');
    }
}


let navbar = document.getElementById('navbar');
let fadeImg = document.getElementsByClassName('right-fade');
let fadeImgNext = document.getElementsByClassName('right-fade-next');

window.onscroll = () => {
    if(window.pageYOffset>0){
        navbar.classList.add('bg-sec');
    } else {
        navbar.classList.remove('bg-sec');
    }
    if(window.pageYOffset>1640) {
        for(var item of fadeImg) {
            item.classList.add('right-fade-in');
        }
        for(var item of fadeImgNext) {
            item.classList.add('right-fade-in-next');
        }
    }
}

var modals = document.querySelectorAll('[data-modal]');
var node = document.createElement('img');

function openImg(src) {
    node.src = src;
    node.setAttribute('data-modal',"modal-one");
    node.style.width = `300px`;
}

if(window.innerWidth>1200){
    modals.forEach(function(trigger) {
        trigger.addEventListener('click', function(event) {
        event.preventDefault();
        var modal = document.getElementById(trigger.dataset.modal);
        modal.classList.add('open');
        var modalContainer = modal.querySelector('.modal-container');
        modalContainer.appendChild(node);
        var exit = modal.querySelector('.modal-exit');
            exit.addEventListener('click', function(event) {
            event.preventDefault();
            modal.classList.remove('open');
            });
        });
    });
}




