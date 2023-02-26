import React, { useState } from "react";
import { Badge, Button, Heading, Text, useToast } from "@chakra-ui/react";
const OrderCard = ({ item }) => {
  let [loading, setLoading] = useState(false);

  return (
    <div>
      <div
        style={{
          padding: "3px",
          width: "250px",
          textAlign: "center",
          borderRadius: "5px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          margin: "auto",
          marginTop: "10px",
          height: "400px",
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
        {/* {
    loading?<Button
    isLoading
    loadingText='Remving'
    colorScheme='teal'
    variant='outline'
    spinnerPlacement='start'
  ></Button>:<Button bg={"orange.400"} color={"white"} _hover={{ bg:"orange.400" ,color:"white" }} >Remove</Button>
 }
 <Button bg={"green.400"} color={"white"} _hover={{ bg:"green.400" ,color:"white" }}>Add to Cart</Button> */}
      </div>
    </div>
  );
};

export default OrderCard;
