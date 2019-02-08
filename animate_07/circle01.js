function init(){
	// VARIABLES
	var canvas=document.getElementById('canvas'),
		ctx=canvas.getContext('2d'),
		w=canvas.width,
		h=canvas.height,
		cx=w/2,
		cy=h/2;
	var maxRadius=295,
		circles=[];
	// Circle Object
	function Circle(x,y,radius){
		this.x=x;
		this.y=y;
		this.radius=radius;
		this.width=1+Math.round(Math.random()*5);
		this.color='#'+Math.round(Math.random()*((256*256*256)-1)).toString(16);
		this.speed=2;
		this.alpha=.1+Math.random()*.8;
		// METHOD
		this.draw=function(){
			ctx.beginPath();
			ctx.strokeStyle=this.color;
			ctx.globalAlpha=this.alpha;
			ctx.lineWidth=this.width;
			ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
			ctx.stroke();
			ctx.closePath();
		}
	}
	var max=200;
	for(var i=0; i<max; i++){
		var circle=new Circle(cx,cy,50+Math.random()*245);
		circle.draw();
		circles.push(circle);
	}
	// animate
	(function anim(){
		requestAnimationFrame(anim);
		// clear canvas
		ctx.clearRect(0,0,w,h);
		circles.forEach(function(circle){
			circle.radius+=circle.speed;
			if(circle.radius>maxRadius){
				circle.radius=maxRadius;
				circle.speed=1+Math.random()*2;
				circle.speed*=-1;
			}
			if(circle.radius<0){
				circle.radius=0;
				circle.speed=1+Math.random()*2;
			}
			circle.draw();
		})
	}());
}