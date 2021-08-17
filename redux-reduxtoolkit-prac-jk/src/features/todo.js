import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        value: {
            taskName: ["Test"]
        }
    },
    reducers: {
        todoTask: (state, action) => {
            state.value.taskName.push(action.payload);
        }
    }
})

export const {todoTask} = todoSlice.actions;

export default todoSlice.reducer;