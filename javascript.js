$(document).ready(function() {
	$("nav ul li a").bind({
		mouseenter: function() {
			$(this).css("color", "#099")
		},
		mouseleave: function() {
			$(this).css("color", "white")
		},
		click: function() {
			$(this).css("color", "white")
		}
	});
	$("h3 a").bind({
		mouseenter: function() {
			$(this).css("color", "#099")
		},
		mouseleave: function() {
			$(this).css("color", "#777")
		},
		click: function() {
			$(this).css("color", "#777")
		}
	});
	$("p a").bind({
		mouseenter: function() {
			$(this).css("color", "#099")
		},
		mouseleave: function() {
			$(this).css("color", "#777")
		},
		click: function() {
			$(this).css("color", "#777")
		}
	});
});