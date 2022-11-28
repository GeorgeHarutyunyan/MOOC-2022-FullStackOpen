const Notification = ({message}) => {
    if (message === null) {
        return null
    }
    
    const notifStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }
    return (
        
        <div className='error' style={notifStyle}>
            {message}
        </div>
    )
}

export default Notification