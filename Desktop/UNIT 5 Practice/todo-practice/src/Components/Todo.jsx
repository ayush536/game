import React, { useState } from "react"

import "./Todo.css"

export function Todo(){

    const [ item, setItem ] = useState("")

    const [ newitem, setnewItem ] = useState([])

    const itemEvent = (event) => {
        setItem(event.target.value);

    };

    const listofitems = () => {
        setnewItem((prevalue)=> {
            return [...prevalue, item]
        });
        setItem(" ")
    };

    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>ToDo List</h1>
                <br />
                <input 
                type="text" 
                value={item}
                 placeholder="Add Task" 
                 onChange={itemEvent}
                 />
                <button className="newBtn"
                 onClick={listofitems}>ADD</button>
                <br />
                <div className="kris">
               <ol id="task_count">
                     {newitem.map((val) => {
                        return <li>{val}</li>
                    })}
                   </ol>
                    </div>
                    <br />      
                </div>
            </div>
       
        </>
    )
}