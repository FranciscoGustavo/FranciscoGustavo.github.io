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

class newSale {
  constructor(selector_button, selector_sale, selector_item = ".add-items") {
    this.saleButton = document.querySelector(selector_button);
    this.sale = document.querySelector(selector_sale);
    this.addItems = document.querySelector(selector_item);
    this.bindEvents();
    console.log(this.sale);
  }

  bindEvents(){
    this.saleButton.addEventListener("click",()=>{
      this.sale.classList.add("ripple-in");
      document.querySelector("body").style.overflowY= "hidden" ;
    });

    this.addItems.addEventListener("click",(event)=>{
      event.preventDefault();
      let element = document.createElement("div");
      element.classList.add("item-form");
      element.innerText = "Hola Mundo";
      let itemfather = this.addItems.parentElement.parentElement;
      itemfather.insertBefore(element,this.addItems.parentElement);
    });
  }
}

(function(){
  new Menu(".navigation",".btn-menu");
  new newSale(".button",".sale");
})();
