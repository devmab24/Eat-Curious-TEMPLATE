'use client'
import { Link } from "@chakra-ui/next-js";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { Container, Box, VStack, Stack, Flex } from "@chakra-ui/react";

function SocialMediaLinks() {
  const socialLinks = [
    { icon: <BsInstagram color='#042f1a' />, href: "https://instagram.com/" },
    { icon: <FaFacebookSquare color='#042f1a' />, href: "https://web.facebook.com/mohammad.ayuba.5" },
    { icon: <BsLinkedin color='#042f1a' />, href: "https://www.linkedin.com/in/devmab/" },
    { icon: <FaGithub color='#042f1a' />, href: "https://www.githubbbb.com/muhammad-ayuba-bello/" },
  ];

  return (
    <Container zIndex={1} maxW='100vw' centerContent>
      <Stack spacing={4} color='#042f1a'>
        <VStack spacing={4} display={[ 'flex', 'flex', 'none', 'none' ]}>
            <Box display='flex' gap='5'>
                {socialLinks.map((link, index) => (
                    <Box key={index}>
                        <Link href={link.href}>{link.icon}</Link>
                    </Box>
                ))}
            </Box>
            <Box fontSize={{ base:'0.8rem', md:'1rem' }} fontWeight='600'>PRIVACY POLICY</Box>
            <Box fontSize={{ base:'0.8rem', md:'1rem' }} fontWeight='600'>&copy; EAT CURIOUS 2023</Box>
            <Box fontSize={{ base:'0.8rem', md:'1rem' }} textAlign='center' fontWeight='600'>DESIGNED BY DEV MAB</Box>
        </VStack>
        
        <Flex pt='10' w='100%' justify='space-between' display={[ 'none', 'none', 'flex', 'flex' ]}>
            <Box alignItems='center' display='flex' gap='10'>
                <Box display='flex' gap='5'>
                    {socialLinks.map((link, index) => (
                        <Box key={index}>
                            <Link href={link.href}>{link.icon}</Link>
                        </Box>
                    ))}
                </Box>
                <Box fontSize={{ base:'0.8rem', md:'1rem' }} fontWeight='600'>PRIVACY POLICY</Box>
            </Box>
            <Box fontSize={{ base:'0.8rem', md:'1rem' }} textAlign='center' fontWeight='600'>&copy; EAT CURIOUS 2023 | DESIGNED BY DEV MAB</Box>
        </Flex>
      </Stack>
    </Container>
  );
}

export default SocialMediaLinks;