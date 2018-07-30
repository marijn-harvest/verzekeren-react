import {SET_CLAIMS, DELETE_CLAIM} from "../constants/action-types";

const initialState = {
    claims: []
};

const claimsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CLAIMS:
            return {...state, claims: action.payload};
        case DELETE_CLAIM:
            return {
                ...state, claims: [
                    ...state.claims.slice(0, action.payload),
                    ...state.claims.slice(action.payload + 1)
                ]
            };
        default:
            return state;
    }
};

export default claimsReducer;