function func1(){
   $("#img1").fadeToggle();
}
function func2(){
   $("#div1").css("background-color","rgba(153, 27, 121, 0.5)");
   $("p").css("font-size","18px").css("font-style","italic");
   // Affects only paragraphs inside divs not outside of them
   // $("div > p").fadeToggle();
   // $("p:first").fadeToggle();
}