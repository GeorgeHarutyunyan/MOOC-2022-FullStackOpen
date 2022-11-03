import { useEffect, useState } from "react"
import axios from "axios"

const Country = ({country}) => {
  return (
    <div>
      <h2>{country.name.official}</h2>
      <p>Capital: {country.capital}</p>
      <h3>languages:</h3>
      <ul>
        <Languages languages={country.languages} />
      </ul>
      <img src={country.flags.png}/>
      <Weather country={country}/>
      <br></br>
    </div>
  )
}

const Languages = ({languages}) => {
  let languageArray = []
  for (let lang in languages) {
    languageArray = languageArray.concat(<li key={lang}>{languages[lang]}</li>)
 }
 return languageArray
}


const Weather = ({country}) => {
  const [countryWeather, setWeather] = useState({})

  const api_key = process.env.REACT_APP_API_KEY
  const lat = country.latlng[0]
  const long = country.latlng[1]
  useEffect(() => {
    const req = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}&units=metric`
    axios.get(req)
      .then(response => {
        setWeather(response.data)
      })
    }, [])

  if (Object.keys(countryWeather).length === 0) {
    return (
      <p>Loading weather data...</p>
    )
  }
  else {
    return (
      <div>
        <h3>Weather in {country.capital}:</h3>
        temperature: {countryWeather.main.temp} Celcius
        <br></br>
        <img src={`http://openweathermap.org/img/wn/${countryWeather.weather[0].icon}@2x.png`} />
        <br></br>
        wind: {countryWeather.wind.speed}m/s
      </div>
    )
  }
}

export default Country