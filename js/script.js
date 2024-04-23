// <i class="fa-solid fa-xmark"></i>


let menuLogo = document.querySelector('.menu-logo');
let close = document.querySelector('#close');
let menue = document.querySelector('.links-content')

menuLogo.onclick = function () {
menue.style.cssText =`
right:0;
`
}

close.onclick = function () {
menue.style.cssText =`
right: -100%
transition:1s
`
}

let header = document.querySelector('header')

window.onscroll = function () {
if(window.scrollY >= 250){
header.style.cssText = `
position:sticky;
top:0;
left:0;
background:#666;
border-radius:0 0 30px 30px;
transition 0.4s;
`
}else{
header.style.cssText = ` 
position:absolute;

`
}
}
