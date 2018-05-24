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
            idMax: 0,
        }
    }

    componentWillMount() {
        // const notes = JSON.parse(localStorage.getItem('notes'));
        // const currentNote = JSON.parse(localStorage.getItem('currentNote'));
        // const localIdMax = localStorage.getItem('idMax');
        // this.setState({
        //     notes: notes || [], 
        //     currentNote: currentNote || this.blankNote(),
        // });
        // if (localIdMax != null) {
        //     this.idMax = localIdMax;
        // }
        base.syncState('notes', {
            context: this,
            state: 'notes',
            asArray: true,
        });
        base.syncState('currentNote', {
            context: this,
            state: 'currentNote',
        });
        base.syncState('idMax', {
            context: this,
            //BROKEN
            state: "idMax",
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
            // TODO: Broken
            const nextId = this.state.idMax[0].parseInt() + 1;
            this.setState({ idMax: nextId });
            note.id = nextId;
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