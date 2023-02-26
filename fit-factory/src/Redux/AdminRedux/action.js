import * as types from "./actiontype";
import axios from "axios";

export const GetProducts = (endpoint, page) => (dispatch) => {
  dispatch({ type: types.Loading });
  axios
    .get(
      `https://helpful-free-baroness.glitch.me/${endpoint}?_page=${page}&_limit=15`
    )
    .then((res) => {
      dispatch({ type: types.GetProducts, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.Error });
    });
};

export const GetUsers = (dispatch) => {
  dispatch({ type: types.Loading });
  axios
    .get("https://helpful-free-baroness.glitch.me/Users")
    .then((res) => {
      dispatch({ type: types.GetUsers, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.Error });
    });
};
export const GetAdmins = (dispatch) => {
  dispatch({ type: types.Loading });
  axios
    .get("https://helpful-free-baroness.glitch.me/Admin")
    .then((res) => {
      dispatch({ type: types.GetAdmins, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.Error });
    });
};
export const DelelteProduct = (endpoint, id) => (dispatch) => {
  dispatch({ type: types.Loading });
  axios
    .delete(`https://helpful-free-baroness.glitch.me/${endpoint}/${id}`)
    .then((res) => {
      dispatch({ types: types.DelelteProduct, payload: id });
      dispatch({ type: types.TotalProductsless });
      dispatch(GetProducts);
    })
    .catch((err) => {
      dispatch({ type: types.Error });
    });
};
export const EditProduct = (endpoint, id, obj) => (dispatch) => {
  dispatch({ type: types.Loading });
  axios
    .patch(`https://helpful-free-baroness.glitch.me/${endpoint}/${id}`, obj)
    .then((res) => {
      dispatch({ types: types.EditProduct, payload: { id, obj } });
      dispatch(GetProducts);
    })
    .catch((err) => {
      dispatch({ type: types.Error });
    });
};
export const Addproduct = (endpoint, obj) => (dispatch) => {
  dispatch({ type: types.Loading });
  axios
    .post(`https://helpful-free-baroness.glitch.me/${endpoint}`, obj)
    .then((res) => {
      dispatch({ types: types.DelelteProduct, payload: obj });
      dispatch({ type: types.TotalProductsadd });
      dispatch(GetProducts);
    })
    .catch((err) => {
      dispatch({ type: types.Error });
    });
};
