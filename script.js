"use strict";
const humb = document.querySelector(".hamburger");
const mobileCont = document.querySelector(".mb-ct");
const mobileNav = document.querySelector(".mobile-nav");

humb.addEventListener("click", function () {
  const src = this.getAttribute("src");
  console.log("You have clicked me!");
  console.log(src);
  humb.src = "/images/icon-close.svg";

  mobileNav.classList.toggle("hide-nav-mobile");
});
