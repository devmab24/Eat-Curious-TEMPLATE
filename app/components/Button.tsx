'use client'

import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

interface CustomButtonProps {
    label: string;
    colorScheme: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, colorScheme }) => {
    return (
        <ChakraButton bg="#ff73b5" _hover={{ bg:"#ff73b5" }} colorScheme={colorScheme} color="#042f1a" fontWeight="extrabold" w='fit-content' size="sm" fontSize='16px'>
            {label}
        </ChakraButton>
    );
};

export default CustomButton;