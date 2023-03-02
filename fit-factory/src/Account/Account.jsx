import { Box, Flex, FormControl, Heading, Input, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Cart from "../Pages/Cart";
import EachcardOfCart from "./EachCardofCart";
import Logoutpage from "./Logoutpage";
import Myorders from "./Myorders";
import PersonelInfo from "./PersonelInfo";
import Wishlist from "./Wishlist";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { Button,FormLabel } from "@chakra-ui/react";
let arr = [
  {
    id: 0,
    page: "editAccount",
    title: "Pesonel Information",
    icon: "far fa-user-circle",
  },

  { id: 1, page: "cart", title: "Cart", icon: "fa fa-shopping-cart" },
  { id: 2, page: "wishlist", title: "Your Wish list", icon: "fas fa-heart" },
  {
    id: 3,
    page: "my orders",
    title: "Your Orders",
    icon: "	fas fa-cart-arrow-down",
  },
  { id: 4, page: "logout", title: "Logout", icon: "fas fa-sign-in-alt" },
];

let admindata=[
  {
    "id": 1,
    "name": "Sachin Kesarwani",
    "username": "sachin5454",
    "password": "sachin@5454"
  },
  {
    "id": 2,
    "name": "Shivam Kumar",
    "username": "shivam4321",
    "password": "shivam@4321"
  },
  {
    "id": 3,
    "name": "Malikrehan Meeranaik",
    "username": "malik9911",
    "password": "malik@9911"
  }
]
const Account = () => {
  let [active, setactive] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure()
  let [admin,setAdmin]=useState({username:"",password:""})
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    let toast=useToast()
    function handleAdmin(e){
      e.preventDefault()
   
      for(let i=0;i<admindata.length;i++){
        if(admindata[i].username==admin.username&&admindata[i].password==admin.password){
          console.log(admin)
          window.open("https://fit-factory.vercel.app/admin","_blank","noreferrer")
          onClose()
          toast({
            title: `Welcome to Admin Page`,
            status: "success",
            isClosable: true,
          })
          return 
        }
      }
      toast({
        title: `Somethin went wrong`,
        status: "warning",
        isClosable: true,
      })
     onClose()

    }
  return (
    <div style={{ alignContent: "center", paddingTop: "120px" }}>
      <div style={{ width: "100%", height: "auto" }}>
        <Flex w={"90%"} gap={"2%"} margin={"auto"}>
          <Box w={"20%"} h={"400px"}>
            {arr.map((e) => {
              return (
                <div
                  key={e.id}
                  onClick={() => {
                    setactive(e.id);
                  }}
                  style={{
                    border: "1px solid orange",
                    width: "100%",
                    margin: "auto",
                    padding: "10px 11px",
                    cursor: "pointer",
                    backgroundColor: active == e.id ? "#009999" : "white",
                    borderRadius: "5px",
                    margin: "1px",
                  }}
                >
                  <Text
                    fontSize="md"
                    color={active == e.id ? "white" : "black"}
                  >
                    {" "}
                    <i style={{ fontSize: "20px" }} class={e.icon}></i>{" "}
                    {e.title}{" "}
                  </Text>
                </div>
              );
            })}
            {/* <Link to="/admin" target="_blank" > */}
              <div
             onClick={onOpen}
                style={{
                  border: "1px solid red",
                  width: "100%",
                  margin: "auto",
                  padding: "10px 11px",
                  cursor: "pointer",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  margin: "1px",
                }}
              >
                <Text fontSize="md">
                  {" "}
                  <i style={{ fontSize: "20px" }}></i>Go To Admin{" "}
                </Text>
              </div>
            {/* </Link> */}
          </Box>
          <Box
            borderRadius={"8px"}
            boxShadow={
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            }
            w={"78%"}
          >
            {active == 0 ? (
              <PersonelInfo />
            ) : active == 1 ? (
              <Cart />
            ) : active == 2 ? (
              <Wishlist />
            ) : active == 4 ? (
              <Logoutpage />
            ) : active == 3 ? (
              <Myorders />
            ) : (
              <Heading>jii</Heading>
            )}

            {/* <EachcardOfCart/> */}
          </Box>
        </Flex>
      </div>


  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login For Admin</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input ref={initialRef} name="username" onChange={(e)=>setAdmin({...admin,[e.target.name]:e.target.value})} placeholder='Enter Your username' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input placeholder='Enter your Password ...'name="password" onChange={(e)=>setAdmin({...admin,[e.target.name]:e.target.value})} />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={handleAdmin} colorScheme='blue' mr={3}>
               Login
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </div>
  );
};

export default Account;
