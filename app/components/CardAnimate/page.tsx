// 'use client'

// import styles from './style.module.css';
// import { useInView } from 'react-intersection-observer';
// import { Card, CardBody, CardHeader, Center, HStack } from '@chakra-ui/react';

// const AnimatingCards = () => {

//     const { ref: myRef, inView: myElementIsVisible } = useInView();
   
//     return (
//         <>
//             <div className={styles.cardContainer}>
//                 <div ref={myRef} className={`${styles.hiddenCard} ${myElementIsVisible ? styles.show : ''} `}>
//                     <Center py={10}>
//                         <HStack align="center" gap={5}>
//                             <Card className={styles.cardContent} maxW="20em" textAlign={'center'}>
//                                 <CardHeader>
//                                 <h2>Card Header</h2>
//                                 </CardHeader>
//                                 <CardBody>
//                                 <p>
//                                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus iusto rem deleniti sit,
//                                     nesciunt doloremque facere, similique, ab pariatur odio dolores officiis fugit assumenda a ducimus
//                                     nemo quia quibusdam? Provident.
//                                 </p>
//                                 </CardBody>
//                             </Card>
//                             <Card className={styles.cardContent} maxW="20em" textAlign={'center'}>
//                                 <CardHeader>
//                                 <h2>Card Header</h2>
//                                 </CardHeader>
//                                 <CardBody>
//                                 <p>
//                                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus iusto rem deleniti sit,
//                                     nesciunt doloremque facere, similique, ab pariatur odio dolores officiis fugit assumenda a ducimus
//                                     nemo quia quibusdam? Provident.
//                                 </p>
//                                 </CardBody>
//                             </Card>
//                             <Card className={styles.cardContent} maxW="20em" textAlign={'center'}>
//                                 <CardHeader>
//                                 <h2>Card Header</h2>
//                                 </CardHeader>
//                                 <CardBody>
//                                 <p>
//                                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus iusto rem deleniti sit,
//                                     nesciunt doloremque facere, similique, ab pariatur odio dolores officiis fugit assumenda a ducimus
//                                     nemo quia quibusdam? Provident.
//                                 </p>
//                                 </CardBody>
//                             </Card>
//                             <Card className={styles.cardContent} maxW="20em" textAlign={'center'}>
//                                 <CardHeader>
//                                 <h2>Card Header</h2>
//                                 </CardHeader>
//                                 <CardBody>
//                                 <p>
//                                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus iusto rem deleniti sit,
//                                     nesciunt doloremque facere, similique, ab pariatur odio dolores officiis fugit assumenda a ducimus
//                                     nemo quia quibusdam? Provident.
//                                 </p>
//                                 </CardBody>
//                             </Card>           
//                         </HStack>
//                     </Center>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default AnimatingCards;

// //  const myRef = useRef();
// //     const [  myElementIsVisible, setMyElementIsVisible ] = useState();
    
// //     useEffect(() => {
// //         const observer = new IntersectionObserver((entries) => {
// //             const entry = entries [0]//Using this since we're observing one element
// //             setMyElementIsVisible(entry.isIntersecting)
// //             // entries.forEach((entry) => {
// //                 // if (entry.isIntersecting) {
// //                 // entry.target.classList.add('show');
// //                 // } else {
// //                 // entry.target.classList.remove('show');
// //                 // }
// //             // });
// //         })
// //         observer.observe(myRef.current);
// //     }, []); // Empty dependency array as we don't have any external dependencies
