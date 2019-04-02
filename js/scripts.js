//Function to start when the web page is loaded
$(document).ready(function() {
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
    $('.top').removeClass("hidden");
    $('.bottom').removeClass("hidden");
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
    $('#connectrepotext3').css("animation-name", "fadeIn");
    $('#connectrepotext3').removeClass('hidden');
    $('#connectrepo1').css("animation-name", "fadeIn");
    $('#connectrepo1').removeClass('hidden');
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
    $('#create').css("animation-name", "fadeOut");
    $('#create').addClass("hidden");
    $('#setuserinfo').css("animation-name", "fadeIn");
    $('#setuserinfo').removeClass("hidden");
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
    $('#localreposvg').css("animation-name", "fadeIn");
    $('#localreposvg').removeClass("hidden");
    $('#createfile').addClass('hidden');
    $('#addfile').removeClass('hidden');
  });
  $('#addfile').click(function(ev) {
    ev.preventDefault();
    $('#createfiletext').addClass("hidden");
    $('#createfileex').addClass("hidden");
    $('#addfiletext').css("animation-name", "fadeIn");
    $('#addfiletext').removeClass("hidden");
    $('#addfileex').css("animation-name", "fadeIn");
    $('#addfileex').removeClass("hidden");
    $('.staging').css("animation-name", "fadeIn");
    $('.staging').removeClass('hidden');
    $('#localtostaging').css("animation-name", "localToStage");
    $('#localtostaging').removeClass("hidden");
    $('#localarrow').css("animation-name", "localArrowToStage");
    $('#localarrow').removeClass("hidden");
    $('#addfile').addClass('hidden');
    $('#commitfile').removeClass('hidden');
    $('#setuserinfo').css("animation-name", "fadeOut");
    $('#setuserinfo').addClass("hidden");
    $('#addcommit').css("animation-name", "fadeIn");
    $('#addcommit').removeClass("hidden");
  });
  $('#commitfile').click(function(ev) {
    ev.preventDefault();
    $('#addfileex').addClass("hidden");
    $('#addfiletext').addClass("hidden");
    $('#localarrow').addClass("hidden");
    $('#committext').css("animation-name", "fadeIn");
    $('#committext').removeClass("hidden");
    $('#commitex').css("animation-name", "fadeIn");
    $('#commitex').removeClass("hidden");
    $('#commiticon').css("animation-name", "fadeIn");
    $('#commiticon').removeClass("hidden");
    $('#commitfile').addClass('hidden');
    $('#pushfile').removeClass('hidden');
  });
  $('#pushfile').click(function(ev) {
    ev.preventDefault();
    $('#committext').addClass("hidden");
    $('#commitex').addClass("hidden");
    $('#pushtext').css("animation-name", "fadeIn");
    $('#pushtext').removeClass("hidden");
    $('#pushex').css("animation-name", "fadeIn");
    $('#pushex').removeClass("hidden");
    $('#localtostaging').addClass("hidden");
    $('#commiticon').css("animation-name", "commitStagingtoRemote");
    $('#staging').css("animation-name", "fileStagingtoRemote");
    $('#stagingarrow').css("animation-name", "fadeIn");
    $('#stagingarrow').removeClass("hidden");
    $('#staging').removeClass("hidden");
    $('#pushfile').addClass('hidden');
    $('#next').removeClass('hidden');
    $('#addcommit').css("animation-name", "fadeOut");
    $('#addcommit').addClass("hidden");
    $('#pushcommit').css("animation-name", "fadeIn");
    $('#pushcommit').removeClass("hidden");
  });
});
