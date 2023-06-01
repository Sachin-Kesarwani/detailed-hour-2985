import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetOrderdatafromjson } from "../Redux/CartRedux/action";
import OrderCard from "./OrderCard";
import { Heading, Text,Box } from "@chakra-ui/react";
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
          <Box
       
           display={"grid"}
           gridTemplateColumns={{
            base:"repeat(1,1fr)",
            sm:"repeat(1,1fr)", // 480px
            md:"repeat(2,1fr)", // 768px
            lg:"repeat(3,1fr)", // 992px
            xl:"repeat(3,1fr)", // 1280px
            '2xl':"repeat(14,1fr)", // 1536px
          }}
          >
            {orderdata?.map((e) => {
              return <OrderCard item={e} />;
            })}
          </Box>
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
