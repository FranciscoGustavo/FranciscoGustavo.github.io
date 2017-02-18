(function (){
	window.addEventListener("load",function(){

		var body = document.getElementsByTagName('body')[0];

		body.addEventListener("mousedown", function(e){
			if (e.srcElement){
				element  = e.srcElement;
			}else if (e.target){
				element  = e.target;
			}

			if(element.className == "signUp inactive"){
				console.log("HOLA")

				formulario(sign_up,sign_in)
				signIn.className = "signIn inactive"
				signUp.className = "signUp"


				
			} else if(element.className == "signIn inactive"){
				formulario(sign_in,sign_up)
				signIn.className = "signIn"
				signUp.className = "signUp inactive"
			}

		})

		sign_up = document.querySelector('.sign_up');
		sign_in = document.querySelector('.sign_in');
		signUp = document.querySelector('.signUp');
		signIn = document.querySelector('.signIn');

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