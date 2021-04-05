window.onload = ()=> {
    console.log(window.innerHeight);
}

let navbar = document.getElementById('navbar');
window.onscroll = () => {
    if(window.pageYOffset>0){
        navbar.classList.add('bg-sec');
    } else {
        navbar.classList.remove('bg-sec');
    }
}
