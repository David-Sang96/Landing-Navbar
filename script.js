"use strict";

const openNavbar = document.querySelector(".navbar__open-icon");
const closeNavbar = document.querySelector(".navbar__close-icon");
const navbar = document.querySelector(".navbar__list");
const link = document.querySelectorAll(".navbar__list li a");

const open = () => {
  navbar.style.display = "block";
  closeNavbar.style.display = "block";
};

const close = () => {
  closeNavbar.style.display = "none";
  navbar.style.display = "none";
};
openNavbar.addEventListener("click", open);
closeNavbar.addEventListener("click", close);
link.forEach( e => e.addEventListener("click",close))
