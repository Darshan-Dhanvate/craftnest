import axios from 'axios';
const API_BASE_URL= "http://localhost:5000/api";

export const fetchData= async ()=>{
    try {
        const response= await axios.get(`${API_BASE_URL}/data`);
        return response.data;
    } catch (error) {
        console.log("error fetching data: ", error);
    }
}