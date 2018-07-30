import {SET_AUTO_VERZEKERING_TYPE, SET_AUTO_VERZEKERING_TYPE_FETCHED, SET_CLAIMS, DELETE_CLAIM} from "../constants/action-types";

export const setAutoVerzekeringType = (type) => ({
    type: SET_AUTO_VERZEKERING_TYPE,
    payload: type
});

export const setAutoVerzekeringTypeFetched = () => ({
    type: SET_AUTO_VERZEKERING_TYPE_FETCHED,
    payload: true
});

export const setClaims = (claims) => ({
    type: SET_CLAIMS,
    payload: claims
});

export const deleteClaim = (index) => ({
    type: DELETE_CLAIM,
    payload: index
});