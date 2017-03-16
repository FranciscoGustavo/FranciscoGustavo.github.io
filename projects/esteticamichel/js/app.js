var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 19.3913425, lng: -99.0939677},
		zoom: 19
	});
}

(function () {
	window.addEventListener("load",function(){
		// Variables
		body = document.getElementsByTagName('body')[0]
		header = document.getElementsByTagName('header')[0]
		welcome = document.querySelector('.welcome')
		servicesHome = document.querySelector('.services')
		offersHome = document.querySelector('.offers')
		titulo = document.querySelector('.title')
		texto = document.querySelector('.text')
		logo = document.querySelector('.logo')
		buttonDown = document.querySelector('.button-down')
		offers = document.getElementsByClassName('offer')
		services = document.getElementsByClassName('service')
		ejecutamas = true

		lista = document.querySelectorAll('li')

		// Eventos
		buttonDown.addEventListener("click",function(e){
			e.preventDefault()
			body.scrollTop = welcome.offsetHeight - 50
		})

		window.addEventListener("scroll",function(){
			console.log("Haciendo scroll")
			if (body.scrollTop > (welcome.offsetHeight - 51) && ejecutamas == true) {
				console.log("GGGG")
				header.style.height = "50px"
				ejecutamas = false
			} else if (body.scrollTop < (welcome.offsetHeight - 51) && ejecutamas == false){
				header.style.height = "0px"
				ejecutamas = true
			}

			if (body.scrollTop > (welcome.offsetHeight + servicesHome.offsetHeight - 51)) {
				console.log("Elemento Li")
				lista[0].style.display = "none"
				lista[1].style.display = "flex"
			} else {
				lista[1].style.display = "none"
				lista[0].style.display = "flex"				
			}

			if (body.scrollTop > (welcome.offsetHeight + servicesHome.offsetHeight + offersHome.offsetHeight - 51)) {
				console.log("Elemento Li")
				lista[1].style.display = "none"
				lista[2].style.display = "flex"
			} else {
				lista[2].style.display = "none"
				lista[1].style.display = "flex"				
			}
		})

		// Codigo que se ejecuta solo
		titulo.className = titulo.className + " slide-botton"
		texto.className = texto.className + " slide-right"
		logo.className = logo.className + " opacity-1"
		buttonDown.className = buttonDown.className + " opacity-1"

		for (var i = 0; i < services.length; i++) {
			services[i].className = services[i].className + " opacity-1"
		}

		for (var i = 0; i < offers.length; i++) {
			offers[i].className = offers[i].className + " opacity-1"
		}

		if(document.getElementsByTagName('body')[0].offsetWidth < 1280){
			packages = document.getElementsByClassName('package')
			var firstElement = 0, secondElement = 1, thirdElement = 2
			var count = 0
			setInterval(function(){
				console.log('Hola')
					if (count == 0) {
						firstElement = 0
						secondElement = 1
						thirdElement = 2
					}
					if (count == 1) {
						firstElement = 1
						secondElement = 2
						thirdElement = 0
					}

					if (count == 2) {
						firstElement = 2
						secondElement = 0
						thirdElement = 1
					}
					packages[firstElement].style.left = "-100%"
					packages[firstElement].style.opacity = "0"
					packages[firstElement].style.zIndex = "0"
					
					packages[secondElement].style.opacity = "1"
					packages[secondElement].style.left = "50%"
					packages[secondElement].style.transform = "translateX(-50%)"
					packages[secondElement].style.zIndex = "100"
					
					packages[thirdElement].style.left = "100%"
					packages[thirdElement].style.opacity = "0"
					packages[thirdElement].style.zIndex = "0"
					count == 3 ? count = 0 : count++
			},7000);
		}
	})
}());