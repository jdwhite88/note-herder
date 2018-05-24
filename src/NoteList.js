import React from 'react';

import './NoteList.css';
import Note from './Note';

const NoteList = ( { notes, setCurrentNote } ) => {
    
        return (
            <div className="NoteList">
            <h3>Notes</h3>
            <ul id="notes">
                <a className="active">
                    {notes.map( note => (
                        <Note setCurrentNote={setCurrentNote} key={note.id} note={note} />
                    ))}
                </a>
            </ul>
            </div>
        );
    }

export default NoteList;