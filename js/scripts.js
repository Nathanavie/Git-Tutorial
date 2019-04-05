//Function to start when the web page is loaded
$(document).ready(function() {
  $('#home').on('click', function(event) {
    event.preventDefault();
      location.reload();
  });

  $('#open').on('click', function(event) {
    $('#sidenav').css("width", "250px");
  });

  $('#closednav').on('click', function(event) {
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
    $.fn.gitInit();
  });

  $('.connectrepository').click(function(ev) {
    ev.preventDefault();
    $.fn.connectRepo();
  });

  $('#letsgo').click(function(ev) {
    $(location).attr("href", "Workflow.html")
  });

  $('#coding').click(function(ev) {
    $(location).attr("href", "CreateRepo.html")
  });

  $('#createend').click(function(ev) {
    $(location).attr("href", "SetUser.html")
  });

  $('#setuserend').click(function(ev) {
    $(location).attr("href", "AddCommit.html")
  });

  $('#addcommitend').click(function(ev) {
    $(location).attr("href", "Push.html")
  });

  $('#pushend').click(function(ev) {
    $(location).attr("href", "Pull.html")
  });

  $('#pullend').click(function(ev) {
    $(location).attr("href", "Branches.html")
  });

  $('#nextstep').click(function(ev) {
    $(location).attr("href", "Undo.html")
  });

  $('#nextlog').click(function(ev) {
    $(location).attr("href", "Log.html")
  });

  $('#nexttag').click(function(ev) {
    $(location).attr("href", "Tagging.html")
  });

  $('.setuser').click(function(ev) {
  ev.preventDefault();
  $.fn.setUser();
  });

  $('.createfile').click(function(ev) {
    ev.preventDefault();
    $.fn.createFile();
  });

  $('.addfile').click(function(ev) {
    ev.preventDefault();
    $.fn.addFile();
  });

  $('.commitfile').click(function(ev) {
    ev.preventDefault();
    $.fn.commitFile();
  });

  $('.pushfile').click(function(ev) {
    ev.preventDefault();
    $.fn.pushFile();
  });

  $('.pullfile').click(function(ev) {
    ev.preventDefault();
    $.fn.pullFile();
  });

  $('.branchesbtn').click(function(ev) {
    ev.preventDefault();
    $.fn.createBranch1();
  });

  $('.branchpush').click(function(ev) {
    ev.preventDefault();
    $.fn.branchPush();
  });

  $('#mergebranch').click(function(ev) {
    ev.preventDefault();
    $.fn.mergeBranch();
  });

  $('#addbranch2').click(function(ev) {
    ev.preventDefault();
    $.fn.branch2();
  });

  $('#delbranch').click(function(ev) {
    ev.preventDefault();
    $.fn.delbranch();
  });

  $.fn.hideAnimation = function() {
    $('.animgrid').find('h4').addClass("hidden");
    $('.animgrid').find('img').addClass("hidden");
    $('.animgrid').find('p').addClass("hidden");
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
    $('.remoterepo').removeClass("hidden");
    $('.connectrepository').addClass("hidden");
    $('#createend').removeClass("hidden");
  };

  $.fn.setUser = function() {
    $('#adduser1').css("animation-name", "fadeIn");
    $('#adduser1').removeClass('hidden');
    $('#adduser2').css("animation-name", "fadeIn");
    $('#adduser2').removeClass('hidden');
    $('#addusertext').css("animation-name", "fadeIn");
    $('#addusertext').removeClass('hidden');
    $('.profileicon').css("animation-name", "fadeIn");
    $('.profileicon').removeClass('hidden');
    $('#setuser').addClass('hidden');
    $('#setuserend').removeClass("hidden");
  };

  $.fn.createFile = function() {
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
    $('#commitfile').removeClass("hidden");
};

  $.fn.commitFile = function() {
    $('#addfileex').addClass("hidden");
    $('#addfiletext').addClass("hidden");
    $('#localarrow').addClass("hidden");
    $('#committext').css("animation-name", "fadeIn");
    $('#committext').removeClass("hidden");
    $('#commitex').css("animation-name", "fadeIn");
    $('#commitex').removeClass("hidden");
    $('#commiticon').css("animation-name", "fadeIn");
    $('#commiticon').removeClass("hidden");
    $('#addcommitend').removeClass('hidden');
  };

  $.fn.pushFile = function() {
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
    $('#pushend').removeClass('hidden');
  };

  $.fn.pullFile = function() {
    $('#pulltext').css("animation-name", "fadeIn");
    $('#pulltext').removeClass("hidden");
    $('#pullex').css("animation-name", "fadeIn");
    $('#pullex').removeClass("hidden");
    $('#pulledremote').css("animation-name", "pulledfile");
    $('#pulledremote').removeClass("hidden");
    $('#pullfile').addClass("hidden");
    $('#pullend').removeClass("hidden");
  };

  $.fn.createBranch1 = function() {
    $('.localrepo').css("animation-name", "fadeIn");
    $('.localrepo').removeClass("hidden");
    $('#branch1file').css("animation-name", "pulledfile");
    $('#branch1file').removeClass("hidden");
    $('#branch1arrow').css("animation-name", "fadeIn");
    $('#branch1arrow').removeClass("hidden");
    $('#branchtext').css("animation-name", "fadeIn");
    $('#branchtext').removeClass("hidden");
    $('#branchex').css("animation-name", "fadeIn");
    $('#branchex').removeClass("hidden");
    $('.branchesbtn').addClass("hidden");
    $('#branchpush').removeClass("hidden");
  };

  $.fn.branchPush = function() {
    $('#branchtext').addClass("hidden");
    $('#branchex').addClass("hidden");
    $('#branch1arrow').addClass("hidden");
    $('#pushbranchtext').css("animation-name", "fadeIn");
    $('#pushbranchtext').removeClass("hidden");
    $('#pushbranchex').css("animation-name", "fadeIn");
    $('#pushbranchex').removeClass("hidden");
    $('#b1arrow').css("animation-name", "fadeIn");
    $('#b1arrow').removeClass("hidden");
    $('#branchedit1').css("animation-name", "fadeIn");
    $('#branchedit1').removeClass("hidden");
    $('#branchpush').addClass("hidden");
    $('#mergebranch').removeClass("hidden");
  };

  $.fn.mergeBranch = function() {
    $('#pushbranchtext').addClass("hidden");
    $('#pushbranchex').addClass("hidden");
    $('#mergetext').css("animation-name", "fadeIn");
    $('#mergetext').removeClass("hidden");
    $('#mergeex').css("animation-name", "fadeIn");
    $('#mergeex').removeClass("hidden");
    $('#mergedfile1').css("animation-name", "mergefile");
    $('#mergedfile1').removeClass("hidden");
    $('#branches').addClass("hidden");
    $('#updatemerge').css("animation-name", "fadeIn");
    $('#updatemerge').removeClass("hidden");
    $('#masterarrow').css("animation-name", "fadeIn");
    $('#masterarrow').removeClass("hidden");
    $('.local').css("animation-name", "greyback");
    $('#remotefile').css("opacity", "0.5");
    $('#mergebranch').addClass("hidden");
    $('#addbranch2').removeClass("hidden");
  };

  $.fn.branch2 = function() {
    $('#updatemerge').addClass("hidden");
    $('#branches').removeClass("hidden");
    $('#mergetext').addClass("hidden");
    $('#mergeex').addClass("hidden");
    $('#branch2text').css("animation-name", "fadeIn");
    $('#branch2text').removeClass("hidden");
    $('#branch2ex').css("animation-name", "fadeIn");
    $('#branch2ex').removeClass("hidden");
    $('.staging').css("animation-name", "fadeIn");
    $('.staging').removeClass("hidden");
    $('#branch2file').css("animation-name", "fadeIn");
    $('#branch2file').removeClass("hidden");
    $('#addbranch2').addClass("hidden");
    $('#delbranch').removeClass("hidden");
  };

  $.fn.delbranch = function() {
    $('#branch2text').addClass("hidden");
    $('#branch2ex').addClass("hidden");
    $('#deltext').css("animation-name", "fadeIn");
    $('#deltext').removeClass("hidden");
    $('#delex').css("animation-name", "fadeIn");
    $('#delex').removeClass("hidden");
    $('#brokenfile').css("animation-name", "delbranch");
    $('#brokenfile').removeClass("hidden");
    $('#branch2file').css("animation-name", "fadeOut");
    $('.stage').css("animation-name", "redback");
    $('#delbranch').addClass("hidden");
    $('#nextstep').removeClass("hidden");
  }
});
