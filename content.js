// Function to reset image brightness
function resetImageBrightness() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.style.filter = '';
  });
}

// Event listener for keydown events
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    resetImageBrightness();
  }
});
