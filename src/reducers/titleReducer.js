import { UPDATE_TITLE, TOGGLE_EDITING, UPDATE_NEW_TITLE } from './../actions/titleActions';

export const initialState = {
  title: "Dragon Member List 🐲",
  editing: false,
  newTitle: "",
};

const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_TITLE:
      return {
        ...state,
        newTitle: action.payload,
      }
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload,
        editing: false,
        newTitle : "",
      };
    case TOGGLE_EDITING:
      return {
        ...state,
        editing: !state.editing
      };
    default:
      return state;
  }
};

export default titleReducer;