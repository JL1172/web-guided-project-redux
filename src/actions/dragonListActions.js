export const UPDATE_NEW_MEMBER = "UPDATE_NEW_MEMBER";
export const ADD_MEMBER = "ADD_MEMBER";

export const updateNewMember = (value) => {
    return{type : UPDATE_NEW_MEMBER, payload : value};
}

export const addNewMember = (newMember) => {
    return{type : ADD_MEMBER, payload : newMember}
}