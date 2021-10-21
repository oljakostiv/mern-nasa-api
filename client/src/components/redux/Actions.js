import {CREATE_COLLECTION} from "./types";

export function createCollection(collection) {
    return {
        type: CREATE_COLLECTION,
        payload: collection
    }
}
