export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const UPDATE_TITLE = "UPDATE_TITLE";
export const UPDATE_NEW_TITLE = "UPDATE_NEW_TITLE";

export function toggleEditing() {
    return { type: TOGGLE_EDITING };
}

export const newTitle = (value) => {
    return { type: UPDATE_NEW_TITLE, payload: value }
}

export const updateTitle = newTitle => {
    return { type: UPDATE_TITLE, payload: newTitle };
};
