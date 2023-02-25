import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../../Redux/AdminRedux/action";

let cat1=JSON.stringify([
  {value:"Proteins",endpoint:"Proteins"},
  {value:"Gainers",endpoint:"Gainers"},
  {value:"Protein Foods",endpoint:"Protein-Foods"},
  {value:"Pre/Post Workout",endpoint:"Pre-Post-Workout"},
  {value:"Workout Essentials",endpoint:"Workout-Essentials"}
])
let cat2=JSON.stringify([
  {value:"Omega Fatty Acids",endpoint:"Omega-Fatty-Acids"},
  {value:"Multivitamins",endpoint:"Multivitamins"},
  {value:"Speciality Supplements",endpoint:"Speciality-Supplements"},
  {value:"Vitamins",endpoint:"Vitamins"},
  {value:"Minerals",endpoint:"Minerals "}
])
let cat3=JSON.stringify([
  {value:"Herbs For Weight Loss",endpoint:"Herbs-For-Weight-Loss"},
  {value:"Vital Herbs",endpoint:"Vital-Herbs"},
  {value:"Antioxidents",endpoint:"Antioxidants"},
  {value:"Herbs For Immunity",endpoint:"Herbs-For-Immunity"},
  {value:"Herbs For Personal Care",endpoint:"Herbs-Personal-Care"},
  {value:"Herbal Extracts",endpoint:"Herbal-Extracts"},
  {value:"Herbs For Digestive Care",endpoint:"Herbs-For-Digestive-Care"},
  {value:"Herbs For Hair Care",endpoint:"Herbs-For-Hair_Care"},
  {value:"Herbal Oils",endpoint:"Herbal-Oils"},
  {value:"Herbs For Diabetic Care",endpoint:"Herbs-For-Diabetic-Care"}
])
let cat4=JSON.stringify([
  {value:"Weight Loss Foods",endpoint:"Weight-Loss-Foods"},
  {value:"Vinergar And Health Juices",endpoint:"Vinegar-And-Health_Juices"},
  {value:"Protein Foods & Bars",endpoint:"Protein-Foods-&-Bars"},
  {value:"Family Nutrition",endpoint:"Family-Nutrition"},
  {value:"Healthy Beverages",endpoint:"Healthy-Beverages"}
])
let cat5=JSON.stringify([
  {value:"Gym Accessories",endpoint:"Gym-Acessories"},
  {value:"Fitness Trackers",endpoint:"Fitness-Trackers"},
  {value:"Gym Essentials",endpoint:"Gym-Essentials"},
  {value:"Fitness Clothing",endpoint:"Fitness-Clothing"},
  {value:"Gym Equipment",endpoint:"Gym-Equipments"},
  {value:"Gym Supports",endpoint:"Gym-Supports"}
])
let cat6=JSON.stringify([
  {value:"Skin Care",endpoint:"Skin-Care"},
  {value:"Hair Care",endpoint:"Hair-Care"},
  {value:"Personal Care",endpoint:"Personal-Care"},
  {value:"Herbs For Skin Care",endpoint:"Herbs-For-Skin-Care"},
  {value:"Herbs For Hair Growth",endpoint:"Herbs-For-Hair-Growth"}
])


const Products = () => {
  const dispatch=useDispatch()
  const data=useSelector((store) => store.AdminReducer.products)
  const [category,setCategory]=useState([])
  const [endpoint,setEndpoint]=useState("Proteins")
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  useEffect(()=>{  
    dispatch(GetProducts(endpoint))
  },[dispatch,endpoint])
  
  return (
    <div style={{ marginTop: "30px" }}>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex
        width={"65%"}
        margin={"20px 0px 0px 300px"}
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <HStack>
          <Box bg="#ffffff" borderWidth="1px" borderColor="#cccccc" p={3} borderRadius={"6px"}>
            <Text fontWeight="500">Category:</Text>
            <Select onChange={(e) => setCategory(JSON.parse(e.target.value))}>
              <option value={cat1}>Sports Nutrition</option>
              <option value={cat2}>Vitamins & Supplements</option>
              <option value={cat3}>Ayurveda & Herbs</option>
              <option value={cat4}>Health Food & Drinks</option>
              <option selected>
                Select here
              </option>
              <option value={cat5}>Fitness</option>
              <option value={cat6}>Wellness</option>
            </Select>
          </Box>
          <Box
            bg="#ffffff"
            borderWidth="1px"
            borderColor="#cccccc"
            bottom="30%"
            p={3}
            borderRadius={"6px"}
          >
            <Text fontWeight="500">Sub Category:</Text>
            <Select onChange={(e) => setEndpoint(e.target.value)}>
            <option selected>
                Select here
              </option>
              {category.map((i)=>{
                return (
                <option value={i.endpoint}>{i.value}</option>
                )
              })}
      
            </Select>
          </Box>
        </HStack>
        <Button leftIcon={<AddIcon />} colorScheme="teal" variant="outline">
          Add Product
        </Button>
      </Flex>
      <TableContainer width={"80%"} margin={"20px 0px 0px 260px"}>
        <Table variant="striped" colorScheme="teal" >
          <Thead >
            <Tr>
              <Th>Product ID</Th>
              <Th>Product Name</Th>
              <Th>Rating</Th>
              <Th isNumeric>Discounted Price</Th>
              <Th isNumeric>Original Price</Th>
              <Th isNumeric>Discount</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody >
            {data.length>0 && data.map((i)=>{
              return (
                <Tr key={i.id}>
                <Td isNumeric>{i.id}</Td>
                <Td>{i.Title||i.Name}</Td>
                <Td isNumeric>{i.Rating||"-"}</Td>
                <Td isNumeric>{i.PriceAfterDiscount||i.Price}</Td>
                <Td isNumeric>{i.PriceBeforeDiscount||i.Price2}</Td>
                <Td isNumeric>{i.Discount||"-"}</Td>
                <Td>
                <Button onClick={()=>onOpen} colorScheme='teal'>
                  <EditIcon onClick={()=>console.log(i)} />
                </Button>
                </Td>
                <Td>
                  <Button colorScheme='teal' onClick={()=>console.log(i.id)}>

                  <DeleteIcon />
                  </Button>
                </Td>
              </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Products;
