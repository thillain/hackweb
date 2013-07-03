$(document).ready(function(){
	$(function() { 
		$.ajax({
			url:'https://github.com/judearasu.private.atom?token=8e2df4c2c72f699c0bb23bece8f866a7',
			dataType:'xml',
			type:'GET',
			success:function(xml) {
				$(xml).find('item').each(function() {
					var title = $(this).find("title").text(); 
					var des = $(this).find("description").text();
					var link = $(this).find("link").text();
					var $des = $('<div class="linkitem"></div>').html(des);
					var $link = $('<a></a>').attr('href',link).attr('target','_blank').html(title);
					var pubDate = new Date($(this).find("pubDate").text()); 
					var day = pubDate.getDate();
					var month = pubDate.getMonth() + 1;
					var year = pubDate.getFullYear();
					var date = day + '/' + month + '/' + year;
					var $date = $('<div class="date"></div>').text(date)    
					var wrapper = "<li class='single-feed'>";
					$(".feed-container").append($(wrapper).append($link,$date,$des));                   })

			},
			error:function() {
				alert("I am sorry, But I can't fetch that feed");
			}
		});
	});
	
});

