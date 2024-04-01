import axios from 'axios'

export const diet = axios.create({
    baseURL: 'https://Diet suggestion-backend.herokuapp.com/'
})