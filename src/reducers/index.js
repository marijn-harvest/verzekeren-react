import {SET_AUTO_VERZEKERING_TYPE, SET_AUTO_VERZEKERING_TYPE_FETCHED} from "../constants/action-types";

const initialState = {
    auto_verzekering_type: "",
    auto_verzekering_type_fetched: false
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTO_VERZEKERING_TYPE:
            return {...state, auto_verzekering_type: action.payload};
        case SET_AUTO_VERZEKERING_TYPE_FETCHED:
            return {...state, auto_verzekering_type_fetched: action.payload};
        default:
            return state;
    }
};

export default rootReducer;