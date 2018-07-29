import {SET_AUTO_VERZEKERING_TYPE, SET_AUTO_VERZEKERING_TYPE_FETCHED} from "../constants/action-types";

export const setAutoVerzekeringType = (type) => ({
    type: SET_AUTO_VERZEKERING_TYPE,
    payload: type
});

export const setAutoVerzekeringTypeFetched = () => ({
    type: SET_AUTO_VERZEKERING_TYPE_FETCHED,
    payload: true
});