'use client'

import { useState } from "react";
import { Box, Button, Card, CardBody, CardHeader, Center, Image, SimpleGrid } from "@chakra-ui/react";

export default function ProductsCard() {

    const [productsCard, setProductsCard] = useState([
        {
        "title": "CURIOUS BANGERS",
        "img": "/assets/curious-bangers-1.png"
        },
        {
        "title": "CURIOUS ROAST",
        "img": "/assets/curious-burger.png"
        },
        {
        "title": "CURIOUS BLOCK",
        "img": "/assets/curious-roast.png"
        },
        {
        "title": "CURIOUS FILLETS",
        "img": "/assets/curious-block.png"
        },
        {
        "title": "CURIOUS BURGER",
        "img": "/assets/curious-fillets.png"
        },
        {
        "title": "CURIOUS TENDERS",
        "img": "/assets/curious-tenders.png"
        }
    ]);

    return (
        <>
            <SimpleGrid pt="2em" p="10px" minChildWidth="300px" spacing={8}>
                {productsCard.map((product, index) => (
                    <Card borderRadius='20px' bg={'transparent'} key={index} minH={{ base:"250px", md:"300px"  }} variant="unstyled">
                        <CardHeader>
                            <Center 
                                fontSize={'4em'}
                                fontWeight={'1000'}
                                letterSpacing={'tighter'}
                                textAlign={'center'}
                                lineHeight={'0.81em'}
                            >
                                {product.title}
                            </Center>
                        </CardHeader>
                        <CardBody>
                            <Image
                                src={product.img}
                                alt="img icons"
                                width={'full'}
                                height={300}
                            />
                        </CardBody>
                    </Card>
                ))}
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