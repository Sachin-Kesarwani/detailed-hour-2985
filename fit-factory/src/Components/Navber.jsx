import React from "react";
import {
  Box,
  Flex,
  HStack,
  Image,
  Button,
  Menu,
  Text,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  MenuButton,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import MegaMenu from "./MegaMenu";
import { BsCartPlus } from "react-icons/bs";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Image src="Logo.jpeg" alt="logo" w="240px" h="62px" />
            <Input
              placeholder="Search for products & brands"
              w="500px"
              display={{ base: "none", md: "flex" }}
              border="2px solid teal"
            />
          </HStack>
          <Flex alignItems={"center"}>
            <Button colorScheme={"teal"} m="5px 15px" onClick={onOpen}>
              Login
            </Button>

            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                  <Flex>
                    <Image
                      src="https://static1.hkrtcdn.com/hknext/static/media/login/slider/1.svg"
                      alt="loginImage"
                      w="220px"
                      h="420px"
                      m="20px"
                    />
                    <Box mt="160px">
                      <Text fontWeight="bold">Login or Sign-up</Text>
                      <Input
                        placeholder="Phone"
                        m="10px 5px"
                        display={{ base: "none", md: "flex" }}
                        border="1px solid teal"
                      />
                      <Button colorScheme={"teal"} m="5px 15px">
                        Get OTP
                      </Button>
                      <p>
                        *You may receive SMS updates from Fit-Factory and can
                        opt out at any time.
                      </p>
                    </Box>
                  </Flex>
                </ModalBody>
                <ModalFooter>
                  <Button
                    colorScheme="teal"
                    alignItems="center"
                    mr={3}
                    onClick={onClose}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
              >
                <BsCartPlus />
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>
      </Box>
      <MegaMenu />
      <Box p={4}>Main Content Here</Box>
    </>
  );
}
