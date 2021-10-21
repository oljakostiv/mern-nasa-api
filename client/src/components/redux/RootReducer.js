import {combineReducers} from "redux";
import {CollectionReducer} from "./CollectionReducer";

export const rootReducer = combineReducers({
    // eslint-disable-next-line no-undef
    collection: CollectionReducer,
});


