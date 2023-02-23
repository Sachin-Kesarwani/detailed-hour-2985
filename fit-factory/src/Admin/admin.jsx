import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import AdminNav from "./Components/adminNavbar";
import SidebarWithHeader from "./Components/adminSidebar";

import Stats from "./Components/stats";
const Admin = () => {
  return (
    <>
      {/* <AdminNav /> */}
      <SidebarWithHeader/>
       
        <Stats />
     
    </>
  );
};

export default Admin;
