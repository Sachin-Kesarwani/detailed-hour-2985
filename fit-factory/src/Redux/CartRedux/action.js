import axios from "axios";
import {
  AddInCart,
  AddInWishList,
  Loading,
  Error,
  DelfromWishlist,
  GetwishlistData
} from "./actiontype";

export const PostdataIncart = (useID, data) => async (dispatch) => {
  dispatch({ type: Loading });

  await axios
  // https://helpful-free-baroness.glitch.me/Users?q=Sachin/cart
    .post(`http://localhost:8080/cart`, data)
    // .post(`https://helpful-free-baroness.glitch.me/Users?q=Sachin/cart`, data)
    .then((res) => {
      dispatch({ type: AddInCart, payload: res.data });
    })
    .catch((er) => {
      dispatch({ type: Error });
    });
};

export const PostdataInWishList = (data) => async (dispatch) => {
  dispatch({ type: Loading });

  await axios
    .post("http://localhost:8080/wishlist", data)
    .then((res) => {
      dispatch({ type: AddInWishList, payload: res.data });
      dispatch(GetwishListdatafromjson)
    })
    .catch((er) => {
      dispatch({ type: Error });
    });
};

export const DeldatafromWishlist = (id) => async (dispatch) => {
  console.log("dellllll",id);
  dispatch({ type: Loading });
  await axios({
    url: `http://localhost:8080/wishlist/${id}`,
    method: "delete",
  })
    .then((res) => {
      dispatch({ type: DelfromWishlist, payload: id });
      dispatch(GetwishListdatafromjson)
    })
    .catch((er) => {
      dispatch({ type: Error });
    });
};


export const GetwishListdatafromjson=(dispatch)=>{
  dispatch({ type: Loading });
  axios.get("http://localhost:8080/wishlist")
  .then((res)=>{
    dispatch({type: GetwishlistData,payload:res.data})
  }).catch((er)=>{
    dispatch({type:Error})
  })
}