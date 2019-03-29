//Function to start when the web page is loaded
$(document).ready(function() {
  // $('a.create').on('click', function(event) {
  //   event.preventDefault();
  //   $('section').addClass("hidden");
  //   $('#create').removeClass("hidden");
  // });
  $('nav a').on('click', function(event) {
    event.preventDefault();
    var id = $(this).attr("id");
    if (id == undefined) {
      location.reload()
    }
    $('section').addClass("hidden");
    $(id).removeClass("hidden");
    $('.animgrid').removeClass("hidden");
  });
  $('#open').on('click', function(event) {
    $('#sidenav').css("width", "250px");
    $('article').css("margin-left", "250px");
  });
  $('#close').on('click', function(event) {
    $('#sidenav').css("width", "0px");
    $('article').css("margin-left", "0");
  });
  $('#start').click(function(ev) {
    ev.preventDefault();
    $('section').addClass("hidden");
    $('#workflow').removeClass("hidden");
  });
  $('#coding').click(function(ev) {
    ev.preventDefault();
    $('section').addClass("hidden");
    $('#create').removeClass("hidden");
    $('#animgrid').removeClass("hidden");
  });
  $('#next').click(function(ev) {
    ev.preventDefault();
    $('.animcode').css("animation-name", "fadeIn");
    $('.animcode').removeClass('hidden');
    $('.animtext').css("animation-name", "fadeIn");
    $('.animtext').removeClass('hidden');
    $('.localrepo').css("animation-name", "fadeIn");
    $('.localrepo').removeClass('hidden');
    $('#next').addClass('hidden');
    $('#createfile').removeClass("hidden");
  })
});
