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
            notes: [],
        }
    }

    componentWillMount() {
        base.syncState(`notes/${this.props.uid}`, {
            context: this,
            state: 'notes',
            asArray: true,
        });
    }

    saveNote = (note) => {
        const now = Date.now();
        let shouldRedirect = false;
        const notes = [...this.state.notes];
        if (!note.id) {
            // new note
            note.id = now;
            notes.push(note);
            shouldRedirect = true;
        }
        else {
            // existing note
            const i = notes.findIndex( currentNote => currentNote.id === note.id);
            note.updatedAt = now;
            notes[i] = note;
        }

        notes.sort((a,b) => {
            return b.updatedAt - a.updatedAt;
        });

        this.setState(
            { notes },
            () => {
                if (shouldRedirect) {
                    this.props.history.push(`/notes/${note.id}`);
                }
            }
        );
    }

    removeNote = (currentNote) => {
        const notes = [...this.state.notes];
        let listLen = notes.length;
        const i = notes.findIndex(note => note.id === currentNote.id);
        if (i > -1) {
            notes.splice(i, 1);
            this.setState({ notes });
            listLen--;
        }

        if (listLen > 0) {
            this.props.history.push(`/notes/${notes[0].id}`);
        }
        else {
            this.props.history.push(`/notes`);
        }
    }

    render() {
        const formProps = {
            saveNote: this.saveNote,
            removeNote: this.removeNote,
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