import React from 'react';
import './NoteForm.css';

class NoteForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        note: NoteForm.blankNote()
      };
    } 

    static getDerivedStateFromProps = (newProps, state) => {
      // Get the ID from the URL
      const newId = newProps.match.params.id || '';

      //Find the note with that ID
      const i = newProps.notes.findIndex(currentNote => currentNote.id.toString() === newId.toString());
      const note = newProps.notes[i] || NoteForm.blankNote();

      //Update state with that note
      return { note };
    }

    handleChanges = (ev) => {
      const note = {...this.state.note};
      note[ev.target.name] = ev.target.value;
      this.props.saveNote(note);
      this.setState({ note });
    }

    static blankNote = () => {
        const now = Date.now();
        return {
            id: null,
            title: "",
            body: "",
            createdAt: now,
            updatedAt: now,
        };
    }

    render() {
      const { removeNote } = this.props;
      return (
          <div className="NoteForm">
            <div className="form-actions">
              <button 
                type="button"
                onClick={() => removeNote(this.state.note)}
              >
                <i className="far fa-trash-alt"></i>
              </button>
            </div>
            <form>
              <p>
                <input
                  type="text"
                  name="title"
                  placeholder="Title your note"
                  onChange={this.handleChanges}
                  value={this.state.note.title}
                />
              </p>
              
              <textarea 
                name="body" 
                value={this.state.note.body}
                onChange={this.handleChanges}
              >
              </textarea>
            </form>
          </div>
      );
    }
};

export default NoteForm;