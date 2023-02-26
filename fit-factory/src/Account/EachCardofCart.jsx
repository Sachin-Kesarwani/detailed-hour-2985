import {
  Badge,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  useToast,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GetCartData } from "../Redux/CartRedux/action";

export default function EachcardOfCart({ item }) {
  console.log(item);
  //console.log(props)
  let dispatch = useDispatch();
  let [piece, setPiece] = useState(1);
  let [id, setId] = useState(0);
  const toast = useToast();

  function extendPcs(id, val) {
    //  console.log(id)
    setPiece((e) => e + val);
    setId((e) => id);
    console.log(piece);
    // alert(id+" "+val+" " +piece)
  }
  useEffect(() => {
    //console.log(piece,"32",id)
    // props.increasePiece(id,piece)
  }, [piece, id]);
  useEffect(() => {
    dispatch(GetCartData);
  }, []);

  return (
    <>
      {/* <Center py={6} key={props.id}> */}
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "540px" }}
        height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={item.image || item.Image}
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {item.title || item.Title}...
          </Heading>
          {/* <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
           
            </Text> */}
          <Badge color={"white"} bg={"red.900"}>
            Biggest Offer
          </Badge>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            {/* {props.description.substring(0, 30)} */}
            <Link href={"#"} color={"blue.400"}>
              #tag
            </Link>
            me in your posts
          </Text>
          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Badge
              px={2}
              py={1}
              rounded="md"
              color="white"
              bg={"green.400"}
              fontWeight={"600"}
            >
              {item.newprice || item.Price}
            </Badge>
            <Badge
              px={2}
              py={1}
              rounded="md"
              bg={"purple.300"}
              color="white"
              fontWeight={"600"}
            >
              {/* Price : ₹ {props.price} */}
              5000
            </Badge>
            <Badge
              px={2}
              py={1}
              rounded="md"
              color="white"
              bg={"yellow.600"}
              fontWeight={"600"}
            >
              {/* Dis : ₹ {props.discount} */}
              300
            </Badge>
          </Stack>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <HStack>
              <Button
                flex={1}
                fontSize={"lg"}
                isDisabled={piece === 1}
                // onClick={()=>extendPcs(props.id,-1)}
                _focus={{
                  bg: "gray.200",
                }}
              >
                -
              </Button>
              <Button
                flex={1}
                fontSize={"lg"}
                //  isDisabled
                color={"black"}
              >
                {/* {
                    props.pcs
                  } */}
                8
              </Button>
              <Button
                flex={1}
                fontSize={"lg"}
                // onClick={()=>extendPcs(props.id,1)}
                _focus={{
                  bg: "gray.200",
                }}
              >
                +
              </Button>
            </HStack>

            <Button
              flex={1}
              fontSize={"sm"}
              //   onClick={()=>{  return     props.deleteCartitem(props.id)
              // }}
              bg={"red.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "red.500",
              }}
              _focus={{
                bg: "red.500",
              }}
            >
              Remove
            </Button>
          </Stack>
        </Stack>
      </Stack>
      {/* </Center> */}
      <Divider />
    </>
  );
}
