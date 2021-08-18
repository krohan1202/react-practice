import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { todoTask, todoTaskRemover } from "../features/todo";

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
                <div style={{'margin': '1vw 0'}}>
                <li style={{'display': 'inline'}}>{t}</li>
                <button value={t} style={{'marginLeft': '3vw'}} onClick={()=> {
                    dispatch(todoTaskRemover({t}));
                }}>Delete</button>
                </div>
            ))}
            <input value={text} onChange={(e) => setText(e.target.value)}/>
            <button type="submit" onClick={() => {
                setText(""); //Not working
                dispatch(todoTask(text));
            }}>Go</button>
        </div>
    )
}
export default Todo;