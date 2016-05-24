$(document).ready(function(){
	$('li').click(function(){
		var text=$(this).text();

		
		$('ul').prepend("<li id=cart>"+ text +"</li>");

	})

	
	$('ul').click(function(e){
	 $(e.target).remove();

	})
});
