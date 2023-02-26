import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  BeatLoader,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

let accountdata = JSON.parse(localStorage.getItem("accountdata"));
const PersonelInfo = () => {
  let [edit, setEdit] = useState(false);
  let [data, setData] = useState({
    name: accountdata.name,
    email: accountdata.email,
    phone: accountdata.phone,
    password: accountdata.password,
  });
  let [loading, setLoading] = useState(false);
  async function handleEdit() {
    setLoading(true);
    await axios({
      url: `https://helpful-free-baroness.glitch.me/Users/${accountdata.id}`,
      method: "patch",
      data: data,
    }).then((res) => {
      localStorage.setItem("accountdata", JSON.stringify(res.data));
      setLoading(false);
      setEdit(false);
    });
  }
  accountdata = JSON.parse(localStorage.getItem("accountdata")) || { id: 1 };

  return (
    <>
      <Heading marginLeft={"20px"}>Personel Information </Heading>

      {edit ? (
        <div style={{ width: "100px", marginLeft: "20px", padding: "5px" }}>
          <label>
            Name :
            <input
              name="name"
              type="text"
              style={{ border: "1px solid teal", padding: "2px 15px" }}
              value={data.name}
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
          </label>
          <label>
            Eaml :
            <input
              name="email"
              type="text"
              style={{ border: "1px solid teal", padding: "2px 15px" }}
              value={data.email}
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
          </label>
          <label>
            Password :
            <input
              name="password"
              type="text"
              style={{ border: "1px solid teal", padding: "2px 15px" }}
              value={data.password}
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
          </label>
          <label>
            Phone :
            <input
              name="phone"
              type="text"
              style={{ border: "1px solid teal", padding: "2px 15px" }}
              value={data.phone}
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
          </label>
          {loading ? (
            <Button
              isLoading
              loadingText="Editting"
              colorScheme="teal"
              variant="outline"
              spinnerPlacement="start"
            >
              Editting
            </Button>
          ) : (
            <Button
              onClick={() => {
                handleEdit();
              }}
            >
              Save
            </Button>
          )}
        </div>
      ) : (
        <div
          style={{
            border: "1px solid black",
            width: "400px",
            height: "160px",
            marginLeft: "20px",
            padding: "5px",
          }}
        >
          <Flex>
            <Box margin={"5px"}>
              <Avatar name={accountdata.name} />
            </Box>
            <Box p={2}>
              <Text fontWeight={"bold"}>{accountdata.name}</Text>
              <Text>{accountdata.email}</Text>
              <Text>{accountdata.phone}</Text>
              <Text>{accountdata.password}</Text>
              <Button
                onClick={() => {
                  setEdit(true);
                }}
              >
                Edit
              </Button>
            </Box>
          </Flex>
        </div>
      )}
    </>
  );
};

export default PersonelInfo;
