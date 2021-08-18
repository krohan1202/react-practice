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
        },
        todoTaskRemover: (state, action) => {
            console.log(action.payload.t);
            // Getting a certain element from taskName array
            const index = state.value.taskName.indexOf(action.payload.t);
            if (index > -1) {
                state.value.taskName.splice(index, 1);
            }           
        }
    }
})

export const { todoTask, todoTaskRemover } = todoSlice.actions;

export default todoSlice.reducer;