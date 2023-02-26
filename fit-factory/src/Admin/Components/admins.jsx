import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAdmins } from "../../Redux/AdminRedux/action";

const Admins = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.AdminReducer.admins);


  useEffect(() => {
    dispatch(GetAdmins);
  }, [dispatch]);


  return (
    <div style={{width:"80%" ,margin:"50px 0px 0px 290px",textAlign:"center"}}>
      <Text fontSize={"4xl"} fontFamily={"sans-serif"} fontWeight={'bold'}>Admin's</Text>
      <TableContainer >
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Admin ID</Th>
              <Th>Name</Th>
              <Th>username</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.length > 0 &&
              data.map((i) => {
                return (
                  <Tr key={i.id}>
                    <Td>{i.id}</Td>
                    <Td>{i.name}</Td>
                    <Td>{i.username}</Td>
                 
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Admins
