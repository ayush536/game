import { useEffect, useState } from "react"
import axios from 'axios';
import { getDefaultNormalizer } from "@testing-library/react";

export const Todo=() => {

    const[ text, setText] = useState("");
    const[ todo, setTodo] = useState([])
    const[ page, setPage] = useState(1)

    useEffect(() => {
        getData();
    }, [page])

    const getData=() => {
        axios
        .get(`http://localhost:3004/todo?_limit=2&_page=${page}`)
        .then((res) => {
            setTodo(res.data)
        })
    }
    return(
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => {
                fetch('http://localhost:3004/todo',{
                    method: "POST",
                    body:JSON.stringify({title : text, status: false}),
                    headers:{
                        "content-type":"application/json"
                    },
                }).then(() => {
                    getData();
                });
            }}>ADD YOUR TASK</button>
            {todo.map((g) => (
                <div key={g.id}>{g.title}</div>
            ))}
            <button onClick={() =>{
                setPage(page+1)
            }}>SEE NXT TASK</button>
            <button onClick={() => [
                setPage(page-1)
            ]}>SEE PRE TASK</button>
        </div>
    )
}