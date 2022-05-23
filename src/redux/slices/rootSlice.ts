import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'Thor',
        price: "120.00",
        description: "Original",
        rating: 'PG-13',
        release_date: 'Jan 1, 1999',
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        chooseDescription: (state, action) => { state.description = action.payload},
        chooseRating: (state, action) => { state.rating = action.payload},
        chooseReleaseDate: (state, action) => { state.release_date = action.payload}
    }
})

// Export Reducers
export const reducer = rootSlice.reducer;
export const { chooseName, choosePrice, chooseDescription, chooseRating, chooseReleaseDate } = rootSlice.actions