import axios from 'axios'

export const getPatients = () => {
    return axios
    .get("http://localhost:4000/patients")
   
}