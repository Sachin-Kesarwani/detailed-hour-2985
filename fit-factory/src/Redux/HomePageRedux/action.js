import {
  Loading,
  Error,
  GetFitFoods,
  GetFlashSalse,
  GetPickDeals,
  GetTopDeals,
  GetWellnessProduct,
  GetpriceslashAlert,
  GetworkoutEssential,
} from "./actiontype";

import axios from "axios";
function LoadingData() {
  return { type: Loading };
}
function ErrorData() {
  return { type: Error };
}

export async function GetFlashSaleFromjJson(dispatch) {
  dispatch(LoadingData());
  axios("https://cyan-tough-kitten.cyclic.app/flashsale")
    .then((res) => {
      dispatch({ type: GetFlashSalse, payload: res.data });
    })
    .catch((er) => {
      dispatch(ErrorData());
    });
}

export async function GetTopDealsFromjJson(dispatch) {
  dispatch(LoadingData());
  axios("https://cyan-tough-kitten.cyclic.app/topDeals")
    .then((res) => {
      dispatch({ type: GetTopDeals, payload: res.data });
    })
    .catch((er) => {
      dispatch(ErrorData());
    });
}
export async function GetPickDealsFromjJson(dispatch) {
  dispatch(LoadingData());
  axios("https://cyan-tough-kitten.cyclic.app/pickDeals")
    .then((res) => {
      dispatch({ type: GetPickDeals, payload: res.data });
    })
    .catch((er) => {
      dispatch(ErrorData());
    });
}
export async function GetFitFoodsFromjJson(dispatch) {
  dispatch(LoadingData());
  axios("https://cyan-tough-kitten.cyclic.app/fitfoods")
    .then((res) => {
      dispatch({ type: GetFitFoods, payload: res.data });
    })
    .catch((er) => {
      dispatch(ErrorData());
    });
}
export async function GetwellnessPersonelFromjJson(dispatch) {
  dispatch(LoadingData());
  axios("https://cyan-tough-kitten.cyclic.app/wellness&personel")
    .then((res) => {
      dispatch({ type: GetWellnessProduct, payload: res.data });
    })
    .catch((er) => {
      dispatch(ErrorData());
    });
}
export async function GetWorkoutEssentialFromjJson(dispatch) {
  dispatch(LoadingData());
  axios("https://cyan-tough-kitten.cyclic.app/workoutEssential")
    .then((res) => {
      dispatch({ type: GetworkoutEssential, payload: res.data });
    })
    .catch((er) => {
      dispatch(ErrorData());
    });
}

export async function GetpriceslashAlertFromjJson(dispatch) {
  dispatch(LoadingData());
  axios("https://cyan-tough-kitten.cyclic.app/priceslashAlert")
    .then((res) => {
      dispatch({ type: GetpriceslashAlert, payload: res.data });
    })
    .catch((er) => {
      dispatch(ErrorData());
    });
}
