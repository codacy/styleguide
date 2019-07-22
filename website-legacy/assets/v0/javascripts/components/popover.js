$(document).ready(function(e) {
  var $popoverElements = $('[data-toggle="popover"]');

  $popoverElements.each(function() {
    var $popoverElement = $(this);
    $popoverElement.popover().data("bs.popover").tip().addClass($popoverElement.data("type"));
  });
});
