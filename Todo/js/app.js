/**localStorage**/
/**
for(var i=0,ln=localStorage.length; i<ln; i++) {
var key = localStorage.key(i);
var value = localStorage.getItem(key);
}**/


/**
$(document).ready(function()
{
	var i = 0;
// Initial loading of tasks
for( i = 0; i < localStorage.length; i++)
	$("#todo-list").append("<li id='task-"+ i +"'>" + localStorage.getItem('task-'+i) + " <a href='#'>x</a></li>");

$('input').bind("keypress",function (e) {
	if (e.which == 13) {
		if (  $("#new-todo").val() != "" ) {
			localStorage.setItem( "task-"+i, $("#new-todo").val() );
			$("#todo-list").append("<li id='task-"+i+"' draggable='true'>"+localStorage.getItem("task-"+i)+" <a href='#'>x</a></li>")
			$("#new-todo-" + i).css('display', 'none');
			$("#new-todo-" + i).slideDown();
			$("#new-todo").val("");
			i++;
		}
		return false;
		e.preventDefault();
	}
});
});

**/
/**
$(function(){
	var i = 0;
	var App={

		init: function() {
			this.render();
			this.ENTER_KEY = 13;
			this.toggle();
			this.create();
		},
		
		render: function(e){
			
			for( i = 0; i < localStorage.length; i++)
				$("#todo-list").append(App.buildHTML());
		},
		toggle: function() {
			$('#todo-list').bind("change",function( e ) {
				$(e.target).closest('li').toggleClass('completed');
				var data_id=$(e.target).closest('li').data('id');
				localStorage.setItem('class','completed');
				
			});
			
		},
		create: function(e) {
			$('input').bind("keypress",function(e){
				val = $.trim($('#new-todo').val() );
				if ( e.which !== App.ENTER_KEY || !val ) {
					return;
					e.preventDefault();this.bindelements();
				}
				App.append();
				$('#new-todo').val('');
				
			});
		},
		append: function(e){
			localStorage.setItem( "task-"+i, $("#new-todo").val());
			$("#todo-list").append(App.buildHTML());
		},
		buildHTML: function(e){
			html="<li data-id='task-"+i+"' class=''><div class='view'>\
			<input type='checkbox' class='toggle'>\
			<label>"+localStorage.getItem('task-'+i)+"</label>\
			<button class='destroy'></button></div>\
			<input value="+localStorage.getItem('task-'+i)+" class='edit'></li>"
			return html;
		}
		
	}
	App.init();
});**/




$(document).ready(function() { 

  var i = 0;

      // Initial loading of tasks
      for( i = 0; i < localStorage.length; i++)
        $("#todos").append("<li id='task-"+ i +"'><div><input type='checkbox' class='toggle'>" + localStorage.getItem('task-'+i) + " <a href='#'>x</a></div></li>");

      // Add a task
      $("#addTodo").submit(function() {
        if (  $("#new-todo").val() != "" ) {
          localStorage.setItem( "task-"+i, $("#new-todo").val() );
          $("#todos").append("<li id='task-"+i+"' draggable='true'>"+localStorage.getItem("task-"+i)+" <a href='#'>x</a></li>")
          $("#new-todo-" + i).css('display', 'none');
          $("#new-todo-" + i).slideDown();
          $("#new-todo").val("");
          i++;
        }
        return false;
      });
      
      // Remove a task      
      $("#todos li a").live("click", function() {
        localStorage.removeItem($(this).parent().attr("id"));
        $(this).parent().slideUp('slow', function() { $(this).remove(); } );
        for(i=0; i<localStorage.length; i++) {
          if( !localStorage.getItem("task-"+i)) {
            localStorage.setItem("task-"+i, localStorage.getItem('task-' + (i+1) ) );
            localStorage.removeItem('task-'+ (i+1) );
          }
        }
      });
      $(function () {
       $('#todos').sortable(); 
     });
    }); 