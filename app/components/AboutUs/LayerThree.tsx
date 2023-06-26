'use client'

import { Box, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react"

function LayerThree() {
    return (
        <Box pos="relative" px={20} bg="#d4ed6d" w="100vw" h="100vh">
            <Box 
                pos="absolute"
                top="0" 
                ml="20em"
                mt="5em"
                w="10em" 
                h="6em"
            >
                <Image alt="" src="/twist3.png" boxSize="full" /></Box>
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
                    >POWERED BY POSITIVITY</Heading>
                    <Text color="#042f1a" maxW="20em" fontSize="1.3em">
                        We’re not crusading or going up against an industry. We’re for; for flavour, for fun, for what’s possible.
                    </Text>
                </GridItem>
                <GridItem maxW="35em" w="100%" h={450}>
                    <Image 
                        alt=""
                        boxSize="full"
                        src="/aboutIcon3.svg"
                    />
                </GridItem>
            </Grid>
        </Box>
    )
}

export default LayerThree