/**localStorage**/
/**
for(var i=0,ln=localStorage.length; i<ln; i++) {
var key = localStorage.key(i);
var value = localStorage.getItem(key);
}**/
$(document).ready(function()
{
	var i = 0;
// Initial loading of tasks
for( i = 0; i < localStorage.length; i++)
	$("#todos").append("<li id='task-"+ i +"'>" + localStorage.getItem('task-'+i) + " <a href='#'>x</a></li>");
});



<li data-id="1c664348-8195-4164-a065-32da33cbdea1">
		<div class="view">
			<input class="toggle" type="checkbox">
			<label>linux</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="linux">
</li>