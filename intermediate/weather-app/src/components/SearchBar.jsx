import { useState } from 'react'

function SearchBar() {
    const [location, setLocation] = useState('')
    const [weather, setWeather] = useState(null)

    async function handleSearch() {
        if (!location.trim()) {
            return
        }

        try {
            const apiKey = import.meta.env.VITE_WEATHER_API_KEY
            const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}&contentType=json`
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error('Failed to fetch weather data')
                
            }

            const data = await response.json()

            setWeather(data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="search-bar">
            <input 
                type="text"
                placeholder="Enter the location ... "
                value={location}
                onChange={(event) => setLocation(event.target.value)} //Every time the user types something, update location.
            />

            <button onClick={handleSearch}>
                Search
            </button>

            {weather && ( //if weather exist, rendering the pre
                <pre>{JSON.stringify(weather, null, 2)}</pre>
            )}
        </div>
    )
}
export default SearchBar