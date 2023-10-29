'use client'

import { Box, Container, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react"

function StickyLayerOne() {
  return (
    <Container m='0' p='0' maxW="100%" h={'100vh'} bg={"#042f1a"}>
        <Box pos="relative" py={10} my={{ base:'', md:`${30}` }} px={{ base:`${5}`, md:`${20}` }} bg="#ff73b5" w="100vw" h="100vh">
            <Box 
                top="0" 
                w="8em" 
                h="8em"
                pos="absolute"
                mt={{ base:'45vh', md:"7em"  }}
                ml={{ base:'20vw', md:"33em"  }}
            >
                <Image alt="" src="/twistline2.png" boxSize="full" /></Box>
            
            <Grid templateColumns={{ md: 'repeat(2, 1fr)' }} gap={{ base:`${20}`, md:`${6}` }} py={{ base:`${15}`, md:`${40}` }} alignItems={'center'} textAlign={'center'}>
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
    </Container>
  )
}

export default StickyLayerOne