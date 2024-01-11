import { ADD_POST, DELETE_POST, UPDATE_POST } from "../reducers/types";

export const addPost = (payload: {}) => {
    return {
        payload: payload,
        type: ADD_POST
    }
};

export const updatePost = (payload: {}) => {
    return {
        payload: payload,
        type: UPDATE_POST
    }
};

export const deletePost = (payload: {}) => {
    return {
        payload: payload,
        type: DELETE_POST
    }
}