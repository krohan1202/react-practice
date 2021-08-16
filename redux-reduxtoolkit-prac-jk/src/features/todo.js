import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = ["Test"];

export const todoSlice = createSlice({
    name: "todo",
    initialState: {value: {taskName: initialStateValue}},
    reducers: {
        todoTask: (state, action) => {
            state.value = action.payload;         
        }
    }
})

export const {todoTask} = todoSlice.actions;

export default todoSlice.reducer;