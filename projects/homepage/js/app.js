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

(function (){

	//Evento principal (espera a que el codigo HTML termine de cargar)
	window.addEventListener("load",function(){

		// variables
		var body = document.getElementsByTagName('body')[0];
		form =  document.sign_in;
		elementos = form.elements;

		// eventos
		body.addEventListener("mousedown", function(e){
			if (e.srcElement){
				element  = e.srcElement;
			}else if (e.target){
				element  = e.target;
			}
		})

		for (var i = 0;  i < elementos.length; i++) {
			if(elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password"){
				elementos[i].addEventListener("focus",function(){
					console.log('Hola')
					console.log(this.parentElement.children[1].className)
					this.parentElement.children[1].className = this.parentElement.children[1].className + " active-label"
				})

				elementos[i].addEventListener("blur",function(){
					console.log('Hola 2')
					console.log(this.parentElement.children[1].className)
					this.parentElement.children[1].className = this.parentElement.children[1].className.replace("active-label", "")
				})
			}

			console.log('Dentro del bucle')
		}



		// funciones
		function formulario (elementShow, elementHide){
			elementShow.style.width = "100%";
			elementShow.style.padding = "20px";
			elementShow.className = "sign_up"

			elementHide.style.width = "0";
			elementHide.style.padding = "0";
			elementHide.style.overflow = "hidden";
		}

	})
}())