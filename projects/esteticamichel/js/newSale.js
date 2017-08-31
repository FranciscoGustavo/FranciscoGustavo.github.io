class newSale {
  constructor(selector_button, selector_sale, selector_item = ".add-items") {
    this.saleButton = document.querySelector(selector_button);
    this.sale = document.querySelector(selector_sale);
    this.addItems = document.querySelector(selector_item);
    this.items = 1;
    this.bindEvents();
  }

  createItem(){
    let element = document.createElement("div");
    element.classList.add("item-form");
    element.insertBefore(this.createService(),element.childNodes[0]);
    element.insertBefore(this.createPricing(),element.childNodes[1]);
    element.insertBefore(this.createDiscount(),element.childNodes[2]);
    let itemfather = this.addItems.parentElement.parentElement;
    itemfather.insertBefore(element,this.addItems.parentElement);
    this.items++;
    new InputMD(".form input").bindEvents();
  }

  createInput(name){
    let input = document.createElement("input");
    input.setAttribute("name",name + this.items);
    input.setAttribute("id",name + this.items);
    return input;
  }

  createLabel(name, text){
    let label = document.createElement("label");
    label.setAttribute("for",name + this.items);
    label.innerText = text;
    return label;
  }

  createService(){
    let container = document.createElement("div");
    container.classList.add("input-form")
    container.appendChild(this.createLabel("service","Servicio"));
    container.insertBefore(this.createInput("service"), container.childNodes[0]);
    return container;
  }

  createPricing(){
    let container = document.createElement("div");
    container.classList.add("input-form")
    container.appendChild(this.createLabel("pricing","Precio"));
    container.insertBefore(this.createInput("pricing"), container.childNodes[0]);
    return container;
  }

  createDiscount(){
    let container = document.createElement("div");
    container.classList.add("input-form")
    container.appendChild(this.createLabel("discount","Descuento"));
    container.insertBefore(this.createInput("discount"), container.childNodes[0]);
    return container;
  }

  bindEvents(){
    this.saleButton.addEventListener("click",()=>{
      this.sale.classList.add("ripple-in");
      document.querySelector("body").style.overflowY= "hidden" ;
      this.createItem();
    });

    this.addItems.addEventListener("click",(event)=>{
      event.preventDefault();
      this.createItem();
    });
  }

}
