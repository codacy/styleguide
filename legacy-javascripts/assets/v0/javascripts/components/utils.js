$(".panel-empty").hover(function() {
  $(this).find(".cta-add-project").toggleClass("hidden");
  $(this).find(".empty-project").toggleClass("hidden");
});

$(".side-toast .fa-times").click(function(){
  $(this).closest(".side-toast").fadeOut("fast");
});