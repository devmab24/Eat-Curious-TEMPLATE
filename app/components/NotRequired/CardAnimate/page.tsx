// 'use client'

// import { useEffect } from 'react';
// import styles from './style.module.css';
// import { Card, CardBody, CardHeader, Center, HStack } from '@chakra-ui/react';

// const Cards = () => {
  
//   useEffect(() => {
    
//     const hiddenElements = document.querySelectorAll('.hiddenCards');
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         console.log(entry);
//         if (entry.isIntersecting) {
//           entry.target.classList.add('show');
//         } else {
//           entry.target.classList.remove('show');
//         }
//       });
//     });
    
//     hiddenElements.forEach((el) => observer.observe(el));
  
//     // Clean up the observer when the component unmounts
//     return () => {
//       hiddenElements.forEach((el) => observer.unobserve(el));
//     };
//   }, []); // Empty dependency array as we don't have any external dependencies

//   return (
//     <>
//       <div className={styles.cardContainer}>
//         <div className={styles.hiddenCards}>
//           <Center py={10}>
//             <HStack align="center" gap={5}>
//               <Card className={styles.cardContent} maxW="20em" textAlign={'center'}>
//                 <CardHeader>
//                   <h2>Card Header</h2>
//                 </CardHeader>
//                 <CardBody>
//                   <p>
//                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus iusto rem deleniti sit,
//                     nesciunt doloremque facere, similique, ab pariatur odio dolores officiis fugit assumenda a ducimus
//                     nemo quia quibusdam? Provident.
//                   </p>
//                 </CardBody>
//               </Card>
//               <Card className={styles.cardContent} maxW="20em" textAlign={'center'}>
//                 <CardHeader>
//                   <h2>Card Header</h2>
//                 </CardHeader>
//                 <CardBody>
//                   <p>
//                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus iusto rem deleniti sit,
//                     nesciunt doloremque facere, similique, ab pariatur odio dolores officiis fugit assumenda a ducimus
//                     nemo quia quibusdam? Provident.
//                   </p>
//                 </CardBody>
//               </Card>
//               <Card className={styles.cardContent} maxW="20em" textAlign={'center'}>
//                 <CardHeader>
//                   <h2>Card Header</h2>
//                 </CardHeader>
//                 <CardBody>
//                   <p>
//                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus iusto rem deleniti sit,
//                     nesciunt doloremque facere, similique, ab pariatur odio dolores officiis fugit assumenda a ducimus
//                     nemo quia quibusdam? Provident.
//                   </p>
//                 </CardBody>
//               </Card>
//               <Card className={styles.cardContent} maxW="20em" textAlign={'center'}>
//                 <CardHeader>
//                   <h2>Card Header</h2>
//                 </CardHeader>
//                 <CardBody>
//                   <p>
//                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus iusto rem deleniti sit,
//                     nesciunt doloremque facere, similique, ab pariatur odio dolores officiis fugit assumenda a ducimus
//                     nemo quia quibusdam? Provident.
//                   </p>
//                 </CardBody>
//               </Card>           
//             </HStack>
//           </Center>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cards;