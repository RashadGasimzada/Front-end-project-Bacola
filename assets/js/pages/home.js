$(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    var clock = $('.clock').FlipClock({
        clockFace:'DailyCounter',
        
        autoStart:false,
    
        callbacks: {
    
          stop:function() {
    
            $('.message').html('The clock has stopped!')
    
          }
    
        }
    
    });
    clock.setTime(220880);
    clock.setCountdown(true);
    // start the clock
    clock.start();

    //add to card
    if (JSON.parse(localStorage.getItem("products")) == null) {
        localStorage.setItem("products", JSON.stringify([]));
    }

    let products = JSON.parse(localStorage.getItem("products"));

    $(".add-to-card").click(function() {
        let productId = this.parent.parent.parent.attr("data-id");
        
        console.log(this.parent);
    })

        
    
})