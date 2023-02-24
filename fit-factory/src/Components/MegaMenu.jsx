import {
  Box,
  Grid,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import { BiCategory, BiCodeAlt } from "react-icons/bi";
import { MdSell } from "react-icons/md";
import { TbBrandSvelte } from "react-icons/tb";
import { FaBlog } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

const MegaMenu = () => {
  return (
    <Box w={{ base: "100%", lg: "100%" }} p="5px 2%" margin="auto">
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
        gap="38px"
      >
        {/* First Menu - Shop By Category */}
        <Menu>
          <MenuButton>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="130px"
            >
              <BiCategory
                style={{
                  height: "20px",
                  width: "20px",
                }}
              />
              <Text
                fontSize={{ base: "12px", sm: "14px", md: "16px" }}
                margin="0px 7px"
              >
                Category
              </Text>
            </Box>
          </MenuButton>
          <MenuList>
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(5, 1fr)",
                xl: "repeat(6, 1fr)",
              }}
              p={{
                base: "0px",
                lg: "0px 15px 0px 17px",
                xl: "0px 30px 0px 35px",
              }}
            >
              <Link to="/proteins">
                <Box>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontWeight="700"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Proteins
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Whey Proteins
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Beginners Whey Protein
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Whey Protein Isolate
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Raw Whey Proteins
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Plant Proteins
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Protein for Women
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Protein Blends
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Casein Proteins
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Soy Proteins
                  </MenuItem>
                </Box>
              </Link>

              <Link to="/gainers">
                <Box>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontWeight="700"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Gainers
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Weight Gainers
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Mass Gainers
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Herbal Weight Gainers
                  </MenuItem>
                </Box>
              </Link>

              <Link to="/proteinsfoods">
                <Box display={{ base: "none", md: "grid" }}>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontWeight="700"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Protein Foods
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Peanut Butter
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Muesli
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Protein Shakes
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Oats
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Cereals
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Granola
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Protein Bars
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Protein Water
                  </MenuItem>
                </Box>
              </Link>

              <Link to="/prepostworkout">
                <Box display={{ base: "none", md: "grid" }}>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontWeight="700"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Pre/Post Workout
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Pre-Workout
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Creatine
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Beta Alanine
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    BCAAs
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Carb Blends
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Electrolytes
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    EAA
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Netric Oxide
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Other Supports
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Citrulline Malate
                  </MenuItem>
                </Box>
              </Link>

              <Link to="/workoutessentials">
                <Box display={{ base: "none", md: "grid" }}>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontWeight="700"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Workout Essentials
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Fat Burners
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Consult Services
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    L Carnitine
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Multivitamins for
                    <br />
                    Bodybuilding
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Pre Hormone
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    ZMA
                  </MenuItem>
                </Box>
              </Link>
            </Grid>
          </MenuList>
        </Menu>

        {/* Second Menu - Best Sellers */}
        <Menu>
          <MenuButton>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="130px"
            >
              <MdSell
                style={{
                  height: "20px",
                  width: "20px",
                }}
              />
              <Text
                fontSize={{ base: "12px", sm: "14px", md: "16px" }}
                margin="0px 7px"
              >
                Best Sellers
              </Text>
            </Box>
          </MenuButton>
          <MenuList>
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(5, 1fr)",
                xl: "repeat(6, 1fr)",
              }}
              p={{
                base: "0px",
                lg: "0px 15px 0px 17px",
                xl: "0px 30px 0px 35px",
              }}
            >
              <Link to="/gainers">
                <Box>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontWeight="700"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Sport Nutrition
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Protein Powder
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Whey Protein
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Whey Protein Isolate
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Mass Gainer
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    BCAA
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Fat Burners
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Pre Workout
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Creatine
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Protein Bars
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Weight Gainer
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Carb Blends
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Other Support
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Casein Protein
                  </MenuItem>
                </Box>
              </Link>

              <Link to="/multivitamins">
                <Box>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontWeight="700"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Health Nutrition
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Maltivitamins
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Omega 3
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Ayurveda & Herbs
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Fish Oil
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Biotin
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Apple Cider Vinegar
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Protein Shakes
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Meal Replacement
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Kids Protein
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Peanut Butter
                  </MenuItem>
                </Box>
              </Link>

              <Link to="/fitness">
                <Box display={{ base: "none", md: "grid" }}>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontWeight="700"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Fitness
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Dumbbells
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Gym Shakers
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Resistance Bands
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Yoga Mats
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Wrist Support
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Fitness Trackers
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Hand Grips
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Home Gym
                  </MenuItem>
                </Box>
              </Link>

              <Link to="/wellness">
                <Box display={{ base: "none", md: "grid" }}>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontWeight="700"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Wellness
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Serum
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Hair Oil
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Men Grooming
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Hair Serum
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Toner
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Cleansers
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Speciality Shampoo
                  </MenuItem>
                </Box>
              </Link>
            </Grid>
          </MenuList>
        </Menu>

        {/* Third Menu - Brands */}
        <Menu>
          <MenuButton>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="130px"
            >
              <TbBrandSvelte
                style={{
                  height: "20px",
                  width: "20px",
                }}
              />
              <Text
                fontSize={{ base: "12px", sm: "14px", md: "16px" }}
                margin="0px 7px"
              >
                Brands
              </Text>
            </Box>
          </MenuButton>
          <MenuList>
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(5, 1fr)",
                xl: "repeat(6, 1fr)",
              }}
              p={{
                base: "0px",
                lg: "0px 15px 0px 17px",
                xl: "0px 30px 0px 35px",
              }}
            >
              <Link to="proteins">
                <Box display={{ base: "none", md: "grid" }}>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontWeight="700"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Sports Nutrition
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Muscleblaze
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    MB Fuel One
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    bGREEN
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Optimum Nutrition
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Ultimate Nutrition
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    MuscleTech
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    MyProtein
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    MusclePharm
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Dymatize
                  </MenuItem>
                </Box>
              </Link>

              <Link to="/multivitamins">
                <Box display={{ base: "none", md: "grid" }}>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontWeight="700"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Vitamins & Supplements
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    HealthKart HK Vitals
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    TrueBasics
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    GNC
                  </MenuItem>
                </Box>
              </Link>

              <Link to="/proteinsfoods">
                <Box display={{ base: "none", md: "grid" }}>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontWeight="700"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Wow Life Science
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    NOW
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Healthvit
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    INLIFE
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Natures Velvet
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    NutraFirst
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Boldfit
                  </MenuItem>
                </Box>
              </Link>

              <Link to="/fitness">
                <Box display={{ base: "none", md: "grid" }}>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontWeight="700"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Health Food And Drinks
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Myfitness
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    MuscleBlaze
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    HealthKart HK Vitals
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Bagrrys
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Carb Blends
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    True Elements
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Yoga Bar
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Alpino
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    RiteBite
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Amway
                  </MenuItem>
                </Box>
              </Link>

              <Link to="/workoutessentials">
                <Box display={{ base: "none", md: "grid" }}>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontWeight="700"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Fitness
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Boldfit
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Strauss
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Zebronics
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Noise
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    beatXP
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    John Ally
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    MuscleXP
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Omtex
                  </MenuItem>
                </Box>
              </Link>

              <Link to="/wellness">
                <Box display={{ base: "none", md: "grid" }}>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontWeight="700"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Wellness
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Ustraa
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    NutraFirst
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Bold Care
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Amway
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Kozicare
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Himalayan Organics
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Organic Harvest
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Man Arden
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    INLIFE
                  </MenuItem>
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Hi9
                  </MenuItem>
                </Box>
              </Link>
            </Grid>
          </MenuList>
        </Menu>

        {/* Fourth Menu - Deals */}
        <Menu>
          <MenuButton>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="130px"
            >
              <BiCodeAlt
                style={{
                  height: "20px",
                  width: "20px",
                }}
              />
              <Text
                fontSize={{ base: "12px", sm: "14px", md: "16px" }}
                margin="0px 7px"
              >
                Deals
              </Text>
            </Box>
          </MenuButton>
        </Menu>

        {/* Fifth Menu - Blogs */}
        <Menu>
          <MenuButton>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="130px"
            >
              <FaBlog
                style={{
                  height: "16px",
                  width: "16px",
                }}
              />
              <Text
                fontSize={{ base: "12px", sm: "14px", md: "16px" }}
                margin="0px 7px"
              >
                Blogs
              </Text>
            </Box>
          </MenuButton>
        </Menu>

        {/* Sixth Menu - Customer Care */}
        <Menu>
          <MenuButton>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="130px"
            >
              <RiCustomerService2Fill
                style={{
                  height: "20px",
                  width: "20px",
                }}
              />
              <Text
                fontSize={{ base: "12px", sm: "14px", md: "16px" }}
                margin="0px 7px"
              >
                Help Care
              </Text>
            </Box>
          </MenuButton>
        </Menu>
      </Grid>
    </Box>
  );
};

export default MegaMenu;
