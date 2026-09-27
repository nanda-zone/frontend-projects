import { useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import HourlyForecast from './components/HourlyForecast'
import './App.css'

function App() {
  
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  const now = new Date()
  const currentHour = now.getHours()
  const hourlyData = weather
    ? weather.days.flatMap(day => day.hours)
    : []
  const currentHourString = `${currentHour
    .toString()
    .padStart(2, '0')}:00:00`

  console.log('Current hour:',currentHour)
  console.log('Looking for:',currentHourString)

  const currentHourIndex = hourlyData.findIndex(hour => {
    return hour.datetime === currentHourString
  })
  
  console.log('current hour index:', currentHourIndex)

  const previous24Hours = hourlyData.slice(
    currentHourIndex - 24,
    currentHourIndex
  )

  const next24Hours = hourlyData.slice(
    currentHourIndex + 1,
    currentHourIndex + 25
  )

  console.log('Previous 24:', previous24Hours)
  console.log('Next 24:', next24Hours)

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
          {loading && <p className="red-message">Loading . . . </p>}

          {error && <p className="red-message">{error}</p>}

          {weather && <WeatherCard weather={weather} />}
        
          {weather && (
            <HourlyForecast hourlyData={next24Hours} />
          )}
        </div>
      </div>
    </div>  
  )
}

export default App