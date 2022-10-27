import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h3>Give feedback:</h3>
	  <Button text='good' handleClick={() => setGood(good + 1)}/>
	  <Button text='bad' handleClick={() => setBad(bad + 1)}/>
	  <Button text='neutral' handleClick={() => setNeutral(neutral + 1)}/>
	  <h3>Statistics</h3>
	  <Display value={good}/>
	  <Display value={bad}/>
	  <Display value={neutral}/>
    </div>
  )
}


const Button = ({text, handleClick}) => {
	return (
		<button onClick={handleClick}>{text}</button>
	)
}

const Display = ({value}) => <div>{value}</div>


export default App