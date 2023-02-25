import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUsers } from "../../Redux/AdminRedux/action";

const Users = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.AdminReducer.users);

  useEffect(() => {
    dispatch(GetUsers);
  }, [dispatch]);
  return (
    <div style={{ textAlign: "center" }}>
      <TableContainer width={"70%"} margin={"20px 0px 0px 350px"}>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>User ID</Th>
              <Th>user Name</Th>
              <Th>user email</Th>
              <Th>user password</Th>
              <Th isNumeric>phnoe number</Th>
              <Th isNumeric>cart items</Th>
              <Th isNumeric>wishlist items</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* <Tr>
              <Td>1</Td>
              <Td>Malikrehan</Td>
              <Td>
                malik@gmail.com
              </Td>
              <Td>
                12345678
              </Td>
              <Td isNumeric>9911991199</Td>
              <Td isNumeric>4</Td>
              <Td isNumeric>5</Td>
            </Tr> */}
            {data.length > 0 &&
              data.map((i) => {
                return (
                  <Tr key={i.id}>
                    <Td>{i.id}</Td>
                    <Td>{i.name}</Td>
                    <Td>{i.email}</Td>
                    <Td>{i.password}</Td>
                    <Td isNumeric>{i.phone}</Td>
                    <Td isNumeric>{i.cart.length||"-"}</Td>
                    <Td isNumeric>{i.wishlist.length||"-"}</Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Users;
