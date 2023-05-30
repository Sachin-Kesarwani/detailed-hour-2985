
import {Box, Input,Button} from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
export function SearchforProductFormobile(){
    const [searchQuery, setSearchQuery] = useState("");
return (
    <>

    {/* <Input mx={2} placeholder="Search Product"  variant='flushed'  /> */}
     <Box h={'80vh'}>
     <Input
                placeholder="Search for products & brands"
                value={searchQuery}
                w="400px"
                display={{
                    base:"block",
    sm: 'block', // 480px
    md: 'none', // 768px
    lg: 'none', // 992px
    xl: 'none', // 1280px
    '2xl': 'none', // 1536px
  }}
                border="2px solid teal"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Link to={`/searchpage/${searchQuery}`}>
                {" "}
                <Button display={ {
                    base:"block",
    sm: 'block', // 480px
    md: 'none', // 768px
    lg: 'none', // 992px
    xl: 'none', // 1280px
    '2xl': 'none', // 1536px
  }} colorScheme={"teal"} onClick={() => setSearchQuery("")}>
                  Search
                </Button>
              </Link>
     </Box>
    
    </>
);
}