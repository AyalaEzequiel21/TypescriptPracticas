import { People } from "@/models";
import { configureStore } from '@reduxjs/toolkit'
import { favoritesSlice, peopleSlice } from ".";

export interface AppStore {
    people: People[];
    favorites: People[];
}

export default configureStore<AppStore>({
    reducer: {
        people: peopleSlice.reducer,
        favorites: favoritesSlice.reducer
    }
})