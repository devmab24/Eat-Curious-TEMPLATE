'use client'

import { Link } from "@chakra-ui/next-js"
import { BsInstagram, BsLinkedin} from "react-icons/bs";
import { FaFacebookSquare, FaGithub} from "react-icons/fa";
import { Grid, Container,Box, GridItem, HStack } from "@chakra-ui/react"

function SocialMediaLinks() {
  return (
    <Container pt={5} px={20} my={10} borderTop='2px' borderColor='blackAlpha.300' zIndex={1} maxW='100vw' centerContent>
        <Grid templateColumns='repeat(5, 1fr)' gap={4} w={'100%'} color='#042f1a'>
            <GridItem px={10} colSpan={2} h='10' columnGap={5}>
                <HStack>
                    <Box>
                        <Link href={"https://instagram.com/"}><BsInstagram color='#042f1a' /></Link>
                    </Box>
                    <Box>
                        <Link href="https://web.facebook.com/mohammad.ayuba.5"><FaFacebookSquare color='#042f1a' /></Link>
                    </Box>
                    <Box>
                        <Link href="https://www.linkedin.com/in/devmab/"><BsLinkedin color='#042f1a' /></Link>
                    </Box>
                    <Box fontWeight='500'>PRIVACY POLICY</Box>
                </HStack>
            </GridItem>
            <GridItem colStart={4} colEnd={6} h='10'>
                <Box fontWeight='500'>&copy; EAT CURIOUS 2023 | DESIGNED BY DEV MAB</Box>
            </GridItem>
        </Grid>
    </Container>
    
  )
}

export default SocialMediaLinks