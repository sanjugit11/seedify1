import GlobalTypes from "./GlobalTypes";
import {postDataAPI} from '../../utils/API'

export const DEPLOYICO_TYPES = {
  LOADING: "LOADING",
  CREATE_ICO: "DEPLOY_ICO",
};

export const deployICO = (data) => async (dispatch) => {
  try {
    dispatch({ type: GlobalTypes.NOTIFY, payload: { loading: true } });

    const res = await postDataAPI('create_deployIco', data)

    dispatch({
        type: GlobalTypes.NOTIFY,
        payload: {
          success: "deploy new ico is created",
        }
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
