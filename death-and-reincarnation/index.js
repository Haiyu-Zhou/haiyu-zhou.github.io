const scrollWrapper = document.querySelector('.scroll-wrapper');
const nextButton = document.querySelector('.scroll-button.right');
const prevButton = document.querySelector('.scroll-button.left');
let currentImage = 0;

// Get total number of images
const images = document.querySelectorAll('.scroll-wrapper img');
const totalImages = images.length;

// Calculate the width of each scroll step (80% of the viewport width)
let stepWidth = window.innerWidth * 0.8; // 80vw

// Scroll to the right (next image)
nextButton.addEventListener('click', () => {
  currentImage++;
  
  // Loop back to the first image if we go past the last one
  if (currentImage >= totalImages) {
    currentImage = 0;
  }

  // Calculate the new translateX position in terms of 80vw
  const offset = currentImage * stepWidth;
  scrollWrapper.style.transform = `translateX(-${offset}px)`;
});

// Scroll to the left (previous image)
prevButton.addEventListener('click', () => {
  currentImage--;
  
  // If we go past the first image, loop back to the last one
  if (currentImage < 0) {
    currentImage = totalImages - 1;
  }

  // Calculate the new translateX position in terms of 80vw
  const offset = currentImage * stepWidth;
  scrollWrapper.style.transform = `translateX(-${offset}px)`;
});

// Recalculate stepWidth on window resize for responsiveness
window.addEventListener('resize', () => {
  stepWidth = window.innerWidth * 0.8;
});