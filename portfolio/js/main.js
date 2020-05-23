//toggle the menu when on mobile device (when hamburger button is clicked)
function toggleMenu(){
    var mobileNavBar = document.getElementById("mobileNavBar");
    var items = mobileNavBar.getElementsByClassName("navBarItems");
    var length = items.length;
    if(mobileNavBar.style.display === "block" ){
        $("#mobileNavBar").animate({
           opacity : "0"
        },500,function(){            
            mobileNavBar.style.display = "none";
        });
        //change the icon abck to hamburger on closing the menu 
        document.getElementById("hamburger").src ="../icons/hamburger.png";
    }
    else{
        //change the icon of the menu toggler
        document.getElementById("hamburger").src ="../icons/close.png";
        mobileNavBar.style.display = "block"
        $("#mobileNavBar").animate({
           opacity : "1"
        },500)
        for(var i=0;i<length;i++){
            items[i].style.display = "block";
            items[i].style.borderBottom = "0.5px solid white";
        }
    }
    
}

function checkDeviceWidth(width) {
  if (width.matches) { // If media query matches
    document.getElementById("mobileNav").style.display = "block";
    document.getElementById("mobileNavBar").style.display = "none";
    document.getElementById("heroImage").src = "../images/heroSectionLandingMobile.jpg"; 
    document.getElementById("hamburger").src ="../icons/hamburger.png";
  } else {
    document.getElementById("mobileNav").style.display = "none";
    document.getElementById("mobileNavBar").style.display = "none";
    document.getElementById("heroImage").src = "../images/heroSectionLanding.jpg";  
  }
}


var width = window.matchMedia("(max-width: 600px)")
checkDeviceWidth(width) // Call listener function at run time
width.addListener(checkDeviceWidth) // Attach listener function on state changes


//Methods for testimonials ..it will change the testimonials(left or right)

//counter to keep track of current testimonial that is being displayed
var counter = 0;
var testimonials = document.getElementsByClassName("testimonialBlock");
var testimonialsImages = document.getElementsByClassName("testimonialImage");

function changeTestimonial(){
    for(var i=0;i<testimonials.length;i++){
        if(i == counter){
            continue;
        }
        $(testimonials[i]).addClass("fadeOutSlide");
        $(testimonialsImages[i]).addClass("fadeOutSlide");
        $(testimonials[i]).removeClass("fadeInSlide");
        $(testimonialsImages[i]).removeClass("fadeInSlide");
    }
    $(testimonials[counter]).addClass("fadeInSlide");
    $(testimonialsImages[counter]).addClass("fadeInSlide");
}
window.onload = function loadTestimonial(){
    //load firstTestimonial on first load
    testimonials[0].style.display = "flex";
    testimonialsImages[0].style.display = "block";
}

$("#rightArrow").click(function(){
    
    counter++;
    //check if it is the last slide
    if(counter == testimonials.length) 
    { counter = 0;}
    changeTestimonial();
});

$("#leftArrow").click(function(){
    counter--;
    //check if it is the first slide
    if(counter <0) 
        counter = testimonials.length - 1;
    changeTestimonial();
});