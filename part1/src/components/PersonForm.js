const PersonForm = ({onChange, value}) => {
    return (
        <div>
          name: 
          <input 
            onChange={onChange}
            value={value}
          />
        </div>
    )
}

export default PersonForm