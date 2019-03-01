


const refreshRate = 1000 / 60;
const maxXPosition = 400;

angle = 0;
speed = 0;
target_fixed = 20;
count =0;

function up() {
  if (target_fixed<180) {
  target_fixed = target_fixed+10;
}
}

function down() {
    if (target_fixed>10) {
  target_fixed = target_fixed-10;
}
}

function chris() {
  target_fixed = 170;

}

function arrow_control(event) {
  var x = event.which || event.keyCode;
  console.log(x);
  if (x==38) {up()};
  if (x==40) {down()};
}

function changeShadow(angle) {
  shadow = document.getElementById('shadow');
  bottom = document.getElementById("bottom_captor");
  filler = document.getElementById("filler");
if (angle<50) {
  shadow.setAttribute("style", "fill:rgba(0,255,0,0.1)");
  bottom.setAttribute("style", "fill:PaleGreen")
} else if (angle<140) {
  shadow.setAttribute("style", "fill:rgba(150,100,0,0.1)");
  bottom.setAttribute("style", "fill:SandyBrown")
} else if (angle<160){
  shadow.setAttribute("style", "fill:rgba(255,0,0,0.1)");
  bottom.setAttribute("style", "fill:tomato")
  filler.classList.remove("red_alert");
} else {
  filler.className += " red_alert";
}

}

function step() {
  count++;
  target = target_fixed + 5*Math.sin(count/180*Math.PI*5)+3*Math.sin(count/180*Math.PI*3);

  let speed = (target-angle)/10;


  angle = angle + speed;
  pipohand = document.getElementById('pipohand');
  pipohand.setAttribute('transform', 'rotate(' + angle + ' 220 220)');
  changeShadow(angle);
  window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);
