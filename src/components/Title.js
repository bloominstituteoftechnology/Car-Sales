import React, { useState, useReducer } from 'react';
import { connect } from 'react-redux';

import { toggleTitleEditor, updateTitle } from '../actions';

// STEP 2 - Connect a component and give it access to the state from Redux
// - import the connect HOC
// - build a mSTP function to access the state tree
const Title = props => {
  const [newTitleText, setNewTitleText] = useState();

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!props.editing ? (
        <h1>
          {props.titleOnProps}{' '}
          <i className="far fa-edit" onClick={props.toggleTitleEditor} />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              props.updateTitle(newTitleText);
              setNewTitleText('');
            }}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log('state', state);
  return {
    titleOnProps: state.title,
    editing: state.editing
  };
};

export default connect(
  mapStateToProps,
  { toggleTitleEditor, updateTitle }
)(Title);

// connect - under the hood - does this:
// dipsatch(toggleTitleEditor());

// HOC - components (functions) that take in a component as an argument, and return a brand new component which is a carbon copy of the passed in comp, with some extra functionality extended onto it.

// connect HOC -
// gets called twice! (function currying)
// the first call takes 2 args - mapStateToProps function, and an object of action creators
// the second call takes in your component
