jQuery(document).ready(function($){
	var timelineBlocks = $('.timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame)
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.timeline-img, .timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.timeline-img').hasClass('is-hidden') ) && $(this).find('.timeline-img, .timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
});

/*
function openPage() {
	document.getElementById('controverse-1976').style.width = '100%';
	document.getElementById('controverse-1976-container').style.opacity = '1';
}

function closePage() {
	document.getElementById('controverse-1976').style.width = '0';
	document.getElementById('controverse-1976-container').style.opacity = '0';
}
*/

/*

$(window).scroll(function() {

	console.log("scroll");

    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 1000) {
        //clearHeader, not clearheader - caps H
		console.log("fixed");
        $('#sidebar').addClass('fixed');
    }
    else {
      $('#sidebar').removeClass('fixed');
    }
});

*/

var sidebar = document.getElementById('sidebar');
window.addEventListener('scroll', function() {
	if (document.getElementById('main') != null) {
		var st = document.body.scrollTop,
		mt = document.getElementById('main').offsetTop;
		if (st > mt) {
			sidebar.classList.add('fixed');
		}
		else {
			sidebar.classList.remove('fixed');
		}
	}
});
