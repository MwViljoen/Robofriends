import { CHANGE_SEARCH_FIELD } from "../reduxConstants/constants";

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});