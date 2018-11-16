$(document).ready(function(){

  $('.nav-link').on('click',function(e){
    e.preventDefault();
    var url = this.href;
    //var url = $(this).attr('href');
    //console.log(url);
    $('.nav-link').removeClass('current active');
    $(this).addClass('current active');
    //console.log(this);
    //console.log($(this).attr('href'));
    //$('#container').remove();
    $('#content').load(url).hide().fadeIn('slow');
    $('#carouselConstellations').hide();
  });

  





  //$("#planetsTable").DataTable();


  // $(".useful_content").hide();
  // $("#constellationsContent").show();
  // $("#constellations").addClass("active");

  //$(".image_prop").css('border-color','#007bff');



  // $("#ursaMinorInfo").hide();
  // $("#ursaMajorInfo").hide();
  // $("#galaxiesContent").hide();

/*
  $("#ursaMinor").on("click",function(){
    $("#ursaMinorInfo").show();
    $("#ursaMajorInfo").hide();
    $("#ursaMinor").addClass("active");
    $("#ursaMajor").removeClass("active");
  });
  $("#ursaMajor").on("click",function(){
    $("#ursaMajorInfo").show();
    $("#ursaMinorInfo").hide();
    $("#ursaMajor").addClass("active");
    $("#ursaMinor").removeClass("active");
  });
  $("#milkyWay").on("click",function(){
    $("#MilkyWayInfo").show();
    $("#AndromedaInfo").hide();
    $("#milkyWay").addClass("active");
    $("#andromeda").removeClass("active");
  });
  $("#andromeda").on("click",function(){
    $("#AndromedaInfo").show();
    $("#MilkyWayInfo").hide();
    $("#andromeda").addClass("active");
    $("#milkyWay").removeClass("active");
  });

  $("#galaxies").on("click",function(){
    $("#planetsContent").hide();
    $("#constellationsContent").hide();
    $("#galaxiesContent").show();
    $(".upper_tab").removeClass("active");
    $("#galaxies").addClass("active");
  });
  $("#constellations").on("click",function(){
    $("#planetsContent").hide();
    $("#galaxiesContent").hide();
    $("#constellationsContent").show();
    $(".upper_tab").removeClass("active");
    $("#constellations").addClass("active");
  });

  $("#planets").on("click",function(){
    $("#planetsContent").show();
    $("#galaxiesContent").hide();
    $("#constellationsContent").hide();
    $(".upper_tab").removeClass("active");
    $("#planets").addClass("active");

  });
  */
});
