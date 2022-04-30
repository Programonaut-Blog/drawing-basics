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
context.moveTo( 50, 100);
context.lineTo(100, 150);
context.stroke();
// this ends the current path
context.beginPath();

context.strokeStyle = 'red';
context.fillStyle = 'red';