'use client'

// import { motion } from "framer-motion";
// import { Link } from '@chakra-ui/next-js'
// import { keyframes } from "@emotion/react";
// import { Box, Button, Grid, GridItem } from '@chakra-ui/react';
// import { useEffect, useState } from 'react';

// function Navbar() {
//   const [isNavbarVisible, setIsNavbarVisible] = useState(true);

//   const marqueeAnimation = keyframes`
//     0% {
//       transform: translateX(0%);
//     }
//     100% {
//       transform: translateX(-100%);
//     }
//   `;

//   useEffect(() => {
//     let prevScrollPos = window.pageYOffset;

//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;
//       setIsNavbarVisible(prevScrollPos > currentScrollPos);
//       prevScrollPos = currentScrollPos;
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <Grid
//       color='pink.400'
//       bg='transparent'
//       templateColumns='repeat(5, 1fr)'
//       gap={6}
//       py={6}
//       alignItems='center'
//       textAlign='center'
//       fontWeight='extrabold'
//       style={{ display: isNavbarVisible ? 'flex' : 'none' }} // Hide/show navbar based on the state
//     >
//       <Link href='/about'>
//         <GridItem w='100%'>ABOUT</GridItem>
//       </Link>
//       <Link href='/product'>
//         <GridItem w='100%'>PRODUCTS</GridItem>
//       </Link>
//       <Link href='/'>
//         <GridItem w='25'>
//           <Box h='fit-content' lineHeight='0.8' fontSize='50'>
//             Eat CURIOUS
//           </Box>
//         </GridItem>
//       </Link>
//       <Link href='/recipes'>
//         <GridItem w='100%'>RECIPES</GridItem>
//       </Link>
//       <Link href='/contact'>
//         <GridItem w='100%' h='10' color='pink.200'>
//           <Button
//             px={4}
//             py={2}
//             size='md'
//             color='black'
//             bg='pink.400'
//             borderRadius='md'
//             overflow='hidden'
//             position='relative'
//             whiteSpace='nowrap'
//             _hover={{ bg: 'pink.400' }}
//           >
//             <motion.span
//               animate={{ x: [-100, 0] }}
//               transition={{ duration: 5, repeat: Infinity, repeatType: 'loop' }}
//               style={{
//                 display: 'inline-block',
//                 animation: `${marqueeAnimation} 0.1s linear infinite`,
//               }}
//             >
//               CONTACT US
//             </motion.span>
//           </Button>
//         </GridItem>
//       </Link>
//     </Grid>
//   );
// }

// export default Navbar;

import { motion } from "framer-motion";
import { Link } from '@chakra-ui/next-js'
import { keyframes } from "@emotion/react";
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
        <Grid color='pink.400' bg='transparent' templateColumns='repeat(5, 1fr)' gap={6} py={6} alignItems={'center'} textAlign={'center'} fontWeight={'extrabold'}>
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
                        color='black' 
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