$(document).ready(function() {
	$("#about h3 a, #about p a, #footer p a").bind({
		mouseenter: function() {
			$(this).css("text-decoration", "underline")
		},
		mouseleave: function() {
			$(this).css("text-decoration", "none")
		},
		click: function() {
			$(this).css("text-decoration", "none")
		},
	});
	$("#about nav ul li a").bind({
		mouseenter: function() {
			$(this).css("background", "#1DC4F3")
		},
		mouseleave: function() {
			$(this).css("background", "#F3EFF0")
		},
		click: function() {
			$(this).css("background", "#F3EFF0")
		}
	});
	$("#about nav ul li a").bind({
		mouseenter: function() {
			$(this).css("color", "#F3EFF0")
		},
		mouseleave: function() {
			$(this).css("color", "#1DC4F3")
		},
		click: function() {
			$(this).css("color", "#1DC4F3")
		}
	});
	$("#about nav ul li a").bind({
		mouseenter: function() {
			$(this).css("border", "1px solid #F3EFF0")
		},
		mouseleave: function() {
			$(this).css("border", "1px solid #1DC4F3")
		},
		click: function() {
			$(this).css("border", "1px solid #1DC4F3")
		}
	});
	$("#contact .typcn").bind({
		mouseenter: function() {
			$(this).css("color", "#1DC4F3")
		},
		mouseleave: function() {
			$(this).css("color", "#F3EFF0")
		},
		click: function() {
			$(this).css("color", "#F3EFF0")
		}
	});
});