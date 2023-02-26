import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetCartData,
  GetwishListdatafromjson,
  PostdataIncart,
  PostdataInWishList,
} from "../Redux/CartRedux/action";
import { Badge, Button, Heading, Text, useToast } from "@chakra-ui/react";
const WishlistCard = ({ item }) => {
  let [loading, setLoading] = useState(false);
  let toast = useToast();
  let dispatch = useDispatch();
  let Wishlist = useSelector((store) => store?.CartReducer?.wishlist);

  function handleRemove(item) {
    setLoading(true);
    let data = Wishlist.filter(
      (e) => e.id != item.id || e.Position != item.Position
    );
    console.log(data);
    console.log(item);
    dispatch(PostdataInWishList(data)).then((res) => {
      setLoading(false);
      toast({
        title: `Product Removed From Wishlist`,
        status: "warning",
        isClosable: true,
      });
      dispatch(GetwishListdatafromjson);
    });
  }

  let cartdata = useSelector((store) => store?.CartReducer?.cart);

  let [loading2, setLoading2] = useState(false);

  function handlePostdataIncart(data) {
    console.log(data, "data in home fun");
    let userID = 5;

    console.log(cartdata);
    setLoading2(true);
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
          setLoading2(false);
          toast({
            title: `Product Added`,
            position: "top-left",
            isClosable: true,
          });
        });
        return;
      }
    }
    if (cartdata.length == 0) {
      let arr = [data];

      dispatch(PostdataIncart(arr)).then((re) => {
        setLoading2(false);
        dispatch(GetCartData);
        toast({
          title: `Product Added`,
          position: "top-left",
          isClosable: true,
        });
      });
      return;
    }
    setLoading2(false);
    toast({
      title: `Product Already In The cart`,
      position: "top-left",
      isClosable: true,
    });
  }

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
        }}
      >
        <img
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
            loadingText="Remving"
            colorScheme="teal"
            variant="outline"
            spinnerPlacement="start"
          ></Button>
        ) : (
          <Button
            bg={"orange.400"}
            color={"white"}
            _hover={{ bg: "orange.400", color: "white" }}
            onClick={() => handleRemove(item)}
          >
            Remove
          </Button>
        )}

        {loading2 ? (
          <Button
            isLoading
            loadingText="Adding"
            colorScheme="teal"
            variant="outline"
            spinnerPlacement="start"
          ></Button>
        ) : (
          <Button
            m={1}
            bg={"teal.400"}
            color={"white"}
            _hover={{ bg: "teal.400", color: "white" }}
            onClick={() => handlePostdataIncart(item)}
          >
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default WishlistCard;
