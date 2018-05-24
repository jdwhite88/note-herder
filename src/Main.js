import React from 'react';

import Sidebar from './Sidebar';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import firebase from 'firebase';
import rebase from 're-base';

class Main extends React.Component {

    idMax = 0;

    constructor() {
        super();
        this.state = {
            currentNote: this.blankNote(),
            notes: [],
        }
    }

    componentWillMount() {
        const notes = JSON.parse(localStorage.getItem('notes'));
        const currentNote = JSON.parse(localStorage.getItem('currentNote'));
        const localIdMax = localStorage.getItem('idMax');
        this.setState({
            notes: notes || [], 
            currentNote: currentNote || this.blankNote(),
        });
        if (localIdMax != null) {
            this.idMax = localIdMax;
        }
    }

    componentDidUpdate() {
        const notesString = localStorage.setItem(
            'notes', JSON.stringify(this.state.notes));
        const curString = localStorage.setItem(
            'currentNote', JSON.stringify(this.state.currentNote));
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
            note.id = ++this.idMax;
            localStorage.setItem('idMax', this.idMax);
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
        const i = notes.findIndex(note => note.id === this.state.currentNote.id);
        if (i > -1) {
            notes.splice(i, 1);
            this.setState({ notes })
        }

        this.resetCurrentNote();
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
                <Sidebar resetCurrentNote={this.resetCurrentNote} />
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