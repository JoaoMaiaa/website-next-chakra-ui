import { NextPage } from 'next'
import { Container, Heading, Text, Box } from '@chakra-ui/react'

import NextLink from 'next/link'

const OnlineShopping: NextPage = () => {
  return (
    <>
      <Container maxW="container.lg" py="4">
        <Box display="flex" justifyContent="end" mb="2" mx="6">
          <NextLink href="/">Voltar</NextLink>
        </Box>
        <Heading size="2xl" textAlign="center" color="white">
          Online Shopping
        </Heading>
        <Text mt="2rem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          eveniet explicabo unde voluptatum fuga doloribus, labore repellat,
          iure animi vitae error esse assumenda molestiae? Accusantium ducimus
          saepe odio eius cumque provident, amet in debitis vel tempore dolorum
          quam quo error iusto laudantium inventore nisi quidem sapiente velit.
          Sequi, quam provident?
        </Text>
      </Container>
    </>
  )
}

export default OnlineShopping
