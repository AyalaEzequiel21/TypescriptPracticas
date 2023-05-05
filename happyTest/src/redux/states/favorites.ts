import { LocalStorageTypes, People } from "@/models";
import { getItemLocalStorage, setLocalStorage } from "@/utilities/localStorage.utility";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState: People[] = []

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: getItemLocalStorage(LocalStorageTypes.FAVORITES) ? JSON.parse(getItemLocalStorage(LocalStorageTypes.FAVORITES) as string) : initialState,
    reducers: {
        addFavorite: (state, action) => {
            setLocalStorage(LocalStorageTypes.FAVORITES, action.payload)
            return action.payload
        },
        removeFavorite: (state, action) => {
            const filteredState = current(state).filter((p: People) => p.id !== action.payload.id)
            setLocalStorage(LocalStorageTypes.FAVORITES, filteredState)
            return filteredState
        }
    }
})

export const { addFavorite, removeFavorite} = favoritesSlice.actions

export default favoritesSlice.reducer