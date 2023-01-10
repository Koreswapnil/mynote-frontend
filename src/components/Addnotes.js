import React, {useContext, useState} from "react";
import NoteContext from "../context/notes/NoteContext";

const Addnotes = () => {
    const context = useContext(NoteContext);
    const {addNotes} = context;

    const [notes, setNotes]=useState({title:"", description:"", tag:""})
    const handleClick =(e)=>{
      e.preventDefault();
      addNotes(notes.title, notes.description, notes.tag);
    }
    const onChange=(e)=>{
        setNotes({...notes, [e.target.name]: e.target.value})
    }
  return (
    <div className="container mt-3">
       <h3>Add Note</h3>
         <form>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" id="title" name = "title"
            placeholder="Enter Note Title" onChange={onChange}/>
        </div>
        <div className="form-group">
           <label>Description</label>
           <input type="text" className="form-control" id="description" name="description"
           placeholder="Description"onChange={onChange} />
        </div>
        <div className="form-group">
           <label>Tag</label>
           <input type="text" className="form-control" id="tag" name="tag"
           placeholder="Tag"onChange={onChange} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}> Add Note </button>
      </form>
    </div>
  )
}

export default Addnotes