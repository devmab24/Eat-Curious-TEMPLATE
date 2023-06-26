'use client'

import { Box, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react"

function LayerOne() {
  return (
    
    <Flex h={'100vh'} bg={"#042f1a"}>
        <Box pos="relative" py={10} my={30} px={20} bg="#ff73b5" w="100vw" h="100vh">
            <Box 
                pos="absolute"
                top="0" 
                ml="31em"
                mt="8em"
                w="8em" 
                h="8em"
            >
                <Image alt="" src="/twistline.png" boxSize="full" /></Box>
            <Grid templateColumns='repeat(2, 1fr)' gap={6} py={40} alignItems={'center'} textAlign={'center'}>
                <GridItem w="100%" maxW="35em" h={300} textAlign="start">
                    <Heading 
                        color="#042f1a"
                        textTransform="uppercase"
                        fontFamily="heading"
                        fontSize="2.5em"
                        fontWeight="1000"
                        lineHeight=".80em"
                        py={5}
                    >CURIOUS... BY NAME, BY <br/>NATURE</Heading>
                    <Text color="#042f1a" maxW="20em" fontSize="1.3em">
                        It’s what inspires us to whip up, throw together, tear, shake, and break the rules – on a mission to redefine food for a new generation.
                    </Text>
                </GridItem>
                <GridItem maxW="35em" w="100%" h={300}>
                    <Image 
                        alt=""
                        boxSize="full"
                        src="/aboutIcon.svg"
                    />
                </GridItem>
            </Grid>
        </Box>
    </Flex>
  )
}

export default LayerOne