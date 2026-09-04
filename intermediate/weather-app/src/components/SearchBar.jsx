import { useState } from 'react'

function SearchBar({ setWeather, setLoading, setError }) {
    const [location, setLocation] = useState('')

    async function handleSearch() {
        if (!location.trim()) {
            return
        }

        setLoading(true)
        setError(null)
        setWeather(null)

        try {
            const apiKey = import.meta.env.VITE_WEATHER_API_KEY
            const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}&contentType=json`
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error('Location not found')
                
            }

            const data = await response.json()

            setWeather(data)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
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
        </div>
    )
}
export default SearchBar