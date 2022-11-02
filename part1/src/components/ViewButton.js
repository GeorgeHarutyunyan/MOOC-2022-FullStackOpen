import { useState } from "react"
import Country from "./Country"

const ViewButton = ({country}) => {
    const [showView, setView] = useState(false)
    console.log('country', country)

    if (showView){
        return (
            <div>
                <button onClick={() => setView(!showView)}>expand</button>
                <Country country={country} />
            </div>
        )
    }
    return (
        <div>
            <button onClick={() => setView(!showView)}>expand</button>
        </div>       
    )

}

export default ViewButton