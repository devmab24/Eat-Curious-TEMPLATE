import { motion } from 'framer-motion';
import styles from './styles.module.css';
import { Link } from '@chakra-ui/next-js';
import { useInView } from 'react-intersection-observer';
import { Box, Heading, Flex } from '@chakra-ui/react';

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

    return (
        <Flex
            gap={5}
            w="100%"
            wrap="wrap"
            ref={myRef}
            color="white"
            align='center'
            justifyContent='space-between'
            flexDir={{ base: 'column', md: 'row' }}
            className={`${styles.container} ${myElementIsVisible ? styles.animate : ''}`}
        >
            {cards.map((card, index) => (
                <Link href={card.href} _hover={{ textDecoration: 'none' }} className={styles.parent} key={index}>
                    <Box
                        flex="1"
                        h="30rem"
                        bgSize="cover"
                        borderRadius="10px"
                        bgImage={card.bgImage}
                        className={styles.cards}
                        w={{ base:'100%', md:"17rem" }}
                    >
                        <Heading fontSize="3.8em" fontWeight="1000" lineHeight="0.8em" letterSpacing="tighter" textAlign="center">
                            {card.title}
                        </Heading>
                    </Box>
                </Link>
            ))}
        </Flex>
    );
}

export default Page;