import React, { useState } from "react";
import { Badge, Button, Heading, Text, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { GetCartData, PostdataIncart } from "../Redux/CartRedux/action";
const Sigglecart = ({ item }) => {
  let [loading, setLoading] = useState(false);
  let toast = useToast();
  let dispatch = useDispatch();
  let cartdata = useSelector((store) => store?.CartReducer?.cart);
  console.log(cartdata);
  function handleRemove(item) {
    setLoading(true);
    let data = cartdata.filter(
      (e) => e.id != item.id || e.Position != item.Position
    );
    console.log(data);
    console.log(item);
    dispatch(PostdataIncart(data)).then((res) => {
      setLoading(false);
      toast({
        title: `Product Removed`,
        status: "warning",
        isClosable: true,
      });
      dispatch(GetCartData);
    });
  }

  return (
    <>
      <div
        style={{
          padding: "3px",
          width: "250px",
          textAlign: "center",
          borderRadius: "5px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          margin: "auto",
          marginTop: "10px",
        }}
      >
        <img
          alt=""
          src={
            item.image ||
            item.Image ||
            "https://img9.hkrtcdn.com/24443/prd_2444208-MuscleBlaze-Whey-Protein-4-lb-Rich-Milk-Chocolate_c_s.jpg"
          }
        />
        <Text fontWeight={"bold"}>
          {item.title || item.Name || item.Title}...
        </Text>
        <Text>
          MRP :{" "}
          <Badge>
            <del>
              ₹{item.oldprice || item.price2 || item.price3 || item.price3}
            </del>
          </Badge>
        </Text>
        <Text>
          Price : <Badge>₹{item.newprice || item.price}</Badge>
          <Text fontWeight={"bold"} fontSize="sm" color={"green.600"}>
            Discount{" "}
            {(
              ((item.oldprice - item.newprice) * 100) /
              item.oldprice
            ).toFixed() || "40"}
            % OFF
          </Text>
        </Text>
        {loading ? (
          <Button
            isLoading
            loadingText="Reoving"
            colorScheme="teal"
            variant="outline"
            spinnerPlacement="start"
          ></Button>
        ) : (
          <Button
            onClick={() => handleRemove(item)}
            bg="orange.400"
            color="white"
          >
            Remove
          </Button>
        )}
      </div>
    </>
  );
};

export default Sigglecart;
