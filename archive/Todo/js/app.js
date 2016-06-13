/**localStorage**/
/**
for(var i=0,ln=localStorage.length; i<ln; i++) {
var key = localStorage.key(i);
var value = localStorage.getItem(key);
}**/

$(document).ready(function() { 
	var i = 0;

      // Initial loading of tasks
      for( i = 0; i < localStorage.length; i++)
      	
        $('#todo-list').append(buildHTML);

      $('input').bind("keypress",function(e){
        val = $.trim($('#new-todo').val() );
        if ( e.which !== 13 || !val ) {
          return;
          e.preventDefault();
        }
        localStorage.setItem( "task-"+i, $("#new-todo").val() );
        $('#todo-list').append(buildHTML);
        i++;
        $('#new-todo').val('');

      });
      // Remove a task      
      $(".destroy").live("click", function(e) {
      	localStorage.removeItem($(e.target).closest('li').data('id'));
      	$(this).parent().slideUp('slow', function() { $(this).remove(); } );
      	for(i=0; i<localStorage.length; i++) {
      		if( !localStorage.getItem("task-"+i)) {
      			localStorage.setItem("task-"+i, localStorage.getItem('task-' + (i+1) ) );
      			localStorage.removeItem('task-'+ (i+1) );
      		}
      	}
      });


     // Task Toggling
      $('.toogle').unbind('click');
      $('.toggle').click( function() {
        var todo = $(this).parent().parent();
        todo.toggleClass('completed');
        $(todo).toggleDisabled();
      });

    //Building the task tags
      function buildHTML() {
       html="<li data-id='task-"+i+"' class=''><div class='view'>\
       <input type='checkbox' class='toggle'>\
       <label>"+localStorage.getItem('task-'+i)+"</label>\
       <button class='destroy'></button></div>\
       <input value="+localStorage.getItem('task-'+i)+" class='edit'></li>"
       return html;
     };

     //Toggling plugin
     (function($) {
      $.fn.toggleDisabled = function() {
        return this.each(function() {
          var $this = $(this);
          if ($this.attr('draggable')) $this.removeAttr('draggable');
          else $this.attr('draggable', 'true');
          
        });
      };
    })(jQuery);


    //Sortable plugin
    $('#todo-list').sortable({
      items: ':not(.disabled)'
    });
    
  }); 
