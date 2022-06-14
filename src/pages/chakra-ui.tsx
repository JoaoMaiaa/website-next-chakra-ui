import { NextPage } from 'next'

import { Container, Heading, Text, Box } from '@chakra-ui/react'

import NextLink from 'next/link'

const ChakraUi: NextPage = () => {
  return (
    <>
      <Container maxW="container.lg" py="4">
        <Box display="flex" justifyContent="end" mb="2" mx="6">
          <NextLink href="/">Voltar</NextLink>
        </Box>
        <Heading size="2xl" color="white" textAlign="center">
          O que é o Chakra UI?
        </Heading>
        <Text mt="2rem">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
          laboriosam libero culpa consectetur ea qui voluptatibus? Beatae
          aliquam impedit laudantium perspiciatis ea blanditiis fuga hic id
          officia? Rem nisi officiis delectus dolores est nobis. Atque
          consectetur, consequatur mollitia explicabo voluptates cum temporibus
          repudiandae voluptatibus quas quis perferendis. Voluptate, qui
          laboriosam?
        </Text>
      </Container>
    </>
  )
}

export default ChakraUi
