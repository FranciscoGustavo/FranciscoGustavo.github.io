(function (){
	window.addEventListener("load",function(){

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

	})
}())