$(document).ready(function () {
  $(".gallery-item").click(function () {
    var src = $(this).attr("src");
    $(".lightbox-content").attr("src", src);
    $(".lightbox").fadeIn();
  });

  // When the close button is clicked
  $(".close").click(function () {
    $(".lightbox").fadeOut();
  });

  // Close the lightbox when clicking outside the image
  $(".lightbox").click(function (e) {
    if (e.target !== this) return; 
    $(this).fadeOut();
  });
});



$(document).ready(function () {
  // Toggle event info on heading click
  $(".event-heading").on("click", function () {
    $(this).next(".event-info").slideToggle(); // Slide toggle the associated info
  });
});