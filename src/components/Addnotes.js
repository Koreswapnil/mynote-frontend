import React, {useContext, useState} from "react";
import NoteContext from "../context/notes/NoteContext";
import './Signup.css'

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
    <div className="row">
      <div className="col-6 offset-3">
           <div className="card">
             <div className="card-body">
               <h3 className="text-primary text-center mb-3">Add Note</h3>
               <form>
                 <div className="form-group col-10 offset-1">
                     <label className="form-label">Title</label>
                     <input type="text" className="form-control" id="title" name = "title" placeholder="Enter Note Title" onChange={onChange}/>
                 </div>

                 <div className="form-group col-10 offset-1">
                    <label className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" placeholder="Description"onChange={onChange} />
                  </div>
       
                 <div className="form-group col-10 offset-1">
                   <label className="form-label">Tag</label>
                   <input type="text" className="form-control" id="tag" name="tag" placeholder="Tag" onChange={onChange} />
                 </div>

                 <div className="row">
                   <div className="offset-4 col-4">
                     <button type="submit" className="btn btn-primary" onClick={handleClick}> Add Note </button>
                   </div>
                 </div>
       
                </form>
             </div>
           </div>
         </div>
      </div>
  )
}

export default Addnotes