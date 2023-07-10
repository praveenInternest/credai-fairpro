"use strict";

// Navigation Variables
const navigation = document.getElementById("nav");
const menu = document.getElementById("menu");

// Nav Hamburger
menu.addEventListener("click", () => {
	navigation.style.setProperty("--childrenNumber", navigation.children.length);

	navigation.classList.toggle("active");
	menu.classList.toggle("active");
});
