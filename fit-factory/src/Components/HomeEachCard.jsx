import { useState } from "react";
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
import { CheckCircleIcon, Icon, StarIcon } from "@chakra-ui/icons";
import { BsArrowUpRight, BsHeartFill, BsHeart } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
export default function EachCard() {
  const [liked, setLiked] = useState(false);

  return (
    <Center py={6}>
      <Box
        // w="xs"
        w="290px"
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
              onClick={() => setLiked(!liked)}
            >
              {liked ? (
                <BsHeartFill fill="red" fontSize={"24px"} />
              ) : (
                <BsHeart fontSize={"24px"} />
              )}
            </Flex>
          </HStack>
          <Box h={"200px"} borderBottom={"1px"}>
            <Img
              cursor={"pointer"}
              src={
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
              5.00 <Icon as={StarIcon} color="white" />
            </Badge>
            <Spacer />
            <Text fontSize={"14px"} color={"gray.500"}>
              100 reviews
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
          >
            {/* <Text float={"left"} fontSize={"xs"} fontWeight="medium">
              React
            </Text> */}
          </Box>
          {/* <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
            React v18.0
          </Heading> */}
          <Text textAlign={"left"} color={"gray.700"} noOfLines={2}>
            In this post, we will give an overview of what is new in React 18,
            and what it means for the future.
          </Text>
          <Flex>
            <Heading as="h4" size="md">
              ₹400
            </Heading>
            <Spacer />
            <Text fontSize="sm">
              <del> ₹300</del>
            </Text>
            <Spacer />
            <Text fontSize="sm" color={"green.600"}>
              {" "}
              40% OFF
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
              <Icon as={StarIcon} color={"orange.500"} /> dgfehggrjuhr
            </Text>
          </Box>
          <Box
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
          >
            <Icon as={FiShoppingCart} h={5} w={5} alignSelf={"center"} /> Add To
            Cart
          </Box>
        </Box>
      </Box>
    </Center>
  );
}
