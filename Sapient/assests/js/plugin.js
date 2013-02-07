// jQuery
$.getScript("/assests/js/jquery.tablesorter.min.js", function() {
	// call the tablesorter plugin
	$("#tablesorter").tablesorter({
		// sort on the first column and third column, order asc
		sortList : [[0, 0], [1, 0]]
	});
});

