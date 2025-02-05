$(function () {  
         
    $(".helpp").hide();  
    // $("#image")
    //   .mouseover(function () {        
    //     $(".helpp").show(); 
    //     $(".help a").show()
    //   }).mouseout(function () {
    //     $(".helpp").hide();
    //     $(".help a").hide();      
    //   })
    $("#image")
      .mouseover(function () {        
        $(".helpp").stop().show(); 
        $(".help a").stop().show();
      })
      $("#image , .helpp").click(function () {
        $(".helpp").hide();
        $(".help a").hide();      
      })

      // $("#image").click(function(){
      //   $(".helpp").stop().show(); 
      //   $(".help a").stop().show()
      // }).mouseout(function () {
      //       $(".helpp").hide();
      //       $(".help a").hide();      
      //     })

      //   $(".help a").mouseover(function(){
      //       $(this).css("font-size", "17px");
      //       $(this).css("cursor", "pointer");                             
      //   }).mouseout(function () {
      //       $(this).css("font-size", "16px");
      //   })     
      // })
      
  });
  
  