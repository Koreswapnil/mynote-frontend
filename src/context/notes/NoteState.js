import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) =>{
    const host = "http://localhost:5000"
    const notesInitial =[]
    const [notes, setNotes] = useState(notesInitial)

    //Get all notes
    const getNotes = async() =>{
        //TODO: API call
        const response = await fetch(`${host}/notes/fetchnotes`, {
            method: "GET",
            headers: {
                'Content-Type':'application/json',
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhZWIzYTMwZjE0OWM3NDA0ZTQwMTRmIn0sImlhdCI6MTY3MjY1MzAxN30.pNnl3qpRP_W78hvgbxHludzZnO7-L0Y86gnDje0287s"
            }
        });
        const json = await response.json();
        console.log(json)
        setNotes(json)
    }
    

    //Add Notes
    const addNotes = async(title, description, tag) =>{
        //TODO: API call
        // eslint-disable-next-line
        const response = await fetch(`${host}/notes/addnotes`, {
            method: "POST",
            headers: {
                'Content-Type':'application/json',
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhZWIzYTMwZjE0OWM3NDA0ZTQwMTRmIn0sImlhdCI6MTY3MjY1MzAxN30.pNnl3qpRP_W78hvgbxHludzZnO7-L0Y86gnDje0287s"
            },
            body: JSON.stringify({title, description, tag})
        });
     
        //Client Side
        console.log("New note added")
        const notes = {
        "_id": "4",
        "title": title,
        "description": description,
        "tag": tag
        };
        setNotes(notes.concat(notes))
    }

    //Delete Notes
    const deleteNotes=async(id)=>{
        //TODO: API call
        const response = await fetch(`${host}/notes/deletenotes/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type':'application/json',
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhZWIzYTMwZjE0OWM3NDA0ZTQwMTRmIn0sImlhdCI6MTY3MjY1MzAxN30.pNnl3qpRP_W78hvgbxHludzZnO7-L0Y86gnDje0287s"
            }
        });
        const json = response.json();
        console.log(json)

        //Client side
        console.log("Deleting notes with id"+ id);
        const newNotes = notes.filter((notes)=>{return notes._id!==id})   
        setNotes(newNotes)     
    }

    //Edite Notes
    const editeNotes= async(id, title, description, tag)=>{
        //API call
        // eslint-disable-next-line
        const response = await fetch(`${host}/notes/updatenotes/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type':'application/json',
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhZWIzYTMwZjE0OWM3NDA0ZTQwMTRmIn0sImlhdCI6MTY3MjY1MzAxN30.pNnl3qpRP_W78hvgbxHludzZnO7-L0Y86gnDje0287s"
            },
            body: JSON.stringify(title, description, tag)
        });

        //To edite on client side
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if(element._id === id){
                element.title = title;
                element.description = description;
                element.tag = tag;
            }     
        }   
    }

    return(
    <NoteContext.Provider value={{notes, addNotes, deleteNotes, editeNotes, getNotes}}>
            {props.children}
    </NoteContext.Provider>
    )
}

export default NoteState;