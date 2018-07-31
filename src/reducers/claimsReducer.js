import {SET_CLAIMS, DELETE_CLAIM, EDIT_CLAIM, ADD_CLAIM, SET_CLAIMS_FETCHED} from "../constants/action-types";

const initialState = {
    claims: [],
    claims_fetched: false
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
        case EDIT_CLAIM:
            return {
                ...state, claims: [
                    ...state.claims.slice(0, action.payload.index),
                    action.payload.claim,
                    ...state.claims.slice(action.payload.index + 1)
                ]
            };
        case ADD_CLAIM:
            return {
                ...state, claims: [
                    ...state.claims.slice(),
                    action.payload
                ]
            };
        case SET_CLAIMS_FETCHED:
            return {...state, claims_fetched: action.payload};
        default:
            return state;
    }
};

export default claimsReducer;