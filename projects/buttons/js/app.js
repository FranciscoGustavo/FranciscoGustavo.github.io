(function(){
	window.addEventListener("load", function(){

		var body = document.getElementsByTagName('body')[0];

		body.addEventListener("mousedown", function(e){
			if (e.srcElement){
				element  = e.srcElement;
			}else if (e.target){
				element  = e.target;
			}

			if(element.tagName == "BUTTON"){			
				element.addEventListener("click",function(){
					if(element.querySelector('.ripple')){
						addEfectRipple(element)
					} else{
						setTimeout(function(){
							element.blur()
						},400);
					}
				})
			}

		})

		function cordenadasX(){
			return event.clientX;
		}

		function cordenadasY(){
			return event.clientY;
		}

		function addEfectRipple(element){
			var ripple = element.querySelector(".ripple")
			element.blur()

			// Sacamos cordenadas donde se dio un click sobre el boton
			x = cordenadasX();
			y = cordenadasY();
			
			// Sacamos cordenadas del boton (el elemento)
			var cords = element.getBoundingClientRect();

			// Agregamos los efectos del ripple
			ripple.style.top = (y - cords.top) + "px"; // Posicionamos nuestro div.ripple
			ripple.style.left = (x - cords.left) + "px"; // Posicionamos nuestro div.ripple
			ripple.style.animation = "ripple .9s"; // Agregamos animacion con Keyframes 

			// Restauramos el elemento
			setTimeout(function(){
				ripple.style.top = 0 + "px";
				ripple.style.left = 0 + "px";
				ripple.style.animation = "none";
			},900);
		}

	})
})()