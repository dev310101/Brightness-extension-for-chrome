document.addEventListener('DOMContentLoaded', () => {
  const brightnessSlider = document.getElementById('brightnessSlider');
  const brightnessValue = document.getElementById('brightnessValue');
  const contrastSlider = document.getElementById('contrastSlider');
  const contrastValue = document.getElementById('contrastValue');
  const resetButton = document.getElementById('resetFilters');

  // Function to convert -100 to 100 range to CSS brightness and contrast (0% to 200%)
  function convertRange(value) {
    return (parseInt(value) + 100); // Maps -100 -> 0 and 100 -> 200
  }

  // Function to update brightness and contrast display and images/background images
  function updateFilters(brightness, contrast) {
    brightnessValue.textContent = `${brightness}%`;
    contrastValue.textContent = `${contrast}%`;

    // Convert slider values for CSS filter application
    const brightnessCSS = convertRange(brightness);
    const contrastCSS = convertRange(contrast);

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];

      // Ensure the script doesn't run on restricted pages
      if (tab.url.startsWith('chrome://') || tab.url.startsWith('about:') || tab.url.startsWith('edge://')) {
        console.error('Cannot execute script on this page.');
        return;
      }

      // Inject script to adjust image and background image brightness/contrast
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (brightness, contrast) => {
          // Function to apply filters to images and elements with background images
          const applyFilters = (brightness, contrast) => {
            // Adjust brightness/contrast of all <img> elements
            const images = document.querySelectorAll('img');
            images.forEach(img => {
              img.style.filter = `brightness(${brightness}%) contrast(${contrast}%)`;
            });

            // Adjust brightness/contrast for elements with background images
            const elementsWithBackgrounds = document.querySelectorAll('*');
            elementsWithBackgrounds.forEach(el => {
              const backgroundImage = window.getComputedStyle(el).backgroundImage;
              if (backgroundImage !== 'none') {
                el.style.filter = `brightness(${brightness}%) contrast(${contrast}%)`;
              }
            });
          };

          // Apply filters
          applyFilters(brightness, contrast);
        },
        args: [brightnessCSS, contrastCSS] // Pass converted values to the content script
      });
    });
  }

  // Initialize with default values (0% -> 100% brightness/contrast in CSS terms)
  updateFilters(brightnessSlider.value, contrastSlider.value);

  // Event listeners for slider adjustments
  brightnessSlider.addEventListener('input', () => {
    updateFilters(brightnessSlider.value, contrastSlider.value);
  });

  contrastSlider.addEventListener('input', () => {
    updateFilters(brightnessSlider.value, contrastSlider.value);
  });

  // Event listener for the reset button
  resetButton.addEventListener('click', () => {
    brightnessSlider.value = 0;
    contrastSlider.value = 0;
    updateFilters(0, 0); // Reset to default (no filter applied)
  });
});
