'use client'

import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
// import Wavify from 'react-wavify';
// import styles from './style.module.css'

const textStyles = {
  py: [10, 4],
  color: "#042f1a",
  fontSize: "0.88rem",
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
            textAlign={{ base:'center', md:'start' }}
          >
            POWERED BY POSITIVITY
          </Heading>
          <Text
            display={["none", "none", "flex", "flex"]}
            {...textStyles}
            maxW="25rem"
            textAlign={{ base:'center', md:'start' }}
          >
            We’re not crusading or going up against an industry. We’re for; for flavour, for fun, for what’s possible.
          </Text>
        </Flex>

        <Flex maxW="25rem" flex="1" justifyContent="center" alignItems="center">
          <Image alt="" src="/aboutIcon3.svg" width={500} height={200} />
        </Flex>

        <Text textAlign={{ base:'center', md:'start' }} display={["flex", "flex", "none", "none"]} {...textStyles} maxW="25rem">
            We’re not crusading or going up against an industry. We’re for; for flavour, for fun, for what’s possible.
        </Text>
      </Flex>
    </Container>
  );
}

export default StickyLayerThree;