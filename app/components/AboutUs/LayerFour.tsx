'use client'

import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react"

function LayerFour() {

    return (
        <Box pos="relative" py={10} px={20} bg="#042f1a" w="100vw" h="100vh">
            <Box 
                pos="absolute"
                bottom="0"
                ml="60em" 
                mb="12em"
                w="7em" 
                h="7em"
            >
                <Image alt="" src="/twistline4.png" boxSize="full" /></Box>
            <Grid templateColumns='repeat(2, 1fr)' gap={6} py={35} alignItems={'center'} textAlign={'center'}>
                <GridItem maxW="35em" w='100%' h={400}>
                    <Image 
                        alt=""
                        boxSize="full"
                        src="/aboutIcon4.svg"
                    />
                </GridItem>
                <GridItem w="100%" maxW="35em" h={300} textAlign="start">
                    <Heading 
                        color="#fff6f6"
                        textTransform="uppercase"
                        fontFamily="heading"
                        fontSize="2.5em"
                        fontWeight="1000"
                        lineHeight=".85em"
                        py={5}
                    >FLAVOURSOME FOOD FOR <br/>EVERYONE</Heading>
                    <Text color="#fff6f6" maxW="28em" fontSize="1.3em">
                        Our curious creations are made for vegans and meat-eaters alike. Because meat-free doesn’t mean flavour free.
                    </Text>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default LayerFour