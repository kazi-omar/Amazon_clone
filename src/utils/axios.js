// ! axios is a fetching library(interct with API)
import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-58963/us-central1/api'
});

export default instance; 

// http://localhost:5001/clone-58963/us-central1/api
