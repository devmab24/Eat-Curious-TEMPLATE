'use client'

import ChatSection from './ChatSection'
import ContactForm from './ContactForm'
import { Flex } from '@chakra-ui/react'
import styles from './styles.module.css'

function ContactMain() {
  return (
    <Flex bg="#fff6f6" w='100vw' h={'fit-content'} flexDir='column'>
        <Flex className={styles.sticky} style={{ zIndex: 1 }}>
          <ChatSection />
        </Flex>
        <Flex className={styles.sticky} style={{ zIndex: 2 }}>
          <ContactForm />
        </Flex>
    </Flex>
  )
}

export default ContactMain