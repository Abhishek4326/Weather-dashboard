function WeatherCard({ weather, onRefresh }) {
    if (!weather) return null;
  
    return (
      <div className="weather-card">
        <div className="weather-header">
          <div>
            <h2>{weather.name}, {weather.sys.country}</h2>
            <p className="weather-description">{weather.weather[0].description}</p>
          </div>
          <button className="refresh-button" onClick={onRefresh} aria-label="Refresh">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
            </svg>
          </button>
        </div>
  
        <div className="weather-info">
          <div className="weather-icon">
            <img 
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
              alt={weather.weather[0].description} 
            />
          </div>
  
          <div className="weather-temp">
            <h3>{Math.round(weather.main.temp)}°C</h3>
            <p>Feels like: {Math.round(weather.main.feels_like)}°C</p>
          </div>
  
          <div className="weather-details">
            <div className="detail-item">
              <span>Humidity</span>
              <span>{weather.main.humidity}%</span>
            </div>
            <div className="detail-item">
              <span>Wind</span>
              <span>{(weather.wind.speed * 3.6).toFixed(1)} km/h</span>
            </div>
            <div className="detail-item">
              <span>Pressure</span>
              <span>{weather.main.pressure} hPa</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default WeatherCard;
  