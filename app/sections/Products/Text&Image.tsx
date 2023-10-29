'use client'

import { Box, Button, Center, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react"

function TextAndImage() {

    return (
        <Box py={10} px={{ base:`${5}`, md:`${5}` }} >
                
            <Grid templateColumns={{ md: 'repeat(2, 1fr)' }} gap={20} py={35} alignItems={'center'} textAlign={'center'}>
                <GridItem maxW="35em" w='100%' h={600}>
                    <Image 
                        alt=""
                        boxSize="full"
                        src="/product-home.png"
                    />
                </GridItem>
                <GridItem w="100%" maxW="30em" h={600} textAlign="start">
                    <Heading 
                        color="#fff6f6"
                        textTransform="uppercase"
                        fontFamily="heading"
                        fontSize="3.5em"
                        fontWeight="1000"
                        lineHeight=".85em"
                        py={5}
                    >
                        WE&rsquo;RE GROWING<br/> MORE THAN<br/> 
                        PLANTS...</Heading>
                    <Text pt={10} color="#fff6f6" maxW="28em" fontSize="1.3em">
                        We&rsquo;re here to grow a positive, curious and thoughtful attitude to plant-based food.
                        Which is why we put curiosity at the heart of everything we do. So much so, 
                        we&rsquo;ve built our own vertical farm - a near-off-grid, 
                        plant playground where we&rsquo;re researching how to add even more flavour, 
                        nutrition and sustainability to the way we all eat.
                    </Text>
                    
                    <Button bg={"#ff73b5"}
                        py={7}
                        mt={20}
                        color='#042f1a'
                        fontSize={'1.5em'}
                        fontWeight={'1000'}
                        textTransform={'uppercase'}
                        _hover={{ bg:"#ff73b5" }}
                    >
                        Visit syan farms</Button>
                
                </GridItem>
            </Grid>
        </Box>
    )
}

export default TextAndImage