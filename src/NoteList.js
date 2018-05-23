import React from 'react';

import './NoteList.css';
import Note from './Note';

const NoteList = ( { notes, setCurrentNote } ) => {
    
        return (
            <div className="NoteList">
            <h3>Notes</h3>
            <ul id="notes">
                {notes.map( note => (
                        <a key={note.id} className={note.isActive ? "active" : ""}>
                        <li onClick={() => setCurrentNote(note)}>
                            <Note title={note.title} setCurrentNote={setCurrentNote}>
                                {note.body}
                            </Note>
                        </li>
                        </a>

                ))}
            </ul>
            </div>
        );
    }

export default NoteList;