import { NextPage } from 'next'

import { Container, Heading, Box, Text } from '@chakra-ui/react'

import NextLink from 'next/link'

const InstitucionalWebsite: NextPage = () => {
  return (
    <>
      <Container maxW="container.lg" py="4">
        <Box display="flex" justifyContent="end" mb="2" mx="6">
          <NextLink href="/">Voltar</NextLink>
        </Box>
        <Heading size="2xl" textAlign="center" color="white">
          Institutional Website
        </Heading>
        <Text mt="2rem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odio
          porro esse officia, deleniti asperiores! Harum quas sint ut
          reprehenderit ipsa odit nemo debitis magnam est maxime esse,
          consectetur, placeat possimus explicabo tenetur quaerat, pariatur
          aliquid quam aliquam. Alias ducimus repellat ipsa ut quo enim vitae
          iure, quia dolore omnis?
        </Text>
      </Container>
    </>
  )
}

export default InstitucionalWebsite
