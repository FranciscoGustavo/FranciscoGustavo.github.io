class InputMD {
	constructor(selector){
		this.inputs = document.querySelectorAll(selector);
		this.bindEvents();
	}

	bindEvents(){
    this.inputs.forEach(input => {
      input.addEventListener("keyup",()=>{
        if (input.value == "") return input.classList.remove("non-empty");

        input.classList.add("non-empty");
      });

    });
	}
}
