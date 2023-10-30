'use client'

import CustomButton from "@/app/components/Button";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

function Page() {
    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            gap={{ base:'10', md:'5' }}
            my={{ base: "3rem", sm: "5rem", md: "10rem" }}
            flexDirection={{ base: "column-reverse", md: "row" }}
        >
            <Flex flex="1">
                <Box maxH={400} maxW={550} position='relative'>
                    <Image width={450} height={300} style={{ borderRadius:'1rem' }} alt="" src="/product-home.png" />
                </Box>
            </Flex>
            <Flex
                flex="1"
                flexDirection="column"
                justifyContent="center"
                gap={{ base:"5", md:"10" }}
                maxW={{ base: "100%", md: "35em" }}
                alignItems={{ base: "center", md: "start" }}
            >
                <Heading 
                    my={5}
                    w='100%'
                    color="#fff6f6"
                    fontWeight="1000"
                    lineHeight=".85em"
                    textTransform="uppercase"
                    fontSize={{ base:'1.5rem', md:"3rem" }}
                    textAlign={{ base:'center', md:'start' }}
                >
                    WE&rsquo;RE GROWING MORE THAN
                    PLANTS...</Heading>
                <Text textAlign={{ base:'center', md:'start' }} color="#fff6f6" maxW="28em" fontSize="0.88rem">
                    We&rsquo;re here to grow a positive, curious and thoughtful attitude to plant-based food.
                    Which is why we put curiosity at the heart of everything we do. So much so, 
                    we&rsquo;ve built our own vertical farm - a near-off-grid, 
                    plant playground where we&rsquo;re researching how to add even more flavour, 
                    nutrition and sustainability to the way we all eat.
                </Text>
                <CustomButton label="VISIT SYAN FARMS" colorScheme=""/>
            </Flex>
        </Flex>
    );
}

export default Page;