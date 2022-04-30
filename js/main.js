const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const height = 1080;
const width = 1920;

// resize canvas (CSS does scale it up or down)
canvas.height = height;
canvas.width = width;

context.fillRect(100, 150, 200, 300);
// create a stroke
context.beginPath();
context.moveTo(50, 100);
context.lineTo(100, 150);
context.stroke();
// this ends the current path
context.beginPath();

context.strokeStyle = "red";
context.fillStyle = "red";

// implement drawing
let drawing = false;

function startDrawing(e) {
    drawing = true;
    context.beginPath();
    draw(e);
}

window.addEventListener("mousedown", startDrawing);

function endDrawing(e) {
  drawing = false;
}

window.addEventListener("mouseup", endDrawing);

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect(),
    scaleX = canvas.width / rect.width,
    scaleY = canvas.height / rect.height;

  return {
    x: (evt.clientX - rect.left) * scaleX,
    y: (evt.clientY - rect.top) * scaleY,
  };
}

function draw(e) {
  if (!drawing) return;

  let { x, y } = getMousePos(canvas, e);
  context.lineTo(x, y);
  context.stroke();
}

window.addEventListener("mousemove", draw);

context.lineWidth = 10;
context.lineCap = "round";