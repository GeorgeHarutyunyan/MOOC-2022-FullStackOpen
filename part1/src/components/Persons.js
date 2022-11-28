const Persons = ({persons, handleDelete}) => {

  return (
    persons.map(person => <li key={person.id}>
      {person.name} 
      {person.number}
      <button onClick={() => handleDelete(person.id)}>DELETE</button></li>)
  )
  }

export default Persons