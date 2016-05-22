$(document).ready(function(){
console.log("hi how are you")

$('li').click(function(){
console.log(this);
var text=$(this).text();
$('ul').prepend("<li>"+text+"</li>");

})

$('ul').click(function(){
	$('ul').children().remove();
})


});
