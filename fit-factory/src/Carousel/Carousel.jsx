import React, { useEffect } from "react";
import { Box, IconButton, useBreakpointValue, Text } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import "./style.css";
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [
    "https://img5.hkrtcdn.com/24235/bnr_2423404_o.jpg",
    "https://img3.hkrtcdn.com/24407/bnr_2440622_o.jpg",
    "https://img1.hkrtcdn.com/22873/bnr_2287230_o.png",
    "https://img3.hkrtcdn.com/24235/bnr_2423412_o.jpg",
    "https://img1.hkrtcdn.com/24375/bnr_2437460_o.jpg",
    "https://img9.hkrtcdn.com/24267/bnr_2426628_o.jpg",
    "https://img7.hkrtcdn.com/24375/bnr_2437456_o.jpg",
  ];

  return (
    <>
      <div
        style={{
          backgroundColor: " #cceeff",
         width:"100%",
         border:'1px solid black',
          paddingBottom: "10px",
        }}
      >
        <Text textAlign={"center"}>India's Largest D2C Nutrition Platform</Text>
      </div>
      <Box
        id="carousel_1"
        position={"relative"}
        // position={"sticky"}
        width={"100%"}
        overflow={"hidden"}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        {/* <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        fontSize={"30px"}
        h={"60px"}
        w={"60px"}
        transform={'translate(70%, -70%)'}
        _hover={{bg:"white",color:"black"}}
        bg={"gray.500"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton> */}
        {/* Right Icon */}
        {/* <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        fontSize={"30px"}
        h={"60px"}
        w={"60px"}
      
        transform={'translate(-70%, -70%)'}
        bg={"gray.500"}
        _hover={{bg:"white",color:"black"}}
        zIndex={5}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton> */}
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((url, index) => (
            <Box
              key={index}
              // height={"300px"}
              // height={"sm"}
              height={"28vw"}
              // position="relative"
              position={"sticky"}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${url})`}
            />
          ))}
        </Slider>
      </Box>
    </>
  );
}
