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
   $("#p-event").mouseenter(function(){
      $("#p-event").css("font-size","24px");
   })
   $("#p-event").mouseleave(function(){
      $("#p-event").css("font-size","16px");
   })
});