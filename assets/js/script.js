const navigation = document.getElementById("nav");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
	navigation.style.setProperty("--childrenNumber", navigation.children.length);

	navigation.classList.toggle("active");
	menu.classList.toggle("active");
});
