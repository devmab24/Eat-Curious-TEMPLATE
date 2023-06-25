'use client'

// import { Box, Button, Grid, GridItem, Link as ChakraLink } from '@chakra-ui/react'
// import { motion } from "framer-motion";
// import { useState } from "react";
// import NextLink from 'next/link';

// function Navbar() {

//   const [isClicked, setIsClicked] = useState(false);

//   const handleButtonClick = () => {
//     setIsClicked(!isClicked);
//   };

//   return (
//     <Grid templateColumns='repeat(5, 1fr)' gap={6} py={6} alignItems={'center'} textAlign={'center'} fontWeight={'extrabold'}>
//       <ChakraLink href='/about'>
//         <GridItem w='100%'>ABOUT</GridItem>
//       </ChakraLink>
//       <ChakraLink href='/about'>
//         <GridItem w='100%'>PRODUCTS</GridItem>
//       </ChakraLink>
//       <ChakraLink href='/about'>
//         <GridItem w='25'>
//           <Box h='fit-content' lineHeight={'0.8'} fontSize={'50px'}>
//             Eat CURIOUS
//           </Box>
//         </GridItem>
//       </ChakraLink>
//       <ChakraLink href='/about'>
//         <GridItem w='100%'>RECIPES</GridItem>
//       </ChakraLink>
//       <ChakraLink href='/about'>
//         <GridItem w='100%' h='10' color='pink.200'>
//           <Button
//             color='black'
//             bg={'pink.400'}
//             _hover={{ bg: 'pink.400' }}
//             onMouseDown={handleButtonClick}
//             onMouseUp={handleButtonClick}
//             onTouchStart={handleButtonClick}
//             onTouchEnd={handleButtonClick}
//             variant="outline"
//             colorScheme="teal"
//             size="md"
//             borderRadius="md"
//             px={4}
//             py={2}
//           >
//             <motion.span
//               animate={{ x: isClicked ? "100%" : 0 }}
//               transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
//             >
//               CONTACT US
//             </motion.span>
//           </Button>
//         </GridItem>
//       </ChakraLink>
//     </Grid>
//   )
// }

// export default Navbar;

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from '@chakra-ui/next-js'
import { Box, Button, Grid, GridItem } from '@chakra-ui/react'

function Navbar() {

    const [isClicked, setIsClicked] = useState(false);

    const handleButtonClick = () => {
        setIsClicked(!isClicked);
    };


  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={6} py={6} alignItems={'center'} textAlign={'center'} fontWeight={'extrabold'}>
        <Link href='/about'>
            <GridItem w='100%' >ABOUT</GridItem>
        </Link>
        <Link href='/about'>
            <GridItem w='100%' >PRODUCTS</GridItem>
        </Link>
        <Link href='/about'>
            <GridItem w='25'><Box  h='fit-content' lineHeight={'0.8'} fontSize={'50'}>Eat CURIOUS</Box></GridItem>
        </Link>
        <Link href='/about'>
            <GridItem w='100%' >RECIPES</GridItem>
        </Link>
        <Link href='/about'>
            <GridItem w='100%' h='10'color='pink.200'>
                <Button 
                    color='black' 
                    bg={'pink.400'} 
                    _hover={{ bg:'pink.400' }}
                    onMouseDown={handleButtonClick}
                    onMouseUp={handleButtonClick}
                    onTouchStart={handleButtonClick}
                    onTouchEnd={handleButtonClick}
                    variant="outline"
                    colorScheme="teal"
                    size="md"
                    borderRadius="md"
                    px={4}
                    py={2}
                >
                    <motion.span
                        animate={{ x: isClicked ? "100%" : 0 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                        CONTACT US
                    </motion.span>
                </Button>
            </GridItem>
        </Link>
    </Grid>
  )
}

export default Navbar