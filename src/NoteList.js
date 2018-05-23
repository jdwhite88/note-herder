import React from 'react';

import './NoteList.css';
import Note from './Note';

const NoteList = () => {
    return (
        <div className="NoteList">
          <h3>Notes</h3>
          <ul id="notes">
            <a className="active">
              <li>
                <Note title="Prairie turnip">
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </Note>
              </li>
            </a>
            <a>
              <li>
                <Note title="Dandelion cucumber">
                    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
                </Note>
              </li>
            </a>
            <a>
              <li>
                <Note title="Prairie turnip">
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </Note>
              </li>
            </a>
          </ul>
        </div>
    );
};

export default NoteList;