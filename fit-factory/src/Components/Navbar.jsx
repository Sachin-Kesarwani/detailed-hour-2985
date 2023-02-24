import React, { useState } from "react";
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
} from "@chakra-ui/react";
import MegaMenu from "./MegaMenu";
import { BsCartPlus } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

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
                value={searchQuery}
                w="500px"
                display={{ base: "none", md: "flex" }}
                border="2px solid teal"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Link to={`/searchpage/${searchQuery}`}>
                {" "}
                <Button colorScheme={"teal"} onClick={() => setSearchQuery("")}>
                  Search
                </Button>
              </Link>
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            {/* -------------- SignUp ------------- */}
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
    </>
  );
}
