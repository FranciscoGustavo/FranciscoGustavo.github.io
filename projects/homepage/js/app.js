(function (){
	//Compatibilidad de navegadores
	(function detectarNavegador(navegador) {
		html = document.getElementsByTagName("html")[0]
		if(navegador.indexOf("Chrome") != -1 ) {
			html.className = html.className + " chrome"
		}
		else if(navegador.indexOf("Opera") != -1 ) {
			html.className = html.className + " opera"
		}
		else if(navegador.indexOf("Firefox") != -1 ) {
			html.className = html.className + " firefox"
		}
		else if((navegador.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
			html.className = html.className + " ie"
		}
		else if(navegador.indexOf("Safari") != -1 ) {
			html.className = html.className + " safari"
		}
		else {
			html.className = html.className + " other"
		}
	})(navigator.userAgent);

	//Evento principal (espera a que el codigo HTML termine de cargar)
	window.addEventListener("load",function(){

		// variables
		form =  document.sign_up;
		elementsForm = form.elements;

		// funciones
		addClassActiveLabel = function(){
			this.parentElement.children[1].className = this.parentElement.children[1].className + " active-label"
			this.parentElement.className = this.parentElement.className.replace("error", "")
		}

		removeClassActiveLabel = function (){
			if (this.value <= 0){
				this.parentElement.children[1].className = this.parentElement.children[1].className.replace("active-label", "")
				this.parentElement.className = this.parentElement.className + " error"
			}
			
		}

		validarInputs = function(){
			for (var i = 0; i < elementsForm.length; i++) {
				if(elementsForm[i].type == "text" || elementsForm[i].type == "email" || elementsForm[i].type == "password"){
					if(elementsForm[i].value  == 0){
						elementsForm[i].parentElement.className = elementsForm[i].parentElement.className + " error"
						return false;
					} else {
						elementsForm[i].parentElement.className = elementsForm[i].parentElement.className.replace("error", "")
					}
				}
			}
			return true;
		}

		validarCheckbox = function(){
			var opciones = document.getElementsByName('activa')
			var	resultado = false

			for (var i = 0; i < elementsForm.length; i++) {
				if(elementsForm[i].type == "checkbox"){
					for (var j = 0; j < opciones.length; j++) {
						if(opciones[j].checked){
							resultado = true;
							break;
						}
					}
					if(resultado == false){
						elementsForm[i].parentElement.className = elementsForm[i].parentElement.className + " error-checked"
						return false;
					}else{
						elementsForm[i].parentElement.className = elementsForm[i].parentElement.className.replace("error-checked", "")
						return true;						
					}
				}
			}
		}

		enviar = function(e){
			if(!validarInputs()){
				e.preventDefault()
			}else if(!validarCheckbox()){
				e.preventDefault()
			}else{
				e.preventDefault()
			}
		}

		// Eventos
		form.addEventListener("submit", enviar)

		// Codigo que se ejecuta automaticamente
		for (var i = 0;  i < elementsForm.length; i++) {
			if(elementsForm[i].type == "text" || elementsForm[i].type == "email" || elementsForm[i].type == "password"){
				elementsForm[i].addEventListener("focus", addClassActiveLabel)
				elementsForm[i].addEventListener("blur", removeClassActiveLabel)
			}
		}
	})
}())