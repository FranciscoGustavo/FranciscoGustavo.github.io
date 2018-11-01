import '../css/app.scss';

(function(){

    let pages = [
        'index-page',
        'curses-page',
        'workshops-page',
        'communities-page',
        'articles-page',
        'profile-page'
    ];

    let page = document.querySelector('body').getAttribute('data-page');
    let menu = document.querySelectorAll('nav a');

    for(let i = 0; i <= pages.length; i++){
        
        console.log(pages[i] + 'Hola');
        if(page === pages[i]) menu[i].classList.add('active');

    }

    let countDown = document.querySelector('.count-down');

    if(page === 'workshops-page'){
        let hour = 11;
        let minutes = 59;
        let seconds = 59;

        countDown.querySelector('.seconds').innerHTML = seconds;
        countDown.querySelector('.minutes').innerHTML = minutes;
        countDown.querySelector('.hour').innerHTML = hour;
        

        let textsecond;
        let textminutes;
        let texthour;

        setInterval(function(){
            (seconds == 1) ? seconds = 59 : seconds--;

            (seconds < 10) ? textsecond = '0' + seconds : textsecond = seconds;

            countDown.querySelector('.seconds').innerHTML = textsecond;

        },1000);

        setInterval(function(){
            (minutes == 1) ? minutes = 59 : minutes--;

            (minutes < 10) ? textminutes = '0' + minutes : textminutes = minutes;

            countDown.querySelector('.minutes').innerHTML = textminutes;

        },60000);

        setInterval(function(){
            (hour == 1) ? hour = 24 : hour--;

            (hour < 10) ? texthour = '0' + hour : texthour = minutes;

            countDown.querySelector('.hour').innerHTML = texthour;

        },3600000);
    }

    let image = [
        './public/slide/slide-1.jpg',
        './public/slide/slide-2.jpg',
        './public/slide/slide-3.jpeg',
        './public/slide/slide-4.jpg'
    ]

    let slide = document.querySelector('.slide');
    let btnLeft =  slide.querySelector('.arrow-left');
    let btnrigth =  slide.querySelector('.arrow-right');
    let count = 1;

    btnLeft.addEventListener('click', function(){
        count--;
        if (count < 0) count = image.length-1;
        slide.querySelector('img').src=image[count];
    });

    btnrigth.addEventListener('click', function(){
        count++;
        if (count == image.length) count = 0;
        slide.querySelector('img').src=image[count];
    });

})();