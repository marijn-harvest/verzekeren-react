import {SET_AUTO_VERZEKERING_TYPE, SET_AUTO_VERZEKERING_TYPE_FETCHED} from "../constants/action-types";

const initialState = {
    type: "",
    type_fetched: false
};

const autoVerzekeringReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTO_VERZEKERING_TYPE:
            return {...state, type: action.payload};
        case SET_AUTO_VERZEKERING_TYPE_FETCHED:
            return {...state, type_fetched: action.payload};
        default:
            return state;
    }
};

export default autoVerzekeringReducer;