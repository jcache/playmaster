console.log('do somehint');
$("#ApplicationBody").scroll(function () {
  console.log('happening')
 var sc = $("#ApplicationBody").scrollTop()
  if (sc > 100) {
      $(".header-sroll").addClass("small")
  } else {
      $(".header-sroll").removeClass("small")
  }
});
