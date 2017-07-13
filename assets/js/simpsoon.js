// countdown timer function
$(function() {
  var endDate = $('.counter').attr('timer');

  $('.counter .row').countdown({
    date: endDate,
    render: function(data) {
      var element = this.el;
      $(".days .count-round", element).html("<span class='text-center'>"  + this.leadingZeros(data.days, 2) + " <p> Days</p></span> ");
      $(".hours .count-round", element).html("<span class='text-center'>"  + this.leadingZeros(data.hours, 2) + " <p> Hours</p></span> ");
      $(".min .count-round", element).html("<span class='text-center'>"  + this.leadingZeros(data.min, 2) + " <p> Minutes</p></span> ");
      $(".sec .count-round", element).html("<span class='text-center'>"  + this.leadingZeros(data.sec, 2) + " <p> Seconds</p></span> ");
    }
  });
});

// wow animation function
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);

// typed function
$(function(){
    $(".text span").typed({
      strings: ["WE WILL BE ONLINE AFTER.", "Visit us after this time."],
      typeSpeed: 40,
      startDelay: 3000,
      backDelay: 3000,
      loop: true
    });
});


// Animated Hue gradient background
function changeBackground() {
    //change color every frame
    //initialise colors ( hue, lightness)
    var hue = 360;
    var light = 0;

    function changeHue (){
    var col1 = Math.abs((hue % 720) - 360);
    var col2 = Math.abs( ( (hue+90) % 720) - 360);
    hue++ ;

	//values for light adjustment not used
    var light1 = Math.abs( (light % 40) - 20)+60;
    var light2 = Math.abs( ( (light+10) % 40) - 20)+60;
    light++ ;

    document.body.style.background = 'linear-gradient(to right, hsl('+col1 +',70%, 75%) 0%,hsl('+col2 +',90%,75%) 100%)';
    }
    setInterval	(changeHue, 64);
    }
    changeBackground();


// Loading page function
$(window).load(function() {
  // Animate loader off screen
  $("#pageloading").fadeOut();
  
  $('.sec').bind("DOMSubtreeModified",function(){
	$('.sec .count-round').css({
	  "animation-duration": "1s",
	  "-webkit-animation-duration": "1s",
	  "-moz-animation-duration": '1s',
	  "-o-animation-duration": '1s',
      "animation-iteration-count": 'infinite',
      "-moz-animation-iteration-count": 'infinite',
      "-webkit-animation-iteration-count": 'infinite',
      "-o-animation-iteration-count": 'infinite'
	});
  });


});
