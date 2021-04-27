window.onload = ()=> {
    console.log(window.innerHeight);
}
email = () => {
window.location.href = "mailto:akram.mohamed.dev@gmail.com";
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

