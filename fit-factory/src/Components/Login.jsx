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
  const [loginPassword, setLoginPassword] = useState();

  const LoginCheck = async () => {
    let res = await axios.get(`https://helpful-free-baroness.glitch.me/Users`);
    let data = await res.data;

    data.map((el) => {
      if (el.email === loginEmail && el.password === loginPassword) {
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
          isClosable: false,
        });
      }
    });
  };

  return (
    <FormControl bg="#f2e3c6" p="20px">
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
            w="500px"
            type="email"
            placeholder="Email"
            m="10px 5px"
            display={{ base: "none", md: "flex" }}
            border="1px solid teal"
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            m="10px 5px"
            display={{ base: "none", md: "flex" }}
            border="1px solid teal"
            onChange={(e) => setLoginPassword(e.target.value)}
          />

          <Button colorScheme={"teal"} m="5px" onClick={() => LoginCheck()}>
            Login
          </Button>

          <Text textAlign="center">*Welcome back again to our service.</Text>
        </Box>
      </Flex>
    </FormControl>
  );
};

export default Login;
