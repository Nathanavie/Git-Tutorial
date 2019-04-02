//Function to start when the web page is loaded
$(document).ready(function() {
  $('#home').on('click', function(event) {
    event.preventDefault();
      location.reload();
  });

  $('#open').on('click', function(event) {
    $('#sidenav').css("width", "250px");
  });

  $('#close').on('click', function(event) {
    $('#sidenav').css("width", "0px");
  });

  $('article').on('click', function(event) {
    $('#sidenav').css("width", "0px");
  });

  $('.start').click(function(ev) {
    ev.preventDefault();
    $('section').addClass("hidden");
    $('#workflow').removeClass("hidden");
  });

  $('.coding').click(function(ev) {
    ev.preventDefault();
    $.fn.hideAnimation();
    $.fn.startanimation();
  });

  $('.next').click(function(ev) {
    ev.preventDefault();
    $.fn.hideAnimation();
    $.fn.startanimation();
    $.fn.gitInit();
  });

  $('.connectrepository').click(function(ev) {
    ev.preventDefault();
    $.fn.hideAnimation();
    $.fn.startanimation();
    $('.localrepo').css("opacity", "1");
    $('.localrepo').removeClass("hidden");
    $.fn.connectRepo();
  });

  $('.setuser').click(function(ev) {
  ev.preventDefault();
  $.fn.hideAnimation();
  $.fn.startanimation();
  $('.localrepo').css("opacity", "1");
  $('.localrepo').removeClass("hidden");
  $('.remoterepo').css("opacity", "1");
  $('.remoterepo').removeClass("hidden");
  $.fn.setUser();
  });

  $('.createfile').click(function(ev) {
    ev.preventDefault();
    $.fn.hideAnimation();
    $.fn.startanimation();
    $('.localrepo').css("opacity", "1");
    $('.localrepo').removeClass("hidden");
    $('.remoterepo').css("opacity", "1");
    $('.remoterepo').removeClass('hidden');
    $('.profileicon').css("opacity", "1");
    $('.profileicon').removeClass('hidden');
    $.fn.createFile();
  });

  $('.addfile').click(function(ev) {
    ev.preventDefault();
    $.fn.hideAnimation();
    $.fn.startanimation();
    $('.localrepo').css("opacity", "1");
    $('.localrepo').removeClass("hidden");
    $('.remoterepo').css("opacity", "1");
    $('.remoterepo').removeClass('hidden');
    $('.profileicon').css("opacity", "1");
    $('.profileicon').removeClass("hidden");
    $('#localreposvg').css("opacity", "1");
    $('#localreposvg').removeClass("hidden");
    $.fn.addFile();
  });

  $('.commitfile').click(function(ev) {
    ev.preventDefault();
    $.fn.commitFile();
  });

  $('.pushfile').click(function(ev) {
    ev.preventDefault();
    $.fn.hideAnimation();
    $.fn.startanimation();
    $('.localrepo').css("opacity", "1");
    $('.localrepo').removeClass("hidden");
    $('.remoterepo').css("opacity", "1");
    $('.remoterepo').removeClass('hidden');
    $('.profileicon').css("opacity", "1");
    $('.profileicon').removeClass("hidden");
    $('#localreposvg').css("opacity", "1");
    $('#localreposvg').removeClass("hidden");
    $('#commiticon').css("opacity", "1");
    $('#commiticon').removeClass("hidden");
    $('.staging').css("opacity", "1");
    $('.staging').removeClass("hidden");
    $.fn.pushFile();
  });

  $.fn.hideAnimation = function() {
    $('.animgrid').children().find('h4').addClass("hidden");
    $('.animgrid').children().find('img').addClass("hidden");
    $('.animgrid').children().find('p').addClass("hidden");
    $('.animgrid').find('button').addClass("hidden");
  };
  $.fn.startanimation = function() {
      $('section').addClass("hidden");
      $('#next').removeClass("hidden");
      $('#create').removeClass("hidden");
      $('.left').removeClass("hidden");
      $('.right').removeClass("hidden");
  };
  $.fn.gitInit = function() {
    $('#gitinit').css("animation-name", "fadeIn");
    $('#gitinit').removeClass('hidden');
    $('#gitinitex').css("animation-name", "fadeIn");
    $('#gitinitex').removeClass('hidden');
    $('.localrepo').css("animation-name", "fadeIn");
    $('.localrepo').removeClass('hidden');
    $('#next').addClass('hidden');
    $('#connectrepository').removeClass("hidden");
  };

  $.fn.connectRepo = function() {
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
    $('#setuser').removeClass("hidden");
  };

  $.fn.setUser = function() {
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
    $('#create').addClass("hidden");
    $('#setuserinfo').css("animation-name", "fadeIn");
    $('#setuserinfo').removeClass("hidden");
  };

  $.fn.createFile = function() {
    $('#adduser1').addClass("hidden");
    $('#adduser2').addClass("hidden");
    $('#addusertext').addClass("hidden");
    $('#createfiletext').css("animation-name", "fadeIn");
    $('#createfiletext').removeClass("hidden");
    $('#createfileex').css("animation-name", "fadeIn");
    $('#createfileex').removeClass("hidden");
    $('#localreposvg').css("animation-name", "fadeIn");
    $('#localreposvg').removeClass("hidden");
    $('#create').addClass("hidden");
    $('#addfile').removeClass('hidden');
  };

 $.fn.addFile = function() {
    $('#create').addClass("hidden");
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
    $('#commitfile').removeClass('hidden');
    $('#setuserinfo').addClass("hidden");
    $('#addcommit').css("animation-name", "fadeIn");
    $('#addcommit').removeClass("hidden");
};

  $.fn.commitFile = function() {
    $('#create').addClass("hidden");
    $('#addfileex').addClass("hidden");
    $('#addfiletext').addClass("hidden");
    $('#localarrow').addClass("hidden");
    $('#committext').css("animation-name", "fadeIn");
    $('#committext').removeClass("hidden");
    $('#commitex').css("animation-name", "fadeIn");
    $('#commitex').removeClass("hidden");
    $('#commiticon').css("animation-name", "fadeIn");
    $('#commiticon').removeClass("hidden");
    $('#pushfile').removeClass('hidden');
  };

  $.fn.pushFile = function() {
    $('#create').addClass("hidden");
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
    $('#next').removeClass('hidden');
    $('#addcommit').css("animation-name", "fadeOut");
    $('#addcommit').addClass("hidden");
    $('#pushcommit').css("animation-name", "fadeIn");
    $('#pushcommit').removeClass("hidden");
  };
});
