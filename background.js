let brightnessLevel = '100%'; // Default brightness level
let contrastLevel = '100%';   // Default contrast level

// Listener to handle messages from content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'setFilters') {
    brightnessLevel = request.brightness;
    contrastLevel = request.contrast;
    chrome.storage.local.set({ brightnessLevel, contrastLevel });
  } else if (request.action === 'getFilters') {
    sendResponse({ brightness: brightnessLevel, contrast: contrastLevel });
  }
});
