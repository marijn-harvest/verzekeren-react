import {
    SET_AUTO_VERZEKERING_TYPE,
    SET_AUTO_VERZEKERING_TYPE_FETCHED,
    SET_CLAIMS,
    DELETE_CLAIM,
    SET_CLAIMS_FETCHED, EDIT_CLAIM, ADD_CLAIM
} from "../constants/action-types";

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

export const editClaim = (index, claim) => ({
    type: EDIT_CLAIM,
    payload: {index: index, claim: claim}
});

export const addClaim = (claim) => ({
    type: ADD_CLAIM,
    payload: claim
});

export const setClaimsFetched = () => ({
    type: SET_CLAIMS_FETCHED,
    payload: true
});