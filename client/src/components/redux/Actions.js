import {CREATE_COLLECTION, FETCH_COLLECTIONS} from "./types";
import axios from 'axios';
import {getCollections} from "./Slice";

export function createCollection(collection) {
    return {
        type: CREATE_COLLECTION,
        payload: collection
    }
}

const getCollection = () => axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')

export {getCollection}


// export function fetchCollections() {
//     return async dispatch => {
//         const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY/')
//         const json = await response.json()
//         console.log(json);
//         dispatch({type: FETCH_COLLECTIONS, payload: json})
//         // dispatch(getCollections(json))
//     }
// }



