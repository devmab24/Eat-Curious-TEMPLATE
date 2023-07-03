'use client'

import styles from './styles.module.css'
import { Box, Image, Flex, Grid, GridItem, Heading, Center } from "@chakra-ui/react"

function Features() {

    return (
        <Box className={styles.animate} display='flex' flexDir='column' alignItems='center' pos="relative" py={10} px={{ base:`${5}`,md:`${20}` }} bg="#fff6f6" w="100vw" h='fit-content'>
           <Heading className={styles.content} fontSize={{  base:'2em', md:"3em" }} lineHeight="0.82em" fontWeight="1000" textAlign="center" p="0.2em" w="100%" color="#042f1a">FEATURES & <br/> BENEFITS</Heading>
           <Grid className={styles.animate} templateColumns={{ md: 'repeat(4, 1fr)' }} gap={6} py={35} alignItems={'center'} textAlign={'center'}>
                <GridItem w='100%' h="28em" className={styles.content}>
                    <Flex flexDir="column">
                        <Box w={{ base:'100%', md:'17em' }} h={{ base:'20em', md:"17em" }} borderRadius="full">
                           <Center h="100%">
                                <Box m={5}>
                                    <Image 
                                        alt=""
                                        boxSize="10em"
                                        src="/featureicon.png"
                                    />
                                </Box>
                           </Center>
                        </Box>
                        <Box>
                            <Heading fontWeight="1000" fontSize="1.5em" py={4} color="#042f1a">PLANT BASED</Heading>
                        </Box>
                        <Box textAlign="center" color="#042f1a">
                            Plant-protein yumminess, suitable for vegans {`${"(and everyone else)."}`}
                        </Box>
                    </Flex>
                </GridItem>
                <GridItem w="100%" h="28em" className={styles.content}>
                    <Flex flexDir="column">
                        <Box w={{ base:'100%', md:'17em' }} h={{ base:'20em', md:"17em" }} borderRadius="full">
                           <Center h="100%">
                                <Box m={5}>
                                    <Image 
                                        alt=""
                                        boxSize="10em"
                                        src="/featureicon2.png"
                                    />
                                </Box>
                           </Center>
                        </Box>
                        <Box>
                            <Heading fontWeight="1000" fontSize="1.5em" py={4} color="#042f1a">REAL INGREDIENTS</Heading>
                        </Box>
                        <Box textAlign="center" color="#042f1a">
                            If we don’t know exactly what an ingredient is, we don’t include it.
                        </Box>
                    </Flex>
                </GridItem>
                <GridItem w="100%" h="28em" className={styles.content}>
                    <Flex flexDir="column">
                        <Box w={{ base:'100%', md:'17em' }} h={{ base:'20em', md:"17em" }} borderRadius="full">
                           <Center h="100%">
                                <Box m={5}>
                                    <Image 
                                        alt=""
                                        boxSize="10em"
                                        src="/featureicon3.png"
                                    />
                                </Box>
                           </Center>
                        </Box>
                        <Box>
                            <Heading fontWeight="1000" fontSize="1.5em" py={4} color="#042f1a">UNREAL TEXTURE</Heading>
                        </Box>
                        <Box textAlign="center" color="#042f1a">
                            It’s not meat. No really, it’s not!
                        </Box>
                    </Flex>
                </GridItem>
                <GridItem w="100%" h="28em" className={styles.content}>
                    <Flex flexDir="column">
                        <Box w={{ base:'100%', md:'17em' }} h={{ base:'20em', md:"17em" }} borderRadius="full">
                           <Center h="100%">
                                <Box m={5}>
                                    <Image 
                                        alt=""
                                        boxSize="10em"
                                        src="/featureicon4.png"
                                    />
                                </Box>
                           </Center>
                        </Box>
                        <Box>
                            <Heading fontWeight="1000" fontSize="1.5em" py={4} color="#042f1a">BLAND IS BANNED</Heading>
                        </Box>
                        <Box textAlign="center" color="#042f1a">
                            Foodies unite, because here flavour rules.
                        </Box>
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Features