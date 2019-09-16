
  $(document).ready(function(){

  $("#myCarousel").carousel();
    
  $("#item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $("#item2").click(function(){
    $("#myCarousel").carousel(1);
  });
  $("#item3").click(function(){
    $("#myCarousel").carousel(2);
  });

    

  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".right").click(function(){
    $("#myCarousel").carousel("next");
  });
});

      $(document).ready(function(){

  $("#Carousel").carousel();
    

  $(".item1").click(function(){
    $("#Carousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#Carousel").carousel(1);
  });
  $(".item3").click(function(){
    $("#Carousel").carousel(2);
  });
    $(".item4").click(function(){
    $("#Carousel").carousel(3);
  });
    
  // Enable Carousel Controls
  $(".left").click(function(){
    $("#Carousel").carousel("prev");
  });
  $(".right").click(function(){
    $("#Carousel").carousel("next");
  });
});

function showsearch()
{

  document.getElementById('search').setAttribute("class", "style1");
  document.getElementById('icon-search').setAttribute("class", "style2");
}


