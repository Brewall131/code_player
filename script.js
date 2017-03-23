$(document).ready(function (){

	//UPDATING THE OUTPUT OF THE IFRAME WHEN THE PAGE LOADS, AND CREATING A FUNCTION FOR EVENTS LATER
	function updateOutput () {
		$('iframe').contents().find('html').html("<html><head><style type='text/css'>" + $('#csspanel').val() + "</style></head><body>" + $('#htmlpanel').val() + "</body></html>");
		
		document.getElementById("outputpanel").contentWindow.eval($('#javascriptpanel').val());
		
	};

	updateOutput();

	//SETTING HEIGHT OF PANELS
	$('.panel').height($(window).height() - $('#header').height() - 10);


	//WHEN BUTTONS ARE PRESSED, TEXTAREAS WITH THE CORRECT WIDTH APPEAR
	$('button').click(function () {
		$(this).toggleClass('active');

		var panelId = $(this).attr('id') + "panel";
		
		$("#" + panelId).toggleClass('hidden');

		var numberOfActivePanels = 4 - $('.hidden').length;

		$('.panel').width(($(window).width() / numberOfActivePanels) - 10);

	});


	// WHEN THE TEXTAREA IS USED, THE OUTPUT UPDATES
	$('textarea').on('change keyup paste', function() {
		updateOutput();
	});

});