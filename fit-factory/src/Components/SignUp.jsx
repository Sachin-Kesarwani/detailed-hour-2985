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
import { useNavigate, Navigate, useLocation } from "react-router-dom";

const SignUp = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState();
  const [signupPhone, setSignupPhone] = useState();
  let location = useLocation();
  const SignUpCheck = () => {
    let signupobj = {
      name: signupName,
      email: signupEmail,
      password: signupPassword,
      phone: signupPhone,
      wishlist: [],
      cart: [],
      order: [],
    };

    axios
      .post(`https://helpful-free-baroness.glitch.me/Users`, signupobj)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("accountdata", JSON.stringify(res.data));
        localStorage.setItem("isAuth", true);
        navigate("/");
        // <Navigate to="/" state={{ from: location}} replace />
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((e) => {
        console.log("Error:", e);
        toast({
          title: "Something wrong",
          description: "We've not create your account",
          status: "failure",
          duration: 5000,
          isClosable: false,
        });
      });
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
          <Box dispaly="block" m="auto 20px">
            <Text fontSize="32px" fontWeight="bold" m="5px" textAlign="center">
              SignUp
            </Text>
            <Input
              type="text"
              placeholder="Name"
              m="10px 5px"
              display={{ base: "none", md: "flex" }}
              border="1px solid teal"
              onChange={(e) => setSignupName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email"
              m="10px 5px"
              display={{ base: "none", md: "flex" }}
              border="1px solid teal"
              onChange={(e) => setSignupEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              m="10px 5px"
              display={{ base: "none", md: "flex" }}
              border="1px solid teal"
              onChange={(e) => setSignupPassword(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Phone"
              m="10px 5px"
              display={{ base: "none", md: "flex" }}
              border="1px solid teal"
              onChange={(e) => setSignupPhone(e.target.value)}
            />

            <Button
              bg={"teal.400"}
              color={"white"}
              m="5px"
              onClick={() => SignUpCheck()}
            >
              SignUp
            </Button>

            <Text textAlign="center">
              ** You may receive SMS updates from Fit-Factory and can opt out at
              any time. **
            </Text>
          </Box>
        </Flex>
      </FormControl>
    </div>
  );
};

export default SignUp;
