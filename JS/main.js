window.onscroll = function () {
  stick()
};

function stick() {

  var sticky = parseInt($(".main").css("top"));

  if (window.pageYOffset >= sticky) {
    $("#navbar").addClass("sticky");
  } else {
    $("#navbar").removeClass("sticky");    
  }
}

$(document).ready(function(){

  $("#login").click(function(){
    $('#loginModal').modal('toggle');
  });

  $("#bHome").click(function(){
    $("#CSS, #about, #HTML").hide();
    $("#home").show();
    $("#bHome").addClass("active");
    $("#bHTML, #bCSS, #bAbout").removeClass("active");
  });
  $("#bHTML").click(function(){
    $("#home, #CSS, #about").hide();
    $("#HTML").show();
    $("#bHTML").addClass("active");
    $("#bHome, #bCSS, #bAbout").removeClass("active");
  });
  $("#bCSS").click(function(){
    $("#home, #about, #HTML").hide();
    $("#CSS").show();
    $("#bCSS").addClass("active");
    $("#bHome, #bHTML, #bAbout").removeClass("active");    
  });
  $("#bAbout").click(function(){
    $("#home, #CSS, #HTML").hide();
    $("#about").show();
    $("#bAbout").addClass("active");
    $("#bHome, #bCSS, #bHTML").removeClass("active");
  });
});