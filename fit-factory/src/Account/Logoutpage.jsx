import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Logoutpage = () => {
  let navigate = useNavigate();
  function handleLogout() {
    localStorage.setItem("isAuth", false);
    navigate("/");
  }

  return (
    <div>
      <Heading textAlign={"center"}>Do You Want To Logout ?</Heading>
      <Button
        bg={"red.400"}
        color={"white"}
        onClick={() => handleLogout()}
        margin={"5% 30%"}
        w={"40%"}
      >
        Logout Now
      </Button>
    </div>
  );
};

export default Logoutpage;
