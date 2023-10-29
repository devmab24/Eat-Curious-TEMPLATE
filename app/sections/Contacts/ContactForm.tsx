'use client'

import { Container, Flex, Heading } from "@chakra-ui/react"
import ContactSignupForm from "../../components/dataForms/ContactSignupForm"
import SocialMediaLinks from "./SocialMediaLinks"

function ContactForm() {
    return (
        <Flex flexDir='column' bg="#ff73b5" w='100vw' h={'100vh'}>
            <Container zIndex={1} maxW={'container.xl'} pt='8em' h='fit-content' centerContent>
                <Heading
                    h={330}
                    color='#042f1a'
                    fontSize={'10em'}
                    fontWeight={'1000'}
                    letterSpacing={'tighter'}
                    textTransform={'uppercase'}
                    textDecorationStyle={'wavy'}
                >
                    feed me more
                </Heading>
                
                <ContactSignupForm /> 
            </Container>
            
            <SocialMediaLinks />
        </Flex>
    )
}

export default ContactForm