let currentPhoto = 0;

// Query Selectors
const largeImage = document.querySelector("#show-img");
const smallImages = document.querySelectorAll(".small-images img");
const arrowForward = document.querySelector("#arrow-forward");
const arrowbackward = document.querySelector("#arrow-backward");



// Functions
const slideImage = () => {
  if (currentPhoto > 2){
    currentPhoto = 0;
  } else if (currentPhoto < 0){
    currentPhoto = 2;
  }

  largeImage.src = `img/img-${currentPhoto}.jpg`;
}


const changeImages = (img) => {
  let source = img.src;
  source = source.replace("-x-small", "");
  largeImage.src = source;
  
  const setCurrentPhoto = () => {
      if (largeImage.src.includes(imagesList[0])){
          return currentPhoto = 0;
      } else if (largeImage.src.includes(imagesList[1])){
          return currentPhoto = 1;
      } else if (largeImage.src.includes(imagesList[2])){
          return currentPhoto = 2;
      }
  }

  setCurrentPhoto();
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


// For each loop
smallImages.forEach(img => {
  img.addEventListener("click", () => {
      changeImages(img);
  });
});