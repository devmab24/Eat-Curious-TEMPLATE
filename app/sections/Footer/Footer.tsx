'use client'

import { Box, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import styles from './styles.module.css'

function Footer() {
  const textContent = [
    '100% PLANT BASED | DAIRY FREE | PACKED WITH FLAVOUR ',
    '| 100% PLANT BASED | DAIRY FREE | PACKED WITH FLAVOUR ',
    '| 100% PLANT BASED | DAIRY FREE | PACKED WITH FLAVOUR ',
    '| 100% PLANT BASED | DAIRY FREE | PACKED WITH FLAVOUR ',
  ];

  return (
    <Flex
      w="100%"
      overflow="hidden"
      bottom={0}
      align="center"
      bg="#ff73b5"
      h="fit-content"
      style={{ zIndex: 10 }}
      position="fixed"
    >
      <Box
        h="100%"
        w="100%"
        fontSize="1.5em"
        color="#042f1a"
        fontWeight="1000"
        textAlign="center"
        overflow="hidden"
      >
        <motion.div
          className={styles.marquee}
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {textContent.map((text, index) => (
            <span className={styles.marqueeSpan} key={index}>
              {text}
            </span>
          ))}
        </motion.div>
      </Box>
    </Flex>
  );
}

export default Footer;

// import { Box, Flex } from '@chakra-ui/react';
// import { motion } from 'framer-motion';

// function Footer() {
//   const textContent = [
//     '100% PLANT BASED | DAIRY FREE | PACKED WITH FLAVOUR ',
//     '| 100% PLANT BASED | DAIRY FREE | PACKED WITH FLAVOUR ',
//     '| 100% PLANT BASED | DAIRY FREE | PACKED WITH FLAVOUR ',
//     '| 100% PLANT BASED | DAIRY FREE | PACKED WITH FLAVOUR ',
//   ];

//   return (
//     <Flex
//       w={'100%'}
//       overflow='hidden'
//       bottom={0}
//       align='center'
//       bg="#ff73b5"
//       h={'fit-content'}
//       style={{ zIndex: 10 }}
//       position={'fixed'}
//     >
//       <Box
//         h='100%'
//         w={'100%'}
//         fontSize='1.5em'
//         color={'#042f1a'}
//         fontWeight={'1000'}
//         textAlign={'center'}
//         overflow='hidden'
//       >
//         <motion.div
//           className='marquee'
//           initial={{ x: '100%' }}
//           animate={{ x: '-100%' }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: 'linear',
//           }}
//         >
//           {textContent.map((text, index) => (
//             <span key={index}>
//               {text}
//             </span>
//           ))}
//         </motion.div>
//       </Box>
//     </Flex>
//   );
// }

// export default Footer;

// import { Box, Flex } from '@chakra-ui/react';
// import { motion } from 'framer-motion';

// function Footer() {
//   return (
//     <Flex
//       overflow='hidden'
//       bottom={0}
//       align='center'
//       bg="#ff73b5"
//       h={'fit-content'}
//       style={{ zIndex: 10 }}
//       position={'fixed'}
//     >
//       <Box
//         h='100%'
//         w={'100%'}
//         fontSize='1.5em'
//         color={'#042f1a'}
//         fontWeight={'1000'}
//         textAlign={'center'}
//         overflow='hidden'
//       >
//         <motion.div
//           className='marquee'
//           initial={{ x: '100%' }}
//           animate={{ x: '-100%' }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: 'linear',
//           }}
//         >
//           100% PLANT BASED | DAIRY FREE | PACKED WITH FLAVOUR | 100% PLANT BASED | DAIRY FREE | PACKED WITH FLAVOUR | 100% PLANT BASED | DAIRY FREE | PACKED WITH FLAVOUR | 100% PLANT BASED | DAIRY FREE | PACKED WITH FLAVOUR
//         </motion.div>
//       </Box>
//     </Flex>
//   );
// }

// export default Footer;

// import { Box, Flex } from '@chakra-ui/react';

// function Footer() {
//   return (
//     <Flex
//       overflow='hidden'
//       bottom={0}
//       align='center'
//       bg="#ff73b5"
//       h={'fit-content'}
//       style={{ zIndex: 10 }}
//       position={'fixed'}
//     >
//       <Box
//         h='100%'
//         w={'100%'}
//         fontSize='1.5em'
//         color={'#042f1a'}
//         fontWeight={'1000'}
//         textAlign={'center'}
//         overflow='hidden'
//       >
//         <div className='marquee'>
//           <div>
//             100% PLANT BASED | DAIRY FREE | PACKED WITH FLAVOUR | 100% PLANT BASED | DAIRY FREE | PACKED WITH FLAVOUR | 100% PLANT BASED | DAIRY FREE | PACKED WITH FLAVOUR | 100% PLANT BASED | DAIRY FREE | PACKED WITH FLAVOUR
//           </div>
//         </div>
//       </Box>
//     </Flex>
//   );
// }

// export default Footer;

// import { Box, Flex } from '@chakra-ui/react';

// function Footer() {
//   return (
//     <Flex
//       overflowY={'scroll'}
//       bottom={0}
//       align='center'
//       bg="#ff73b5"
//       h={'fit-content'}
//       style={{ zIndex: 10 }}
//       position={'fixed'}
//     >
//       <Box
//         h='100%'
//         w={'100%'}
//         fontSize='1.5em'
//         color={'#042f1a'}
//         fontWeight={'1000'}
//         textAlign={'center'}
//         overflow='hidden'
//       >
//         <div >
//           <div className='marquee'>
//             100% PLANT BASED | DAIRY FREE | PACKED WITH FLAVOUR | 100% PLANT BASED | DAIRY FREE | PACKED WITH FLAVOUR | 100% PLANT BASED | DAIRY FREE | PACKED WITH FLAVOUR | 100% PLANT BASED | DAIRY FREE | PACKED WITH FLAVOUR
//           </div>
//         </div>
//       </Box>
//     </Flex>
//   );
// }

// export default Footer;

// import { Box, Flex } from '@chakra-ui/react'

// function Footer() {
//   return (
//     <Flex overflowY={'scroll'} bottom={0} align='center' bg="#ff73b5" h={'fit-content'} style={{ zIndex: 10 }} position={'fixed'}>
//       <Box 
//         h='100%' 
//         w={'100%'} 
//         fontSize='1.5em'
//         color={'#042f1a'} 
//         fontWeight={'1000'}
//         textAlign={'center'} 
//       >
//         <marquee direction="left" behavior="scroll" scrollamount="infinite">
//           * 100% PLANT BASED * DAIRY FREE * PACKED WITH FLAVOUR * 100% PLANT BASED * DAIRY FREE * PACKED WITH FLAVOUR * 100% PLANT BASED * DAIRY FREE * PACKED WITH FLAVOUR * 100% PLANT BASED * DAIRY FREE * PACKED WITH FLAVOUR *
//         </marquee>
//       </Box>
//     </Flex>
//   )
// }

// export default Footer