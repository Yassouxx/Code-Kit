"use strict";

const body = document.querySelector("body");
const menuToggle = document.querySelector(".menu__toggle");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu__el a");

menu.classList.remove("menu--open");

if(menuToggle){
    //CLICK BTN
    menuToggle.addEventListener("click", menuOpen);

    //click lien
    for(let menuLink of menuLinks){
        menuLink.addEventListener("click", menuOpen);
    }

    //toggle du menu
    function menuOpen(){
        menu.classList.toggle("menu--open");
        document.body.classList.toggle("no-scroll");
        console.log("coucou");
    }
}

    



// var currentYear = new Date().getFullYear();
// var yearFooter = document.querySelector(".annee");
// yearFooter.textContent = currentYear


