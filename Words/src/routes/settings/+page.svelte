<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Settings</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      color: #333;
      transition: background-color 0.3s ease;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h1 {
      text-align: center;
    }

    .button {
      display: inline-block;
      padding: 10px 20px;
      margin: 10px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .button:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Settings</h1>
    <button class="button" id="nightModeButton">Night Mode</button>
    <button class="button" id="languageButton">Change Language</button>
  </div>

    <script lang="ts">
        const nightModeButton = document.getElementById('nightModeButton');

        // Function to handle night mode button click
        nightModeButton.addEventListener('click', () => {
        // Load current settings
        const settings = loadSettings();

        // Toggle night mode
        const updatedSettings = toggleNightMode(settings);

        // Update UI based on new settings
        updateUI(updatedSettings); 
        });
      

        // Get night mode button and add event listener
        const nightModeButton = document.getElementById('nightModeButton');
        nightModeButton.addEventListener('click', () => {
        const settings = loadSettings();
        const updatedSettings = toggleNightMode(settings);
        updateUI(updatedSettings);
        });

        // Get language button and add event listener
        const languageButton = document.getElementById('languageButton');
        languageButton.addEventListener('click', () => {
        // Your logic for changing language goes here...
        });

        // Function to update the UI based on settings
        const updateUI = (settings) => {
        if (settings.nightMode) {
            document.body.style.backgroundColor = '#333';
            document.body.style.color = '#fff';
        } else {
            document.body.style.backgroundColor = '#f5f5f5';
            document.body.style.color = '#333';
        }
        };
    </script>
</body>
</html>




