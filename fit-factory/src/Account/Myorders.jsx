import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetOrderdatafromjson } from "../Redux/CartRedux/action";
import OrderCard from "./OrderCard";
import { Heading, Text } from "@chakra-ui/react";
const Myorders = () => {
  let dispatch = useDispatch();
  let orderdata = useSelector((store) => store?.CartReducer?.order);
  useEffect(() => {
    dispatch(GetOrderdatafromjson);
  }, []);

  return (
    <>
      {orderdata?.length >= 1 ? (
        <div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}
          >
            {orderdata?.map((e) => {
              return <OrderCard item={e} />;
            })}
          </div>
          <Text fontSize="3xl" textAlign={"center"}>
            Your Order Have Been Dispatched{" "}
          </Text>
        </div>
      ) : (
        <Heading m={15}>You have not order anything </Heading>
      )}
    </>
  );
};

export default Myorders;
