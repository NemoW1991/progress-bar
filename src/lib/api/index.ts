import axios from 'axios'

const baseURL = 'http://pb-api.herokuapp.com/bars'

export const getData = () => axios.get(baseURL)