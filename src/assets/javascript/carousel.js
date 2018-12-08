class Carousel {
    constructor ({ numItems, width, left, right, boxContainer }) {      
        this.NumItems = numItems;
        this.TotalWidth = numItems * width;
        this.Width = width;
        this.ButtonLeft = document.querySelector(left);
        this.ButtonRight = document.querySelector(right);
        this.BoxContainer = document.querySelector(boxContainer);
        this.Margin = 0;

        this.bindEvents();
        this.moveToLeft = this.moveToLeft.bind(this);
        this.moveToRight = this.moveToRight.bind(this);
    }

    bindEvents () {
        this.ButtonLeft.addEventListener('click', () => { this.moveToLeft(); });
        this.ButtonRight.addEventListener('click', () => { this.moveToRight(); });
    }

    moveToLeft () {
        if (this.Margin != 0) this.Margin = this.Margin + this.Width;
        this.BoxContainer.style.marginLeft = this.Margin + '%';
    }

    moveToRight () {
        if ((this.Margin * -1) != (this.TotalWidth - this.Width)) this.Margin = this.Margin - this.Width;
        this.BoxContainer.style.marginLeft = this.Margin + '%';
    }

}

var widthOfDemo = 0;
var widthOfProyect = 0;

function myFunction(x) {
    if (x.matches) { // If media query matches
        widthOfDemo = 50;
        widthOfProyect = 50;
    } else {
        widthOfDemo = 100;
        widthOfProyect = 100;
        //document.body.style.backgroundColor = "pink";
    }
}

var x = window.matchMedia("(min-width: 680px)")
    myFunction(x) 
    x.addListener(myFunction)

if (document.querySelector('body[data-page="proyects"]') != null) {
    new Carousel({
        numItems: 3,
        width: widthOfDemo,
        left: '.demo-page .arrow-left',
        right: '.demo-page .arrow-right',
        boxContainer: '.demo-page .row'
    });
    
    new Carousel({
        numItems: 6,
        width: widthOfProyect,
        left: '.proyects-page .arrow-left',
        right: '.proyects-page .arrow-right',
        boxContainer: '.proyects-page .row'
    });
}

