import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const AddTask = ({ filter, handleFilter }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const dispatch = useDispatch();

    const handleSubmit= (e) => {
        e.preventDefault();
        text
        ?dispatch(addTask({ id : Math.random(), task: text, isDone:false}))
        : alert("please fill the form");
        setText("");
    };
        return (
            <div className="title">
                <h1>OUR TO DO APP</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                    className="inp"
                    type="text"
                    value={text}
                    onChange={handleChange}
                    />
                    <button type="submit">Add</button>
                </form>
                <button onclick={handleFilter}>{filter ? "all" : "filter" } </button>
            </div>
        );
    };
export default AddTask;