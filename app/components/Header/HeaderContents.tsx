'use client'

import { Image } from "@chakra-ui/next-js"
import { Box, Container, Flex, Heading } from "@chakra-ui/react"

function HeaderContents() {

    return (
        <Container maxW={'container.lg'} h={'90vh'} pos='relative'>
            <Flex align={'center'} flexDir={'column'} h='fit-content'>
                <Box pos='absolute' pt='1em'>
                    <Heading fontWeight="1000" fontFamily="font.heading" letterSpacing={"-0.07em"} fontSize="10.5em">MEAT-FREE</Heading>
                </Box>
                <Box pos='absolute' pt='3em'>
                    <Image 
                        alt='burger'
                        src={'/burger.png'}
                        width={400}
                        height={400}
                    />
                </Box>
                <Box pos='absolute' pt={'16em'}>
                    <Heading fontWeight="1000" fontFamily="font.heading" letterSpacing={"-0.07em"} fontSize="10.5em">YOUR MIND</Heading>
                </Box>
            </Flex>
        </Container>
    )
}

export default HeaderContents