import { UPDATE_NEW_MEMBER, ADD_MEMBER } from "../actions/dragonListActions";

export const initialState = {
    newMember: '',
    members: [
        { name: 'Jojo Zhang', dragonStatus: true },
        { name: 'Brandon Harris', dragonStatus: false }
    ]
};

const dragonListReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MEMBER:
            return {
                ...state,
                newMember: action.payload
            };
        case ADD_MEMBER:
            return {
                ...state,
                member: [...state.members, newMember],
                newMember: "",
            };
        default:
            return state;
    }
};

export default dragonListReducer;