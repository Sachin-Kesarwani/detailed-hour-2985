import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Addproduct, EditProduct } from "../../Redux/AdminRedux/action";

let cat1 = JSON.stringify([
  { value: "Proteins", endpoint: "Proteins" },
  { value: "Gainers", endpoint: "Gainers" },
  { value: "Protein Foods", endpoint: "Protein-Foods" },
  { value: "Pre/Post Workout", endpoint: "Pre-Post-Workout" },
  { value: "Workout Essentials", endpoint: "Workout-Essentials" },
]);
let cat2 = JSON.stringify([
  { value: "Omega Fatty Acids", endpoint: "Omega-Fatty-Acids" },
  { value: "Multivitamins", endpoint: "Multivitamins" },
  { value: "Speciality Supplements", endpoint: "Speciality-Supplements" },
  { value: "Vitamins", endpoint: "Vitamins" },
  { value: "Minerals", endpoint: "Minerals " },
]);
let cat3 = JSON.stringify([
  { value: "Herbs For Weight Loss", endpoint: "Herbs-For-Weight-Loss" },
  { value: "Vital Herbs", endpoint: "Vital-Herbs" },
  { value: "Antioxidents", endpoint: "Antioxidants" },
  { value: "Herbs For Immunity", endpoint: "Herbs-For-Immunity" },
  { value: "Herbs For Personal Care", endpoint: "Herbs-Personal-Care" },
  { value: "Herbal Extracts", endpoint: "Herbal-Extracts" },
  { value: "Herbs For Digestive Care", endpoint: "Herbs-For-Digestive-Care" },
  { value: "Herbs For Hair Care", endpoint: "Herbs-For-Hair_Care" },
  { value: "Herbal Oils", endpoint: "Herbal-Oils" },
  { value: "Herbs For Diabetic Care", endpoint: "Herbs-For-Diabetic-Care" },
]);
let cat4 = JSON.stringify([
  { value: "Weight Loss Foods", endpoint: "Weight-Loss-Foods" },
  {
    value: "Vinergar And Health Juices",
    endpoint: "Vinegar-And-Health_Juices",
  },
  { value: "Protein Foods & Bars", endpoint: "Protein-Foods-&-Bars" },
  { value: "Family Nutrition", endpoint: "Family-Nutrition" },
  { value: "Healthy Beverages", endpoint: "Healthy-Beverages" },
]);
let cat5 = JSON.stringify([
  { value: "Gym Accessories", endpoint: "Gym-Acessories" },
  { value: "Fitness Trackers", endpoint: "Fitness-Trackers" },
  { value: "Gym Essentials", endpoint: "Gym-Essentials" },
  { value: "Fitness Clothing", endpoint: "Fitness-Clothing" },
  { value: "Gym Equipment", endpoint: "Gym-Equipments" },
  { value: "Gym Supports", endpoint: "Gym-Supports" },
]);
let cat6 = JSON.stringify([
  { value: "Skin Care", endpoint: "Skin-Care" },
  { value: "Hair Care", endpoint: "Hair-Care" },
  { value: "Personal Care", endpoint: "Personal-Care" },
  { value: "Herbs For Skin Care", endpoint: "Herbs-For-Skin-Care" },
  { value: "Herbs For Hair Growth", endpoint: "Herbs-For-Hair-Growth" },
]);
const AddProduct = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  const [endpoint, setEndpoint] = useState("Proteins");

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [rating, setRating] = useState("");

  function addProduct() {
    let obj = {
      Title: title,
      Image:image,
      Rating: rating,
      Price: discountedPrice,
      Price2: price,
      Discount: discount,
    };
    dispatch(Addproduct(endpoint, obj));
  }
  return (
    <div style={{ textAlign: "center" }}>
      <Flex
        width={"65%"}
        margin={"20px 0px 0px 300px"}
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <HStack>
          <Box
            bg="#ffffff"
            borderWidth="1px"
            borderColor="#cccccc"
            p={3}
            borderRadius={"6px"}
          >
            <Text fontWeight="500">Category:</Text>
            <Select onChange={(e) => setCategory(JSON.parse(e.target.value))}>
              <option value={cat1} selected>
                Sports Nutrition
              </option>
              <option value={cat2}>Vitamins & Supplements</option>
              <option value={cat3}>Ayurveda & Herbs</option>
              <option value={cat4}>Health Food & Drinks</option>
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
              <option selected>Select here</option>
              {category.map((i) => {
                return <option value={i.endpoint}>{i.value}</option>;
              })}
            </Select>
          </Box>
        </HStack>
      </Flex>
      <Box w={"35%"} margin={"50px 0px 0px 300px"}>
        <FormControl mt={4}>
          <FormLabel>Title</FormLabel>
          <Input
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Product name"
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Image URL</FormLabel>
          <Input
            onChange={(e) => setImage(e.target.value)}
            placeholder="Product image"
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Rating</FormLabel>
          <Input
            type="number"
            onChange={(e) => setRating(e.target.value)}
            placeholder="Product rating"
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Price</FormLabel>
          <Input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Discounted Price</FormLabel>
          <Input
            type="number"
            onChange={(e) => setDiscountedPrice(e.target.value)}
            placeholder="Discounted price"
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Discount</FormLabel>
          <Input
            placeholder="Discount"
            onChange={(e) => setDiscount(e.target.value)}
          />
        </FormControl>
        <Button
          leftIcon={<AddIcon />}
          colorScheme="teal"
          variant="outline"
          marginTop={"30px"}
          onClick={() => {
            addProduct();
          }}
        >
          Add Product
        </Button>
      </Box>
    </div>
  );
};

export default AddProduct;
