// function func1(){
//    $("#img1").fadeToggle();
// }
// function func2(){
//    $("#div1").css("background-color","rgba(153, 27, 121, 0.5)");
//    $("p").css("font-size","18px").css("font-style","italic");

//    Affects only paragraphs inside divs not outside of them
//    $("div > p").fadeToggle();
//    $("p:first").fadeToggle();
// }

// Normal function
// $("#btn").click(func3);
// function func3(){
//    $("#p-event").css("color", "blue");
// }


//Annonymus function
// $("#btn").click(function(){
//    $("#p-event").css("color", "blue");
// })

$("document").ready(function(){
   // $("#btn").dblclick(function(){
   //    $("#p-event").css("color", "blue");
   // })
   // $("#p-event").mouseenter(function(){
   //    $("#p-event").css("font-size","24px");
   // });
   // $("#p-event").mouseleave(function(){
   //    $("#p-event").css("font-size","16px");
   // });
   // $("#p-event").hover(func1, func2)
   // function func1(){
   //    $("#p-event").css("font-size","24px");
   // }
   // function func2(){
   //    $("#p-event").css("font-size","16px");
   // }
   $("#btn1").click(function(){
      $("#img1").hide(2000, "swing");
   })
   $("#btn2").click(function(){
      $("#img1").show(2000);
   })
   $("#btn3").click(function(){
      $("#img1").toggle(500);
   })
});

$("document").ready(function(){
   $('input').on('keypress',function(e){
      if (e.which == 13) {
         var todo = $(this).val();
         $('ul').append('<li>' + todo + '<i class="icon fa fa-check"></i><i class="icon fa fa-trash"></li>');
         $(this).val('');        
      }
   })
   $('ul').on('click','.fa-check',function(){
      $(this).parent('li').toggleClass('checked');
      console.log("here");
   })
   $('ul').on('click','.fa-trash',function(){
      $(this).parent('li').fadeOut(200);
   })
})