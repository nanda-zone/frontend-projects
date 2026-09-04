function WeatherCard({ weather }) {

    const current = weather.currentConditions

    return (
        <div className="weather-card">
            <h2>{weather.resolvedAddress}</h2>
            
            <div className="temperature">
                <p>{current.temp}°C</p>
                <p>{current.conditions}</p>
            </div>
            
            <div className="weather-details">
                <div className="weather-details-wrapper">
                    <p>Wind</p>
                    <strong>{current.windspeed} km/h</strong>
                </div>
                
                <div className="weather-details-wrapper">
                    <p>Rain</p>
                    <strong>{current.precipprob}%</strong>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard