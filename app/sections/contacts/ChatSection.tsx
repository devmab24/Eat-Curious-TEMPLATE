'use client'

import Image from 'next/image'
import CustomButton from '@/app/components/Button'
import { Box, Flex, Heading } from '@chakra-ui/react'

function ChatSection() {
    return (
        <Flex pt={10} w='100%' h='100vh' flexDir={'column'} align='center'>
            <Box pt='5' gap='5' flexDir='column' display='flex' justifyContent='center' alignItems='center'>
                <Heading fontSize={{ base:'2rem', md:'3.5em' }} fontWeight={'1000'} letterSpacing='tight' color='#042f1a'>INTRIGUED?</Heading>
                <CustomButton label='LET&rsquo;S CHAT' colorScheme=''/>
            </Box>
            
            <Box>
                <Image
                    alt=''
                    width={350}
                    height={350}
                    src={'/chat-home.svg'}
                />
            </Box>
        </Flex>
    )
}

export default ChatSection