$('.responsive').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true, 
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
    });
    $(document).ready(function(){
      $("#bars").click(function(){
        $("#content").show();
        $("#close").show();
        $("#bars").hide();
      });
      $("#close").click(function(){
        $("#content").hide();
        $("#close").hide();
        $("#bars").show();
      });
      $(".h4b").click(function(){
        $("#card").show();
        $("#right-portion").show();
      });
      $("#xx").click(function(){
        $("#card").hide();
        $("#right-portion").hide();
      });
      $("#right-portion").click(function(){
        $(this).hide();
      })
      $("#remove1").click(function(){
        $("#card1").hide();
      });
      $("#remove2").click(function(){
        $("#card2").hide();
      });
      $("#remove3").click(function(){
        $("#card3").hide();
      });
    })
    