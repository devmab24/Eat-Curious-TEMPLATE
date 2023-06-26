// 'use client'

// import { useState } from "react";
// import { Box, Flex } from "@chakra-ui/react";
// import { Image } from "@chakra-ui/next-js";

// function ScrollingImg() {
  
//     const [ contributors, setContributors ] = useState([
//       {
//          "img": "/images/1.png"
//       },
//       {
//          "img": "/images/2.png"
//       },
//       {
//          "img": "/images/3.jpeg"
//       },
//       {
//          "img": "/images/4.png"
//       },
//       {
//          "img": "/images/5.jpeg"
//       },
//       {
//          "img": "/images/6.jpeg"
//       },
//       {
//          "img": "/images/7.png"
//       },
//       {
//          "img": "/images/8.jpeg"
//       },
//       {
//          "img": "/images/9.png"
//       },
//       {
//          "img": "/images/10.png"
//       },
//       {
//          "img": "/images/11.png"
//       },
//       {
//          "img": "/images/12.jpeg"
//       },
//       {
//          "img": "/images/13.jpeg"
//       },
//       {
//          "img": "/images/14.png"
//       },
//       {
//          "img": "/images/15.jpeg"
//       },
//       {
//          "img": "/images/16.jpeg"
//       },
//       {
//          "img": "/images/17.png"
//       },
//       {
//          "img": "/images/18.jpeg"
//       },
//       {
//          "img": "/images/19.jpeg"
//       },
//       {
//          "img": "/images/20.png"
//       },
//       {
//          "img": "/images/21.jpeg"
//       },
//       {
//          "img": "/images/22.png"
//       },
//       {
//          "img": "/images/23.png"
//       },
//       {
//          "img": "/images/24.png"
//       },
//     ])

//     return (
//         <>
//             <Flex gap={10}>
//                 {contributors.map((contributor, index) => (
//                     <Image 
//                         key={index}
//                         alt=""
//                         width={50}
//                         height={50}
//                         src={contributor.img}
//                     />
//                 ))}
//             </Flex>
//         </>
//     );
// }

// export default ScrollingImg;