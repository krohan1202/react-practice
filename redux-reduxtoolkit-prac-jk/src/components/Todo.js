import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {todoTask} from "../features/todo";

function Todo() {
    const dispatch = useDispatch();

    // useSelector part
    const todoTasks = useSelector(state => state.todo.value);
    // console.log(todoTasks);

    // Text state controller
    const [text, setText] = useState(todoTasks.taskName); //["Test"]
    console.log(text);

    return (
        <div>
            <h1>{todoTasks.taskName}</h1>
            <input onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => dispatch(todoTask({taskName: text}))}>Go</button>
        </div>
    )
}
export default Todo;