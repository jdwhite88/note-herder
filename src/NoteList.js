import React from 'react';

import './NoteList.css';
import Note from './Note';

class NoteList extends React.Component {
    constructor(notes) {
        super();
    }
    
    render() {
        return (
            <div className="NoteList">
            <h3>Notes</h3>
            <ul id="notes">
                {this.props.notes.map( (note) => {
                    return (
                        <a key={note.id} className={note.isActive ? "active" : ""}>
                        <li>
                            <Note title={note.title}>
                                {note.body}
                            </Note>
                        </li>
                        </a>
                    );
                })}
            </ul>
            </div>
        );
    }
};

export default NoteList;