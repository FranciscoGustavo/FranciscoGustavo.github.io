class Ripple {
    constructor(selector){
      this.buttons = document.querySelectorAll(selector);
      console.log(this.buttons);
      this.bindEvents();
    }
    
    bindEvents(){
      for(let button of this.buttons){
        button.addEventListener("click", (e)=>{
          let coords = {
            x: e.x,
            y: e.y
          }
          
          let rect = e.target.getBoundingClientRect();
          
          let clickPosition = {
            x: coords.x - rect.left,
            y: coords.y - rect.top
          }
          
          let ripple = document.createElement("span");
          let color = e.target.getAttribute("data-ripple") == "dark" ? "black" : "white";
          let styles = `
            position: absolute;
            top: ${clickPosition.y - rect.width}px;
            left: ${clickPosition.x -rect.width}px;
            width: ${rect.width * 2}px;
            height: ${rect.width * 2}px;
            border-radius: 50%;
            background: ${color};
            opacity: 0.56;
            transform: scale(0);
            transition: all 0.3s cubic-bezier(0.3, 0.0, 0.2, 1);
          `;
          ripple.style.cssText = styles;
          
          
          setTimeout(()=>{
            ripple.style.transform = 'scale(1)';
            ripple.style.opacity = '0';
          },50);
          
          e.target.appendChild(ripple);
          
          setTimeout(()=>{
            ripple.remove();
          },350);
          
          
        });
      }
    }
  }
  
  new Ripple(".mdl-ripple");
  