import axios from "axios";
import {
  AddInCart,
  AddInWishList,
  Loading,
  Error,
  GetCart,
  DelfromWishlist,
  GetwishlistData,
  GetorderData,
} from "./actiontype";

let accountdata = JSON.parse(localStorage.getItem("accountdata")) || { id: 17 };
// console.log(accountdata.id,"inredux")

export function GetCartData(dispatch) {
  dispatch({ type: Loading });
  axios
    .get(`https://helpful-free-baroness.glitch.me/Users/${accountdata.id}`)
    .then((res) => {
      dispatch({ type: GetCart, payload: res.data.cart });
    });
}

export const PostdataIncart = (data) => async (dispatch) => {
  console.log(data, "reached at redux");
  dispatch({ type: Loading });

  return await axios({
    url: `https://helpful-free-baroness.glitch.me/Users/${accountdata.id}`,
    method: "patch",
    data: {
      cart: data,
    },
  });
  // .then((res) => {
  //   dispatch({ type: AddInCart, payload: res.data });
  // })
  // .catch((er) => {
  //   dispatch({ type: Error });
  // });
};

export const PostdataInWishList = (data) => async (dispatch) => {
  dispatch({ type: Loading });
  console.log(data, "wish in redux");
  return await axios({
    url: `https://helpful-free-baroness.glitch.me/Users/${accountdata.id}`,
    method: "patch",
    data: {
      wishlist: data,
    },
  });
};

export const DeldatafromWishlist = (id) => async (dispatch) => {
  console.log("dellllll", id);
  dispatch({ type: Loading });
  await axios({
    url: `http://localhost:8080/wishlist/${id}`,
    method: "delete",
  })
    .then((res) => {
      dispatch({ type: DelfromWishlist, payload: id });
      dispatch(GetwishListdatafromjson);
    })
    .catch((er) => {
      dispatch({ type: Error });
    });
};

export const GetwishListdatafromjson = (dispatch) => {
  dispatch({ type: Loading });
  axios(`https://helpful-free-baroness.glitch.me/Users/${accountdata.id}`)
    .then((res) => {
      dispatch({ type: GetwishlistData, payload: res.data.wishlist });
    })
    .catch((er) => {
      dispatch({ type: Error });
    });
};

export const PostdataInOrder = (data) => async (dispatch) => {
  dispatch({ type: Loading });
  console.log(data, "wish in redux");
  return await axios({
    url: `https://helpful-free-baroness.glitch.me/Users/${accountdata.id}`,
    method: "patch",
    data: {
      order: data,
    },
  });
};

export const GetOrderdatafromjson = (dispatch) => {
  dispatch({ type: Loading });
  axios(`https://helpful-free-baroness.glitch.me/Users/${accountdata.id}`)
    .then((res) => {
      dispatch({ type: GetorderData, payload: res.data.order });
    })
    .catch((er) => {
      dispatch({ type: Error });
    });
};
