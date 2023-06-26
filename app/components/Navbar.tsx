'use client'

import { motion } from "framer-motion";
import { Link } from '@chakra-ui/next-js'
import { keyframes } from "@emotion/react";
import styles from "./Header/styles.module.css"
import { Box, Button, Grid, GridItem } from '@chakra-ui/react'

function Navbar() {

    const marqueeAnimation = keyframes`
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-100%);
    }
    `;

    return (
        <Grid className={styles.background} templateColumns='repeat(5, 1fr)' gap={6} py={6} alignItems={'center'} textAlign={'center'} fontWeight={'extrabold'}>
            <Link href='/about'>
                <GridItem w='100%' >ABOUT</GridItem>
            </Link>
            <Link href='/product'>
                <GridItem w='100%' >PRODUCTS</GridItem>
            </Link>
            <Link href='/'>
                <GridItem w='25'><Box  h='fit-content' lineHeight={'0.8'} fontSize={'50'}>Eat CURIOUS</Box></GridItem>
            </Link>
            <Link href='/recipes'>
                <GridItem w='100%' >RECIPES</GridItem>
            </Link>
            <Link href='/contact'>
                <GridItem w='100%' h='10'color='pink.200'>
                    <Button 
                        px={4}
                        py={2}
                        size="md"
                        color='#fefe' 
                        fontWeight='extrabold'
                        bg={'pink.400'} 
                        borderRadius="md"
                        overflow="hidden"
                        position="relative"
                        whiteSpace="nowrap"
                        _hover={{ bg:'pink.400' }}
                    >
                            <motion.span
                                animate={{ x: [-100, 0] }}
                                transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
                                style={{
                                    display: "inline-block",
                                    animation: `${marqueeAnimation} 0.1s linear infinite`,
                                }}
                            >
                                CONTACT US
                            </motion.span>
                    </Button>
                </GridItem>
            </Link>
        </Grid>
    )
}

export default Navbar;