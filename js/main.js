$(function () {

    $(".rateYo").rateYo({
        rating: 4.5,
        starWidth: "13px",
        readOnly: true,
        ratedFill: "#ffc000",
        normalFill: "#fff2cc"
    });
    $('.slider__inner').slick({
        prevArrow:'<button class="slick-arrow slick-prev"><svg class="lnr lnr-chevron-left"><use xlink:href="#lnr-chevron-left"></use></svg></button>',
        nextArrow:'<button class="slick-arrow slick-next"><svg class="lnr lnr-chevron-right"><use xlink:href="#lnr-chevron-right"></use></svg></button>'
      });
      $('.slider-2__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow:'<button class="slick-arrow slick-prev"><svg class="lnr lnr-chevron-left"><use xlink:href="#lnr-chevron-left"></use></svg></button>',
        nextArrow:'<button class="slick-arrow slick-next"><svg class="lnr lnr-chevron-right"><use xlink:href="#lnr-chevron-right"></use></svg></button>'
       

        
      });

  });