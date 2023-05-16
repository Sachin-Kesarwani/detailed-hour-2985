import React from "react";
import BrandImages from "../Components/BrandImages";
import Carousel from "../Carousel/Carousel";
import EachCard from "../Components/HomeEachCard";
import Carousel2 from "../Carousel/Carousel2";
import BrandComany from "../Components/BrandComany";
import { useDispatch, useSelector } from "react-redux";
import {
  GetFitFoodsFromjJson,
  GetFlashSaleFromjJson,
  GetPickDealsFromjJson,
  GetTopDealsFromjJson,
  GetpriceslashAlertFromjJson,
  GetwellnessPersonelFromjJson,
  GetWorkoutEssentialFromjJson,
} from "../Redux/HomePageRedux/action";
import "./home.css";
import { Heading, useToast } from "@chakra-ui/react";
import Loadingindicator from "../Components/Loading";
import { Loading } from "../Redux/HomePageRedux/actiontype";
import { useEffect } from "react";
import Responsive from "../Carousel/ProductCarousel";
import { Text } from "@chakra-ui/react";
import {
  PostdataIncart,
  PostdataInWishList,
  DeldatafromWishlist,
  GetwishListdatafromjson,
  GetCartData,
} from "../Redux/CartRedux/action";
const Home = () => {
  let dispatch = useDispatch();

  let loading = useSelector((store) => store?.HomePageReducer?.isLoading);
  let PriceSlashData = useSelector(
    (store) => store?.HomePageReducer?.FlashSalseData
  );
  let FitFoodsData = useSelector(
    (store) => store?.HomePageReducer?.FitFoodsData
  );
  let PickDealsData = useSelector(
    (store) => store?.HomePageReducer?.PickDealsData
  );
  let TopDealsData = useSelector(
    (store) => store?.HomePageReducer.TopDealsData
  );
  let WellnessProductData = useSelector(
    (store) => store?.HomePageReducer?.WellnessProductData
  );
  let priceslashAlertData = useSelector(
    (store) => store?.HomePageReducer?.priceslashAlertData
  );
  let workoutEssentialData = useSelector(
    (store) => store?.HomePageReducer?.workoutEssentialData
  );
  let cartdata = useSelector((store) => store?.CartReducer?.cart);

  // FitFoodsData:[],
  // FlashSalseData:[],
  // PickDealsData:[],
  // TopDealsData:[],
  // WellnessProductData:[],
  // priceslashAlertData:[],
  // workoutEssentialData:[],
  let toast = useToast();
  useEffect(() => {
    dispatch(GetFitFoodsFromjJson);
    dispatch(GetFlashSaleFromjJson);
    dispatch(GetPickDealsFromjJson);
    dispatch(GetTopDealsFromjJson);
    dispatch(GetWorkoutEssentialFromjJson);
    dispatch(GetpriceslashAlertFromjJson);
    dispatch(GetwellnessPersonelFromjJson);
    dispatch(GetwishListdatafromjson);
    dispatch(GetCartData);
    dispatch(GetwishListdatafromjson);
  }, []);

  // console.log(wishlist)
  function handlePostdataIncart(data) {
    console.log(data, "data in home fun");
    let userID = 5;

    console.log(cartdata);
    if (cartdata.length && cartdata.length >= 1) {
      let notThere = true;
      for (let i = 0; i < cartdata.length; i++) {
        if (cartdata[i].image == data.image) {
          notThere = false;
          break;
        }
      }

      if (notThere) {
        let arr = [...cartdata, data];
        dispatch(PostdataIncart(arr)).then((re) => {
          dispatch(GetCartData);
          toast({
            title: `Product Added`,
            position: "top-left",
            isClosable: true,
          });
        });
      }
    }
    if (cartdata.length == 0) {
      let arr = [data];

      dispatch(PostdataIncart(arr)).then((re) => {
        dispatch(GetCartData);
        toast({
          title: `Product Added`,
          position: "top-left",
          isClosable: true,
        });
      });
    }
  }
  ////////////////////////////////////////////////////

  return (
    <div>
      <Carousel />

      <hr style={{ border: "3px solid #c2c2d6", marginBottom: "25px", width:"100%" }}></hr>

      {loading ? (
        <Loadingindicator />
      ) : (
        <div>
          <Heading
            textAlign={"center"}
            as="h3"
            marginTop={"2vw"}
            marginBottom={"2vw"}
            size="lg"
          >
            Price Slash Alert
          </Heading>
          <div className="piceslashAlertDiv">
            {PriceSlashData.length > 0 &&
              PriceSlashData?.map((item) => {
                return (
                  <EachCard
                    category="flashsale"
                    handlePostdataIncart={handlePostdataIncart}
                    key={item.id}
                    item={item}
                  />
                );
              })}
          </div>
        </div>
      )}

      <hr style={{ border: "3px solid #c2c2d6", marginBottom: "25px" }}></hr>
      <BrandImages />

      {loading ? (
        <Loadingindicator />
      ) : (
        <div>
          <Heading
            textAlign={"center"}
            as="h3"
            marginTop={"2vw"}
            marginBottom={"2vw"}
            size="lg"
          >
            Flash Sale
          </Heading>
          <div className="piceslashAlertDiv">
            {TopDealsData.length > 0 &&
              TopDealsData?.map((item) => {
                return (
                  <EachCard
                    category="topDeals"
                    handlePostdataIncart={handlePostdataIncart}
                    key={item.id}
                    item={item}
                  />
                );
              })}
          </div>
        </div>
      )}

      <hr style={{ border: "3px solid #c2c2d6", marginTop: "40px" }}></hr>
      <Carousel2 />
      {loading ? (
        <Loadingindicator />
      ) : (
        <div>
          <Heading
            textAlign={"center"}
            as="h3"
            marginTop={"2vw"}
            marginBottom={"2vw"}
            size="lg"
          >
            Fit Foods
          </Heading>
          <div className="piceslashAlertDiv">
            {FitFoodsData.length > 0 &&
              FitFoodsData?.map((item) => {
                return (
                  <EachCard
                    category="fitfoods"
                    handlePostdataIncart={handlePostdataIncart}
                    key={item.id}
                    item={item}
                  />
                );
              })}
          </div>
        </div>
      )}
      <hr style={{ border: "3px solid #c2c2d6", marginTop: "40px" }}></hr>
      <BrandComany />
      <hr style={{ border: "3px solid #c2c2d6", marginTop: "40px" }}></hr>
      {loading ? (
        <Loadingindicator />
      ) : (
        <div>
          <Heading
            textAlign={"center"}
            as="h3"
            marginTop={"2vw"}
            marginBottom={"2vw"}
            size="lg"
          >
            {" "}
            Wellness & Personal Care
          </Heading>
          <div className="piceslashAlertDiv">
            {WellnessProductData.length > 0 &&
              WellnessProductData?.map((item) => {
                return (
                  <EachCard
                    category="wellness&personel"
                    handlePostdataIncart={handlePostdataIncart}
                    key={item.id}
                    item={item}
                  />
                );
              })}
          </div>
        </div>
      )}
      <hr
        style={{
          border: "3px solid #c2c2d6",
          marginTop: "40px",
          marginBottom: "30px",
        }}
      ></hr>
      <BrandImages />
      <hr
        style={{
          border: "3px solid #c2c2d6",
          marginTop: "40px",
          marginBottom: "30px",
        }}
      ></hr>
      {loading ? (
        <Loadingindicator />
      ) : (
        <div>
          <Heading
            textAlign={"center"}
            marginTop={"2vw"}
            marginBottom={"2vw"}
            as="h3"
            size="lg"
          >
            {" "}
            Workout Essential Products
          </Heading>
          <div className="piceslashAlertDiv">
            {workoutEssentialData.length > 0 &&
              workoutEssentialData?.map((item) => {
                return (
                  <EachCard
                    category="workoutEssential"
                    handlePostdataIncart={handlePostdataIncart}
                    key={item.id}
                    item={item}
                  />
                );
              })}
          </div>
        </div>
      )}

      <hr
        style={{
          border: "3px solid #c2c2d6",
          marginTop: "40px",
          marginBottom: "30px",
        }}
      ></hr>

      <div style={{ width: "90%", margin: "auto" }}>
        <Heading as="h3" size="lg">
          {" "}
          Why Fit-Factory ?
        </Heading>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
          <div>
            <img src="https://img9.hkrtcdn.com/20791/normal_2079088_o.png" />
            <Heading as="h5" size="sm">
              Wide range of Nutritional products
            </Heading>
            <Text color={"gray.400"}>
              One-stop fitness and health destination
            </Text>
          </div>
          <div>
            <img src="https://img3.hkrtcdn.com/20791/normal_2079092_o.png" />
            <Heading as="h5" size="sm">
              100% Original & Authentic
            </Heading>
            <Text color={"gray.400"}>
              Tight control on sourcing and distribution
            </Text>
          </div>
          <div>
            <img src="https://img1.hkrtcdn.com/20791/normal_2079090_o.png" />
            <Heading as="h5" size="sm">
              Guide to Fit and Healthy Lifestyle
            </Heading>
            <Text color={"gray.400"}>
              Your true partner in health & wellness journey
            </Text>
          </div>
        </div>
      </div>

      <hr
        style={{
          border: "3px solid #c2c2d6",
          marginTop: "40px",
          marginBottom: "30px",
        }}
      ></hr>
    </div>
  );
};

export default Home;
