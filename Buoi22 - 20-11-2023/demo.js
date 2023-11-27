let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

context.fillStyle = "blue";
context.fillRect(200, 200, 400, 300)


context.beginPath();
context.arc(95, 50, 40, 0, 2 * Math.PI);
context.stroke();