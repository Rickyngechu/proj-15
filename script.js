"use strict";
const humb = document.querySelector(".hamburger");
const mobileCont = document.querySelector(".mb-ct");
const mobileNav = document.querySelector(".mobile-nav");

humb.addEventListener("click", function () {
  if (mobileCont.classList.contains("hidden")) {
    humb.src = "/images/icon-close.svg";
  } else {
    humb.src = "/images/icon-hamburger.svg";
  }

  mobileNav.classList.toggle("hide-nav-mobile");
  mobileCont.classList.toggle("hidden");
});
