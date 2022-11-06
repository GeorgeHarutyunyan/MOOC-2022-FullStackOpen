import axios from "axios";

const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const addContact = (contactObject) => {
    const request = axios.post(baseURL, contactObject)
    return request.then(response => response.data)
    }

const deleteContact = id => {
    console.log('In service id:',id)
    const request = axios.delete(`${baseURL}/${id}`)
    return request.then(response => response.data)
}


export default {getAll, addContact, deleteContact}