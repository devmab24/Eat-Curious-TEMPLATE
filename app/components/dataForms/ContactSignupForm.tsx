'use client'

import {
  Stack,
  Input,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Signup() {
  return (
    <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'full'} px={{ base:'2', md:'10' }}>
      <Input
        type={'text'}
        placeholder={'FULL NAME'}
        color={ '#042f1a'}
        bg={useColorModeValue('white', 'whiteAlpha.500')}
        rounded={'5px'}
        border={0}
        _focus={{
          bg: useColorModeValue('gray.200','#fefefe' ),
          outline: 'none',
        }}
      />
        <Input
        type={'email'}
        placeholder={'EMAIL ADDRESS'}
        color={ '#042f1a'}
        bg={useColorModeValue('white', 'whiteAlpha.500')}
        rounded={'5px'}
        border={0}
        _focus={{
          bg: useColorModeValue('gray.200', '#fefefe'),
          outline: 'none',
        }}
      />
      <Button
        bg='#042f1a'
        rounded={'5px'}
        color={'white'}
        flex={'1 0 auto'}
        _hover={{ bg: '#042f1a' }}
        _focus={{ bg: '#042f1a' }}
      >
        SIGN UP
      </Button>
    </Stack>
  );
}