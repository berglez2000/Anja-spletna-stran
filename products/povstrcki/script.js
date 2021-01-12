let currentPhoto = 0;
let photosNum = 7;

// Query Selectors
const largeImage = document.querySelector("#show-img");
const smallImages = document.querySelectorAll(".small-images img");
const arrowForward = document.querySelector("#arrow-forward");
const arrowbackward = document.querySelector("#arrow-backward");



// Functions
const slideImage = () => {
  if (currentPhoto > photosNum){
    currentPhoto = 0;
  } else if (currentPhoto < 0){
    currentPhoto = photosNum;
  }

  largeImage.src = `img/img-${currentPhoto}.jpg`;
}


// Event Listeners
arrowForward.addEventListener("click", () => {
  currentPhoto++;
  slideImage();
});

arrowbackward.addEventListener("click", () => {
  currentPhoto--;
  slideImage();
});

const changeImages = (img) => {
  let num = img.alt;

  currentPhoto = num;
  return largeImage.src = `img/img-${num}.jpg`;
}

// For each loop
smallImages.forEach(img => {
  img.addEventListener("click", () => {
    changeImages(img);
  });
});