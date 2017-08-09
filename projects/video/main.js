class ViewPort{
	static visible(el){
		let cords = el.getBoundingClientRect();
		let windowHeight = document.documentElement.clientHeight;

		return (cords.top < windowHeight && (cords.top * -1) < windowHeight)
	}
}

class PlayViewPort{
	constructor(video_selector){
		this.video = document.querySelector(video_selector);
		this.evaluate = this.evaluate.bind(this);
		this.bindEvents();
	}

	bindEvents(){
		window.addEventListener('scroll',this.evaluate);
	}
	
	evaluate(){
		if(ViewPort.visible(this.video)){
			this.video.play();
		}else {
			this.video.pause();
		}
	}
}	

(function(){
	new PlayViewPort("video");
})();