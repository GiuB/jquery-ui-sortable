function toggleFields(el) {
	el.slideToggle( "slow", function() {
    // Animation complete.
  });
}
jQuery(document).ready(function($) {
	$(".ui-state-default .icon").click(function() {
		toggleFields($(this).parent().find(".fields-container"));
	});
});