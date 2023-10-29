'use client'

import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const textStyles = {
  py: [10, 4],
  color: "#042f1a",
  fontSize: "1rem",
};

function StickyLayerTwo() {
  return (
    <Container m="0" p="0" maxW="100%" h="100vh" position="relative">
      <Flex
        w="100%"
        h='100vh'
        py='5rem'
        bg="#fff6f6"
        pos="relative"
        alignItems="center"
        justifyContent="center"
        gap={{ base:'3', md:'5' }}
        px={{ base: "3rem", sm: "5rem", md: "6rem" }}
        flexDirection={{ base: "column", md: "row-reverse" }}
      >
        <Box
          top="0"
          pos="absolute"
          display={{ base:'none', md:'flex' }}
          pt={{  base: "12rem", sm: "6rem", md: "5rem" }}
          pl={{  base: "2rem", sm: "1rem", md: "30rem" }}
        >
          <Image alt="" src="/twistline3.png" width={100} height={200} />
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
          >INSPIRING GOOD <br/>THROUGH TASTY<br/> GOODNESS</Heading>
          <Text
            display={["none", "none", "flex", "flex"]}
            {...textStyles}
            maxW="25rem"
          >
            We’re here to inspire discovery and tempt everyone to eat more plants. Because we care about the future – yours, ours and the planet’s.
          </Text>
        </Flex>

        <Flex maxW="25rem" flex="1" justifyContent="center" alignItems="center">
          <Image alt="" src="/aboutIcon2.svg" width={400} height={100} />
        </Flex>

        <Text display={["flex", "flex", "none", "none"]} {...textStyles} maxW="25rem">
            We’re here to inspire discovery and tempt everyone to eat more plants. Because we care about the future – yours, ours and the planet’s.
        </Text>
      </Flex>
    </Container>
  );
}

export default StickyLayerTwo;
// 'use client'

// import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react"

// function StickyLayerTwo() {

//     return (
//         <Box pos="relative" py={10} px={{ base:`${5}`, md:`${20}` }} bg="#fff6f6" w="100vw" h="100vh">
//             <Box 
//                 top="0"
//                 w="7em" 
//                 h="7em"
//                 pos="absolute"
//                 mt={{ base:'5vh', md:"2em"  }}
//                 ml={{ base:'25vw', md:"55em"  }}
//             >
//                 <Image alt="" src="/twistline3.png" boxSize="full" /></Box>
                
//             <Grid templateColumns={{ md: 'repeat(2, 1fr)' }} gap={6} py={35} alignItems={'center'} textAlign={'center'}>
//                 <GridItem maxW="35em" w='100%' h={400}>
//                     <Image 
//                         alt=""
//                         boxSize="full"
//                         src="/aboutIcon2.svg"
//                     />
//                 </GridItem>
//                 <GridItem w="100%" maxW="35em" h={300} textAlign="start">
//                     <Heading 
//                         color="#042f1a"
//                         textTransform="uppercase"
//                         fontFamily="heading"
//                         fontSize="2.5em"
//                         fontWeight="1000"
//                         lineHeight=".80em"
//                         py={5}
//                     >INSPIRING GOOD <br/>THROUGH TASTY<br/> GOODNESS</Heading>
//                     <Text color="#042f1a" maxW="25em" fontSize="1.3em">
//                         We’re here to inspire discovery and tempt everyone to eat more plants. Because we care about the future – yours, ours and the planet’s.
//                     </Text>
//                 </GridItem>
//             </Grid>
//         </Box>
//     )
// }

// export default StickyLayerTwo