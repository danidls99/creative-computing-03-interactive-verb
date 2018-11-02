/*
  Returns a random whole number between minimum value and maximum value

  For example, calling randomNumber(0, 255);
  will return a random whole number between 0 and 255.

  Source: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
*/
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

randomNumber(0, 350);




function hslColor(h, s, l) {  
  var hue = h;
  var saturation = s + "%";
  var luminance = l + "%";

  var color = "hsl(" + hue + "," + saturation + "," + luminance + ")";

  return color;

var hue = randomNumber (0, 350);
var color =hslColor (hue, 100, 80);

var layer1 = document.querySelector(".layer1");
layer1.style.background = hslColor(h, 100, 80);

var layer2 = document.querySelector(".layer2");
layer2.style.background = hslColor(h, 100, 80);

var layer3 = document.querySelector(".layer3");
layer3.style.background = hslColor(h, 100, 80);









