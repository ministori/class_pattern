# class_pattern

~~~

var VisualMotion = function( $parent, dir ){
	
	// private
	var winWidth = $(window).width();
	var stageWidth = $('.main-visual-stage').width();
	var $parent = $parent;
	var $obj = [];
	var parentLength = $parent.length;
	var tId = 0;
	var currentIndex = 0;
	var dir = dir;
	var tweenEndCount = 0;
	
	$parent.each(function(i){
		$obj[i] = $(this).children('.js-item');
	});
	
	// public
	this.start = function(){
		objInit( $obj, dir );
	};
	
	this.resizing = function(){
		objResizing();
	};
	
	this.play = function(){
		motionStart( $obj, dir );
	};
	
	this.stop = function(){
		clearInterval(tId);
	};
	
	this.paging = function(index){
		if(tweenEndCount != $obj[currentIndex].length) return;
		clearInterval(tId);
		tween( $obj, dir, index );
	};
	
	// private
	var objInit = function( $obj, dir ){
		for(var i=0; i< parentLength; i++){
			$obj[i].each(function(i){
				$(this).css({
					left:winWidth * dir
				});
			});
		}
		
		setTimeout(function(){tweenIn( $obj[currentIndex], dir );}, 500 );
		motionStart( $obj, dir );
	};
	
	var objResizing = function(){
		clearInterval(tId);
		winWidth = $(window).width();
		var index;
		
		if( currentIndex + 1 >=  parentLength){
			index = 0;
		} else {
			index = currentIndex+1;
		}
		
		$obj[index].each(function(i){
			$(this).css({
				left:winWidth * dir
			});
		});
		
		motionStart( $obj, dir );
	};
	
	var motionStart = function( $obj, dir ){
		clearInterval(tId);
		tId = setInterval(function(){
			setIndexInc( $obj, dir );
		}, 8000 );
	};
	
	var setIndexInc = function( $obj, dir ){
		if( currentIndex + 1 >=  parentLength){
			tween( $obj, dir, 0 );
		} else {
			tween( $obj, dir, currentIndex+1 );
		}
	};
	
	var tween = function( $obj, dir, index ){
		tweenEndCount = 0;
		tweenOut( $obj[currentIndex], dir );
		setTimeout( function(){
			tweenIn( $obj[index], dir );
			setIndicator(index);
		}, 2000);
		currentIndex = index;
	};
	
	var tweenIn = function( $objItem, dir ){
		$objItem.each(function(i){
			$(this).tween({
				left:{
					start: winWidth * dir,
					stop: (stageWidth/2) - $(this).attr('data-pos-x'),
					time: 1 + (i*0.3),
					units: 'px',
					duration: 1.3,
					effect: 'quartOut'
				},
				onStop: function(){
					tweenEndCount++;
				}
			});
			
			$.play();
		});
	};
	
	var tweenOut = function( $objItem, dir ){
		$objItem.each(function(i){
			$(this).tween({
				left:{
					start: (stageWidth/2) - $(this).attr('data-pos-x'),
					stop: winWidth * dir,
					time: 1.3 - (i*0.3),
					units: 'px',
					duration: 1,
					effect: 'quartIn'
				}
			});
			
			$.play();
		});
	};
	
	var setIndicator = function( index ){
		$('.js-indicator').removeClass('is-on');
		$('.js-indicator').eq(index).addClass('is-on');
	};
	
};

var particleMotion = function( $particle, rangeBeginX, rangeBeginY, rangeEndX, rangeEndY ){
	
	var pId = 0;
	
	this.start = function(){
		
		interval($particle, rangeBeginX, rangeBeginY, rangeEndX, rangeEndY);
		repeat();
		
	};
	
	var repeat = function(){
		pId = setInterval(function(){interval($particle, rangeBeginX, rangeBeginY, rangeEndX, rangeEndY);}, 5000);
	};
	
	var interval = function( $particle, rangeBeginX, rangeBeginY, rangeEndX, rangeEndY ){
		var targetX = Math.floor( Math.random() * ( rangeEndX - rangeBeginX ) ) + rangeBeginX;
		var targetY = Math.floor( Math.random() * ( rangeEndY - rangeBeginY ) ) + rangeBeginY;
		var currentX = $particle.position().left;
		var currentY = $particle.position().top;
		
		randomTween($particle, targetX, targetY, currentX, currentY);
	};
	
	var randomTween = function( $particle, targetX, targetY, currentX, currentY ){
		$particle.tween({
			left:{
				start: currentX,
				stop: targetX,
				time: 0,
				units: 'px',
				duration: 5,
				effect: 'linear'
			},
			top:{
				start: currentY,
				stop: targetY,
				time: 0,
				units: 'px',
				duration: 5,
				effect: 'linear'
			},
		});
		
		$.play();
	};
	
};


~~~
