import React, { useEffect } from 'react';
import { Box, IconButton, useBreakpointValue,Text } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

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

export default function Carousel2() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://img9.hkrtcdn.com/24444/bnr_2444308_o.jpg',
    'https://img1.hkrtcdn.com/24444/bnr_2444300_o.jpg',

   
  ];

  return (

    <>

     <Box
      position={'relative'}
    //   height={'350px'}
      id="carousel_2"
      width={"full"}
      overflow={'hidden'}>
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
        transform={'translate(70%, -30%)'}
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
        transform={'translate(-70%, -30%)'}
        bg={"gray.500"}
        _hover={{bg:"white",color:"black"}}
        zIndex={5}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton> */}
      {/* Slider */}
      <Slider  {...settings} ref={(slider) => setSlider(slider)} >
        {cards.map((url, index) => (
          <Box
            key={index}
            // height={"sm"}
            height={"28vw"}
            position="relative"
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

// {...settings} ref={(slider) => setSlider(slider)}