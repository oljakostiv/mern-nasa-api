import {CREATE_COLLECTION, FETCH_COLLECTIONS} from "./types";

const initialState = {
    collections: [],
    fetchedCollections: [],
}

export const CollectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_COLLECTION:
            return {...state, collections: state.collections.concat([action.payload])}
        case FETCH_COLLECTIONS:
            return {...state, fetchedCollections: action.payload}

        default: return state
    }
};

