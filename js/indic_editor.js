

$(document).ready(function(){
$('#indicTextEditor').keypress(function(keyEvent) {

      console.log("keyCode: "+keyEvent.keyCode + ", charCode: " + keyEvent.charCode + ", which:" + keyEvent.which);
	  
	  if (keyEvent.charCode == 97) {
		  
			//keyEvent.preventDefault();
			var code = 65;
			keyEvent.which = code;
			var e1 = jQuery.Event( "keydown", {which: code} );			
			$('#indicTextEditor').trigger(e1);
			var e2 = jQuery.Event( "keypress", {which: code} );			
			$('#indicTextEditor').trigger(e2);
			var e3 = jQuery.Event( "keyup", {which: code} );			
			$('#indicTextEditor').trigger(e3);
	  }
});
});

