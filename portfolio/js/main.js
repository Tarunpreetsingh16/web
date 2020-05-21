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
