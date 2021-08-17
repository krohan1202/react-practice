import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { todoTask } from "../features/todo";

function Todo() {
    const dispatch = useDispatch();

    // useSelector part
    const todoTasks = useSelector(state => state.todo.value);
    console.log(todoTasks);

    // Text state controller
    const [text, setText] = useState(""); //["Test"]
    console.log(text);

    return (
        <div>
            {todoTasks.taskName  && todoTasks.taskName.map((t) => (
                <li>{t}</li>
            ))}
            <input onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => dispatch(todoTask(text))}>Go</button>
        </div>
    )
}
export default Todo;