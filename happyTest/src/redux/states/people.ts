import { LocalStorageTypes, People } from "@/models";
import { getItemLocalStorage, setLocalStorage } from "@/utilities/localStorage.utility";
import { createSlice } from "@reduxjs/toolkit";

const initialState: People[] = []

export const peopleSlice = createSlice({
    name: 'people',
    initialState: getItemLocalStorage(LocalStorageTypes.PEOPLE) ? JSON.parse(getItemLocalStorage('people') as string) : initialState,
    reducers: {
        addPeople: (state, action) => {
            setLocalStorage(LocalStorageTypes.PEOPLE, state)
            return action.payload 
        }
    }
})

export const { addPeople} = peopleSlice.actions