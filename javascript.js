$(document).ready(function() {
	$("li a").mouseenter(function() {
		$(this).css("color", "#099")
	});
	$("li a").mouseleave(function() {
		$(this).css("color", "white")
	});
	$("li a").click(function() {
		$(this).css("color", "white")
	});
});
$(document).ready(function() {
	$("h3 a").mouseenter(function() {
		$(this).css("color", "#099")
	});
	$("h3 a").mouseleave(function() {
		$(this).css("color", "#777")
	});
	$("h3 a").click(function() {
		$(this).css("color", "#777")
	});
});
$(document).ready(function() {
	$("p a").mouseenter(function() {
		$(this).css("color", "#099")
	});
	$("p a").mouseleave(function() {
		$(this).css("color", "#777")
	});
	$("p a").click(function() {
		$(this).css("color", "#777")
	});
});