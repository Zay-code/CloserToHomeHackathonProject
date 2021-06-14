$(document).ready(function(){
    // Activate The Carousel As A Whole Slideshow Display On The Website
    $("#Slides").carousel();
      
    // Enable Carousel Indicators (so the the buttons may move from one image to another image)
    $(".item1").click(function(){
      $("#Slides").carousel(0);
    });
    $(".item2").click(function(){
      $("#Slides").carousel(1);
    });
    $(".item3").click(function(){
      $("#Slides").carousel(2);
    });
    $(".item4").click(function(){
      $("#Slides").carousel(3);
    });
    $(".item5").click(function(){
      $("#Slides").carousel(4);
    });
    $(".item6").click(function(){
      $("#Slides").carousel(5);
    });
    $(".item7").click(function(){
      $("#Slides").carousel(6);
    });
    $(".item8").click(function(){
      $("#Slides").carousel(7);
    });
    $(".item9").click(function(){
      $("#Slides").carousel(8);
    });
  });