import {
  Badge,
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  Select,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const SearchPage = () => {
  const query = useParams();
  const finalQuery = query.query;
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState("asc");
  const [sort, setSort] = useState("Price");

  const fetchData = (finalQuery, page, order, sort) => {
    return axios.get(
      `https://helpful-free-baroness.glitch.me/Search?_limit=12&_page=${page}&_sort=${sort}&_order=${order}`,
      {
        params: {
          q: finalQuery,
        },
      }
    );
  };

  useEffect(() => {
    fetchData(finalQuery, page, order, sort)
      .then((res) => {
        console.log("SearchData: ", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, [finalQuery, page, order, sort]);

  const sortChange = () => {
    const changeValue = document.getElementById("sortBy").value;
    if (changeValue === "Lowest_Price") {
      setOrder("asc");
    } else if (changeValue === "Highest_Price") {
      setOrder("desc");
    }
  };

  if (data.length === 0) {
    return (
      <Box bg="#f6f5f4" p="20px">
        <Text fontWeight="bold" textAlign="center" margin="20px 7px 7px 7px">
          No results for {finalQuery}
        </Text>
        <Text textAlign="center">Try to search something different</Text>
        <Image
          src="https://media.tenor.com/swTDQJ85dDEAAAAC/aaaa.gif"
          alt="gif"
          display="block"
          margin="15px auto"
          height={{ base: "200px", md: "350px" }}
          width={{ base: "70%", md: "50%" }}
        />
      </Box>
    );
  } else {
    return (
      <div style={{ alignContent: "center" }}>
        {/* ------- Sort By Price ------- */}
        <Select
          m="7px"
          ml="30px"
          w="175px"
          bg="cyan"
          color="black"
          fontWeight="bold"
          name="SortBy"
          id="sortBy"
          onChange={sortChange}
        >
          <option value="sortby">SORT BY Price</option>
          <option value="Lowest_Price" id="lowestPrice">
            Low to High
          </option>
          <option value="Highest_Price" id="highestPrice">
            High to Low
          </option>
        </Select>

        {/* Products */}
        <Grid
          templateColumns={{base:"repeat(1,1fr)", sm: "repeat(1,1fr)", md: "repeat(2,1fr)" ,lg:"repeat(3,1fr)",xl:"repeat(3,1fr)","2xl":"repeat(4,1fr)"}}
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

                    <Link to={`/singlePage/search/${el.id}`}>
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
      </div>
    );
  }
};

export default SearchPage;
