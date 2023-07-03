'use client'

import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react"

function StickyLayerTwo() {

    return (
        <Box pos="relative" py={10} px={{ base:`${5}`, md:`${20}` }} bg="#fff6f6" w="100vw" h="100vh">
            <Box 
                top="0"
                w="7em" 
                h="7em"
                pos="absolute"
                mt={{ base:'5vh', md:"2em"  }}
                ml={{ base:'25vw', md:"55em"  }}
            >
                <Image alt="" src="/twistline3.png" boxSize="full" /></Box>
                
            <Grid templateColumns={{ md: 'repeat(2, 1fr)' }} gap={6} py={35} alignItems={'center'} textAlign={'center'}>
                <GridItem maxW="35em" w='100%' h={400}>
                    <Image 
                        alt=""
                        boxSize="full"
                        src="/aboutIcon2.svg"
                    />
                </GridItem>
                <GridItem w="100%" maxW="35em" h={300} textAlign="start">
                    <Heading 
                        color="#042f1a"
                        textTransform="uppercase"
                        fontFamily="heading"
                        fontSize="2.5em"
                        fontWeight="1000"
                        lineHeight=".80em"
                        py={5}
                    >INSPIRING GOOD <br/>THROUGH TASTY<br/> GOODNESS</Heading>
                    <Text color="#042f1a" maxW="25em" fontSize="1.3em">
                        We’re here to inspire discovery and tempt everyone to eat more plants. Because we care about the future – yours, ours and the planet’s.
                    </Text>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default StickyLayerTwo