const Router = require("./router");
const Inbox = require("./inbox");

let routes = {
	inbox: Inbox
};

document.addEventListener("DOMContentLoaded", () => {
	let content = document.querySelector(".content");
	router = new Router(content, routes);
	router.start();

	let sidebarItems = Array.from(document.querySelectorAll(".sidebar-nav li"));
	sidebarItems.forEach(sidebarItem => {
		sidebarItem.addEventListener("click", () => {
			//innerText sets or gets the text between the start and end tags of the object
			let itemText = sidebarItem.innerText.toLowerCase();
			location.hash = itemText;
		})
	})
})



