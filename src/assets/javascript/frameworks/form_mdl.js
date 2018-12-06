class InputMD {
	constructor(selector){
		this.input = document.querySelectorAll(selector);
		this.bindEvents();
	}

	bindEvents(){
		this.input.forEach( 
			item => item.addEventListener("keyup",this.activeInput)
		);
	}

	activeInput(e){
		if (e.target.value == "") return e.target.classList.remove("non-empty");

		e.target.classList.add("non-empty");
	}
}

(function(){
	new InputMD(".input-form input");
})();