import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Image,
  Button,
  Menu,
  Input,
  MenuButton,
  useColorModeValue,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverTrigger,
  Popover,
  Avatar,
  PopoverHeader,
  Text,
  Heading,
  PopoverContent,
} from "@chakra-ui/react";
import MegaMenu from "./MegaMenu";
import { BsCartPlus, BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Search2Icon } from "@chakra-ui/icons";

export default function Navbar() {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  // let isAuth=localStorage.getItem("isAuth")||false
  let isAuth = JSON.parse(localStorage.getItem("isAuth")) || false;
  const [searchQuery, setSearchQuery] = useState("");
  let accountdata = JSON.parse(localStorage.getItem("accountdata"));
  function handleLogout() {
    localStorage.setItem("isAuth", false);
    navigate("/");
  }

  console.log(typeof isAuth);
  return (
    <div
      style={{
        position: "sticky",
        top:0,
        zIndex: "10",
        width: "full",
        height: "auto",
      }}
    >
      {/* Box pos="fixed" zIndex={2} w="100%" */}
      <Box bg={useColorModeValue("gray.100", "gray.900")}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Link to="/">
              <Image src="Logo.jpeg" alt="logo" w="240px" h="62px" />
            </Link>

            {/* ----------- SearchBar & SearchButton ------ */}
            <HStack>
              <Input
                placeholder="Search for products & brands"
                value={searchQuery}
                w="400px"
                display={{ base: "none", md: "flex" }}
                border="2px solid teal"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Link to={`/searchpage/${searchQuery}`}>
                {" "}
                <Button display={ {
                  base:"none",
  sm: 'none', // 480px
  md: 'block', // 768px
  lg: 'block', // 992px
  xl: 'block', // 1280px
  '2xl': 'block', // 1536px
}} colorScheme={"teal"} onClick={() => setSearchQuery("")}>
                  Search
                </Button>
              </Link>
              <Link to="/searchproduct">
              <Search2Icon justifyContent={"end"} marginRight={"10px"}  fontSize={"20px"} display={ {
                  base:"block",
  sm: 'block', // 480px
  md: 'none', // 768px
  lg: 'none', // 992px
  xl: 'none', // 1280px
  '2xl': 'none', // 1536px
}}/>
              </Link>
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            {/* -------------- SignUp ------------- */}

            {isAuth ? (
              <Popover>
                <PopoverTrigger   position={"relative"}>
                  <BsPersonCircle
                    style={{
                      height: "30px",
                      width: "30px",
                      marginRight: "3vw",
                    }}
                  />
                </PopoverTrigger>
                <PopoverContent w={"270px"}  marginTop={"100px"} >
                  <PopoverHeader fontWeight="semibold" bg="teal.500">
                    <Flex>
                      <Avatar
                        bg={"white"}
                        color={"teal"}
                        size="md"
                        margin="2px 5px"
                        name={`${accountdata.name}`}
                      />
                      <Heading
                        color="white"
                        as="h3"
                        size="lg"
                        textAlign={"center"}
                      >
                        Hi , {accountdata.name}{" "}
                      </Heading>{" "}
                    </Flex>{" "}
                  </PopoverHeader>
                  <PopoverArrow />
                  <PopoverCloseButton color="white" />
                  <PopoverBody>
                    <Text
                      textAlign={"center"}
                      onClick={() => {
                        navigate("/account");
                      }}
                      fontSize={"20px"}
                      cursor={"pointer"}
                      color={"gray.500"}
                    >
                      <i
                        style={{ fontSize: "24px", color: "gray" }}
                        class="fas"
                      >
                        &#xf004;
                      </i>{" "}
                      Go To Your Profile
                    </Text>
                    <Text
                      textAlign={"center"}
                      onClick={handleLogout}
                      cursor={"pointer"}
                      color={"orange.400"}
                    >
                      {" "}
                      <i
                        class="fa fa-sign-out"
                        style={{ fontSize: "24px" }}
                      ></i>{" "}
                      Logout
                    </Text>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            ) : (
              <Flex>
                <Button
                  colorScheme={"teal"}
                  m="5px 15px"
                  onClick={() => navigate("/signup")}
                >
                  SignUp
                </Button>

                {/* ---------- Login ----------- */}
                <Button
                  colorScheme={"teal"}
                  m="5px 15px"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </Flex>
            )}
            {/* ----------- Cart Icon ------------ */}
            <Link to="/cart">
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                >
                  <BsCartPlus
                    style={{
                      height: "30px",
                      width: "30px",
                      marginLeft: "5px 25px",
                    }}
                  />
                </MenuButton>
              </Menu>
            </Link>
          </Flex>
        </Flex>
      </Box>

      <MegaMenu />
    </div>
  );
}
