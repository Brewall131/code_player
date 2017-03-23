$(document).ready(function (){

	$('button').click(function () {
		$(this).toggleClass('active');

		var panelId = $(this).attr('id') + "panel";
		
		$("#" + panelId).toggleClass('hidden');

		var numberOfActivePanels = 4 - $('.hidden').length;

		$('.panel').width(($(window).width() / numberOfActivePanels) - 10);

	});


	$('.panel').height($(window).height() - $('#header').height() - 10);

	$('.panel').width(($(window).width() / 2) - 10);

	// FUNCTIONALITY FOR THE HTML TO IFRAME FEATURE 
	$('textarea').on('change keyup paste', function() {

		//$('iframe').contents().find('html').html($("#htmlpanel").val());
		$('iframe').contents().find('html').html("<html><head><style type='text/css'>" + $('#csspanel').val() + "</style></head><body>" + $('#htmlpanel').val() + "</body></html>");

	});

	// FUNCTIONALITY FOR THE CSS TO IFRAME FEATURE 
});