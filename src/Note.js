import React from 'react';

class Note extends React.Component {
    constructor(props) {
        super();
        this.state = {
            id: props.id,
            title: props.title,
            body: props.children,
        };
    }

    render() {
        return (
            <div className="note">
                <div className="note-title">
                    {this.state.title}
                </div>
                <div className="note-body">
                    <p>
                        {this.state.body}
                    </p>
                </div>
            </div>
        );
    }
}

export default Note;