import React from 'react';

import Sidebar from './Sidebar';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

import base from './base';

class Main extends React.Component {

    constructor({ signOut }) {
        super();
        this.state = {
            currentNote: this.blankNote(),
            notes: [],
        }
    }

    componentDidMount() {
        base.syncState(`notes/${this.props.uid}`, {
            context: this,
            state: 'notes',
            asArray: true,
        });
        base.syncState(`currentNote/${this.props.uid}`, {
            context: this,
            state: 'currentNote',
            defaultValue: this.blankNote(),
        });
    }

    setCurrentNote = (note) => {
        this.setState({ currentNote: note });
    }

    resetCurrentNote = () => {
        this.setCurrentNote(this.blankNote());
    }

    saveNote = (note) => {
        const notes = [...this.state.notes];
        if (!note.id) {
            // new note
            note.id = Date.now();
            notes.push(note);
        }
        else {
            // existing note
            const i = notes.findIndex( currentNote => currentNote.id === note.id);
            notes[i] = note;
        }
        this.setState({ notes, currentNote: note })  
    }

    removeCurrentNote = () => {
        const notes = [...this.state.notes];
        let listLen = notes.length;
        const i = notes.findIndex(note => note.id === this.state.currentNote.id);
        if (i > -1) {
            notes.splice(i, 1);
            this.setState({ notes });
            listLen--;
        }

        if (listLen > 0) {
            this.setCurrentNote(notes[0]);
        }
        else {
            this.resetCurrentNote();
        }
    }

    blankNote = () => {
        return {
            id: null,
            title: "",
            body: "",
        };
    }

    render() {
        return (
            <div className="Main" style={style}>
                <Sidebar 
                    resetCurrentNote={this.resetCurrentNote}
                    signOut={this.props.signOut}
                />
                <NoteList 
                    notes={this.state.notes}
                    setCurrentNote={this.setCurrentNote}
                />
                <NoteForm 
                    currentNote={this.state.currentNote} 
                    saveNote={this.saveNote.bind(this)} 
                    removeCurrentNote={this.removeCurrentNote}
                />
            </div>
        );
    }
}

const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch',
};

export default Main;