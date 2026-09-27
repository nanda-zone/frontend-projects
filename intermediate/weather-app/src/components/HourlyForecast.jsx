function HourlyForecast({ hourlyData }) {
    return (
        <div className="hourly-forecast">
            <h2>Next 24 Hours</h2>

            <div className="hourly-list">
                {hourlyData.map((hour) => (
                    <div key={hour.datetimeEpoch} className="hourly-item">
                        <p>{hour.datetime}</p>
                        <p>{hour.temp}°C</p>
                        <p>{hour.conditions}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HourlyForecast