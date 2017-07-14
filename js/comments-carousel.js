$(document).ready(function() {
    $("#comments-owl-carousel").owlCarousel({
        items: 4,
  itemsDesktop      : [1199, 4],
  itemsDesktopSmall :	[992, 3],
        itemsTablet	: [768, 2],
        itemsMobile	: [450, 2],
         navigation : true,
        navigationText : ["<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>", "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"]
    });
});