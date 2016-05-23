$(document).ready(function(){
	$('li').click(function(){
		var text=$(this).text();

		// TODO: Add a li with an id to target when we need to delete a li from the shopping cart
		// e.g <li id='+text+'>text</li>
		
		$('ul').prepend("<li id=cart>"+ text +"</li>");

	})

	// TODO: Have a function that deletes the clicked item in the cart,
	// Hint: get the id of the item clicked and remove it that way
	$('ul').click(function(e){
	 $(e.target).remove();

	})
});
