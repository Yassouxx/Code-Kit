"use strict";

const body = document.querySelector("body");
const menuToggle = document.querySelector(".menu__toggle");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu__el a");


if(menuToggle){
    menuToggle.addEventListener("click", menuOpen); 

    for(let menuLink of menuLinks){ 
        menuLink.addEventListener("click", menuOpen);
    }
}

function menuOpen(){ 
    menu.classList.toggle("menu--open");
    body.classList.toggle("no-scroll");
    console.log(body);
}

var currentYear = new Date().getFullYear();
var yearFooter = document.querySelector(".annee");
yearFooter.textContent = currentYear


