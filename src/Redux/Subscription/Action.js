import api from "@/config/api";
import {
  FETCH_SUBSCRIPTION_REQUEST,
  FETCH_SUBSCRIPTION_SUCCESS,
  FETCH_SUBSCRIPTION_FAILURE,
  UPGRADE_SUBSCRIPTION_REQUEST,
  UPGRADE_SUBSCRIPTION_SUCCESS,
  UPGRADE_SUBSCRIPTION_FAILURE,
} from "./ActionTypes";

export const fetchUserSubscription = () => async (dispatch) => {
  dispatch({ type: FETCH_SUBSCRIPTION_REQUEST });
  try {
    const { data } = await api.get("/api/subscription/user", {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
    });
    console.log("fetch subscription", data);
    dispatch({ type: FETCH_SUBSCRIPTION_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_SUBSCRIPTION_FAILURE,
      error: error.message,
    });
  }
};

export const upgradeSubscription = (planType) => async (dispatch) => {
  dispatch({ type: UPGRADE_SUBSCRIPTION_REQUEST });
  try {
    const { data } = await api.patch("/api/subscription/upgrade", null, {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
      params: { planType },
    });
    console.log("upgrade subscription", data);
    dispatch({ type: UPGRADE_SUBSCRIPTION_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: UPGRADE_SUBSCRIPTION_FAILURE,
      error: error.message,
    });
  }
};
