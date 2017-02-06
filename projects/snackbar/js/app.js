(function(){
	window.addEventListener("load", function(){

		console.log("Cargado")
		var buttonSnack = document.querySelector('.effect_ripple')
		var snackbar = document.getElementById('snackbar')
		var closed = document.getElementById('closed')

		// Abrir snackbar
		buttonSnack.addEventListener("click",function(){
			// Agregamos efecto ripple
			addEfectRipple(buttonSnack);

			snackbar.style.transform = "translate(-50%,0%)";
			buttonSnack.blur()

			setTimeout(function(){
				snackbar.style.transform = "translate(-50%,100%)";
			},5000);
		})


		// Cerrar snackbar
		closed.addEventListener("click",function(){
			snackbar.style.transform = "translate(-50%,100%)";
		})

		function cordenadasX(){
			return event.clientX;
		}

		function cordenadasY(){
			return event.clientY;
		}

		function addEfectRipple(element){
			var ripple = element.querySelector(".ripple")

			// Sacamos cordenadas donde se dio un click sobre el boton
			x = cordenadasX();
			y = cordenadasY();
			
			// Sacamos cordenadas del boton (el elemento)
			var cords = element.getBoundingClientRect();

			// Agregamos los efectos del ripple
			ripple.style.top = (y - cords.top) + "px"; // Posicionamos nuestro div.ripple
			ripple.style.left = (x - cords.left) + "px"; // Posicionamos nuestro div.ripple
			ripple.style.animation = "ripple 1s"; // Agregamos animacion con Keyframes 

			// Restauramos el elemento
			setTimeout(function(){
				ripple.style.top = 0 + "px";
				ripple.style.left = 0 + "px";
				ripple.style.animation = "none";
			},1000);
		}

	})
})()