const images = document.querySelectorAll('.fall-picture');

let currentImageIndex = 0;


function showNextImage() {
  images[currentImageIndex].style.opacity = 0;
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.opacity = 1;
}


//use double quotation when defining a value (""), just as a security best practices to prevent any "middleman attack" possibility  [Adewumi]
// The website front page color might be a little to bright (deem it a little if possible)

const imagesNH = ["kbidikarImages/fall_NH4.webp", "kbidikarImages/fall_NH2.jpeg", "kbidikarImages/fall_NH3.jpeg"];
const imagesVT = ["kbidikarImages/fall_VT1.webp", "kbidikarImages/fall_VT4.png", "kbidikarImages/fall_VT3.jpeg"];
const imagesME = ["kbidikarImages/fall_ME1.jpeg", "kbidikarImages/fall_ME2.jpeg", "kbidikarImages/fall_ME4.webp"];

const stateSelect = document.getElementById('state-select');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

function changeImages(imageArray) {
  image1.src = imageArray[0];
  image2.src = imageArray[1];
  image3.src = imageArray[2];
}

function changeState() {
  const selectedState = stateSelect.value;
  if (selectedState === 'NH') {
    changeImages(imagesNH);
  } else if (selectedState === 'VT') {
    changeImages(imagesVT);
  } else if (selectedState === 'ME') {
    changeImages(imagesME);
  }
}

changeState();

showNextImage();

setInterval(showNextImage, 4000);
setInterval(showNextFrame, 1000);
