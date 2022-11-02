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

export default Country