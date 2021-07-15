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
        document.getElementById("hamburger").src ="icons/hamburger.png";
    }
    else{
        //change the icon of the menu toggler
        document.getElementById("hamburger").src ="icons/close.png";
        mobileNavBar.style.display = "block"
        $("#mobileNavBar").animate({
           opacity : "1"
        },500)
        for(var i=0;i<length;i++){
            items[i].style.display = "block";
        }
    }
    
}

function checkDeviceWidth(width) {
  if (width.matches) { // If media query matches
    document.getElementById("mobileNav").style.display = "block";
    document.getElementById("mobileNavBar").style.display = "none";
    document.getElementById("hamburger").src ="icons/hamburger.png";
    $(".firstSkillBlock").addClass("noneDisplay");
      
  } else {
    document.getElementById("mobileNav").style.display = "none";
    document.getElementById("mobileNavBar").style.display = "none";
    $(".firstSkillBlock").removeClass("noneDisplay");
    $(".firstSkillBlock").removeClass("flexDisplay");
    $(".secondSkillBlock").removeClass("flexDisplay");
    $(".secondSkillBlock").removeClass("noneDisplay");
    $(".secondSkillBlock").removeClass("fadeOutSlide");
    $(".firstSkillBlock").removeClass("fadeOutSlide");
    $(".firstSkillBlock").removeClass("fadeInSlide");
    $(".secondSkillBlock").removeClass("fadeInSlide");
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
var skillBlockCounter = 0 ;

function changeSkills(){
    if(skillBlockCounter == 0){
        $(".secondSkillBlock").addClass("fadeOutSlide");
        $(".secondSkillBlock").removeClass("fadeInSlide");
        $(".firstSkillBlock").removeClass("fadeOutSlide");
        $(".firstSkillBlock").addClass("fadeInSlide");
        $(".secondSkillBlock").addClass("noneDisplay");
        $(".secondSkillBlock").removeClass("flexDisplay");
        $(".firstSkillBlock").removeClass("noneDisplay");
        $(".firstSkillBlock").addClass("flexDisplay");
        skillBlockCounter = 1;
    }
    else if(skillBlockCounter == 1){
        $(".firstSkillBlock").addClass("fadeOutSlide");
        $(".firstSkillBlock").removeClass("fadeInSlide");
        $(".secondSkillBlock").removeClass("fadeOutSlide");
        $(".secondSkillBlock").addClass("fadeInSlide");
        $(".firstSkillBlock").addClass("noneDisplay");
        $(".firstSkillBlock").removeClass("flexDisplay");
        $(".secondSkillBlock").removeClass("noneDisplay");
        $(".secondSkillBlock").addClass("flexDisplay");
        skillBlockCounter = 0;
    }
    console.log(skillBlockCounter);
}

window.onload = function loadTestimonial(){
    //load firstTestimonial on first load
    testimonials[0].style.display = "flex";
    testimonialsImages[0].style.display = "block";
}

$(".testimonial #rightArrow").click(function(){
    
    counter++;
    //check if it is the last slide
    if(counter == testimonials.length) 
    { counter = 0;}
    changeTestimonial();
});

$(".testimonial #leftArrow").click(function(){
    counter--;
    //check if it is the first slide
    if(counter <0) 
        counter = testimonials.length - 1;
    changeTestimonial();
});
$("#skillsSection #rightArrow").click(function(){
    changeSkills();
});

$("#skillsSection #leftArrow").click(function(){
    changeSkills();
});

//change the skills in the title of the hero section
var skills = ['web developer','app developer','UI designer','problem solver','logic builder']
var skillCounter = 1;
window.setInterval(function(){
    document.getElementById("skillInTitle").classList.add("fadeSkill");
    document.getElementById("skillInTitle").innerHTML = skills[skillCounter];
    skillCounter++;
    if(skillCounter == skills.length){
        skillCounter = 0;
    }
},3000);