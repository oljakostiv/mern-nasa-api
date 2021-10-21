import {CREATE_COLLECTION} from "./types";

const initialState = {
    collections: [],
}

export const CollectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_COLLECTION:
            return {...state, collections: state.collections.concat([action.payload])}

        default: return state
    }
};

