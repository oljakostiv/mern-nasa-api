import {createSlice} from "@reduxjs/toolkit";

const collectionSlice = createSlice({
    name: 'collection',
    initialState: {
        fetchedCollections: []
    },
    reducers: {
        getCollections (state, action) {
            state.fetchedCollections = action.payload
        }
    }
})

export const {getCollections} = collectionSlice.actions
export default collectionSlice.reducer
