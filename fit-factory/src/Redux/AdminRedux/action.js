import * as types from "./actiontype"
import axios from "axios";

export const GetProducts=(endpoint)=>(dispatch)=>{
    dispatch({ type: types.Loading });
    axios.get(`https://helpful-free-baroness.glitch.me/${endpoint}?_page=1&_limit=15`)
    .then((res)=>{
      dispatch({type: types.GetProducts,payload:res.data})
    }).catch((er)=>{
      dispatch({type:types.Error})
    })
  }

  export const GetUsers=(dispatch)=>{
    dispatch({ type: types.Loading });
    axios.get("https://helpful-free-baroness.glitch.me/Users")
    .then((res)=>{
      dispatch({type: types.GetUsers,payload:res.data})
    }).catch((er)=>{
      dispatch({type:types.Error})
    })
  }  
  export const GetAdmins=(dispatch)=>{
    dispatch({ type: types.Loading });
    axios.get("https://helpful-free-baroness.glitch.me/Admin")
    .then((res)=>{
      dispatch({type: types.GetAdmins,payload:res.data})
    }).catch((er)=>{
      dispatch({type:types.Error})
    })
  } 