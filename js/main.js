$(document).ready(function(){

  $(".useful_content").hide();
  $("#constellationsContent").show();
  $("#constellations").addClass("active");
  // $("#ursaMinorInfo").hide();
  // $("#ursaMajorInfo").hide();
  // $("#galaxiesContent").hide();

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
    $("#constellationsContent").hide();
    $("#galaxiesContent").show();
    $(".upper_tab").removeClass("active");
    $("#galaxies").addClass("active");
  });
  $("#constellations").on("click",function(){
    $("#galaxiesContent").hide();
    $("#constellationsContent").show();
    $(".upper_tab").removeClass("active");
    $("#constellations").addClass("active");
  });
});
