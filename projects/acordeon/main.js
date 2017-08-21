class Acordion {
	constructor(selector, multiple = true) {
		this.accordion = document.querySelector(selector);
		this.bindEvents();
		this.multiple = multiple;
	}

	bindEvents(){
		this.accordion.querySelectorAll(".item header").forEach(itemheaer => {
			itemheaer.addEventListener("click", () => {
				let item = itemheaer.parentNode;
				this.validateMultiple(item);
				item.classList.toggle("active");
			})
		});
	}

	validateMultiple(slectdItem){
		if (this.multiple) return;

		this.accordion.querySelectorAll(".item").forEach(item => {
			if (slectdItem == item) return;
			item.classList.remove("active");
		});
	}
}

(function(){
	new Acordion(".accordion", false);
})();