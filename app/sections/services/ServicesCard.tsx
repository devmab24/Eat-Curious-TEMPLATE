'use client'

import Link from "next/link";
import Image from "next/image";
import CustomButton from "@/app/components/Button";
import { Card, CardBody, Flex, Heading } from "@chakra-ui/react";

export default function ServicesCard() {
  const products = [
    {
      href: "https://eat-curious.com/products/bangers/",
      bg: "#F95B77",
      title: "CURIOUS BANGERS",
      imageSrc: "/assets/curious-bangers-1.png",
    },
    {
      href: "https://eat-curious.com/products/roast/",
      bg: "#1ABE71",
      title: "CURIOUS ROAST",
      imageSrc: "/assets/curious-roast.png",
    },
    {
      href: "https-://eat-curious.com/products/block/",
      bg: "#FFB500",
      title: "CURIOUS BLOCK",
      imageSrc: "/assets/curious-block.png",
    },
    {
      href: "https://eat-curious.com/products/fillets/",
      bg: "#1ABE71",
      title: "CURIOUS FILLETS",
      imageSrc: "/assets/curious-fillets.png",
    },
    {
      href: "https://eat-curious.com/products/burger/",
      bg: "#FFB500",
      title: "CURIOUS BURGER",
      imageSrc: "/assets/curious-burger.png",
    },
    {
      href: "https://eat-curious.com/products/tenders/",
      bg: "#1ABE71",
      title: "CURIOUS TENDERS",
      imageSrc: "/assets/curious-tenders.png",
    },
  ];

  return (
    <Flex gap={5} flexDir='column' align='center'>
      <Flex gap='6' wrap="wrap" justifyContent='center' align="center" color="white">
        {products.map((product, index) => (
          <Link href={product.href} key={index} >
            <Card gap='1rem' py='1rem' h='17rem' w='16.5rem' borderRadius="20px" bg={product.bg} variant="unstyled">
              <Heading
                color="#042f1a"
                fontSize="3rem"
                fontWeight="1000"
                letterSpacing="tighter"
                textAlign="center"
                lineHeight="0.81em"
              >
                  {product.title}
              </Heading>
              <CardBody position='relative'>
                <Image src={product.imageSrc} alt="img icons" fill />
              </CardBody>
            </Card>
          </Link>
        ))}
      </Flex>
      <CustomButton label={"View All"} colorScheme={""} />
    </Flex>
  );
}