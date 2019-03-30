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
    $('#gitinit').css("animation-name", "fadeIn");
    $('#gitinit').removeClass('hidden');
    $('#gitinitex').css("animation-name", "fadeIn");
    $('#gitinitex').removeClass('hidden');
    $('.localrepo').css("animation-name", "fadeIn");
    $('.localrepo').removeClass('hidden');
    $('#next').addClass('hidden');
    $('#connectrepository').removeClass("hidden");
  });
  $('#connectrepository').click(function(ev) {
    ev.preventDefault();
    $('#gitinit').addClass("hidden");
    $('#gitinitex').addClass("hidden");
    $('#connectrepo').css("animation-name", "fadeIn");
    $('#connectrepo').removeClass('hidden');
    $('#connectrepotext').css("animation-name", "fadeIn");
    $('#connectrepotext').removeClass('hidden');
    $('#connectrepotext2').css("animation-name", "fadeIn");
    $('#connectrepotext2').removeClass('hidden');
    $('.remoterepo').css("animation-name", "fadeIn");
    $('.remoterepo').removeClass('hidden');
    $('#connectrepository').addClass('hidden');
    $('#setuser').removeClass("hidden");
  });
  $('#setuser').click(function(ev) {
    ev.preventDefault();
    $('#connectrepo').addClass("hidden");
    $('#connectrepotext').addClass("hidden");
    $('#connectrepotext2').addClass("hidden");
    $('#adduser1').css("animation-name", "fadeIn");
    $('#adduser1').removeClass('hidden');
    $('#adduser2').css("animation-name", "fadeIn");
    $('#adduser2').removeClass('hidden');
    $('#addusertext').css("animation-name", "fadeIn");
    $('#addusertext').removeClass('hidden');
    $('.profileicon').css("animation-name", "fadeIn");
    $('.profileicon').removeClass('hidden');
    $('#setuser').addClass('hidden');
    $('#createfile').removeClass("hidden");
  });
  $('#createfile').click(function(ev) {
    ev.preventDefault();
    $('#adduser1').addClass("hidden");
    $('#adduser2').addClass("hidden");
    $('#addusertext').addClass("hidden");
    $('#createfiletext').css("animation-name", "fadeIn");
    $('#createfiletext').removeClass("hidden");
    $('#createfileex').css("animation-name", "fadeIn");
    $('#createfileex').removeClass("hidden");
    $('.localreposvg').css("animation-name", "fadeIn");
    $('.localreposvg').removeClass("hidden");
    $('#createfile').addClass('hidden');
  })
});
