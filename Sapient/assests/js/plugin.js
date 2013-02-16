// jQuery
$.getScript("assests/js/jquery.tablesorter.min.js", function() {
	// call the tablesorter plugin
	$("#tablesorter").tablesorter({
		// sort on the first column and third column, order asc
		sortList : [[0, 0], [1, 0]]
	});
});

// Cache clear via Ajax
$.ajaxSetup ({  
        cache: false  
    }); 

// Default ajax call for page1

$(function(){
$.get('partials/page1.html',function(data) {
$("section.main").html(data);
})
});

// Ajax calls from nav links	
var ajax_load = "<img src='img/load.gif' alt='loading...' />"; 
$("a").click(function() {
var url = $(this).attr('href');
$.get(url,function(data) {
$("section.main").html(data);
})
	return false;
});