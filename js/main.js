$(document).ready(function () {
  $(".first-button").on("click", function () {
    $(".animated-icon1").toggleClass("open");
  });
  $(".second-button").on("click", function () {
    $(".animated-icon2").toggleClass("open");
  });
  $(".third-button").on("click", function () {
    $(".animated-icon3").toggleClass("open");
  });
});

// validacion del nombre
$("#contact-name").blur(function (e) {
  let inputName = $("#contact-name").val();
  if (inputName == "") {
    $("#mensaje1").fadeIn();
    return false;
  } else {
    $("#mensaje1").fadeOut();
  }
});

//validacion del mail
$("#contact-email").blur(function (e) {
  let inputMail = $("#contact-email").val();
  if (
    inputMail.indexOf("@", 0) == -1 ||
    inputMail.indexOf(".", 0) == -1 ||
    inputMail == ""
  ) {
    $("#mensaje2").fadeIn();
    return false;
  } else {
    $("#mensaje2").fadeOut();
  }
});

//guardar valor del Select (revisar)
$("#selector").change(function (e) {
  let option = e.target;
  console.log(option);
});

// Validacion del campo de texto
$("#contact-message").blur(function (e) {
  let mensaje = $("#contact-message").val();
  if (mensaje.length < 6 || mensaje == "") {
    $("#mensaje3").fadeIn();
    return false;
  } else {
    $("#mensaje3").fadeOut();
  }
});

// Validacion checkbox
$("#defaultContactFormCopy").change(function (e) {
  let checkbox;
  if ($(this).is(":checked")) {
    checkbox = true;
    console.log(checkbox);
  } else {
    checkbox = false;
    console.log(checkbox);
  }
});
