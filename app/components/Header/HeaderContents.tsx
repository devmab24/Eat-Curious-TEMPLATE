'use client'

import { Image } from "@chakra-ui/next-js"
import { Tilt } from 'react-tilt'
import { Box, Container, Flex, Heading } from "@chakra-ui/react"

function HeaderContents() {

    // const defaultOptions = {
    //     reverse:        false,  // reverse the tilt direction
    //     max:            35,     // max tilt rotation (degrees)
    //     perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    //     scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    //     speed:          1000,   // Speed of the enter/exit transition
    //     transition:     true,   // Set a transition on enter/exit.
    //     axis:           null,   // What axis should be disabled. Can be X or Y.
    //     reset:          true,    // If the tilt effect has to be reset on exit.
    //     easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    // }

    return (
        <Container color='pink.400' maxW={'container.lg'} h={'100vh'} pos='relative'>
                <Flex align={'center'} flexDir={'column'} >
                    <Box pos='absolute' pt='1em'>
                        <Heading letterSpacing={"-0.1em"} fontWeight='extrabold'  as="h1" fontSize="10.5em">MEAT-FREE</Heading>
                    </Box>
                    {/* <Tilt options={defaultOptions} style={{ height: 400, width: 400 }}> */}
                        <Box pos='absolute' pt='3em'>
                            <Image 
                                alt='burger'
                                src={'/burger.png'}
                                width={400}
                                height={400}
                            />
                        </Box>
                    {/* </Tilt>  */}
                    <Box pos='absolute' pt={'16em'}>
                        <Heading letterSpacing={"-0.1em"} fontWeight='extrabold'  as="h1" fontSize="10.5em">YOUR MIND</Heading>
                    </Box>
                </Flex>
            </Container>
    )
}

export default HeaderContents