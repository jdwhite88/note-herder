import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
            this.props.history.push(`/notes/${note.id}`);
        }
        else {
            // existing note
            const i = notes.findIndex( currentNote => currentNote.id === note.id);
            notes[i] = note;
        }
        this.setState({ notes });
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
        const formProps = {
            saveNote: this.saveNote,
            removeCurrentNote: this.removeCurrentNote,
            notes: this.state.notes,
        }


        return (
            <div className="Main" style={style}>
                <Sidebar 
                    signOut={this.props.signOut}
                />
                <NoteList 
                    notes={this.state.notes}
                />

                <Switch>
                    <Route 
                        path="/notes/:id" 
                        render={navProps => (
                            <NoteForm 
                                {...formProps}
                                {...navProps}
                            />
                        )}
                    />
                    <Route 
                        render={navProps => (
                            <NoteForm 
                                {...formProps}
                                {...navProps}
                            />
                        )}
                    />
                </Switch>
                
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