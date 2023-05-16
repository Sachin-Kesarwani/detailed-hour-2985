import { Flex, Box, Heading, Button, Text,Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import EachcardOfCart from "../Account/EachCardofCart";
import Sigglecart from "../Account/Sigglecart";
import { GetCartData } from "../Redux/CartRedux/action";

const Cart = () => {
  let dispatch = useDispatch();

  let cartdata = useSelector((store) => store?.CartReducer?.cart);
  let [price, setPrice] = useState(0);
  let [dis, setDis] = useState(0);
  let navigate = useNavigate();

  function getPrice() {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < cartdata.length; i++) {
      let dataprice =
        cartdata[i].price || cartdata[i].Price || cartdata[i].newprice || 500;

      sum1 += dataprice;
      let disdata = cartdata[i].oldprice || cartdata[i].Price2 || 600;
      sum2 += disdata;
    }
    setPrice(sum1);
    setDis(sum2);
  }
  useEffect(() => {
    getPrice();
    dispatch(GetCartData);
  }, [cartdata.length]);
  console.log(price, dis);

  return (
    <div
      style={{
        alignContent: "center",
       
        marginBottom: "25px",
      }}
    >
         <Heading textAlign={"center"} marginLeft={"80px"}>
                Your cart
              </Heading>
      {cartdata.length > 0 ? (
        <div>
          <Flex flexDirection={ {
            base:"column",
  sm: 'column', // 480px
  md: 'column', // 768px
  lg: 'row', // 992px
  xl: 'row', // 1280px
  '2xl': 'row', // 1536px
}}>
            <Box w={"50%"}>
           
              {cartdata.length >= 1 ? (
                cartdata?.map((e) => {
                  return <Sigglecart item={e} />;
                })
              ) : (
                <div style={{ width: "100%", margin: "auto" }}>
                  <Heading textAlign={"center"}>
                    Nothing in The Cart
                    <Button>
                      <Link to="/">Continue Shopping</Link>
                    </Button>
                  </Heading>
                  <Image
                    width="400px"
                    display="flex"
                    justifyContent={"center"}
                    border
                    margin={"auto"}
                    alt="emptyImage"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStCYSKcjEWXhFvXUO4zVDrp-7Wa2t42YZNjw&usqp=CAU"
                  />
                </div>
              )}
            </Box>
            <Box w={"50%"}>
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  margin: "30px",
                  padding: "8px",
                  boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              >
                <Text fontSize="2xl">
                  MRP : <del>₹ {dis}</del>
                </Text>
                <Text fontSize="2xl">Price : ₹{price}</Text>
                <Text fontSize="2xl">
                  Discount : {Math.abs(((dis - price * 100) / dis).toFixed())} %
                  OFF
                </Text>
                <Button bg="green.400" color="white">
                  <Link to="/payment">Buy Now</Link>
                </Button>
              </div>
            </Box>
          </Flex>
        </div>
      ) : (
        <div style={{ width: "100%", margin: "auto" }}>
          <Heading textAlign={"center"}>
            Nothing in The Cart
            <Button>
              <Link to="/">Continue Shopping</Link>
            </Button>
          </Heading>
          <Image
         filter="blur(0px)"
         transition= "filter 0.5s ease-out"
            width="800px"
            margin={"auto"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStCYSKcjEWXhFvXUO4zVDrp-7Wa2t42YZNjw&usqp=CAU"
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
