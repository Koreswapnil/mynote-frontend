import React, {useContext, useEffect, useState, useRef} from 'react';
import NoteContext from "../context/notes/NoteContext";
import Noteitem from './Noteitem';
import Addnotes from './Addnotes';
import { useHistory } from 'react-router-dom';


const Notes = () => {
    const context = useContext(NoteContext);
    let history = useHistory();
    const {notes, getNotes} = context;
    useEffect(() => {
      if (localStorage.getItem('token')){
        getNotes()
      }
      else{
        history.push("/login")

      }
     
     // eslint-disable-next-line
    }, [])

    const ref = useRef(null);
    const [note, setNotes]=useState({etitle:"", edescription:"", etag:""})
    const updateNotes =(currentNote)=>{
      ref.current.click();
      setNotes({etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag})
      console.log("update note")
      }
      const handleClick =(e)=>{
        console.log("updating note", note)
        e.preventDefault();
    }

    const onChange=(e)=>{
        setNotes({...note, [e.target.name]: e.target.value})
    }
   
    
  return (
    <>
     <Addnotes/>

      <button ref={ref} type="button" className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModal">
         Launch demo modal
      </button>


     <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
         <div className="modal-header">
           <h5 className="modal-title" id="exampleModalLabel">Edite Notes</h5>
           <button type="button" className="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span>
           </button>
          </div>
       <div className="modal-body">
      
        <form>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" id="etitle" name = "etitle" value={note.etitle}
            placeholder="Enter Note Title" onChange={onChange}/>
          </div>
          <div className="form-group">
           <label>Description</label>
           <input type="text" className="form-control" id="edescription" name="edescription" value={note.edesription}
           placeholder="Description" onChange={onChange} />
         </div>
         <div className="form-group">
           <label>Tag</label>
           <input type="text" className="form-control" id="etag" name="etag" value={note.etag}
           placeholder="Tag"onChange={onChange} />
         </div>
       </form>
       </div>
        
         <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
          </div>
          </div>
         </div>
        </div>



      <div className="container bg-dark">
       <h3 className='text-light text-center mt-4'>My Notes</h3>
        <div className='row'>
          <div className="container my-2 text-light">
            {notes.length===0 && 'No notes to display'}
          </div>
         
         {notes.map((notes)=>{
         return <Noteitem key={notes._id} updateNotes={updateNotes} notes={notes}/>
          }
         )}
        </div>
      </div>
    </>
    
  )
}

export default Notes