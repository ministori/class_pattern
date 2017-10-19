$(function(){
	
	var v1,v2;
	
	$(window).on('load', function(){
		
		v1 = new VisualMotion( $('.js-motion-visual'), 1 );
		v1.start();		
		
		v2 = new VisualMotion( $('.js-motion-text'), -1 );
		v2.start();
		
		$('.main-visual-1-building, .main-visual-1-people').removeClass('no-js');
		
		$('.preloader').delay(500).fadeOut(function(){
			
			$(this).remove();
			
			$('.main-visual-stage, .control').delay(500).fadeIn(function(){
				
				var heart1 = new particleMotion( $('.main-visual-1-heart-1'), 0, 0, 230, 200 );
				heart1.start();
				var heart2 = new particleMotion( $('.main-visual-1-heart-2'), 230, 0, 460, 100 );
				heart2.start();
				var heart3 = new particleMotion( $('.main-visual-1-heart-3'), 230, 230, 460, 330 );
				heart3.start();
				var heart4 = new particleMotion( $('.main-visual-1-heart-4'), 460, 200, 690, 370 );
				heart4.start();
				var heart5 = new particleMotion( $('.main-visual-1-heart-5'), 460, 0, 690, 200 );
				heart5.start();
				var heart6 = new particleMotion( $('.main-visual-1-heart-6'), 100, 100, 300, 200 );
				heart6.start();
				
				var pattern1 = new particleMotion( $('.main-visual-2-pattern-1'), 0, 0, 345, 200 );
				pattern1.start();
				var pattern2 = new particleMotion( $('.main-visual-2-pattern-2'), 0, 200, 230, 300 );
				pattern2.start();
				var pattern3 = new particleMotion( $('.main-visual-2-pattern-3'), 460, 0, 690, 150 );
				pattern3.start();
				var pattern4 = new particleMotion( $('.main-visual-2-pattern-4'), 0, 00, 230, 370 );
				pattern4.start();
				var pattern5 = new particleMotion( $('.main-visual-2-pattern-5'), 550, 250, 690, 350 );
				pattern5.start();
				var pattern6 = new particleMotion( $('.main-visual-2-pattern-6'), 460, 0, 690, 150 );
				pattern6.start();
				
			});
			
		});
	});
	
	$(window).on('resize', function(){
		v1.resizing();
		v2.resizing();
	});
	
	$('.js-indicator').on('click', function(){
		var index = $('.js-indicator').index($(this));
		v1.paging(index);
		v2.paging(index);
	});
	
	$('.control-play').on('click', function(){
		v1.play();
		v2.play();
	});
	
	$('.control-stop').on('click', function(){
		v1.stop();
		v2.stop();
	});
	
});
