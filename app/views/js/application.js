$("#ApplicationBody").scroll(function () {
  //
  var sc = $("#ApplicationBody").scrollTop();
  //
  if (sc > 100) {
    $(".header-sroll").addClass("small")
  } else {
    $(".header-sroll").removeClass("small")
  }
  //
});
// $(document.body).ready(function () {
//   var SignUp = require("../main_source/views/components/signup");
//   return (function() {
//     signup();
//     $("modal1").openModal();
//   })();
// });
