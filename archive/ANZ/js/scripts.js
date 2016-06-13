jQuery(document).ready(function() {
/*
Form validation
*/
$('.register form').submit(function(){
	$(this).find("label[for='firstname']").html('First Name');
	$(this).find("label[for='middlename']").html('Middle Name');
	$(this).find("label[for='lastname']").html('Last Name');
	$(this).find("label[for='address1']").html('Address Line1');
	$(this).find("label[for='address2']").html('Address Line2');
	$(this).find("label[for='city']").html('City');
	$(this).find("label[for='state']").html('State');
	$(this).find("label[for='pcode']").html('Postcode');
////
var firstname = $(this).find('input#firstname').val();
var middlename = $(this).find('input#middlename').val();
var lastname = $(this).find('input#lastname').val();
var address1 = $(this).find('input#address1').val();
var address2 = $(this).find('input#address2').val();
var city = $(this).find('input#city').val();
var state = $(this).find('input#state').val();
var pcode = $(this).find('input#pcode').val();
if(firstname == '') {
	$(this).find("label[for='firstname']").append("<span style='display:none' class='red'> - Please enter your first name.</span>");
	$(this).find("label[for='firstname'] span").fadeIn('medium');
	return false;
}
if(middlename == '') {
	$(this).find("label[for='middlename']").append("<span style='display:none' class='red'> - Please enter your middle name.</span>");
	$(this).find("label[for='middlename'] span").fadeIn('medium');
	return false;
}
if(lastname == '') {
	$(this).find("label[for='lastname']").append("<span style='display:none' class='red'> - Please enter a valid lastname.</span>");
	$(this).find("label[for='lastname'] span").fadeIn('medium');
	return false;
}
if(address1 == '') {
	$(this).find("label[for='address1']").append("<span style='display:none' class='red'> - Please enter a valid Address.</span>");
	$(this).find("label[for='address1'] span").fadeIn('medium');
	return false;
}
if(address2 == '') {
	$(this).find("label[for='address2']").append("<span style='display:none' class='red'> - Please enter a valid Address.</span>");
	$(this).find("label[for='address2'] span").fadeIn('medium');
	return false;
}
if(city == '') {
	$(this).find("label[for='city']").append("<span style='display:none' class='red'> - Please enter a valid City.</span>");
	$(this).find("label[for='city'] span").fadeIn('medium');
	return false;
}
if(state == '') {
	$(this).find("label[for='state']").append("<span style='display:none' class='red'> - Please enter a valid State.</span>");
	$(this).find("label[for='state'] span").fadeIn('medium');
	return false;
}
if(pcode == '') {
	$(this).find("label[for='pcode']").append("<span style='display:none' class='red'> - Please enter a valid Post Code.</span>");
	$(this).find("label[for='pcode'] span").fadeIn('medium');
	return false;
}
});
}); 


///

(function( $ ) {
  $.fn.filter = function() {
  
     $(this).keydown(function (e) {
        if (e.shiftKey || e.ctrlKey || e.altKey) { // if shift, ctrl or alt keys held down
            e.preventDefault();         // Prevent character input
        } else {
            var n = e.keyCode;
            if (!((n == 8)              // backspace
            || (n == 46)                // delete
            || (n >= 35 && n <= 40)     // arrow keys/home/end
            || (n >= 48 && n <= 57)     // numbers on keyboard
            || (n >= 96 && n <= 105))   // number on keypad
            ) {
                e.preventDefault();     // Prevent character input
            }
        }
    })

  };
})( jQuery );

$(document).ready(function(){
	$('#pcode').filter();
})
