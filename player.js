var canvas = document.getElementById('GameScreen'),
context = canvas.getContext('2d');

make_base();

function make_base()
{
  base_image = new Image();
  base_image.src = 'p1.png';
  base_image.onload = function(){
    context.drawImage(base_image, 20, 20);
  }
}