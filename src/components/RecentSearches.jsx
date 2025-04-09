function RecentSearches({ searches, onSelect }) {
    return (
      <div className="recent-searches">
        <h3>Recent Searches</h3>
        <div className="search-list">
          {searches.map((city, index) => (
            <button 
              key={index} 
              onClick={() => onSelect(city)}
              className="search-item"
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    );
  }
  
  export default RecentSearches;