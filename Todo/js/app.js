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

      // Add a task
     /** $('input').bind("keypress",function(e) {
            val = $.trim($('#new-todo').val() );
      	if (  $("#new-todo").val() != "" ) {
      		localStorage.setItem( "task-"+i, $("#new-todo").val() );
      		$('#todo-list').append(buildHTML);
      		$("#new-todo-" + i).css('display', 'none');
      		$("#new-todo-" + i).slideDown();
      		i++;
                  $("#new-todo").val("");
            }
            return false;
      });
**/
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
      $('#todo-list').bind("change",function( e ) {
            $(e.target).closest('li').toggleClass('completed');
            

      });

      function buildHTML() {
      	html="<li data-id='task-"+i+"' class=''><div class='view'>\
      	<input type='checkbox' class='toggle'>\
      	<label>"+localStorage.getItem('task-'+i)+"</label>\
      	<button class='destroy'></button></div>\
      	<input value="+localStorage.getItem('task-'+i)+" class='edit'></li>"
      	return html;
      };
      $(function () {
      	$('#todos').sortable(); 
      });
}); 