// jQuery
$.getScript("/assests/js/jquery.tablesorter.min.js", function() {
	// call the tablesorter plugin
	$("#tablesorter").tablesorter({
		// sort on the first column and third column, order asc
		sortList : [[0, 0], [1, 0]]
	});
});


$("a").click(function() {
	var url = $(this).attr('href');
	$.get(url, function(result) {
		$('#content div.bx-wrapper').empty();
		$("#ajax").html(result);
	});
	return false;
});

/**
Load default 1.html
**/

$(function () {
   $.get('/ajax/1.html', function(result) {
			$('#content div.bx-wrapper').empty();
			$("#ajax").html(result);
   });
});



