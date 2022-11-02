import { useState, useEffect } from 'react'
import axios from 'axios'

import PersonForm from './components/PersonForm'
import Numbers from './components/Numbers'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response)
        setPersons(response.data)
      })
  },[])

  const namesToShow = persons.filter(person => person.name.includes(filter))

  const handleFilterInput = (event) => {
    setFilter(event.target.value)
  }

  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberInput = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nameObj = {
      name : newName,
      number: newNumber
    }

    if (nameExists()){
      alert(`${newName} is already in the phonebook`)
    }
    else {
      setPersons(persons.concat(nameObj))
    }

  }

  const nameExists = () => {
    for (const person of persons) {
      if (person.name === newName) {
        return true
      }
    }
    return false
  }


  return (
    <div>
      <h2>Phonebook</h2>
        <Filter onChange={handleFilterInput} value={filter}/>
      <h2>Add a new number:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <PersonForm 
            onChange={handleNameInput}
            value={newName}
          />
          <br></br>
          <Numbers
            onChange={handleNumberInput}
            value={newNumber}
          />
          <div>debug: {newName}</div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <Persons persons={namesToShow} />
      </ul>
    </div>
  )
}

export default App