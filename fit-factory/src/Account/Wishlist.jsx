import { Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetwishListdatafromjson } from "../Redux/CartRedux/action";
import WishlistCard from "./wishlistCart";

const Wishlist = () => {
  let dispatch = useDispatch();
  let Wishlistdata = useSelector((store) => store?.CartReducer?.wishlist);
  useEffect(() => {
    dispatch(GetwishListdatafromjson);
  }, []);

  return (
    <div>
      {Wishlistdata.length > 0 && (
        <Heading textAlign={"center"}>You Wish List</Heading>
      )}
      {Wishlistdata.length >= 1 ? (
        Wishlistdata.map((e) => {
          return <WishlistCard key={e.id || e.Position} item={e} />;
        })
      ) : (
        <Heading textAlign={"center"}>Nothing In Wishlist </Heading>
      )}
    </div>
  );
};

export default Wishlist;
