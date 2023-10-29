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
    <Container py='5rem' m="0" p="0" maxW="100%" h="100vh" position="relative">
      <Flex
        w="100%"
        h='100vh'
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
            textAlign={{ base:'center', md:'start' }}
          >INSPIRING GOOD <br/>THROUGH TASTY<br/> GOODNESS</Heading>
          <Text
            display={["none", "none", "flex", "flex"]}
            {...textStyles}
            maxW="25rem"
            textAlign={{ base:'center', md:'start' }}
          >
            We’re here to inspire discovery and tempt everyone to eat more plants. Because we care about the future – yours, ours and the planet’s.
          </Text>
        </Flex>

        <Flex maxW="25rem" flex="1" justifyContent="center" alignItems="center">
          <Image alt="" src="/aboutIcon2.svg" width={400} height={100} />
        </Flex>

        <Text textAlign={{ base:'center', md:'start' }} display={["flex", "flex", "none", "none"]} {...textStyles} maxW="25rem">
            We’re here to inspire discovery and tempt everyone to eat more plants. Because we care about the future – yours, ours and the planet’s.
        </Text>
      </Flex>
    </Container>
  );
}

export default StickyLayerTwo;