'use client'

import { motion } from 'framer-motion';
import styles from './styles.module.css';
import { Link } from '@chakra-ui/next-js';
import { useInView } from 'react-intersection-observer';
import { Box, Flex } from '@chakra-ui/react';

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
            // className={`${styles.container}`}
            animate={myElementIsVisible ? 'visible' : 'hidden'}
        >
            <Flex
                gap={5}
                w="100%"
                wrap="wrap"
                color="white"
                align="center"
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
                        <Link href={card.href} _hover={{ textDecoration: 'none' }} className={styles.parent}>
                            <Box
                                flex="1"
                                borderRadius="10px"
                                backgroundSize="cover"
                                className={styles.cards}
                                backgroundPosition="center"
                                backgroundRepeat="no-repeat"
                                bgImage={`url(${card.bgImage})`}
                                w={{ base: '22rem', md: '17rem' }}
                                h={{ base:'100vh', md:"30rem" }}
                                minH={{ base:'100vh', md:"30rem" }}
                            >
                            </Box>
                        </Link>
                    </motion.div>
                ))}
            </Flex>
        </motion.div>
    );
}

export default Page;