import GlobalTypes from "./GlobalTypes";
import { postDataAPI } from "../../utils/API";
import axios from "axios";
import { getDataAPI, putDataAPI } from "../../utils/API";

export const ICO_TYPES = {
  LOADING: "LOADING",
  CREATE_ICO: "CREATE_ICO",
  GET_ICO: "GET_ICO",
};

export const creatICO = (data, images) => async (dispatch) => {
  try {
    dispatch({ type: GlobalTypes.NOTIFY, payload: { loading: true } });

    if(!images){
      return dispatch({ type: GlobalTypes.NOTIFY, payload: { error : "please choose image"} });
    }
    const res = await postDataAPI("create_upcPool", {...data, images : images.name});
    
    var id = res.data.id
    
    //upload image
    var formData = new FormData();
    formData.append("file", images);
    formData.append("id", id);
    await axios.post("/api/upload", formData, {
      headers: { "content-type": "multipart/form-data" },
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

export const getico = (pageNumber) => async (dispatch) => {
  try {
    const res = await getDataAPI("getPool_byPagignation", {page_no : pageNumber});
    console.log(res)

    dispatch({
      type: ICO_TYPES.GET_ICO,
      payload: {
        pool: res.data.upcPool,
        totalPge : res.data.total_pages
      },
    });

    dispatch({ type: ICO_TYPES.LOADING, payload: false });
  } catch (err) {
    dispatch({
      type: GlobalTypes.NOTIFY,
      payload: { error: err.response.data.msg },
    });
  }
};

export const updateico = (data, id, image, oldimage) => async (dispatch) => {
 
  try {
    dispatch({ type: GlobalTypes.NOTIFY, payload: { loading: true } });
   if(image){
    var img = id + image.name
   }else{
     img = oldimage
   }
    const res = await putDataAPI("update_upcPool", {
      ...data,
      id: id,
      images : img
    });

    //upload image
    var formData = new FormData();
    formData.append("file", image);
    formData.append("imgname", img);
    await axios.post("/api/update_img", formData, {
      headers: { "content-type": "multipart/form-data" },
    });
    
    // dispatch({
    //     type: GLOBALTYPES.AUTH,
    //     payload: {
    //         ...auth,
    //         user: {
    //             ...auth.user, ...userData,
    //             avatar: avatar ? media[0].url : auth.user.avatar,
    //         }
    //     }
    // })
    dispatch({
      type: GlobalTypes.NOTIFY,
      payload: {
        success: "updated successfully"
      },
    });
   
  } catch (err) {
    dispatch({
      type: GlobalTypes.NOTIFY,
      payload: { error: err.response.data.msg },
    });
  }
};
