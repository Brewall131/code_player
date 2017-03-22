$(document).ready(function (){

	$('button').click(function () {
		$(this).toggleClass('active');
	});


	$('textarea').height($(window).height() - $('#header').height()- 10);


});