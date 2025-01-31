$(function () {
    $("#help").hide();   
    $(".help").hide();  
    $("#image")
      .mouseover(function () {
        $("#help").show();
        $(".help").show();  
        $(".help a").mouseover(function(){
            $(this).css("font-size", "17px");                    
        }).mouseout(function () {
            $(this).css("font-size", "16px");
        })     
      })
      .mouseout(function () {
        $("#help p").hide();
      },1000);
      $("#help span").hide();  
    
  });