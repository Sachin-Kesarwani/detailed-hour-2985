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
    console.log(data);
    console.log(loginEmail);
    console.log(loginPassword);
    let notthere = true;
    for (let i = 0; i < data.length; i++) {
      if (data[i].email == loginEmail && data[i].password && loginPassword) {
        localStorage.setItem("accountdata", JSON.stringify(data[i]));
        localStorage.setItem("isAuth", true);
        navigate("/");
        toast({
          title: "Successfully Login",
          description: "Welcome to Fit-Factory",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        notthere = false;
      }
    }
    if (notthere) {
      toast({
        title: "Invalid Credentials",
        description: "Your data is not matched to our record",
        status: "failure",
        duration: 5000,
        isClosable: false,
      });
    }
  };

  return (
    <div style={{ alignContent: "center", paddingTop: "100px" }}>
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

            <Button
              bg={"teal.400"}
              color={"white"}
              m="5px"
              onClick={LoginCheck}
            >
              Login
            </Button>

            <Text textAlign="center">
              ** Welcome back again to our service. **
            </Text>
          </Box>
        </Flex>
      </FormControl>
    </div>
  );
};

export default Login;
