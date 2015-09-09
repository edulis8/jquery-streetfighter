$(document).ready(function() {

	doIntro();
	
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	});


	$('.ryu').mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left', '595px');
			}
			);
		//animate hadouken to right of screen
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		
	});

	$('ryu').keydown(function() {
		alert("hi");

		/* Act on the event */
	});


	$(document).keydown(function() {
  		if (event.which == 88) {
  			$('.ryu-still').hide();
  			$('.ryu-ready').hide();
  			$('.ryu-throwing').hide();
			$('.ryu-cool').show();
	};
}).keyup(function() { //bugs!
	$('.ryu-still').show();
	$('.ryu-cool').hide();
});

});

function playHadouken(){
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}


function doIntro(){
	$('.sf-logo').fadeIn(3500, function(){
		$(this).fadeOut('1000', function() {
			$('.brought-by').fadeIn(1500, function() {

				$(this).fadeOut('1000', function() {
					$('.jquery-logo').fadeIn(1500, function() {
						$(this).fadeOut(1500, function() {
							$('.text').fadeIn(1000);
							
						});
						
					});
					
				});
			});
			
		});
	})
}


/*

function doIntro() {
  $('#theme-song')[0].volume = 0.3;
  $('#theme-song')[0].play();
  $('.sf-logo').fadeIn(3500, function() {
    $(this).fadeOut(1000, function() {
      $('.brought-by').fadeIn(1500, function() {
        $(this).fadeOut(1000, function() {
          $('.jquery-logo').fadeIn(1500, function() {
            $(this).fadeOut(1500, function() {
              $('.how-to').fadeIn(1000);
            });

            */