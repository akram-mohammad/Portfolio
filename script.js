window.onload = ()=> {
    console.log(window.innerHeight);
}
email = () => {
window.location.href = "mailto:address@mail.com?body=mail+body";
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
