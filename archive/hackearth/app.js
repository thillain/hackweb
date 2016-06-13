(function($)
{   
	$( "a.btn" ).on( "click", function() {
		$('#myModal').modal();
	});
	$('#myTab a:last').tab('show')
	$("form").on("submit",function(event){
       // Stop form from submitting normally
       event.preventDefault();
       var $form = $(this),
       name=$form.find("#inputname").val(),
       track=$form.find("#inputtracknumber").val();
       $form.hide();


       $.ajax({
       	type: "GET",
       	url: "http://itunes.apple.com/search",
       	data: { term: name, limit: track },
       	dataType: 'jsonp'
       })
       .done(function(data) {
       	$('#myModal').modal();
       	var items = [], 
       	    contents =[];
       	$.each(data.results, function (i,artist) {
       	    items.push( "<li><a href='#" + artist.artistName+ "'>" + artist.artistName + "</a></li>" );
       	});
       	$("#myTab").html(items);
       	$.each(data.results,function(i,artist){
            contents.push("<div class='tab-pane'>"+artist.artistName+"</div>");
       	});
       	$("#tab-content").html(contents);
       	
       });


       
   });
	
})(jQuery);