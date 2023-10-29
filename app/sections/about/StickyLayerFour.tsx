'use client'

import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const textStyles = {
  py: [10, 4],
  color: "#fff6f6",
  fontSize: "0.88rem",
};

function StickyLayerFour() {
  return (
    <Container py='5rem' m="0" p="0" maxW="100%" h="100vh" position="relative">
      <Flex
        w="100%"
        h='100vh'
        bg="#042f1a"
        pos="relative"
        alignItems="center"
        justifyContent="center"
        gap={{ base:'2', md:'5' }}
        px={{ base: "3rem", sm: "5rem", md: "6rem" }}
        flexDirection={{ base: "column", md: "row-reverse" }}
      >
        <Box
          bottom="0"
          pos="absolute"
        //   display={{ base:'none', md:'flex' }}
          pb={{  base: "25rem", sm: "6rem", md: "2rem" }}
          pl={{  base: "2rem", sm: "1rem", md: "30rem" }}
        >
          <Image alt="" src="/twistline1.png" width={150} height={200} />
        </Box>

        <Flex
          maxW={{ base: "100%", md: "35em" }}
          flex="1"
          flexDirection="column"
          justifyContent="center"
          alignItems={{ base: "center", md: "start" }}
        >
          <Heading
            color="#fff6f6"
            textTransform="uppercase"
            fontSize={{ base:'1.9rem', md: '2.5rem' }}
            fontWeight="1000"
            letterSpacing="0.2rem"
            lineHeight=".90em"
            py={5}
            textAlign={{ base:'center', md:'start' }}
          >FLAVOURSOME FOOD FOR <br/>EVERYONE</Heading>
          <Text
            display={["none", "none", "flex", "flex"]}
            {...textStyles}
            maxW="25rem"
            textAlign={{ base:'center', md:'start' }}
          >
           Our curious creations are made for vegans and meat-eaters alike. Because meat-free doesn’t mean flavour free.
          </Text>
        </Flex>

        <Flex maxW="25rem" flex="1" justifyContent="center" alignItems="center">
          <Image alt="" src="/aboutIcon4.svg" width={500} height={150} />
        </Flex>

        <Text textAlign={{ base:'center', md:'start' }} display={["flex", "flex", "none", "none"]} {...textStyles} maxW="25rem">
           Our curious creations are made for vegans and meat-eaters alike. Because meat-free doesn’t mean flavour free.
        </Text>
      </Flex>
    </Container>
  );
}

export default StickyLayerFour;