import api from "@/config/api";
import {
  FETCH_ISSUES_REQUEST,
  FETCH_ISSUES_SUCCESS,
  FETCH_ISSUES_FAILURE,
  FETCH_ISSUES_BY_ID_REQUEST,
  FETCH_ISSUES_BY_ID_SUCCESS,
  FETCH_ISSUES_BY_ID_FAILURE,
  CREATE_ISSUE_REQUEST,
  CREATE_ISSUE_SUCCESS,
  CREATE_ISSUE_FAILURE,
  DELETE_ISSUE_REQUEST,
  DELETE_ISSUE_SUCCESS,
  DELETE_ISSUE_FAILURE,
  UPDATE_ISSUE_STATUS_REQUEST,
  UPDATE_ISSUE_STATUS_SUCCESS,
  UPDATE_ISSUE_STATUS_FAILURE,
  ASSIGN_USER_TO_ISSUE_REQUEST,
  ASSIGN_USER_TO_ISSUE_SUCCESS,
  ASSIGN_USER_TO_ISSUE_FAILURE,
} from "./ActionTypes";

export const fetchIssues = (projectId) => async (dispatch) => {
  dispatch({ type: FETCH_ISSUES_REQUEST });
  try {
    const { data } = await api.get(`/api/issues/project/${projectId}`);
    console.log("fetch issues", data);
    dispatch({ type: FETCH_ISSUES_SUCCESS, issues: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_ISSUES_FAILURE,
      error: error.message,
    });
  }
};

export const fetchIssueById = (issueId) => async (dispatch) => {
  dispatch({ type: FETCH_ISSUES_BY_ID_REQUEST });
  try {
    const { data } = await api.get(`/api/issues/${issueId}`);
    console.log("fetch issue by id", data);
    dispatch({ type: FETCH_ISSUES_BY_ID_SUCCESS, issue: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_ISSUES_BY_ID_FAILURE,
      error: error.message,
    });
  }
};

export const createIssue = (issueData) => async (dispatch) => {
  dispatch({ type: CREATE_ISSUE_REQUEST });
  try {
    const { data } = await api.post("/api/issues", issueData);
    console.log("create issue successfully", data);
    dispatch({ type: CREATE_ISSUE_SUCCESS, issue: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CREATE_ISSUE_FAILURE,
      error: error.message,
    });
  }
};

export const deleteIssue = (issueId) => async (dispatch) => {
  dispatch({ type: DELETE_ISSUE_REQUEST });
  try {
    const { data } = await api.delete(`/api/issues/${issueId}`);
    console.log("delete issue", data);
    dispatch({ type: DELETE_ISSUE_SUCCESS, issueId });
  } catch (error) {
    console.log(error);
    dispatch({
      type: DELETE_ISSUE_FAILURE,
      error: error.message,
    });
  }
};

export const updateIssueStatus = (issueId, status) => async (dispatch) => {
  dispatch({ type: UPDATE_ISSUE_STATUS_REQUEST });
  try {
    const { data } = await api.put(`/api/issues/${issueId}/status/${status}`);
    console.log("update issue status", data);
    dispatch({ type: UPDATE_ISSUE_STATUS_SUCCESS, issue: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: UPDATE_ISSUE_STATUS_FAILURE,
      error: error.message,
    });
  }
};

export const assignUserToIssue =
  ({ issueId, userId }) =>
  async (dispatch) => {
    dispatch({ type: ASSIGN_USER_TO_ISSUE_REQUEST });
    try {
      const { data } = await api.put(
        `/api/issues/${issueId}/assignee/${userId}`
      );
      console.log("assign user to issue", data);
      dispatch({ type: ASSIGN_USER_TO_ISSUE_SUCCESS, issue: data });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ASSIGN_USER_TO_ISSUE_FAILURE,
        error: error.message,
      });
    }
  };
