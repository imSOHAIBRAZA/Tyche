// navigation
let menuIcon = document.querySelector(".menu-icon");
let navMenu = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("nav-active");

  menuIcon.classList.toggle("cross-icon");
});
// pop up gallery
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

// contact form
$("#showerror").hide();
$("#showsuccess").hide();

$("form").on("submit", function (e) {
  e.preventDefault();

  let name = $("#name").val();
  let email = $("#email").val();
  let message = $("#message").val();

  $.ajax({
    url: "process.php",
    method: "POST",
    data: { name: name, email: email, message: message },
    success: function (response) {
      if (response == "error") {
        $("#showsuccess").hide();
        $("#showerror").show();
      } else {
        $("#showerror").hide();
        $("#showsuccess").show();
      }
    },
  });
});
