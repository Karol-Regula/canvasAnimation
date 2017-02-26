var c = document.getElementById("slate");
var b1 = document.getElementById("button-circle");
var b2 = document.getElementById("button-dvd");
var b3 = document.getElementById("button-stop");
var ctx = c.getContext("2d");
var requestID;

ctx.fillStyle = "#00f0fa";

function clear(event) {
  ctx.clearRect(0, 0, 800, 800); //clear entire canvas field
  ctx.closePath();
  ctx.beginPath();
  window.cancelAnimationFrame(requestID);
}

var grow = 0;
function anim1() {
  x = 400;
  y = 400;
  r = 1;
  if (grow == 1){
    grow = 0;
  }else{
    grow = 1;
  }
  window.cancelAnimationFrame(requestID);
  function growCircle(){
    requestID = window.requestAnimationFrame(growCircle);
    ctx.beginPath();
    ctx.clearRect(0, 0, 800, 800); //clear entire canvas field
    if (grow == 1){
      if (r < 200){
        r++;
      }else{
        grow = 0;
      }
    }
    if (grow == 0){
      if (r > 0){
        r--;
      }else{
        grow = 1;
      }
    }
    ctx.moveTo(x+r,y);
    ctx.arc(x,y,r,0,2*Math.PI);
    //ctx.moveTo(x,y);
    ctx.fill();
    ctx.stroke();
  }
  growCircle();
}


function anim2() {
  x = Math.random() * 615;
  y = Math.random() * 715;
  xplus = 1;
  yplus = 1;
  window.cancelAnimationFrame(requestID);
  function drawDVD(){
    requestID = window.requestAnimationFrame(drawDVD);
    ctx.beginPath();
    ctx.clearRect(0, 0, 800, 800); //clear entire canvas field
    if (x > 615){
      xplus = -1;
    }
    if (x < 0){
      xplus = 1;
    }
    if (y > 715){
      yplus = -1;
    }
    if (y < 0){
      yplus = 1;
    }
    x += xplus;
    y += yplus;
    ctx.moveTo(x,y);

    image = new Image();
	  image.src = "source.png"
	  ctx.drawImage(image,x,y);

    //ctx.rect(x,y, 50, 50);
    //ctx.moveTo(x,y);
    //ctx.fill();
    ctx.stroke();
  }
  drawDVD();
}

b1.addEventListener('click', anim1);
b2.addEventListener('click', anim2);
b3.addEventListener('click', clear);
//c.addEventListener('click', anim);
