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

const deleteContact = (id) => {
    const request = axios.delete(`${baseURL}/${id}`)
    return request.then(response => response.data)
}

const updateContact = (contactObject) => {
    const request = axios.put(`${baseURL}/${contactObject.id}`, contactObject)
    return request.then(response => response.data)
}

export default {getAll, addContact, updateContact, deleteContact}