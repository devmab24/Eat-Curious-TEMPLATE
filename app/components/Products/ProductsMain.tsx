'use client'

import TextAndImage from "./Text&Image"
import ProductsCard from "./ProductsCard"
import MoreProducts from "./MoreProducts"
import { Center, Container, Flex, Heading } from "@chakra-ui/react"

function Products() {
  return (
    <Flex w='100vw' h='fit-content' bg='#fefefe' color='white'>
        <Flex bg={'#042f1a'} w='100vw' h={'fit-content'}>
            <Container zIndex={1} maxW={'container.xl'} mx='4em' m='5em' h={'fit-content'}>
                <Center>
                    <Heading
                        color='white'
                        fontSize={'8em'}
                        fontWeight={'1000'}
                        letterSpacing={'tighter'}
                        textTransform={'uppercase'}
                        textDecorationStyle={'wavy'}
                    >
                        drooling yet?
                    </Heading>
                </Center>
                <ProductsCard />
                <TextAndImage />
                <MoreProducts />
            </Container>
        </Flex>
    </Flex>
  )
}

export default Products