import '../css/app.scss';
import './frameworks/buttons_mdl.js'
import './frameworks/form_mdl.js'

import './carousel.js'

(function(){
    /* CALENDAR OF QUOTATION */

    let scheduledBtn = document.querySelector('button.scheduled-btn');

    if (scheduledBtn != null) scheduledBtn.addEventListener('click', showCalendar);

    function showCalendar (e) {
        e.preventDefault();

        let calendar = document.querySelector('.container-calendar');
        e.target.parentElement.appendChild(calendar);
        calendar.classList.toggle('active');
    } 


    /* BUTTONS OF INDEX */

    let iframePages = [
        { class : '.type-page-container', status : false },
        { class : '.demo-index', status : false }
    ]

    let index = 0;
    let btnDown = document.querySelector('.arrow-down');
    let btnUp = document.querySelector('.arrow-up');

    if (btnDown != null) btnDown.addEventListener('click', moveDown);
    if (btnUp != null) btnUp.addEventListener('click', moveUp);

    function moveDown () {
        let card = document.querySelector(iframePages[index].class);
        card.classList.add('show');

        index++;
        buttonsUpAndDown();
    }

    function moveUp () {
        index--;
        buttonsUpAndDown();
        let card = document.querySelector(iframePages[index].class);
        card.classList.remove('show');
    }

    function buttonsUpAndDown(){
        index != 0 ? btnUp.classList.add('show') : btnUp.classList.remove('show');
        index == 2 ? btnDown.classList.add('hidden') : btnDown.classList.remove('hidden');
    }


    if (document.querySelector('body[data-page="proyects"]') != null) document.querySelector('html').style.overflowY = 'scroll'; 
    
    
    /* OPTIONS OF CV BY ABOUT ME */

    let BtnDescription = document.querySelector('.btn-description');
    let BtnEducation = document.querySelector('.btn-education');
    let BtnSkills = document.querySelector('.btn-skills');

    BtnDescription.addEventListener('click', ()=>{
        document.querySelector('.cv .row').style.marginLeft = 0;
    });
    BtnEducation.addEventListener('click', ()=>{
        document.querySelector('.cv .row').style.marginLeft = -100 + '%';
    });
    BtnSkills.addEventListener('click', ()=>{
        document.querySelector('.cv .row').style.marginLeft = -200 + '%';
    });

    /* Menu */
/*
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

    if (btnLeft != null)
        btnLeft.addEventListener('click', moveCardToLeft);


    let btnRight = document.querySelector('.buttons-bar-down .arrow-right');

    if (btnRight != null)
        btnRight.addEventListener('click', moveCardToRight);
    
    function moveCardToRight () {
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
    }

    function moveCardToLeft () {
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
    }
  

    /* Media Query 
    function myFunction(x) {
        if (x.matches) { // If media query matches
              /* Mover Slide 

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
*/


})();