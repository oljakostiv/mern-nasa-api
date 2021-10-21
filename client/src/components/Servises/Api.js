import axios from "axios";

let axiosInstance = axios.create({baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity'});

const getCollection = () => {
    return axiosInstance.get('/photos?sol=1000&api_key=DEMO_KEY/')
};

export {getCollection};
