"use client";
import React, {useState} from "react";

function CreateContent(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [completed, setCompleted] = useState(false);
    const [important, setImportant] = useState(false);

    const handleChange = (name:string) => (e: any) => {
        
    };


    return <div>
        <h1>Create a Task</h1>
        <div className="input-control">
            <label htmlFor="title">Title</label>
            <input 
            type="text"
            id="title"
            value = {title}
            type = "text"
            name = "title"
            onChange={handleChange("title")}
            placeholder="placeHoldert"
             
            />
        </div>
        <div className="input-control">
            <label htmlFor="description">Description</label>
            <textarea 
            value = {description}
            onChange={handleChange("description")}
            name="description"
            id="description"
            row={4}
            placeholder="placeHolderd">
            </textarea>
        </div>
        <div className="input-control">
            <label htmlFor="date">Date</label>
            <input 
            value = {date}
            type = "date"
            name = "date"
            onChange={handleChange("date")}
            id = "date"
             
            />
        </div>
        <div className="input-control">
            <label htmlFor="completed">Toggle Completed</label>
            <input 
            type="checkbox"
            id="completed"
            value = {completed.toString()}
            name = "completed"
            onChange={handleChange("completed")}
            />
        </div>
        <div className="input-control">
            <label htmlFor="important">Toggle Important</label>
            <input 
            type="checkbox"
            id="important"
            value = {important.toString()}
            name = "important"
            onChange={handleChange("important")}
            />
        </div>
        <div className="submit-btn">
            <button type = "submit">
                <span>Submit</span>
            </button>

        </div>
    </div>;
}

export default CreateContent;