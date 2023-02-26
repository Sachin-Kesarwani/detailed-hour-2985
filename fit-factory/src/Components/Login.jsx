import {
  Box,
  Button,
  Flex,
  FormControl,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const LoginCheck = async () => {
    let res = await axios.get(`https://helpful-free-baroness.glitch.me/Users`);
    let data = await res.data;

    data.map((el) => {
      if (el.email === loginEmail && el.password === loginPassword) {
        localStorage.setItem("accountdata", JSON.stringify(el));
        navigate("/");
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Invalid Credentials",
          description: "Your data is not matched to our record",
          status: "failure",
          duration: 5000,
          isClosable: true,
        });
      }
    });
  };

  return (
    <FormControl bg={"#f2e3c6"} p="20px">
      <Flex>
        <Image
          src="https://static1.hkrtcdn.com/hknext/static/media/login/slider/1.svg"
          alt="loginImage"
          w="40%"
          height="400px"
          display="block"
          m="auto"
        />
        <Box dispaly="block" m="auto">
          <Text fontSize="32px" fontWeight="bold" m="5px" textAlign="center">
            Login
          </Text>
          <Input
            m="10px 5px"
            w="500px"
            id="loginemail"
            type="email"
            placeholder="Email"
            display={{ base: "none", md: "flex" }}
            border="1px solid teal"
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <Input
            m="10px 5px"
            id="loginpassword"
            type="password"
            placeholder="Password"
            display={{ base: "none", md: "flex" }}
            border="1px solid teal"
            onChange={(e) => setLoginPassword(e.target.value)}
          />

          <Button bg="teal.400" color="white" m="5px" onClick={LoginCheck}>
            Login
          </Button>

          <Text textAlign="center">*Welcome back again to our service.</Text>
        </Box>
      </Flex>
    </FormControl>
  );
};

export default Login;
