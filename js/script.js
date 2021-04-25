$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
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


    //SLIDESHOW ANIMATION SCRIPT
    var slideIndex = 0;
    showSlides();
    
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
});
     