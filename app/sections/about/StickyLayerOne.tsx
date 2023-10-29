import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const textStyles = {
  py: [10, 4],
  color: "#042f1a",
  fontSize: "1rem",
};

function StickyLayerOne() {
  return (
    <Container py='10' m="0" p="0" maxW="100%" h="100vh" position="relative">
      <Flex
        
        w="100vw"
        h='100%'
        bg="#ff73b5"
        pos="relative"
        alignItems="center"
        justifyContent="center"
        gap={{ base:'3', md:'0' }}
        px={{ base: "3rem", sm: "5rem", md: "6rem" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box
          top="0"
          pos="absolute"
          pt={{  base: "7.6rem", sm: "6rem", md: "5rem" }}
          pl={{  base: "2rem", sm: "1rem", md: "2rem" }}
        >
          <Image alt="" src="/twistline2.png" width={100} height={200} />
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
            textAlign={["center", "center", "start", "start"]}
          >
            CURIOUS... BY<br /> NAME, BY NATURE
          </Heading>
          <Text
            display={["none", "none", "flex", "flex"]}
            {...textStyles}
            maxW="25rem"
          >
            It’s what inspires us to whip up, throw together, tear, shake, and
            break the rules – on a mission to redefine food for a new generation.
          </Text>
        </Flex>

        <Flex maxW="25rem" flex="1" justifyContent="center" alignItems="center">
          <Image alt="" src="/aboutIcon.svg" width={500} height={200} />
        </Flex>

        <Text display={["flex", "flex", "none", "none"]} {...textStyles} maxW="25rem">
          It’s what inspires us to whip up, throw together, tear, shake, and
          break the rules – on a mission to redefine food for a new generation.
        </Text>
      </Flex>
    </Container>
  );
}

export default StickyLayerOne;