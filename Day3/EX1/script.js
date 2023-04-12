const images = ["1.jpg", "2.jpg", "3.jpg","4.jpg", "5.jpg", "6.jpg","7.jpg"];
let currentIndex = 0;

function changeImage() {
  const slideshow = document.getElementById("slideshow");
  const img = slideshow.getElementsByTagName("img")[0];
  img.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeImage, 2000);
