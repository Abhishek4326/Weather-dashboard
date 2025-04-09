# Weather Dashboard

A simple, elegant React-based Weather Dashboard that allows users to search for and view current weather conditions for any city worldwide.

## Tech Stack

- Frontend Framework: React.js
- **State Management: React Hooks (useState, useEffect)
- **API Integration**: Fetch API
- **Styling**: CSS with CSS Variables for theming
- **Deployment**: [Choose one: Vercel, Netlify, or GitHub Pages]

## Features

- Search for weather by city name
- Display current weather conditions including:
  - Temperature (°C)
  - Weather condition (with icon)
  - Humidity
  - Wind speed
  - Pressure
- Recent search history (last 5 cities)
- Dark/Light theme toggle
- Responsive design for all device sizes
- Loading and error states
- Refresh button to update weather data

## Setup Instructions

1. Clone the repository
   ```
   git clone [your-repo-url]
   cd weather-dashboard
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key
   ```
   REACT_APP_API_KEY=your_api_key_here
   ```

4. Start the development server
   ```
   npm start
   ```

5. Build for production
   ```
   npm run build
   ```

## API Integration Details

This app uses the OpenWeatherMap API to fetch weather data:

- **API Documentation**: [OpenWeatherMap API](https://openweathermap.org/api)
- **Endpoints Used**:
  - Current Weather: `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric`
- **Rate Limits**: Free plan allows up to 60 calls per minute and 1,000,000 calls per month
- **API Key**: You need to register for a free API key at [OpenWeatherMap](https://openweathermap.org/api)

## Future Improvements

- Add 5-day forecast
- Geolocation support to automatically detect user's location
- Weather notifications/alerts
- More detailed weather information
- Unit conversion (Celsius/Fahrenheit)