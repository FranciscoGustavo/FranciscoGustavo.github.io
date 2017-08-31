class Menu {
  constructor(slector_menu, selector_button_menu) {
    this.menu = document.querySelector(slector_menu);
    this.button = document.querySelector(selector_button_menu);
    this.openOrClose = false;
    this.bindEvents();
  }

  bindEvents(){
    this.button.addEventListener("click",()=>{
      this.toggleMenu();
    });
  }

  toggleMenu(){
    if(this.openOrClose == false){
     this.menu.style.left = "0%";
     this.openOrClose = true;
    }else if (this.openOrClose == true){
      this.menu.style.left = "-100%";
      this.openOrClose = false;
    }
  }
}
