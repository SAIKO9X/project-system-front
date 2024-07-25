import api from "@/config/api";
import {
  FETCH_CHAT_BY_PROJECT_FAILURE,
  FETCH_CHAT_BY_PROJECT_REQUEST,
  FETCH_CHAT_BY_PROJECT_SUCCESS,
  FETCH_CHAT_MESSAGES_FAILURE,
  FETCH_CHAT_MESSAGES_REQUEST,
  FETCH_CHAT_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
  FETCH_MESSAGES_REQUEST,
  FETCH_MESSAGES_SUCCESS,
  SEND_MESSAGE_FAILURE,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
} from "./ActionTypes";

export const fetchMessages = (projectId) => async (dispatch) => {
  dispatch({ type: FETCH_MESSAGES_REQUEST });
  try {
    const { data } = await api.get(`/api/messages/chat/${projectId}`);
    console.log("fetch messages", data);
    dispatch({ type: FETCH_MESSAGES_SUCCESS, messages: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_MESSAGES_FAILURE,
      error: error.message,
    });
  }
};

export const sendMessage = (messageData) => async (dispatch) => {
  dispatch({ type: SEND_MESSAGE_REQUEST });
  try {
    const { data } = await api.post("/api/messages/send", messageData);
    console.log("send message action", data);
    dispatch({ type: SEND_MESSAGE_SUCCESS, message: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: SEND_MESSAGE_FAILURE,
      error: error.message,
    });
  }
};

export const fetchChatByProject = (projectId) => async (dispatch) => {
  dispatch({ type: FETCH_CHAT_BY_PROJECT_REQUEST });
  try {
    const { data } = await api.get(`/api/projects/${projectId}/chat`);
    console.log("fetch chat", data);
    dispatch({ type: FETCH_CHAT_BY_PROJECT_SUCCESS, messages: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_CHAT_BY_PROJECT_FAILURE,
      error: error.message,
    });
  }
};

export const fetchChatMessages = (chatId) => async (dispatch) => {
  dispatch({ type: FETCH_CHAT_MESSAGES_REQUEST });
  try {
    const { data } = await api.get(`/api/messages/chat/${chatId}`);
    console.log("fetch chat", data);
    dispatch({ type: FETCH_CHAT_MESSAGES_SUCCESS, chatId, messages: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_CHAT_MESSAGES_FAILURE,
      error: error.message,
    });
  }
};
