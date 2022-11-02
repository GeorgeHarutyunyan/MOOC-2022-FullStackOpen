import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import DisplayCountries from './components/DisplayCountries'

const App = () => {

  const [countries, setCountries] = useState([])
  const [filteredCountry, setFilteredCountry] = useState('')

  const showCountries = countries.filter(country => {
    return country.name.official.includes(filteredCountry)
  })

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])


  const handleFilteredCountry = (event) => {
    setFilteredCountry(event.target.value)
  }

  return (
    <div>
      <Filter onChange={handleFilteredCountry} value={filteredCountry}/>
      <DisplayCountries countries={showCountries}/>
    </div>
  )
}

export default App