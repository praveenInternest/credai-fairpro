"use strict";

// Navigation Variables
const navigation = document.getElementById("nav");
const navigationList = document.querySelectorAll("nav li a");
const menu = document.getElementById("menu");

// Nav Hamburger
menu.addEventListener("click", () => {
	navigation.style.setProperty("--childrenNumber", navigation.children.length);

	navigation.classList.toggle("active");
	menu.classList.toggle("active");
});

console.log(navigationList);

navigationList.forEach((i) => {
	i.addEventListener("click", () => {
		navigation.classList.toggle("active");
		menu.classList.toggle("active");
	});
});
