$(document).ready(function(){
	$('.content-images').mouseenter(function() {
		$(this).fadeTo("slow", 0.1);
		$(this).closest(".content").find("h4").fadeTo("slow", 1);
	})
	.mouseleave(function(){
		$(this).fadeTo("slow", 1);
		$(this).closest(".content").find("h4").fadeTo("slow", 0);
	});
});