import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Pages/Cart";
import EachcardOfCart from "./EachCardofCart";
import Logoutpage from "./Logoutpage";
import Myorders from "./Myorders";

import PersonelInfo from "./PersonelInfo";
import Wishlist from "./Wishlist";

let arr = [
  {
    id: 0,
    page: "editAccount",
    title: "Pesonel Information",
    icon: "far fa-user-circle",
  },

  { id: 1, page: "cart", title: "Cart", icon: "fa fa-shopping-cart" },
  { id: 2, page: "wishlist", title: "Your Wish list", icon: "fas fa-heart" },
  {
    id: 3,
    page: "my orders",
    title: "Your Orders",
    icon: "	fas fa-cart-arrow-down",
  },
  { id: 4, page: "logout", title: "Logout", icon: "fas fa-sign-in-alt" },
];
const Account = () => {
  let [active, setactive] = useState(0);

  return (
    <div style={{ alignContent: "center", paddingTop: "120px" }}>
      <div style={{ width: "100%", height: "auto" }}>
        <Flex w={"90%"} gap={"2%"} margin={"auto"}>
          <Box w={"20%"} h={"400px"}>
            {arr.map((e) => {
              return (
                <div
                  key={e.id}
                  onClick={() => {
                    setactive(e.id);
                  }}
                  style={{
                    border: "1px solid orange",
                    width: "100%",
                    margin: "auto",
                    padding: "10px 11px",
                    cursor: "pointer",
                    backgroundColor: active == e.id ? "#009999" : "white",
                    borderRadius: "5px",
                    margin: "1px",
                  }}
                >
                  <Text
                    fontSize="md"
                    color={active == e.id ? "white" : "black"}
                  >
                    {" "}
                    <i style={{ fontSize: "20px" }} class={e.icon}></i>{" "}
                    {e.title}{" "}
                  </Text>
                </div>
              );
            })}
            <Link to="/admin">
              <div
                style={{
                  border: "1px solid red",
                  width: "100%",
                  margin: "auto",
                  padding: "10px 11px",
                  cursor: "pointer",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  margin: "1px",
                }}
              >
                <Text fontSize="md">
                  {" "}
                  <i style={{ fontSize: "20px" }}></i>Go To Admin{" "}
                </Text>
              </div>
            </Link>
          </Box>
          <Box
            borderRadius={"8px"}
            boxShadow={
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            }
            w={"78%"}
          >
            {active == 0 ? (
              <PersonelInfo />
            ) : active == 1 ? (
              <Cart />
            ) : active == 2 ? (
              <Wishlist />
            ) : active == 4 ? (
              <Logoutpage />
            ) : active == 3 ? (
              <Myorders />
            ) : (
              <Heading>jii</Heading>
            )}

            {/* <EachcardOfCart/> */}
          </Box>
        </Flex>
      </div>
    </div>
  );
};

export default Account;
