var MoveStory = 0;
showStory();

function showStory() {
  var j;
  var Backslide = document.getElementsByClassName("BackStory fade");
  var points = document.getElementsByClassName("point");
  for (j = 0; j < Backslide.length; j++) {
    Backslide[j].style.display = "none";  
  }
  MoveStory ++;
  if (MoveStory  > Backslide.length) 
  { 
    MoveStory  = 1
  }    
  for (j = 0; j < points.length; j++) {
    points[j].className = points[j].className.replace(" active", "");
  }
  Backslide[MoveStory -1].style.display = "block";  
  points[MoveStory -1].className += " active";
  setTimeout(showStory, 5000);
}