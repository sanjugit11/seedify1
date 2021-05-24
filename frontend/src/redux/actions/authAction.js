import { postDataAPI } from "../../utils/API";
import GlobalTypes from "./GlobalTypes";

export const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: GlobalTypes.NOTIFY, payload: { loading: true } });
    const res = await postDataAPI("login", data);
    dispatch({
      type: GlobalTypes.AUTH,
      payload: {
        token: res.data.accesstoken,
        role: res.data.role,
        user: res.data.user
      },
    });
    localStorage.setItem("firstLogin", true);
    
    dispatch({
      type: GlobalTypes.NOTIFY,
      payload: {
        success: res.data.msg,
      },
    });
   
  } catch (err) {
    dispatch({
      type: GlobalTypes.NOTIFY,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};

export const refreshToken = () => async (dispatch) => {
  const firstLogin = localStorage.getItem("firstLogin");
  if (firstLogin) {
    dispatch({
      type: GlobalTypes.NOTIFY,
      payload: {
        loading: true,
      },
    });
    try {
      const res = await postDataAPI("refresh_token");

      dispatch({
        type: GlobalTypes.AUTH,
        payload: {
          token: res.data.access_token,
          role: res.data.role,
          user: res.data.user,
        },
      });
      
    } catch (err) {
      dispatch({
        type: GlobalTypes.NOTIFY,
        payload: {
          error: err.response.data.msg,
        },
      });
    }
  }
};

export const register = (data) => async (dispatch) => {
  try {
    dispatch({ type: GlobalTypes.NOTIFY, payload: { loading: true } });
    const res = await postDataAPI("register", data);
    localStorage.setItem("firstLogin", true);
    dispatch({
      type: GlobalTypes.AUTH,
      payload: {
        token: res.data.accesstoken,
        role: res.data.role,
        user: res.data.user,
      },
    });
    
    dispatch({
      type: GlobalTypes.NOTIFY,
      payload: {
        success: res.data.msg,
      },
    });
  } catch (err) {
    dispatch({
      type: GlobalTypes.NOTIFY,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem("firstLogin");

    await postDataAPI("logout");

  
    window.location.href = "/";
    dispatch({
      type: GlobalTypes.NOTIFY,
      payload: {
        success: "logout successfully"
      },
    });
  } catch (err) {
    dispatch({
      type: GlobalTypes.NOTIFY,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};
