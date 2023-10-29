'use client'

import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
// import Wavify from 'react-wavify';
// import styles from './style.module.css'

const textStyles = {
  py: [10, 4],
  color: "#042f1a",
  fontSize: "1rem",
};

function StickyLayerThree() {
  return (
    <Container py='10' m="0" p="0" maxW="100%" h="100vh" position="relative">
      <Flex
        w="100%"
        h='100%'
        bg="#d4ed6d"
        pos="relative"
        alignItems="center"
        justifyContent="center"
        gap={{ base:'3', md:'0' }}
        px={{ base: "3rem", sm: "5rem", md: "6rem" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box
          top="0"
          left='0'
          pos="absolute"
          pt={{  base: "12rem", sm: "6rem", md: "5rem" }}
          pl={{  base: "2rem", sm: "1rem", md: "15rem" }}
        >
          <Image alt="" src="/twistline4.png" width={150} height={200} />
        </Box>

        <Flex
          maxW={{ base: "100%", md: "35em" }}
          flex="1"
          flexDirection="column"
          justifyContent="center"
          alignItems={{ base: "center", md: "start" }}
        >
          <Heading
            color="#042f1a"
            textTransform="uppercase"
            fontSize={{ base:'1.9rem', md: '2.5rem' }}
            fontWeight="1000"
            letterSpacing="0.2rem"
            lineHeight=".90em"
            py={5}
            textAlign='start'
          >
            POWERED BY POSITIVITY
          </Heading>
          <Text
            display={["none", "none", "flex", "flex"]}
            {...textStyles}
            maxW="25rem"
          >
            We’re not crusading or going up against an industry. We’re for; for flavour, for fun, for what’s possible.
          </Text>
        </Flex>

        <Flex maxW="25rem" flex="1" justifyContent="center" alignItems="center">
          <Image alt="" src="/aboutIcon3.svg" width={500} height={200} />
        </Flex>

        <Text display={["flex", "flex", "none", "none"]} {...textStyles} maxW="25rem">
            We’re not crusading or going up against an industry. We’re for; for flavour, for fun, for what’s possible.
        </Text>
      </Flex>
    </Container>
  );
}

export default StickyLayerThree;
// 'use client'

// import { Box, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react"

// function StickyLayerThree() {
//     return (
//         <Box pos="relative" px={{ base:`${5}`, md:`${20}` }}  bg="#d4ed6d" w="100vw" h="100vh">
//             <Box 
//                 top="0" 
//                 h="6em"
//                 w="10em" 
//                 pos="absolute"
//                 mt={{ base:'5vh', md:"8em"  }}
//                 ml={{ base:'', md:"20em"  }}
//             >
//                 <Image alt="" src="/twistline4.png" boxSize="full" /></Box>
                
//             <Grid templateColumns={{ md: 'repeat(2, 1fr)' }} gap={6} py={40} alignItems={'center'} textAlign={'center'}>
//                 <GridItem w="100%" maxW="35em" h={300} textAlign="start">
//                     <Heading 
//                         color="#042f1a"
//                         textTransform="uppercase"
//                         fontFamily="heading"
//                         fontSize="2.5em"
//                         fontWeight="1000"
//                         lineHeight=".80em"
//                         py={5}
//                     >POWERED BY POSITIVITY</Heading>
//                     <Text color="#042f1a" maxW="20em" fontSize="1.3em">
//                         We’re not crusading or going up against an industry. We’re for; for flavour, for fun, for what’s possible.
//                     </Text>
//                 </GridItem>
//                 <GridItem maxW="35em" w="100%" h={{ base:'fit-content', md:`${450}`}}>
//                     <Image 
//                         alt=""
//                         boxSize="full"
//                         src="/aboutIcon3.svg"
//                     />
//                 </GridItem>
//             </Grid>
//         </Box>
//     )
// }

// export default StickyLayerThree