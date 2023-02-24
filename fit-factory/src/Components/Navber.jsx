import React, { useContext } from "react";
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
  Spacer,
  PopoverTrigger,
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Avatar,
  Heading,
  Text,
} from "@chakra-ui/react";
import MegaMenu from "./MegaMenu";
import { BsCartPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { authContext } from "../Context/Authcontext";
export default function Navbar() {
  const navigate = useNavigate();
  //let {isAuth}=useContext(authContext)
  let isAuth = JSON.parse(localStorage.getItem("isAuth")) || false;
  let accountdata = JSON.parse(localStorage.getItem("accountdata")) || {
    name: "Sachin Kesarwani",
  };

  console.log("isAuth", isAuth);

  function handleLogout() {
    localStorage.setItem("isAuth", false);
    navigate("/");
  }
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Link to="/">
              <Image src="Logo.jpeg" alt="logo" w="240px" h="62px" />
            </Link>

            {/* ----------- SearchBar & SearchButton ------ */}
            <HStack>
              <Input
                placeholder="Search for products & brands"
                w="500px"
                display={{ base: "none", md: "flex" }}
                border="2px solid teal"
              />
              <Button colorScheme={"teal"}>Search</Button>
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            {/* <i class='fas fa-user-alt' style={{fontSize:'26px',marginRight:"45px"}}></i> */}
            {/* -------------- SignUp ------------- */}
            {isAuth ? (
              <Popover placement="top-start">
                <PopoverTrigger>
                  <i
                    class="fas fa-user-alt"
                    style={{ fontSize: "26px", marginRight: "45px" }}
                  ></i>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverHeader fontWeight="semibold" bg="teal.500">
                    <Flex>
                      <Avatar
                        bg={"white"}
                        color={"teal"}
                        size="md"
                        name={`${accountdata.name}`}
                      />
                      <Heading color="white" as="h3" size="lg">
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
                      WishList
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
          </Flex>
        </Flex>
      </Box>
      <MegaMenu />
    </>
  );
}
