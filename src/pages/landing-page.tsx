import { NextPage } from 'next'

import { Heading, Container, Text, Box } from '@chakra-ui/react'

import NextLink from 'next/link'

const LandingPage: NextPage = () => {
  return (
    <>
      <Container maxW="container.lg" py="4">
        <Box display="flex" justifyContent="end" mb="2" mx="6">
          <NextLink href="/">Voltar</NextLink>
        </Box>
        <Heading textAlign="center" color={'white'}>
          Landing page
        </Heading>
        <Text mt="2rem">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          dolorem accusamus a doloribus dolore eum nisi repellat, sequi unde
          velit ab architecto molestiae pariatur tempora laudantium voluptatum
          officiis maiores. Distinctio, deleniti perspiciatis? Laudantium
          voluptates itaque quod numquam. Itaque sequi numquam quaerat,
          reiciendis expedita quod tenetur culpa voluptates. Mollitia, voluptate
          minus?
        </Text>
      </Container>
    </>
  )
}

export default LandingPage
