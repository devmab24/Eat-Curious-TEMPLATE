'use client'

import { motion } from 'framer-motion';
import styles from './styles.module.css'
import { Link } from '@chakra-ui/next-js'
import { useInView } from 'react-intersection-observer';
import { Box, Center, Heading, SimpleGrid, keyframes } from '@chakra-ui/react'

function Page() {

    const { ref: myRef, inView: myElementIsVisible } = useInView();

  return (
    <SimpleGrid 
        pt="2em" 
        p="10px" 
        minChildWidth="300px" 
        spacing={8} 
        color='white'
        ref={myRef} className={`${styles.container} ${myElementIsVisible ? styles.animate : ''} `}
    >
        <Link href={'/product'} _hover={{ textDecoration: "none" }} className={styles.parent}>
            <Box 
                h="100%" 
                bgSize={'cover'} 
                borderRadius='10px'
                className={styles.cards}
                bgImage={'/curious-katsu-1.jpg'} 
                minH={{ base:"250px", md:`${600}` }} 
            >
                <Center h="100%">
                    <Heading fontSize='3.8em' fontWeight='1000' lineHeight='0.8em' textAlign={'center'}>
                        CURIOUS<br/>KATSU<br/>CURRY
                    </Heading>
                </Center>
            </Box>
        </Link>
        <Link href={'/product'} _hover={{ textDecoration: "none" }} className={styles.parent}>
            <Box 
                h="100%" 
                bgImage={'/scrummy-sliders-2.jpg'} 
                bgSize={'cover'} 
                minH={{ base:"250px", md:`${600}` }} 
                borderRadius='10px'
                className={styles.cards}
            >
                <Center h="100%">
                    <Heading fontSize='3.8em' fontWeight='1000' lineHeight='0.8em' letterSpacing='tighter' textAlign={'center'}>
                        CURIOUS<br/>MEATBALLS
                    </Heading>
                </Center>
            </Box>
        </Link>
        <Link href={'/product'} _hover={{ textDecoration: "none" }} className={styles.parent}>
            <Box 
                h="100%" 
                bgImage={'/scrumptious-sausages-3.jpg'} 
                bgSize={'cover'} 
                minH={{ base:"250px", md:`${600}` }} 
                borderRadius='10px'
                className={styles.cards}
            >
                <Center h="100%">
                    <Heading fontSize='3.8em' fontWeight='1000' lineHeight='0.8em' textAlign={'center'}>
                        CURIOUS<br/>BANGERS<br/>&<br/>MASH
                    </Heading>
                </Center>
            </Box>
        </Link>
    </SimpleGrid>
  )
}

export default Page