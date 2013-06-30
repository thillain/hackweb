//<![CDATA[
var src = document.getElementById("semantic-template").innerHTML;
var tmpl = Handlebars.compile(src);
$.getJSON("assests/json/carousel-data.json", function(data) {
	$("#content-template").html(tmpl({objects:data}));
});
//]]>
App=Ember.Application.create();
App.Router.map(function(){
	this.resource('project');
	this.resource('about');
});