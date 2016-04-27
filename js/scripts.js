$(document).ready(function(){
console.log("hi how are you")

$('li').click(function(){
console.log(this);
var text=$(this).text();
$('ul').append("<li>"+text+"</li>")
});
});