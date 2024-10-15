$(document).ready(function () {
  // When a gallery item is clicked
  $(".gallery-item").click(function () {
    // Get the source of the clicked image
    var src = $(this).attr("src");
    // Set the lightbox image source
    $(".lightbox-content").attr("src", src);
    // Show the lightbox
    $(".lightbox").fadeIn();
  });

  // When the close button is clicked
  $(".close").click(function () {
    // Hide the lightbox
    $(".lightbox").fadeOut();
  });

  // Close the lightbox when clicking outside the image
  $(".lightbox").click(function (e) {
    if (e.target !== this) return; // Ensure the click is on the overlay
    $(this).fadeOut();
  });
});
