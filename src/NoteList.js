import React from 'react';

import './NoteList.css';
import Note from './Note';

class NoteList extends React.Component {
    constructor() {
        super();
        this.state = {
            noteArr: [
                {
                    title: "Prairie turnip",
                    body: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.",
                    isActive: true,
                },
                {
                    title: "Dandelion cucumber",
                    body: "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.",
                    isActive: false,
                },
                {
                    title: "Prairie turnip",
                    body: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.",
                    isActive: false,
                },
            ],
        }
    }
    
    render() {
        return (
            <div className="NoteList">
            <h3>Notes</h3>
            <ul id="notes">
                {this.state.noteArr.map( (note) => {
                    return (
                        <a className={note.isActive ? "active" : ""}>
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