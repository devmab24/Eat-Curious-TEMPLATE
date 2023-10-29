'use client'

import Link from 'next/link';
import CustomButton from './Button';
import Headroom from 'react-headroom';
import { FaBars } from 'react-icons/fa';
import { Flex, Text, HStack, Box, useMediaQuery, IconButton } from '@chakra-ui/react';

const navLinks = [
  { href: '/about', label: 'ABOUT' },
  { href: '/products', label: 'PRODUCTS' },
  { href: '/', label: 'Eat CURIOUS' },
  { href: '/recipes', label: 'RECIPES' },
  { href: '/contacts', label: 'CONTACT US' },
];

function Nav() {
  const [isLargerThan768] = useMediaQuery('min-width: 768px');

  return (
    <header>
        <nav>
            <Headroom>
                <Flex
                    w="100vw"
                    zIndex={99}
                    color="#fff"
                    align="center"
                    justifyContent="space-between"
                    h={{ base:'4rem', md:"6.5rem" }}
                >
                    <HStack display={{ base:'none', sm:'none', md:'flex', lg:'flex' }} px={{ base:'1rem', sm:'3rem', md:'4rem', lg:'5rem' }} h="100%" spacing={{ base:`${4}`, sm:`${6}`, md:`${8}`, lg:`${10}` }} w="100%" justifyContent="space-between" alignItems="center">
                        {navLinks.map((link, index) => (
                            <Box key={link.label} maxW={index === 2 ? '12rem' : 'inherit'} fontSize='16px' fontWeight="bold">
                                {link.label === 'CONTACT US' ? (
                                        <CustomButton label={link.label} colorScheme="teal" />
                                    ) : (
                                    <Link href={link.href} passHref>
                                        <Text
                                            color="#fff"
                                            textAlign={index === 2 ? 'center' : 'inherit'}
                                            fontSize={index === 2 ? '2.5rem' : 'inherit'}
                                            fontWeight={index === 2 ? 'bold' : 'inherit'}
                                            lineHeight={index === 2 ? '2rem' : 'inherit'}
                                        >
                                            {link.label}
                                        </Text>
                                    </Link>
                                )}
                            </Box>
                        ))}
                    </HStack>
                    <HStack color="#fff" display={{ base:'flex', sm:'flex', md:'none', lg:'none' }} px={{ base:'1rem', sm:'2rem', md:'3rem', lg:'5rem' }} h="100%" spacing={{ base:`${4}`, sm:`${6}`, md:`${8}`, lg:`${10}` }} w="100%" justifyContent="space-between" alignItems="center">
                        <Box w='100%' fontWeight="bold" flex="1" textAlign="center">
                            <Link href='/' passHref>
                                <Text fontSize='22px' lineHeight='1rem'>
                                    Eat<br /> CURIOUS
                                </Text>
                            </Link>
                        </Box>
                        <Box alignItems='flex-end'>
                            <IconButton
                                bg="#ff73b5"
                                colorScheme="teal"
                                aria-label="Open Menu"
                                icon={<FaBars color='#000' size={30} />}
                            />
                        </Box>
                    </HStack>
                </Flex>
            </Headroom>
        </nav>
    </header>
  );
}

export default Nav;