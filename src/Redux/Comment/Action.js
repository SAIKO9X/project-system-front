import api from "@/config/api";
import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
} from "./ActionTypes";

export const fetchComments = (issueId) => async (dispatch) => {
  dispatch({ type: FETCH_COMMENTS_REQUEST });
  try {
    const { data } = await api.get(`/api/comments/${issueId}`);
    console.log("fetch comments", data);
    dispatch({ type: FETCH_COMMENTS_SUCCESS, comments: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_COMMENTS_FAILURE,
      error: error.message,
    });
  }
};

export const createComment = (commentData) => async (dispatch) => {
  dispatch({ type: CREATE_COMMENT_REQUEST });
  try {
    // Log para verificar a estrutura de commentData antes de enviar para a API
    console.log("Dispatching createComment with data:", commentData);

    const { data } = await api.post("/api/comments", commentData);

    console.log("create comment actions", data);
    dispatch({ type: CREATE_COMMENT_SUCCESS, comment: data });
  } catch (error) {
    console.error("Error creating comment:", error);
    dispatch({
      type: CREATE_COMMENT_FAILURE,
      error: error.message,
    });
  }
};

export const deleteComment = (commentId) => async (dispatch) => {
  dispatch({ type: DELETE_COMMENT_REQUEST });
  try {
    const { data } = await api.delete(`/api/comments/${commentId}`);
    console.log("delete comment", data);
    dispatch({ type: DELETE_COMMENT_SUCCESS, commentId });
  } catch (error) {
    console.log(error);
    dispatch({
      type: DELETE_COMMENT_FAILURE,
      error: error.message,
    });
  }
};
