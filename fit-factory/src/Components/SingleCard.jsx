import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import SlideShow from '../Slideshow/SlideShow';
  import { GetCartData,PostdataIncart } from '../Redux/CartRedux/action';
  export default function SingleCard({item}) {
let dispatch=useDispatch()
let cartdata=useSelector((store)=>store?.CartReducer?.cart)

    function handlePostdataIncart(data) {
      
      if (cartdata.length && cartdata.length >= 1) {
        let notThere = true;
        for (let i = 0; i < cartdata.length; i++) {
          if (cartdata[i].image == data.image) {
            notThere = false;
            break;
          }
        }
  
        if (notThere) {
          let arr=[...cartdata,data]
          dispatch(PostdataIncart(arr)).then((re)=>{
            dispatch(GetCartData)
          });
        }
      }
      if (cartdata.length == 0) {
        let arr=[data]
      
        dispatch(PostdataIncart(arr)).then((re)=>{
          dispatch(GetCartData)
        });
      }
    }
    return (

      <>
       <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
               item.image
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={400}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
               {item.title.substring(0, 18)}...
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'xl'}>
             MRP <del>  ₹ {item.oldprice}</del>
              </Text>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                // fontWeight={300}
                 fontWeight={"bold"}
                fontSize={'2xl'}>
              Price  ₹ {item.newprice}<span>   <Text
                color={useColorModeValue('teal.400', 'gray.400')}
                // fontWeight={300}
                  fontWeight={"bold"}
                fontSize={'md'}>
         {(((item.oldprice - item.newprice) * 100) / item.oldprice).toFixed(
              
            ) || "40"}
            % OFF
              </Text></span>
              </Text>
              
              {/* <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
         {(((item.oldprice - item.newprice) * 100) / item.oldprice).toFixed(
              
            ) || "40"}
            % OFF
              </Text> */}
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                 MuscleBlaze Super Gainer XXL is enriched with 27 vital vitamins and minerals that help in boosting the immunity and regulating enzymes in your body
                </Text>
                <Text fontSize={'lg'}>
                Available in scrumptious chocolate flavor, MuscleBlaze Super Gainer XXL is free from any added sugars and trans fats
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                 About Product
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Best Quality</ListItem>
                    <ListItem>Easy to take</ListItem>{' '}
                    <ListItem>No SideEffect</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Anti‑oxident</ListItem>
                    <ListItem>Good for health</ListItem>
                    <ListItem>100% Original </ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                     Weight:
                    </Text>{' '}
                   500 ml
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Manufactured Year :
                    </Text>{' '}
                  09/2022
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                     Expiry:
                    </Text>{' '}
                   09/2025
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Made in :
                    </Text>{' '}
                   India
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                     Flavour:
                    </Text>{' '}
                  Vainlla
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                     Manufacture By:
                    </Text>{' '}
                    Sapiens Labs, Village Dhana Bagbania, P.O. Manpura,Tehsil Nalagarh , Solan
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                     Contact us For Info :
                    </Text>{' '}
                  sachin.kesarwani6903@gmail.com
                  </ListItem>
                </List>
              </Box>
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              onClick={()=>handlePostdataIncart(item)}
              bg={useColorModeValue('orange.500', 'orange.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
            <Box>
              <Flex borderRadius={"8px"} border={"1px solid gray"}>
                <Box py={10} >
                <img  width={"120%"} src='https://s3-ap-southeast-1.amazonaws.com/hkprod/payment_img/wallet/airtel-payment-bank.png' />
                </Box>
             
              <Text>
              Flat Rs.200 Cashback On Min. Order Of Rs.2000 For First Time Users Of Airtel Payments Bank On HealthKart. Offer Valid Till 28th February 2023  
              </Text>
              </Flex>
           
            </Box>
            <Box>
              <Flex borderRadius={"8px"} border={"1px solid gray"}>
                <Box py={10} >
                <img  width={"200px"} src='https://s3-ap-southeast-1.amazonaws.com/hkprod/1179/mobikwiknew.png' />
                </Box>
             
              <Text>
              Get upto Rs.600 MobiKwik Cashback between max. Rs. 600 and min. Rs. 50 on payment made via Mobikwik wallet. Valid On Min. Order Of Rs.1200  
              </Text>
              </Flex>
           
            </Box>
          </Stack>
        
        </SimpleGrid>
      </Container>
     
      </>
     
    );
  }