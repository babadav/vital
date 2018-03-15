
(() => {
	console.log("Hello World from app.js, transpiled and concatenated!");
})();
setInterval(function(){document.querySelector('.glow-flex').classList.toggle('active')},800);

$(document).ready(function(){
		function navAnimations(){
		$('.subnav-container').hide();
		$('.circle-subnav-container').hide();
		$('.track-vital-subnav-container').hide();

		$('.my-info-nav').click(function(){
			$('.subnav-container').slideToggle(300);
			$('.badge').toggleClass('badge-info');
			$('.nav-ui ').toggleClass('nav-ui-active ');
			$('.my-info-nav').toggleClass('my-info-nav-active')
		});

		$('.my-circle-nav').click(function(){
			$('.circle-subnav-container').slideToggle(300);
			$('.circle-badge').toggleClass('circle-badge-active');
			$('.my-circle-dropdown-nav').toggleClass('my-circle-dropdown-nav-active');
			$('.my-circle-nav').toggleClass('my-circle-nav-active')
		});

		$('.track-vital-dropdown-nav').click(function(){
			$('.track-vital-subnav-container').slideToggle(300);
			$('.track-vital-badge').toggleClass('track-vital-active');
			$('.track-vital-dropdown-nav').toggleClass('track-vital-dropdown-nav-active');
			$('.track-vital-nav').toggleClass('track-vital-nav-active');
		});

		$('.hamburger-button').on('click', function(){
			$('nav').toggleClass('nav-active');
		})

		$('.x-out').on('click', function(){
			$('nav').toggleClass('nav-active');
		})
	}
	
	navAnimations();

});




  function myCircleAnimations(){
	TweenMax.staggerFrom('.circle', 0.4, { 
		backgroundColor: '#f2f2f2',
		opacity: 0,
		y: -25,
		ease:Power4.easeOut
	  }, 0.04 );
  }
  
  myCircleAnimations();

TweenMax.to('.loading-screen', 1, {
	top: '-100%',
	delay: .5 
})


function vitalHomeAnimations(){
	TweenMax.to(['.map-container', '.map-container-track'] , .3 , {
		backgroundSize: '100%',
		delay: 1,
		
	})
	
// 	TweenMax.fromTo(['.outter-glow', '.outter-glow-insurance'] , .8, {
// 		width: '140px',
// 		height: '140px',
// 		yoyo: true,
// 		repeat: -1
	
		
// 	},{
// 		width: '160px',
// 		height: '160px',
// 		yoyo: true,
// 		repeat: -1
// 	})	
	
// 	TweenMax.to(['.outter-glow', '.outter-glow-insurance'], .8, {
// 		scale: 1.1,
// 		repeat: -1,
// 		yoyo: true
// 	})
 }

var mainContent = document.querySelector('.main-content');

mainContent.addEventListener('click', function(e){
    console.log(e.target);

    var nav = document.querySelector('.nav');
    // console.log('sanity');
    nav.classList.remove('nav-active');
})



function insurancePageAnimations(){
	var autoPopButton = document.querySelector('.auto-pop');
	var blankForm = document.querySelector('.insurance-inputs');
	var filledForm = document.querySelector('.filled-form');
	if(autoPopButton) {
		autoPopButton.addEventListener('click', function(){	
			TweenMax.to(blankForm, 2, { opacity: 0 , visibility: 'hidden'})
			TweenMax.to(filledForm , 2 , {opacity: 1, visibility: 'visible'})
		
			TweenMax.staggerFrom('.input-container-filled', .5, { 
				opacity: 0,
				y: -100,
				ease:Power4.easeOut
			}, 0.05 );
		})
	}

}


//this works outside of this functions scope.

function trackAnimations (){

var options = {
	  useEasing: true, 
	  useGrouping: true, 
	  separator: ',', 
	  decimal: '.', 
	};
	var trackTimer = document.querySelector('.track-timer');
	var demo = new CountUp(trackTimer, 10, 0, 0, 90, options);
	if (!demo.error) {
	  demo.start();
	} else {
	  console.error(demo.error);
	}
}

TweenMax.to('.additional-contact', 1, {
	// transfrom: 'scale(1.2)',
	scale: 1.2,
	repeat: -1,
	yoyo: true
})











vitalHomeAnimations();
insurancePageAnimations();
trackAnimations();