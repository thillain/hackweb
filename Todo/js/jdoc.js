$(function(){
	$('.inner').after('<p>Test</p>');

	$('li.third-item').nextAll().andSelf().css('background-color', 'red');

	$('#clickme').click(function() {
		$('#book').animate({
			opacity: 0.25,
			left: '+=50',
			height: 'toggle'
		}, 5000, function() {
// Animation complete.
});
	});
	$("#run").click(function(){
		$("div:animated").toggleClass("colored");
	});
	function animateIt() {
		$("#mover").slideToggle("slow", animateIt);
	}
	animateIt();
	$('.inner').append('<p>Test</p>');
	//var title = $("em").attr("title");
	//$("div").text(title);
	$('a[hreflang|="en"]').css('border','3px dotted green');
	$('input[name*="man"]').val('has man in it!');
	$('input[name$="letter"]').val('a letter');
	$('.binner').before('<p>Test</p>');
	$("p").blur();
	$('.target').change(function() {
		alert('Handler for .change() called.');
	});
	$("ul.topnav > li").css("border", "3px double red");
	$('ul.level-2').children().css('background-color', 'red');
	$('li.item-i').closest('ul')
	.css('background-color', 'red');
	$("div:contains('John')").css("text-decoration", "underline");
	$('li').filter(':even').css('background-color', 'red');

});
