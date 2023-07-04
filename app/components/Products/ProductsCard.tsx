'use client'

import { Link } from "@chakra-ui/next-js";
import { Button, Card, CardBody, CardHeader, Center, Image, SimpleGrid, textDecoration } from "@chakra-ui/react";

export default function ProductsCard() {

    return (
        <>
            <SimpleGrid pt="2em" p="10px" minChildWidth="300px" spacing={8} color='white'>
                <Link href='https://eat-curious.com/products/bangers/' _hover={{ textDecoration:'none' }}>
                    <Card p={2} py={10} borderRadius='20px' bg={'#F95B77'} minH={{ base:"250px", md:"380px"  }} variant="unstyled">
                        <CardHeader>
                            <Center 
                                color={'#042f1a'}
                                fontSize={'4.9em'}
                                fontWeight={'1000'}
                                letterSpacing={'tighter'}
                                textAlign={'center'}
                                lineHeight={'0.81em'}
                            >
                                CURIOUS BANGERS
                            </Center>
                        </CardHeader>
                        <CardBody>
                            <Image
                                src="/assets/curious-bangers-1.png"
                                alt="img icons"
                                width={'full'}
                                height={180}
                            />
                        </CardBody>
                    </Card>
                </Link>
                <Link href='https://eat-curious.com/products/roast/' _hover={{ textDecoration:'none' }}>
                    <Card py={10} borderRadius='20px' bg={'#1ABE71'} minH={{ base:"250px", md:"380px"  }} variant="unstyled">
                        <CardHeader>
                            <Center 
                                color={'#042f1a'}
                                fontSize={'4.9em'}
                                fontWeight={'1000'}
                                letterSpacing={'tighter'}
                                textAlign={'center'}
                                lineHeight={'0.81em'}
                            >
                                CURIOUS ROAST
                            </Center>
                        </CardHeader>
                        <CardBody>
                            <Image
                                src="/assets/curious-roast.png"
                                alt="img icons"
                                width={'full'}
                                height={180}
                            />
                        </CardBody>
                    </Card>
                </Link>
                <Link href='https://eat-curious.com/products/block/' _hover={{ textDecoration:'none' }}>
                    <Card py={10} borderRadius='20px' bg={'#FFB500'} minH={{ base:"250px", md:"380px"  }} variant="unstyled">
                        <CardHeader>
                            <Center 
                                color={'#042f1a'}
                                fontSize={'4.9em'}
                                fontWeight={'1000'}
                                letterSpacing={'tighter'}
                                textAlign={'center'}
                                lineHeight={'0.81em'}
                            >
                                CURIOUS BLOCK
                            </Center>
                        </CardHeader>
                        <CardBody>
                            <Image
                                src="/assets/curious-block.png"
                                alt="img icons"
                                width={'full'}
                                height={180}
                            />
                        </CardBody>
                    </Card>
                </Link>
                <Link href='https://eat-curious.com/products/fillets/' _hover={{ textDecoration:'none' }}>
                    <Card py={10} borderRadius='20px' bg={'#1ABE71'} minH={{ base:"250px", md:"380px"  }} variant="unstyled">
                        <CardHeader>
                            <Center 
                                color={'#042f1a'}
                                fontSize={'4.9em'}
                                fontWeight={'1000'}
                                letterSpacing={'tighter'}
                                textAlign={'center'}
                                lineHeight={'0.81em'}
                            >
                                CURIOUS FILLETS
                            </Center>
                        </CardHeader>
                        <CardBody>
                            <Image
                                src="/assets/curious-fillets.png"
                                alt="img icons"
                                width={'full'}
                                height={180}
                            />
                        </CardBody>
                    </Card>
                </Link>
                <Link href='https://eat-curious.com/products/burger/' _hover={{ textDecoration:'none' }}>
                    <Card py={10} borderRadius='20px' bg={'#FFB500'} minH={{ base:"250px", md:"380px"  }} variant="unstyled">
                        <CardHeader>
                            <Center 
                                color={'#042f1a'}
                                fontSize={'4.9em'}
                                fontWeight={'1000'}
                                letterSpacing={'tighter'}
                                textAlign={'center'}
                                lineHeight={'0.81em'}
                            >
                                CURIOUS BURGER
                            </Center>
                        </CardHeader>
                        <CardBody>
                            <Image
                                src="/assets/curious-burger.png"
                                alt="img icons"
                                width={'full'}
                                height={180}
                            />
                        </CardBody>
                    </Card>
                </Link>
                <Link href='https://eat-curious.com/products/tenders/' _hover={{ textDecoration:'none' }}>
                    <Card py={10} borderRadius='20px' bg={'#1ABE71'} minH={{ base:"250px", md:"380px"  }} variant="unstyled">
                        <CardHeader>
                            <Center 
                                color={'#042f1a'}
                                fontSize={'4.9em'}
                                fontWeight={'1000'}
                                letterSpacing={'tighter'}
                                textAlign={'center'}
                                lineHeight={'0.81em'}
                            >
                                CURIOUS TENDERS
                            </Center>
                        </CardHeader>
                        <CardBody>
                            <Image
                                src="/assets/curious-tenders.png"
                                alt="img icons"
                                width={'full'}
                                height={180}
                            />
                        </CardBody>
                    </Card>
                </Link>
            </SimpleGrid>
            
            <Center py={10}>
                <Button bg={"#ff73b5"}
                    py={7}
                    color='#042f1a'
                    fontSize={'1.5em'}
                    fontWeight={'1000'}
                    textTransform={'uppercase'}
                    _hover={{ bg:"#ff73b5" }}
                >
                    View All</Button>
            </Center>
        </>
    );
}