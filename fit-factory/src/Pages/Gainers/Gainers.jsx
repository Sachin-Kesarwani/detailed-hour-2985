import { Badge, Box, Button, Grid, GridItem, Image } from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Gainers = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = (page) => {
    return axios.get(
      `https://helpful-free-baroness.glitch.me/Gainers?_limit=12&_page=${page}`
    );
  };

  useEffect(() => {
    fetchData(page)
      .then((res) => {
        console.log("ProteinsData: ", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, [page]);

  return (
    <>
      {/* Proteins */}
      <Grid
        templateColumns={{ sm: "repeat(1,1fr)", md: "repeat(4,1fr)" }}
        gap="6"
        bg="#f6f5f4"
        textAlign="center"
        justifyContent="center"
        margin="10px"
      >
        {data.map((el) => {
          return (
            <GridItem margin={"20px"}>
              <Box
                padding="15px"
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image
                  style={{ width: "80%", height: "200px", margin: "12px" }}
                  src={el.Image}
                  alt={el.Title}
                />
                <Box>
                  <Box mt="5px" display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      New
                    </Badge>
                  </Box>
                  <Box
                    mt="5px"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    {el.Title}
                  </Box>
                  <Box fontWeight="bold" m="8px">
                    Price: ₹ {el.Price}
                    <Box as="span" color="gray.600" fontSize="sm">
                      / Piece
                    </Box>
                  </Box>

                  <Link to={`/singlePage/${"Gainers"}/${el.id}`}>
                    <Button
                      w="100%"
                      margin="auto"
                      color="white"
                      bgColor="#25766A"
                      _hover={{ backgroundColor: "#1B9A84", color: "white" }}
                    >
                      See more details ...
                    </Button>
                  </Link>
                </Box>
              </Box>
            </GridItem>
          );
        })}
      </Grid>

      {/* ----------- Pagination ------------ */}
      <Box alignItems="center" display="flex" justifyContent="center">
        <Button
          display="block"
          margin="3px"
          color="white"
          bgColor="#25766A"
          disabled={page === 1}
          onClick={() => {
            if (page > 1) setPage(page - 1);
          }}
        >
          Previous
        </Button>
        <Button
          display="block"
          margin="3px"
          color="white"
          bgColor="#25766A"
          disabled
        >
          {page}
        </Button>
        <Button
          display="block"
          margin="3px"
          color="white"
          bgColor="#25766A"
          disabled={page === 10}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </Box>
    </>
  );
};

export default Gainers;
