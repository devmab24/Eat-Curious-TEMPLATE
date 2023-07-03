'use client'

import { Image } from '@chakra-ui/next-js'
import { Box, Button, Center, Flex, Heading } from '@chakra-ui/react'

function ChatSection() {
    return (
        <Flex position='relative' w='100%' h='100vh' flexDir={'column'} align='center'>
            <Box mt={40}>
                <Heading fontSize={'5em'} fontWeight={'1000'} letterSpacing='tight' color='#042f1a'>INTRIGUED?</Heading>
                <Center w='100%'>
                    <Button 
                        zIndex={1}
                        bg={"#ff73b5"}
                        color='#042f1a'
                        fontSize={'1em'}
                        fontWeight={'1000'}
                        textTransform={'uppercase'}
                        _hover={{ bg:"#ff73b5" }}
                    >
                        let&rsquo;s chat</Button>
                </Center>
            </Box>
            
            <Box>
                <Image
                    alt=''
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    width={350}
                    height={350}
                    mx={'32em'}
                    mt={'15em'}
                    position='absolute'
                    src={'/chat-home.svg'}
                />
            </Box>
        </Flex>
    )
}

export default ChatSection