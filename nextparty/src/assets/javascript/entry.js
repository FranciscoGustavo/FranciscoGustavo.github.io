import '../css/app.scss';

(function(){
  let btnMenu = document.querySelector('.btn-menu');
  let menu = document.querySelector('.menu');

  btnMenu.addEventListener('click', function(e){
      iconToggle(btnMenu.querySelector('i'));
      menu.classList.toggle('active');
  });

  function iconToggle(icon){
    let barsIcon = 'fas fa-bars';
    barsIcon == icon.className ? icon.className = 'fas fa-times' : icon.className = barsIcon;
  }
  
  
  let form = document.querySelector('#formContact');
  if(form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      let formContainer = e.target.parentElement
      console.log(e.target.remove());
      formContainer.classList.add('sended');
      formContainer.innerHTML = "<h1>Mensaje enviado</h1>"
    });
  }

  let options = [
    { page: 'index', item: 1 },
    { page: 'events', item: 2 },
    { page: 'grantour', item: 3 },
    { page: 'contact', item: 4 }
  ];

  

  let page = document.querySelector('body').getAttribute('data-page');

  options.forEach(function(option){
    option.page == page ? activeOptionMenu(option.item) : console.log("no es");
  });

  

  

  function activeOptionMenu(element){
    document.querySelector('nav a:nth-child(' + element + ')').classList.add('active');
  }

})();
