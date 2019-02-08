
$(function(){
	var cont=$('#container'),
		decal=cont.offset(),
		cube=$('#cube');
	//
	var cx=decal.left+cont.width()/2;
	var cy=decal.top+cont.height()/2;
	//
	var angx=angy=0;
	var posx=posy=0;
	var bol=false;
	cont.on('mouseover',function(){
		bol=true;
	});
	cont.on('mouseout',function(){
		bol=false;
	});
	cont.on('mousemove',function(e){
		posx=(e.clientX-cx)/200;
		posy=(e.clientY-cy)/200;
	});
	$('#cube > div').each(function(){
		$(this).on('mouseover',function(){
			$(this).css('opacity',1);
		});
		$(this).on('mouseout',function(){
			$(this).css('opacity',.5);
		});
	})
	// animation
	(function anim(){
		requestAnimationFrame(anim);
		if(bol){
			angx+=posx;
			angy+=posy;
			var val='rotateY('+angx+'deg) rotateX('+angy+'deg)';
			cube.css('transform',val);
		}
	}());
})