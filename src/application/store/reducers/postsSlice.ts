//interfaces
import { IPost } from "../../../presentation/screens/home/Home";
//constants
import { ADD_POST, DELETE_POST, UPDATE_POST } from "./types";

const initialState = {
  posts: [],
};

export const postsSlice = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post: IPost) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post: IPost) => post.id !== action.payload),
      };
    default:
      return state;
  }
};