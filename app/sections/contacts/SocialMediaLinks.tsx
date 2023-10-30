'use client'
import { Link } from "@chakra-ui/next-js";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { Container, Box, VStack, Stack } from "@chakra-ui/react";

function SocialMediaLinks() {
  const socialLinks = [
    { icon: <BsInstagram color='#042f1a' />, href: "https://instagram.com/" },
    { icon: <FaFacebookSquare color='#042f1a' />, href: "https://web.facebook.com/mohammad.ayuba.5" },
    { icon: <BsLinkedin color='#042f1a' />, href: "https://www.linkedin.com/in/devmab/" },
  ];

  return (
    <Container zIndex={1} maxW='100vw' centerContent>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={4} w={'100%'} color='#042f1a'>
        <VStack spacing={5}>
            <Box display='flex' gap='5'>
                {socialLinks.map((link, index) => (
                    <Box key={index}>
                        <Link href={link.href}>{link.icon}</Link>
                    </Box>
                ))}
            </Box>
            <Box fontWeight='500'>PRIVACY POLICY</Box>
            <Box textAlign='center' fontWeight='500'>&copy; EAT CURIOUS 2023 | DESIGNED BY DEV MAB</Box>
        </VStack>
      </Stack>
    </Container>
  );
}

export default SocialMediaLinks;