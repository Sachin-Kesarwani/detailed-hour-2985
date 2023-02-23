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

let inistate = {
  FitFoodsData: [],
  FlashSalseData: [],
  PickDealsData: [],
  TopDealsData: [],
  WellnessProductData: [],
  priceslashAlertData: [],
  workoutEssentialData: [],
  isLoading: false,
  isError: false,
};

export function reducer(state = inistate, action) {
  switch (action.type) {
    case Loading: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case Error: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GetFitFoods: {
      return {
        ...state,
        FitFoodsData: action.payload,
        isLoading: false,
      };
    }
    case GetFlashSalse: {
      return {
        ...state,
        FlashSalseData: action.payload,
        isLoading: false,
      };
    }
    case GetPickDeals: {
      return {
        ...state,
        PickDealsData: action.payload,
        isLoading: false,
      };
    }
    case GetTopDeals: {
      return {
        ...state,
        TopDealsData: action.payload,
        isLoading: false,
      };
    }
    case GetWellnessProduct: {
      return {
        ...state,
        WellnessProductData: action.payload,
        isLoading: false,
      };
    }
    case GetpriceslashAlert: {
      return {
        ...state,
        priceslashAlertData: action.payload,
        isLoading: false,
      };
    }
    case GetworkoutEssential: {
      return {
        ...state,
        workoutEssentialData: action.payload,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
}
