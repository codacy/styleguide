$(function() {
  var inputSearch = $(".bs-searchbox input");
  var divider = $(".project-name .dropdown-menu .divider");
  var addProject = $(".project-name .dropdown-menu .divider + li");

  inputSearch.on("input", function () {
    var lastChild = $(".project-name .dropdown-menu li:last-child");
    divider.removeClass("hidden");
    addProject.removeClass("hidden");

    if(lastChild.hasClass("no-results")) {
      $(lastChild).after(addProject).after(divider);
    }
  });

  //SVG converter to the sidebar

  $('.aside-icon.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image's ID to the new SVG
      if(typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Check if the viewport is set, else we gonna set it if we can.
      if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }

      // Replace image with new SVG
      $img.replaceWith($svg);
    }, 'xml');
  });
});
