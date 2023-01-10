import React, {useContext} from 'react';
import NoteContext from "../context/notes/NoteContext";

export const Noteitem = (props) => {
  const context = useContext(NoteContext);
  const {deleteNotes} = context;
  const {notes, updateNotes} = props;
  return ( 
    <div className='col-md-3'>
      <div className="card">
       <div className="card-body">
        <div className="d-flex align-items-center">
        <h4 className="card-title">{notes.title}</h4>
        <i className="fa-solid fa-trash-can ml-4" onClick={()=>{deleteNotes(notes._id)}}></i>
         <i className="fa-solid fa-pen-to-square mx-3" onClick={()=>{updateNotes(notes)}}></i>
        </div>
         <p className="card-text">{notes.description}</p>
         <p className="card-text">{notes.tag}</p>
        </div>
      </div> 
    </div>
  )
}

export default Noteitem;