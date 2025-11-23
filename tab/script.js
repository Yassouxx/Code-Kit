
"use strict";

const tabLinks = document.querySelectorAll(".tab__el a");
const tab = document.querySelector(".tab__el");
const content = document.querySelector(".tab__content");

if(tabLinks){

    for(let tablink of tabLinks){
        tablink.addEventListener("click", tabTrigger);
    }   

}

function tabTrigger(event){
    event.preventDefault();

    const parentTab = event.currentTarget.closest(".tab");

    //permet de pas s'emboruiller si on a pls tab, ça va prendre les infos de la tab la plus proche 
    // dcp dans ce cas, au lieu de document, pour etrre encore plus precis on met prentTab.queryselector 

    const activeLink = document.querySelector(".tab__el--active");
    activeLink.classList.remove("tab__el--active");

    event.currentTarget.parentNode.classList.add("tab__el--active");
    //ppur recup l'evenement de base qui est le click

    const tabActive = document.querySelector(".tab__content--active");
    tabActive.classList.remove("tab__content--active");

    const tabSelectId = event.currentTarget.getAttribute("href");
    const tabSelect = document.querySelector(tabSelectId);
    tabSelect.classList.add("tab__content--active");
}









