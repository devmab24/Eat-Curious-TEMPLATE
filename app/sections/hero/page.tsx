'use client'

import Image from 'next/image'
import { Box, Heading, Stack } from '@chakra-ui/react';
import { useMediaQuery } from "@chakra-ui/react";
import { useAnimate, usePresence } from "framer-motion"
import { useEffect } from 'react';

const Hero = () => {

    const [scope, animate] = useAnimate()
    const [isPresent, safeToRemove] = usePresence()
    const [isLargerThanMd] = useMediaQuery("(min-width: 768px)");
    const headingText = isLargerThanMd ? "MEAT-FREE" : "MEAT FREE";
    const headingStyles = {
      textAlign: 'center',
      color: '#fff',
      fontFamily: 'fantasy',
      fontWeight: 'extrabold',
      letterSpacing: { base: '-8px', md: '-16px', lg: '-26px' },
      lineHeight: { base: '5rem', md: 'none' },
      fontSize: { base: '6rem', md: '8rem', lg: '11rem' },
    };

    useEffect(() => {
      if (isPresent) {
        const enterAnimation = async () => {
          await Promise.all([
            animate(
              scope.current.children[0], // top header
              { opacity: [0, 1] },
              { duration: 0.5, delay: 0.3 }
            ),
            animate(
              scope.current.children[1], // middle image
              { opacity: [0, 1] },
              { duration: 0.5, delay: 0.6 }
            ),
            animate(
              scope.current.children[2], // bottom header
              { opacity: [0, 1] },
              { duration: 0.5, delay: 1 }
            )
          ]);
        }
        enterAnimation()
      } else {
        const exitAnimation = async () => {
          await animate(
            scope.current,
            { opacity: [0, 1] },
            {duration: 0.5, delay: 0.3}
          )
          safeToRemove()
        }
        exitAnimation()
      }
    });

    return (
        <section>
            <Stack ref={scope} position='relative' w='100%' alignItems='center' justifyContent='center'>
                <Box mb={{ base: '9rem', md: '0' }} zIndex={1} w='fit-content'>
                    <Heading sx={headingStyles}>{headingText}</Heading>
                </Box>
                <Box position='absolute' zIndex={2} w='fit-content'>
                    <div style={{ position: 'absolute', top: '6rem', left: '0' }}>
                        <Image src="/hero-line1.png" alt="burger" width={70} height={70} />
                    </div>
                    <Image src="/burger.png" alt="burger" height={400} width={400} />
                    <div style={{ position: 'absolute', top: '6rem', right: '0' }}>
                        <Image src="/twistline2.png" alt="burger" width={70} height={70} />
                    </div>
                    <div style={{ position: 'absolute', top: '0', right: '0', left: '8rem' }}>
                        <Image src="/twistline3.png" alt="burger" width={70} height={70} />
                    </div>
                </Box>
                <Box mt={{ base: '9rem', md: '0' }} my={10} zIndex={3} w='fit-content'>
                    <Heading sx={headingStyles}>YOUR MIND</Heading>
                </Box>
            </Stack>
        </section>
    );
}

export default Hero;