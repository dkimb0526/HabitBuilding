"use client";
import React, {useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";


function CreateContent(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [completed, setCompleted] = useState(false);
    const [important, setImportant] = useState(false);

    const handleChange = (name:string) => (e: any) => {
        switch (name){
            case "title":
                setTitle(e.target.value);
                break;
            case "description":
                setDescription(e.target.value);
                break;
            case "date":
                setDate(e.target.value);
                break;
            case "completed":
                setCompleted(e.target.checked);
                break;
            case "important":
                setImportant(e.target.checked);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const task = {
            title,
            description,
            date,
            completed,
            important,
        };

        try {
            const res = await axios.post("/api/tasks", task);

            if(res.data.error){
                toast.error(res.data.error);
            }

            toast.success("Task created successfully. :)")
        } catch (error){
            toast.error("Something went wrong. :(");
            console.log(error);

        }
    };

    return (
    <form onSubmit={handleSubmit}>
        <h1>Create a Task</h1>
        <div className="input-control">
            <label htmlFor="title">Title</label>
            <input 
            type="text"
            id="title"
            value = {title}
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
            rows={4}
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
    </form>);
}

export default CreateContent;