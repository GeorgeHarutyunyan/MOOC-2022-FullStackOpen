import { useState, useEffect } from 'react'
import axios from 'axios'

import PersonForm from './components/PersonForm'
import Numbers from './components/Numbers'
import Persons from './components/Persons'
import Filter from './components/Filter'
import contactService from './services/contacts'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    contactService.getAll()
    .then(initialContacts => {
      setPersons(initialContacts)
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

  const handleDelete = id => {
    const contact = persons.find(person => person.id == id)
    if (window.confirm(`Really delete ${contact.name}?`)){
      contactService.deleteContact(id)
      .then(response => setPersons(persons.filter(person => person.id != id)))
      .catch(exception => {
        alert(`The contact ${contact.name} has already been deleted!`)
        setPersons(persons.filter(person => person.id != id))
      })
    }

  }
  const handleSubmit = (event) => {
    event.preventDefault()

    const nameObj = {
      name : newName,
      number: newNumber,
      id: persons.length+1
    }

    if (nameExists()){
      alert(`${newName} is already in the phonebook`)
    }
    else {
      contactService.addContact(nameObj)
      .then(returnedContact => {
        setPersons(persons.concat(returnedContact))
        setNewName('')
        setNewNumber('')
      })

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
          <Numbers
            onChange={handleNumberInput}
            value={newNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <Persons persons={namesToShow} handleDelete={handleDelete} />
      </ul>
    </div>
  )
}

export default App