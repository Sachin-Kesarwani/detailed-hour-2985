import React from "react";
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
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Image src="Logo.jpeg" alt="logo" w="240px" h="62px" />

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
