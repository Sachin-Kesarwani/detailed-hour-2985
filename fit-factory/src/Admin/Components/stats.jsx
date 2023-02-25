import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
import Admins from './admins';
  
  function StatsCard(props) {
    const { title, stat } = props;
    return (
      <Stat
        px={{ base: 2, md: 5 }}
        py={'8'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <StatLabel fontWeight={'medium'} fontSize={'xl'} isTruncated>
          {title}
        </StatLabel>
        <StatNumber fontSize={'3xl'} fontWeight={'medium'}>
          {stat}
        </StatNumber>
      </Stat>
    );
  }
  
  export default function Stats() {
    return (
      <>
      <Box maxW="2xl" m={'auto'}  px={{ base: 2, sm: 10, md: 3 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'3xl'}
          py={10}
          fontWeight={'bold'}>
          What is our company doing?
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={'Total'} stat={'2500 Products Available'} />
          <StatsCard title={'We serve'} stat={'50,000 Users'} />
          {/* <StatsCard title={'Who speak'} stat={'100 different languages'} />
          <StatsCard title={'Who speak'} stat={'100 different languages'} /> */}
        </SimpleGrid>
      </Box>
      <Admins/>
          </>
    );
  }