const Numbers = ({onChange, value}) => {
    return (
        <div>
          number: 
          <input 
            onChange={onChange}
            value={value}
          />
        </div>
    )
}

export default Numbers