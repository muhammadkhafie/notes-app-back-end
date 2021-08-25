var mainslider;
var sliding = false;

$(document).ready(function(){
    var options = {
        slides: '.slide',
        swipe: false, 
        transition: "slide",
        slideTracker: true,
        slideTrackerID: 'slideposition',
        slideOnInterval: false,
        interval: 9000,
        animateDuration: 500, //di edit
        animationEasing: 'ease',
        puaseOnHover: false,
        magneticSwipe: true,
        neverEnding: true
    };

    $(".slider").simpleSlider(options);
    mainslider = $(".slider").data("simpleslider");

    $(".slider").on("beforeSliding", function(event) {
        var prevSlide = event.prevSlide;
        var newSlide = event.newSlide;
        $(".slider .slide[data-index='" + prevSlide + "'] .slidecontent").fadeOut();
        $(".slider .slide[data-index='" + newSlide + "'] .slidecontent").hide();
        sliding = true;
    });
    
    $(".slider").on("afterSliding", function(event){
        var prevSlide = event.prevSlide;
        var newSlide = event.newSlide;
        $(".slider .slide[data-index='" + newSlide + "'] .slidecontent").fadeIn();
        sliding = false;
    });
    
    $(window).bind('mousewheel', function(event) {
        if (!sliding) {
            if(event.originalEvent.deltaY > 0) {
                mainslider.nextSlide();
            }
            else {
                mainslider.prevSlide();
            }
        }
    });
    
    $(".slide#satu").backstretch("images/image1.jpg");
    $(".slide#dua").backstretch("images/image2.jpg");
    $(".slide#tiga").backstretch("images/image3.jpg");
    $(".slide#empat").backstretch("images/image4.jpg");
    $(".slide#lima").backstretch("images/image5.jpg");
    $(".slide#enam").backstretch("images/image6.jpg");
    
    $('.slide .backstrech img').on('dragstart', function(event){
        event.preventDefault();
        speed: 600;
    });
    
    $(".slidecontent").each(function() {
        $(this).css('margin-top', -$(this).height()/2);
    });
});


