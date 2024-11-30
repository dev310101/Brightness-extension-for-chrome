Brightness Extension for Chrome

🚀 Overview

The Brightness Extension for Chrome is a lightweight browser tool that allows users to adjust the brightness of images and content on web pages. This extension is perfect for enhancing the visibility of images or reducing screen glare, providing a customizable browsing experience.

🛠️ Features

Adjust brightness levels of images and content on any webpage.

User-friendly popup interface for brightness control.

Allows users to reset brightness to the original state.

Lightweight and efficient browser extension.

Designed with accessibility and ease of use in mind.

📂 Repository Contents

popup.js: JavaScript for the popup's functionality.

popup.html: HTML structure for the extension's popup interface.

content.js: Handles content-specific brightness adjustments.

background.js: Manages background tasks and extension lifecycle.

manifest.json: Configuration file that defines extension properties and permissions.

icon.png: Icon for the extension.

popup.xpi.zip: Packaged version of the extension for installation.

💻 Getting Started

Installation

Clone the repository:

git clone https://github.com/your-username/Brightness-extension-for-chrome.git
cd Brightness-extension-for-chrome

Load the extension into your browser:

Open your Chrome browser and navigate to chrome://extensions/.


Enable Developer mode using the toggle in the top-right corner.

Click Load unpacked and select the folder containing this repository.

The extension will now be added to your Chrome toolbar!

🧩 Usage

Click the Brightness Extension icon in the browser toolbar.

Use the slider in the popup to adjust the brightness of images and content.

Press the Reset button to restore the default brightness.

🔧 Development

File Breakdown

popup.js: Implements the logic for the popup interface, including slider functionality.

content.js: Applies brightness changes to webpage elements dynamically.

background.js: Listens for user actions and manages communication between the popup and content scripts.

manifest.json: Specifies permissions and entry points for the extension.

Modifications

Edit the source files to customize or add new features.

Reload the extension on chrome://extensions/ after making changes.

🛡️ Privacy Policy

This extension does not collect any user data. It operates solely on the user's device and does not require external server communication.



GitHub Repository: Brightness Extension for Chrome
