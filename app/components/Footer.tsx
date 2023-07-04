'use client'

import { Box, Flex } from '@chakra-ui/react'

function Footer() {
  return (
    <Flex overflowY={'scroll'} bottom={0} align='center' bg="#ff73b5" h={'fit-content'} style={{ zIndex: 10 }} position={'fixed'}>
      <Box 
        h='100%' 
        w={'100%'} 
        fontSize='1.5em'
        color={'#042f1a'} 
        fontWeight={'1000'}
        textAlign={'center'} 
      >
        <marquee direction="left" behavior="scroll" scrollamount="infinite">
          * 100% PLANT BASED * DAIRY FREE * PACKED WITH FLAVOUR * 100% PLANT BASED * DAIRY FREE * PACKED WITH FLAVOUR * 100% PLANT BASED * DAIRY FREE * PACKED WITH FLAVOUR * 100% PLANT BASED * DAIRY FREE * PACKED WITH FLAVOUR *
        </marquee>
      </Box>
    </Flex>
  )
}

export default Footer