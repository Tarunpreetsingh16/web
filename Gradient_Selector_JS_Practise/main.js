//rgba(213,127,140,1),rgba(0,212,255,1)
//caache the selectors for future use
var leftColorSelector = document.getElementById("leftColor");
var rightColorSelector = document.getElementById("rightColor");
//store the values of left and right colors
var leftColor = leftColorSelector.value;
var rightColor = rightColorSelector.value;
//whenever the user changes the color of the left color picker 
leftColorSelector.addEventListener("input",function(event){
    leftColor = leftColorSelector.value;
    document.getElementById("mainSection").style.backgroundImage = "linear-gradient(to right,"+leftColor+","+rightColor+")";
});
rightColorSelector.addEventListener("input",function(event){
    rightColor = rightColorSelector.value;
    document.getElementById("mainSection").style.backgroundImage = "linear-gradient(to right,"+leftColor+","+rightColor+")";
});
    