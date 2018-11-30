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


})();