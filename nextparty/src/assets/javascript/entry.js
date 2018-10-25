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

  let query = 'nav a[href=".' + window.location.pathname + '"]';

  let item = menu.querySelector(query);
  item.classList.add('active');
  
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

})();
