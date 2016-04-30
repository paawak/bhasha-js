

$(document).ready(function(){
$('#indicTextEditor').on('keydown keyup keypress', function(keyEvent) {

      console.log("keyCode: "+keyEvent.keyCode + ", charCode: " + keyEvent.charCode + ", which:" + keyEvent.which);
	  
	  if (keyEvent.charCode == 97) {
			//keyEvent.preventDefault();
			var e1 = jQuery.Event( "keydown", {keyCode: 0, charCode: 13, which: 13} );			
			$('#indicTextEditor').trigger(e1);
			var e2 = jQuery.Event( "keypress", {keyCode: 0, charCode: 13, which: 13} );			
			$('#indicTextEditor').trigger(e2);
			var e3 = jQuery.Event( "keyup", {keyCode: 0, charCode: 13, which: 13} );			
			$('#indicTextEditor').trigger(e3);
	  }
});
});

