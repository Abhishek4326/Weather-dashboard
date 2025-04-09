import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import RecentSearches from './components/RecentSearches';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  
  const API_KEY = 'd226c10264e479c8532756ce014a463b';

  useEffect(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);
  
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);
  
  const fetchWeather = async (cityName) => {
    if (!cityName.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        throw new Error(
          response.status === 404
            ? 'City not found. Please check the spelling and try again.'
            : 'Failed to fetch weather data. Please try again later.'
        );
      }
      
      const data = await response.json();
      setWeather(data);
      updateRecentSearches(cityName);
      
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };
  
  const updateRecentSearches = (cityName) => {
    const formattedCity = cityName.trim().charAt(0).toUpperCase() + cityName.trim().slice(1).toLowerCase();
    const filteredSearches = recentSearches.filter(
      (search) => search.toLowerCase() !== formattedCity.toLowerCase()
    );
    const newSearches = [formattedCity, ...filteredSearches].slice(0, 5);
    
    setRecentSearches(newSearches);
    localStorage.setItem('recentSearches', JSON.stringify(newSearches));
  };
  
  const handleSearch = (searchCity) => {
    setCity(searchCity);
    fetchWeather(searchCity);
  };
  
  const handleRefresh = () => {
    if (city) {
      fetchWeather(city);
    }
  };
  
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="app-wrapper">
        <header>
          <h1>Weather Dashboard</h1>
          <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
        </header>
        
        <main>
          <SearchBar onSearch={handleSearch} />
          
          {loading && <Loader />}
          
          {error && <ErrorMessage message={error} />}
          
          {weather && !loading && !error && (
            <WeatherCard 
              weather={weather} 
              onRefresh={handleRefresh} 
            />
          )}
          
          {recentSearches.length > 0 && (
            <RecentSearches 
              searches={recentSearches} 
              onSelect={handleSearch} 
            />
          )}
        </main>
        
        <footer>
          <p>Created with React | Weather data from OpenWeatherMap</p>
        </footer>
      </div>
    </div>
  );
}

export default App;