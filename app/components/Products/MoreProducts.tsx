'use client'

import { Link } from '@chakra-ui/next-js'
import { Box, Center, Heading, SimpleGrid } from '@chakra-ui/react'

function MoreProducts() {
  return (
    <SimpleGrid pt="2em" p="10px" minChildWidth="300px" spacing={8}>
        <Link href={'/product'}>
            <Box h="100%" bgImage={'/curious-katsu-1.jpg'} bgSize={'cover'} minH={{ base:"250px", md:`${600}` }} borderRadius='10px'>
                <Center h="100%">
                    <Heading fontSize='3.8em' fontWeight='1000' lineHeight='0.8em' textAlign={'center'}>
                        CURIOUS<br/>KATSU<br/>CURRY
                    </Heading>
                </Center>
            </Box>
        </Link>
        <Link href={'/product'}>
            <Box h="100%" bgImage={'/scrummy-sliders-2.jpg'} bgSize={'cover'} minH={{ base:"250px", md:`${600}` }} borderRadius='10px'>
                <Center h="100%">
                    <Heading fontSize='3.8em' fontWeight='1000' lineHeight='0.8em' letterSpacing='tighter' textAlign={'center'}>
                        CURIOUS<br/>MEATBALLS
                    </Heading>
                </Center>
            </Box>
        </Link>
        <Link href={'/product'}>
            <Box h="100%" bgImage={'/scrumptious-sausages-3.jpg'} bgSize={'cover'} minH={{ base:"250px", md:`${600}` }} borderRadius='10px'>
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

export default MoreProducts