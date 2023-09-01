import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateTitle, newTitle } from '../actions/titleActions';

const TitleForm = (props) => {

    return(<div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={props.newTitleText}
            onChange={(e)=> props.newTitle(e.target.value)}
          />
          <button
            onClick={()=> props.updateTitle(props.newTitleText)}>
            Update title
          </button>
        </div>);
}

const mapStateToProps = state => {
  return {
    newTitleText : state.title.newTitle,
  }
}


export default connect(mapStateToProps,{newTitle,updateTitle})(TitleForm);