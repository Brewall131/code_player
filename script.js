$(document).ready(function (){

	$('button').click(function () {
		$(this).toggleClass('active');
	});


	$('.panel').height($(window).height() - $('#header').height() - 10);

	$('.panel').width(($(window).width() / 2) - 10);

	// FUNCTIONALITY FOR THE HTML TO IFRAME FEATURE //
	$('textarea').on('change keyup paste', function() {

		$('iframe').contents().find('html').html($('#htmlpanel').val());

	});
});