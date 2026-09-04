import { useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import './App.css'

function App() {
  
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  return (
    <div className="weather-app">
      <div className="container">
        <div className="top-bar">
          <h1>Weather App</h1>

          <SearchBar 
            setWeather={setWeather}
            setLoading={setLoading}
            setError={setError}
          />
        </div>

        <div className="main-content">
          {loading && <p>Loading . . . </p>}

          {error && <p>{error}</p>}

          {weather && <WeatherCard weather={weather} />}
        </div>
      </div>
    </div>  
  )
}

export default App