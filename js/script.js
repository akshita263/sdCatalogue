$(document).ready(function(){
    $(window).scroll(function(){
    //NAVBAR SCRIPT
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    //SCROLL UP BUTTON SCRIPT
        if(this.scrollY > 380){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //slide to top
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    /*toggle menu/navbar script*/
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //typing animation script
    var typed= new Typed(".typing", {
        strings: ["Wallclocks", "Tables", "Trays", "Platters", "Cupcake Stands", "Coasters", "Napkin Holders"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed= new Typed(".typing2", {
        strings: ["Wallclocks", "Tables", "Trays", "Platters", "Cupcake Stands", "Coasters", "Napkin Holders"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});
     