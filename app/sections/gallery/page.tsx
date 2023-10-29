'use client'

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Flex } from '@chakra-ui/layout';

const GallerySlides = () => {
    const imageSources = [
        "/images/1.png", "/images/2.png", "/images/3.jpeg", "/images/4.png", "/images/5.jpeg",
        "/images/6.jpeg", "/images/7.png", "/images/8.jpeg", "/images/9.png", "/images/10.png",
        "/images/11.png", "/images/12.jpeg", "/images/13.jpeg", "/images/14.png", "/images/15.jpeg",
        "/images/16.jpeg", "/images/17.png", "/images/18.jpeg", "/images/19.jpeg", "/images/20.png",
        "/images/21.jpeg", "/images/22.png", "/images/23.png", "/images/24.png", "/images/25.png",
    ];

    return (
        <section>
            <Flex pb='4rem' pt='4rem' display={[ 'none', 'none', 'flex', 'flex' ]}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={8}
                    // pagination={{ clickable: true }}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                >
                    {imageSources.map((src, index) => (
                        <SwiperSlide key={index}>
                            <Image src={src} alt={`img-${index}`} width={200} height={30} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Flex>
            <Flex pb='2rem' pt='2rem' display={[ 'flex', 'flex', 'none', 'none' ]}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={3}
                    // pagination={{ clickable: true }}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                >
                    {imageSources.map((src, index) => (
                        <SwiperSlide key={index}>
                            <Image src={src} alt={`img-${index}`} width={100} height={30} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Flex>
        </section>
    );
}

export default GallerySlides;

// breakpoints={{
//     640: {
//         slidesPerView: 3,
//         spaceBetween: 20,
//     },
//     768: {
//         slidesPerView: 5,
//         spaceBetween: 20,
//     },
//     1024: {
//         slidesPerView: 8,
//         spaceBetween: 50,
//     },
// }}