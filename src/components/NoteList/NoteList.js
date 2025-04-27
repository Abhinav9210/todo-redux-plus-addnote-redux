// import { deleteNote } from "../../redux/actions/noteActions";
import "./NoteList.css";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/reducers/noteReducer";
import { noteSelector } from "../../redux/reducers/noteReducer";
function NoteList() {
 
    // const notes = useSelector((state)=>state.noteReducer.notes)
    const notes = useSelector(noteSelector)

    const dispatch = useDispatch();
  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li key={index}>
            <p>{new Date(note.createdOn).toLocaleString()}</p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger" onClick={()=>{dispatch(
              // deleteNote(index)
              actions.delete(index)
              )}}>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
