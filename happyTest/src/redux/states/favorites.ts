import { LocalStorageTypes, People } from "@/models";
import { getItemLocalStorage, setLocalStorage } from "@/utilities/localStorage.utility";
import { createSlice } from "@reduxjs/toolkit";

const initialState: People[] = []

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: getItemLocalStorage(LocalStorageTypes.FAVORITES) ? JSON.parse(getItemLocalStorage('people') as string) : initialState,
    reducers: {
        addFavorite: (state, action) => {
            setLocalStorage(LocalStorageTypes.FAVORITES, state)
            return action.payload
        },
        removeFavorite: (state, action) => {
            const filteredState = state.filter((p: People) => p.id !== action.payload.id)
            setLocalStorage(LocalStorageTypes.FAVORITES, filteredState)
            return filteredState
        }
    }
})

export const { addFavorite, removeFavorite} = favoritesSlice.actions