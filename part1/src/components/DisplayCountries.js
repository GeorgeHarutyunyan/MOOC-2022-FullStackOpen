import Country from "./Country"
import ViewButton from "./ViewButton"

const DisplayCountries = ({countries}) => {
    if (countries.length === 1) {
        return (
            <Country country={countries[0]}/>
        )
    }
    else if (countries.length > 100 ){
        return (
            <div>
                <p>Too many matches, be more specific...</p>
            </div>
        )
    }
    return (
        <ol>
            {countries.map(country => (
                <li key={country.name.official}>
                    {country.name.official}
                    <ViewButton country={country} />
                </li>
            ))}
        </ol>
    )
}

export default DisplayCountries