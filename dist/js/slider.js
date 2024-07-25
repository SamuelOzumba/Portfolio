let slider = document.getElementById("image");
let images = [
    "img/g1.jpg",
    "img/g2.jpg",
    "img/g3.jpg",
    "img/g4.jpg",
    "img/g5.jpg",
    "img/g6.jpg",
    "img/g7.jpg",
    "img/g8.jpg"
];
let counter = 0;

function imageChange() {
  if (counter >= images.length) {
    counter = 0;
  }

  slider.setAttribute("src", images[counter]);
  counter++;
}

setInterval(imageChange, 3000);

