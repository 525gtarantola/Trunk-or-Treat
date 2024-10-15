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
  $("#more-info-btn").on("click", function () {
    $("#event-description").toggle(); // Toggles the visibility of the description
    $(this).text($(this).text() === "More Info" ? "Less Info" : "More Info"); // Toggle button text
  });
});