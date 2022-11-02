const Filter = ({onChange, value}) => {
    return (
      <div>
        <p>Filter shown with: </p>
          <input
            onChange={onChange}
            value={value}
          />
      </div>
  )
}

export default Filter