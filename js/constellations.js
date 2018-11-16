$(document).ready(function(){
  // $("#ursaMinorInfo").show();
  // $("#ursaMajorInfo").hide();
  // $("#ursaMinor").addClass("active");
  // $("#ursaMajor").removeClass("active");
  // $("#ursaMinor").on("click",function(){
  //   $("#ursaMinorInfo").show();
  //   $("#ursaMajorInfo").hide();
  //   $("#ursaMinor").addClass("active");
  //   $("#ursaMajor").removeClass("active");
  // });
  // $("#ursaMajor").on("click",function(){
  //   $("#ursaMajorInfo").show();
  //   $("#ursaMinorInfo").hide();
  //   $("#ursaMajor").addClass("active");
  //   $("#ursaMinor").removeClass("active");
  // });
  $('#ursaMinorContainer').hover(function(){
    console.log("image hovered");
    $(this).find('img').fadeTo(500,0.5);
  },function(){
      $(this).find('img').fadeTo(500,1);
  });

  $('#ursaMinorImg').click(function() {
      console.log("button clicked");
	    $('#ursaMinorContainer').find('img').fadeTo(0, 1);
        if($('#ursaMinorImg').hasClass('enlarged')){
            $('#ursaMinorImg').removeClass('enlarged');
            $("#ursaMinorImg").stop().animate({width: 200, height: 299}, 200 );
        }else{
            $('#ursaMinorImg').addClass('enlarged');
            $("#ursaMinorImg").stop().animate({width: 400, height: 598}, 200 );
        }

    });
});
