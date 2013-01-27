$(document).ready(function() { 

  var i = 0;

      // Initial loading of tasks
      for( i = 0; i < localStorage.length; i++)
        $("#todos").append("<li id='task-"+ i +"'>" + localStorage.getItem('task-'+i) + " <a href='#'>x</a></li>");

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
