import { useEffect, useState } from "react";
import "./Eachcard.css";
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
  Badge,
  Spacer,
  Button,
} from "@chakra-ui/react";
import {
  CheckCircleIcon,
  Icon,
  StarIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";
import { BsArrowUpRight, BsHeartFill, BsHeart } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  GetwishListdatafromjson,
  PostdataIncart,
} from "../Redux/CartRedux/action";
import { Link } from "react-router-dom";
import {
  PostdataInWishList,
  DeldatafromWishlist,
} from "../Redux/CartRedux/action";
export default function EachCard({ item, handlePostdataIncart, category }) {
  const [liked, setLiked] = useState(false);
  function fun() {
    // console.log("ho");
  }

  let [active, setActive] = useState(false);
  let dispatch = useDispatch();
  let wishlistdata = useSelector((store) => store?.CartReducer?.wishlist);
  function AddInWishList(data) {
    console.log(item);
    if (!liked) {
      if (wishlistdata.length && wishlistdata.length >= 1) {
        let notThere = true;
        for (let i = 0; i < wishlistdata.length; i++) {
          if (wishlistdata[i].image == data.image) {
            notThere = false;
            break;
          }
        }

        if (notThere) {
          console.log("iside not there");
          let arr = [...wishlistdata, data];
          dispatch(PostdataInWishList(arr)).then((re) => {
            dispatch(GetwishListdatafromjson);
          });
        }
      }
      if (wishlistdata.length == 0) {
        let arr = [data];
        console.log("inside if");
        dispatch(PostdataInWishList(arr)).then((re) => {
          dispatch(GetwishListdatafromjson);
        });
      }
    }
    if (liked) {
      let arr = wishlistdata.filter((e) => e.Position !== data.Position);
      dispatch(PostdataInWishList(arr)).then((re) => {
        dispatch(GetwishListdatafromjson);
      });
    }
  }

  return (
    <Box
      id="eachcardBox"
      key={item.Position}
      // w={"22vw"}
      w={"280px"}
      rounded={"sm"}
      overflow={"hidden"}
      // bg="white"
      _hover={{
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      }}
      border={" 1px solid  #c2c2d6"}
      borderRadius={"10px"}
    >
      <Box bg={"blackAlpha.100"}>
        <HStack>
          <Flex
            p={4}
            // bg={"blackAlpha.100"}
            alignItems="center"
            justifyContent={"space-between"}
            roundedBottom={"sm"}
            cursor={"pointer"}
            w="full"
          ></Flex>
          <Flex
            p={2}
            alignItems="center"
            justifyContent={"space-between"}
            roundedBottom={"sm"}
            cursor="pointer"
            onClick={() => {
              setLiked((prev) => !liked);
              AddInWishList(item);
            }}
          >
            {liked ? (
              <BsHeartFill fill="red" fontSize={"24px"} />
            ) : (
              <BsHeart fontSize={"24px"} />
            )}
          </Flex>
        </HStack>
        <Box h={"200px"} borderBottom={"1px"}>
          <Link to={`/singlePage/${category}/${item.Position}`}>
            <Img
              cursor={"pointer"}
              src={
                item.image ||
                item.Image ||
                "https://img1.hkrtcdn.com/19939/prd_1993850-MuscleBlaze-Fish-Oil-1000-mg-Indias-Only-Labdoor-USA-Certified-for-Purity-Accuracy-60-softgels_c_s.jpg"
              }
              margin={"auto"}
              roundedTop={"sm"}
              objectFit="cover"
              h="full"
              // w="full"
              w={"60%"}
              alt={"Blog Image"}
            />
          </Link>
        </Box>
      </Box>

      <Box p={4}>
        <Flex>
          <Badge
            fontSize={"12px"}
            padding={"5px 10px"}
            variant="solid"
            borderRadius={"3px"}
            bg={"teal.300"}
            colorScheme="white"
          >
            {item.rating || item.Rating || 3.9}
            <Icon as={StarIcon} color="white" />
          </Badge>
          <Spacer />
          <Text fontSize={"14px"} color={"gray.500"}>
            {item.reviews || item.View || "2.9k " + " reviews"}
          </Text>
          <Spacer />
          <Icon color={"green.300"} as={CheckCircleIcon} />
        </Flex>
        <Box
          // bg="black"
          display={"inline-block"}
          px={2}
          py={1}
          color="white"
          mb={2}
        ></Box>

        <Text textAlign={"left"} color={"gray.700"} noOfLines={2}>
          {item.title || item.Title || "Hello sachin"}
        </Text>
        <Flex>
          <Heading as="h4" size="md">
            ₹ {item.newprice || item.Price || "₹400"}
          </Heading>
          <Spacer />
          <Text fontSize="sm">
            <del>
              {" "}
              ₹{" "}
              {item.oldprice ||
                item.Price2 ||
                item.Price3 ||
                item.price4 ||
                "₹ 300"}{" "}
            </del>
          </Text>
          <Spacer />
          <Text fontSize="sm" color={"green.600"}>
            {item.Discount ||
              (
                ((item.oldprice - item.newprice) * 100) /
                item.oldprice
              ).toFixed() + "  % OFF" ||
              "40   % OFF"}
          </Text>
          <Spacer />
          <Spacer /> <Spacer />
        </Flex>
        <Box
          cursor={"pointer"}
          bg={"blackAlpha.100"}
          padding={"5px 15px"}
          borderRadius={"5px"}
          marginTop={"10px"}
          marginBottom={"10px"}
        >
          <Text textAlign={"center"}>
            <Icon as={StarIcon} color={"orange.500"} />
            Fit-Factory Assured
          </Text>
        </Box>

        {active ? (
          <Link to="/cart">
            <Box
              // onClick={()=>setActive(!active)}
              cursor={"pointer"}
              bg={"teal.400"}
              _hover={{ bg: "white", color: "teal.500" }}
              padding={"10px 15px"}
              borderRadius={"10px"}
              fontSize={"17px"}
              color={"white"}
              fontWeight={"bold"}
              border={"1.5px solid teal"}
              marginTop={"10px"}
              marginBottom={"10px"}
              textAlign={"center"}
            >
              Go To Cart{" "}
              <Icon as={ArrowForwardIcon} h={5} w={5} alignSelf={"center"} />
            </Box>{" "}
          </Link>
        ) : (
          <Box
            onClick={() => {
              handlePostdataIncart(item);
              setActive(!active);
            }}
            cursor={"pointer"}
            _hover={{ bg: "orange", color: "white" }}
            padding={"10px 15px"}
            borderRadius={"10px"}
            fontSize={"17px"}
            color={"orange.400"}
            fontWeight={"bold"}
            border={"1.5px solid orange"}
            marginTop={"10px"}
            marginBottom={"10px"}
            textAlign={"center"}
          >
            <Icon as={FiShoppingCart} h={5} w={5} alignSelf={"center"} /> Add To
            Cart
          </Box>
        )}
      
      </Box>
    </Box>
    // </Center>
  );
}
