
import React, { useState } from "react";

import SidebarWithHeader from "./Components/adminSidebar";
import Products from "./Components/products";

import Stats from "./Components/stats";
import Users from "./Components/users";
const Admin = () => {
  const [preview, setPreview] = useState("stats");

  const changePreview = (value) => {
    setPreview(value);
  };

  const previewComponent = () => {
    let defaultComponent = <Stats />;
    switch (preview) {
      case "stats":
        defaultComponent = <Stats />;
        break;
      case "allproducts":
        defaultComponent = <Products />;
        break;
      case "admins":
        defaultComponent = <Stats />;
        break;
      case "users":
        defaultComponent = <Users />;
        break;
        default :
        defaultComponent = <Stats />;
    }
    return defaultComponent;
  };


  return (
    <>
      {/* <AdminNav /> */}
      <SidebarWithHeader changePreview={changePreview}/>
       
        {/* <Stats /> */}
        {previewComponent()}
    </>
  );
};

export default Admin;
