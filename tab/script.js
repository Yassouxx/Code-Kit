
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

    const activeLink = document.querySelector(".tab__el--active");
    activeLink.classList.remove("tab__el--active");

    event.currentTarget.parentNode.classList.add("tab__el--active");

    const tabActive = document.querySelector(".tab__content--active");
    tabActive.classList.remove("tab__content--active");

    const tabSelectId = event.currentTarget.getAttribute("href");
    const tabSelect = document.querySelector(tabSelectId);
    tabSelect.classList.add("tab__content--active");
}









