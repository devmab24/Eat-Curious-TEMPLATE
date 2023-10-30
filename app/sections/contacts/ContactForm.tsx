'use client'

import SocialMediaLinks from "./SocialMediaLinks"
import { Container, Flex, Heading, Stack } from "@chakra-ui/react"
import ContactSignupForm from "../../components/dataForms/ContactSignupForm"

function ContactForm() {
    return (
        <Container m='0' p='0' zIndex={1} maxW="100vw" centerContent>
            <Flex bg="#ff73b5" w='100%' h='100%' px={{ base:'2', md:'10' }}>
                <Stack spacing={10} w='100%' py='10'>
                    <Heading
                        textAlign='center'
                        color='#042f1a'
                        fontWeight={'1000'}
                        letterSpacing={'tighter'}
                        textTransform={'uppercase'}
                        fontSize={{ base:'2rem', md:'6rem' }}
                    >
                        feed me more
                    </Heading>
                    <ContactSignupForm /> 
                    <SocialMediaLinks />
                </Stack>
            </Flex>
        </Container>
    )
}

export default ContactForm