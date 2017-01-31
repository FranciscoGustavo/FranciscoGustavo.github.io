(function(){
	window.addEventListener("load", function(){

		console.log("Cargado")
		var buttonSnack = document.getElementById('button_snackbar')
		var snackbar = document.getElementById('snackbar')
		var closed = document.getElementById('closed')

		var riplle = document.querySelector('.riplle')

		buttonSnack.addEventListener("click",function(event){
			x=event.clientX;
			y=event.clientY;
			 
			console.log("X: "+x);
			console.log("Y: "+y);
			
			var posicion = buttonSnack.getBoundingClientRect();
 
			console.log("top: "+posicion.top, "\nright: "+posicion.right, "\nbottom: "+posicion.bottom, "\nleft: "+posicion.left);
			console.log("top: "+ (y - posicion.top), "Left: "+(x-posicion.left));

			snackbar.style.transform = "translate(-50%,0%)";

			riplle.style.top = (y-posicion.top) + "px";
			riplle.style.left = (x-posicion.left) + "px";

			setTimeout(function(){
				riplle.style.opacity = "1";
				riplle.style.width = "225px";
				riplle.style.height = "225px";
			},200);

			setTimeout(function(){
				riplle.style.opacity = "0";
			},1000);

			setTimeout(function(){
				riplle.style.width = "0px";
				riplle.style.height = "0px"
			},1200);

			buttonSnack.blur();
			console.log("quitar")
			setTimeout(function(){
				snackbar.style.transform = "translate(-50%,100%)";
			},2500);
		})

		closed.addEventListener("click",function(){
			snackbar.style.transform = "translate(-50%,100%)";
		})
	})
})()