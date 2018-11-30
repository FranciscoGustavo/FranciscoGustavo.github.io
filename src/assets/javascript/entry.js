import '../css/app.scss';
import './arrays.js';

(function(){

    /* Menu */

    let pages = [
        { title: 'index', place: 0 },
        { title: 'proyects', place: 1 },
        { title: 'aboutme', place: 2 },
        { title: 'contact', place: 3 }
    ];

    let dataPage = document.querySelector('body').getAttribute('data-page');
    let menu = document.querySelectorAll('nav a');

    pages.forEach((page) => {
        if (page.title === dataPage) menu[page.place].classList.add('active');
    })

    function moveToRight (top) {
        if(top === 0) { top = -100; }
        else if(top === -100) { top = 100; }
        else if(top === 100) { top = 0; }

        return top;
    }

    function moveToLeft (top) {
        if(top === 0) { top = 100; }
        else if(top === 100) { top = -100; }
        else if(top === -100) { top = 0; }

        return top;
    }

    let elements = [
        { number: 0, name: "slide" },
        { number: 100, name: "proyects" },
        { number: -100, name: "about-me" }
    ]

    let btnLeft = document.querySelector('.buttons-bar-down .arrow-left');

    btnLeft.addEventListener('click', () => {
        elements.forEach(e => {
            document.querySelector('.' + e.name).style.opacity = "0";
            document.querySelector('.' + e.name).style.zIndex = "0";
            e.number = moveToLeft(e.number);
            if (e.number == 0 ) { 
                document.querySelector('.' + e.name).style.opacity = "1";
                document.querySelector('.' + e.name).style.zIndex = "1";
            }
            document.querySelector('.' + e.name).style.left = e.number + "%";

        })
    });

    let btnRight = document.querySelector('.buttons-bar-down .arrow-right');
    btnRight.addEventListener('click', () => {
        elements.forEach(e => {

            document.querySelector('.' + e.name).style.opacity = "0";
            document.querySelector('.' + e.name).style.zIndex = "0";
            e.number = moveToRight(e.number);
            if (e.number == 0 ) { 
                document.querySelector('.' + e.name).style.opacity = "1";
                document.querySelector('.' + e.name).style.zIndex = "1";
            }
            document.querySelector('.' + e.name).style.left = e.number + "%";

        })
    });
   
  

    /* Media Query */
    function myFunction(x) {
        if (x.matches) { // If media query matches
              /* Mover Slide */

            let slide = document.querySelector('.slide .container');
            console.log(slide.parentElement);
            slide.parentElement.remove();

            let header = document.querySelector('header');

            header.appendChild(slide)
            //document.body.style.backgroundColor = "yellow";
        } else {
            //document.body.style.backgroundColor = "pink";
        }
    }
    
    var x = window.matchMedia("(min-width: 900px)")
    myFunction(x) 
    x.addListener(myFunction)

})();