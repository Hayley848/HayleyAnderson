$(document).ready(function() {
	$(".background nav ul li a").bind({
		mouseenter: function() {
			$(this).css("background", "#acf")
		},
		mouseleave: function() {
			$(this).css("background", "#222")
		},
		click: function() {
			$(this).css("background", "#222")
		}
	});
	$(".background nav ul li a").bind({
		mouseenter: function() {
			$(this).css("color", "#222")
		},
		mouseleave: function() {
			$(this).css("color", "#acf")
		},
		click: function() {
			$(this).css("color", "#acf")
		}
	});
	$(".background nav ul li a").bind({
		mouseenter: function() {
			$(this).css("border", "1px solid #222")
		},
		mouseleave: function() {
			$(this).css("border", "1px solid #acf")
		},
		click: function() {
			$(this).css("border", "1px solid #acf")
		}
	});
});