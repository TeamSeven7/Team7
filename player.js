//Get the canvas element by using the getElementById method.
var canvas = document.getElementById('gamescreen');
 
//Get a 2D drawing context for the canvas.
var context = canvas.getContext('2d');
 
//The path to the image that we want to add.
var imgPath = 'p1.png';
//Create a new Image object.
var imgObj = new Image();
 
//Set the src of this Image object.
imgObj.src = imgPath;
 
//the x coordinates
var x = 0;
 
//the y coordinates
var y = 0;
 
//When our image has loaded.
imgObj.onload = function(){
    //Draw the image onto the canvas.
    context.drawImage(imgObj, x, y);
}