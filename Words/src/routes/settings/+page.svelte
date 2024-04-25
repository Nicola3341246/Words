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
    <button class="button" id="nightModeButton">Toggle Night Mode</button>
    <button class="button" id="languageButton">Toggle Language</button>
  </div>

  <script>
    // Function to handle night mode button click
    const nightModeButton = document.getElementById('nightModeButton');
    nightModeButton.addEventListener('click', () => {
      const settings = loadSettings();
      const updatedSettings = toggleNightMode(settings);
      updateUI(updatedSettings);
    });

    // Function to handle language button click
    const languageButton = document.getElementById('languageButton');
    languageButton.addEventListener('click', () => {
      const settings = loadSettings();
      const updatedSettings = toggleLanguage(settings);
      updateUI(updatedSettings);
    });

    // Function to toggle night mode
    const toggleNightMode = (settings) => {
      const newSettings = { ...settings, nightMode: !settings.nightMode };
      saveSettings(newSettings);
      return newSettings;
    };

    // Function to toggle language
    const toggleLanguage = (settings) => {
      const newLanguage = settings.language === 'english' ? 'german' : 'english';
      const newSettings = { ...settings, language: newLanguage };
      saveSettings(newSettings);
      return newSettings;
    };

    // Function to update the UI based on settings
    const updateUI = (settings) => {
      const nightModeButton = document.getElementById('nightModeButton');
      nightModeButton.textContent = settings.nightMode ? 'Night Mode: On' : 'Night Mode: Off';
      
      const languageButton = document.getElementById('languageButton');
      languageButton.textContent = `language: ${settings.language}`;
    };

    // Functions to load and save settings from/to local storage
    const loadSettings = () => {
      const savedSettings = localStorage.getItem('settings');
      if (savedSettings) {
        return JSON.parse(savedSettings);
      } else {
        const defaultSettings = { nightMode: false, language: 'english' };
        saveSettings(defaultSettings);
        return defaultSettings;
      }
    };

    const saveSettings = (settings) => {
      localStorage.setItem('settings', JSON.stringify(settings));
    };

    // Initialize UI with saved settings
    const initialSettings = loadSettings();
    updateUI(initialSettings);
  </script>
</body>
</html>