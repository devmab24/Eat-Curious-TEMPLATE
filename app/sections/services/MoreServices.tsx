'use client'

import { motion } from 'framer-motion';
import styles from './styles.module.css';
import { Box, Flex, Container } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

function Page() {
    const { ref: myRef, inView: myElementIsVisible } = useInView();

    const cards = [
        {
            href: '/product',
            bgImage: '/curious-katsu-1.jpg',
            title: 'CURIOUS KATSU CURRY',
        },
        {
            href: '/product',
            bgImage: '/scrummy-sliders-2.jpg',
            title: 'CURIOUS MEATBALLS',
        },
        {
            href: '/product',
            bgImage: '/scrumptious-sausages-3.jpg',
            title: 'CURIOUS BANGERS & MASH',
        },
    ];

    const cardVariants = {
        hidden: { scale: 0 },
        visible: (index: number) => ({
            scale: 1,
            transition: { duration: 0.5, delay: index * 0.5 },
        }),
    };

    return (
        <motion.div
            ref={myRef}
            initial="hidden"
            animate={myElementIsVisible ? 'visible' : 'hidden'}
        >
            <Container
                m='0'
                p='0'
                gap={5}
                maxW="100vw"
                justifyContent="center"
                >
                <Flex 
                    gap={'10'}
                    wrap="wrap"
                    color="white"
                    justifyContent="space-between"
                    flexDir={{ base: 'column', md: 'row' }}
                >
                    {cards.map((card, index) => (
                        <motion.div
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            animate={myElementIsVisible ? 'visible' : 'hidden'}
                            key={index}
                        >
                            <Link href={card.href} style={{
                                borderRadius: '10px',
                                position: 'relative',
                                overflow: 'hidden',
                            }}>
                                <Box
                                    flex="1"
                                    borderRadius="10px"
                                    bgImage={card.bgImage}
                                    backgroundSize="cover"
                                    className={styles.cards}
                                    backgroundPosition="center"
                                    backgroundRepeat="no-repeat"
                                    h={{ base:'35rem', md:"30rem" }}
                                    w={{ base: '100%', md: '17rem' }}
                                >
                                </Box>
                            </Link>
                        </motion.div>
                    ))}
                </Flex>
            </Container>
        </motion.div>
    );
}

export default Page;