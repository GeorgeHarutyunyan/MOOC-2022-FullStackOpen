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
	  <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}


const Button = ({text, handleClick}) => {
	return (
		<button onClick={handleClick}>{text}</button>
	)
}

const StatisticsLine = ({text, value}) => {
	return (
		<tr>
			<td>{text} {value}</td>
		</tr>
	)
}

const Statistics = ({good, bad, neutral}) => {
	console.log(good+bad+neutral)
	if ((good + bad + neutral) <= 0){
		return (
			<p>No feedback given</p>
		)
	}
	return (
		<div>
			<table>
				<tbody>
						<StatisticsLine text={'Good'} value={good}/>
						<StatisticsLine text={'Neutral'} value={neutral}/>
						<StatisticsLine text={'Bad'} value={bad}/>
						<StatisticsLine text={'Total'} value={good+bad+neutral}/>
						<StatisticsLine text={'Average'} value={(good-bad)/(good+bad+neutral)}/>
						<StatisticsLine text={'Positive'} value={good/(good+bad+neutral)*100}/>
				</tbody>
			</table>
		</div>
	)
}

export default App