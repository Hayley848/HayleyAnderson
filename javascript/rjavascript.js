$(document).ready(function() {
	$("a").bind({
		mouseenter: function() {
			$(this).css("text-decoration", "underline")
		},
		mouseleave: function() {
			$(this).css("text-decoration", "none")
		},
		click: function() {
			$(this).css("text-decoration", "none")
		}
	});
});
