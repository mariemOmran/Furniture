let toggle = document.querySelector("nav .container i");
let ulLinks = document.querySelector("nav .container ul:first-of-type");
let search = document.querySelector("ul li a .searching");
let nav = document.querySelector("nav");
let linksLi =  document.querySelectorAll("nav .container ul:first-of-type li a");

// toggle.onclick = clickedLinks();
// search.onclick = clickedSearching();

toggle.onclick =function (){
    if(ulLinks.classList.contains("links")){
        ulLinks.classList.remove("links");
        ulLinks.classList.add("show");
    }else{
        ulLinks.classList.add("links");
        ulLinks.classList.remove("show");
    } 
};
linksLi.forEach(e =>{
    e.addEventListener("click",function(){
        smoothScroll(event);
        if ( ulLinks.classList.contains("show")) {
            ulLinks.classList.add("links");
            ulLinks.classList.remove("show");
        };
    });
});
// window.onscroll = function(){
//     if(window.scrollY >= 30){
//         nav.classList.add("scroll");
//     }else{
//         nav.classList.remove("scroll")
//     }
// }

function colorNav (){
    if(window.scrollY >= 30){
                nav.classList.add("scroll");
            }else{
                nav.classList.remove("scroll")
            }
}
//stars
let star = document.querySelectorAll(".icon-star");

star.forEach((e,i)=> {
    e.onclick = function(){
        e.classList.toggle("color-orange");
    };
});
//botton to up
let bottonToUp = document.querySelector(".button-to-up");
window.onscroll = function(){
    colorNav ();
    if(window.scrollY >= 500 ){
        bottonToUp.classList.add("show-botton")
    }else{
        bottonToUp.classList.remove("show-botton")
    }
};
bottonToUp.onclick = function () {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};

// smooth scroll
function smoothScroll(event){
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    window.scrollTo({
        top: document.querySelector(targetId).offsetTop,
        behavior: "smooth"
    });
};
