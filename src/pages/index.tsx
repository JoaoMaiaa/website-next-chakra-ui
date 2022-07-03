import type { NextPage } from 'next'
import {
  Heading,
  Flex,
  Img,
  Box,
  Link,
  Text,
  Container,
  Button,
  Wrap,
  WrapItem,
  Center,
  List,
  ListItem,
  ButtonGroup
} from '@chakra-ui/react'

import NextLink from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Container maxW="container.xl">
        <Box p="4" w="100%" display="flex" justifyContent="end">
          <ButtonGroup>
            <Button size="sm" bg="gray.600" _hover={{ bg: 'gray.500' }}>
              <Link isExternal href="https://facebook.com/eujoaomaia">
                <Img src="/facebook.svg" />
              </Link>
            </Button>
            <Button size="sm" bg="gray.600" _hover={{ bg: 'gray.500' }}>
              <Link isExternal href="https://github.com/JoaoMaiaa">
                <Img src="/github.svg" />
              </Link>
            </Button>
            <Button size="sm" bg="gray.600" _hover={{ bg: 'gray.500' }}>
              <Link isExternal href="https://instagram.com/eumaiajoao">
                <Img src="/instagram.svg" />
              </Link>
            </Button>
            <Button size="sm" bg="gray.600" _hover={{ bg: 'gray.500' }}>
              <Link isExternal href="https://linkedin.com/in/joãomaiaa">
                <Img src="/linkedin.svg" />
              </Link>
            </Button>
          </ButtonGroup>
        </Box>
        <Flex align="center" justifyContent="space-between" flexWrap="wrap">
          <Box id="what-is" px="4" w={{ base: '100%', lg: '50%' }}>
            <Heading size="2xl" color="white">
              Hello World
            </Heading>
            <Text mt="2rem">
              O Chakra UI é uma biblioteca de componentes simples, modular e
              acessível que oferece blocos de construção necessários para
              construir seus aplicativos react
            </Text>
            <NextLink href="/chakra-ui">
              <Button color="black" mt="2rem">
                Ver mais
              </Button>
            </NextLink>
          </Box>
          <Box p="4" w={{ base: '100%', lg: '50%' }}>
            <Img objectFit="cover" borderRadius="5px" src="/code.jpg" />
          </Box>
        </Flex>
      </Container>
      <Container id="idea" maxW="container.xl">
        <Flex justifyContent="center">
          <Box mb="2rem" mt="7rem">
            <Heading as="h2" color="white" size={{ base: 'md', md: 'lg' }}>
              Idéias que se tornam realidades com chakra
            </Heading>
          </Box>
        </Flex>
      </Container>
      <Container maxW="container.xl">
        <Flex justifyContent="center" wrap="wrap">
          <Box
            cursor="pointer"
            transition="0.2s ease-in-out"
            _hover={{ borderColor: 'gray.500' }}
            m="2rem"
            p="6"
            border="1px"
            borderRadius="5px"
            borderColor="gray.700"
          >
            <Img boxSize="80px" src="/start-up(1).png" mx="auto" />
            <Heading
              color="white"
              as="h3"
              size="lg"
              my="1rem"
              textAlign="center"
            >
              Landing page
            </Heading>
            <Box textAlign="center" maxW={{ base: 'sm' }}>
              <Text>
                Tenha uma página para captura de emails ou para direcionar
                pessoas para um grupo no whatsapp
              </Text>
            </Box>
          </Box>
          <Box
            cursor="pointer"
            transition="0.2s ease-in-out"
            _hover={{ borderColor: 'gray.500' }}
            m="2rem"
            p="6"
            border="1px"
            borderRadius="5px"
            borderColor="gray.700"
          >
            <Img boxSize="80px" src="/cooperation.png" mx="auto" />
            <Heading
              color="white"
              as="h3"
              size="lg"
              my="1rem"
              textAlign="center"
            >
              Loja online
            </Heading>
            <Box textAlign="center" maxW={{ base: 'sm' }}>
              <Text>
                Tenha um micro ecommerce e divulgue seus produtos com um site
                feito com componentes modernos
              </Text>
            </Box>
          </Box>
          <Box
            cursor="pointer"
            transition="0.2s ease-in-out"
            _hover={{ borderColor: 'gray.500' }}
            m="2rem"
            p="6"
            border="1px"
            borderRadius="5px"
            borderColor="gray.700"
          >
            <Img boxSize="80px" src="/institute.png" mx="auto" />
            <Heading
              color="white"
              as="h3"
              size="lg"
              my="1rem"
              textAlign="center"
            >
              Site institucional
            </Heading>
            <Box textAlign="center" maxW={{ base: 'sm' }}>
              <Text>
                Já pensou em ter um site para sua instituição, um site para
                apresentação seja ongs, igrejas etc?
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
      <Container maxW="container.xl" mt="4rem">
        <Wrap my="2rem" p="4" display="flex" justifyContent="center">
          <WrapItem display="flex" flexWrap="wrap" justifyContent="center">
            <Box id="landing-page" maxW={{ base: 'md' }} mr="2rem">
              <Heading mb="1rem" color="white">
                Landing Page
              </Heading>
              <Text>
                Landing Pages são páginas de sites que cujos elementos têm um
                principal foco: conversão do visitante ao lead, da oportunidade
                ao cliente. Também conhecidas como páginas de captura, eles são
                mais simples que uma página tradicional elas são centradas na
                oferta central de uma campanha de marketing digital.
              </Text>
              <NextLink href="/landing-page">
                <Button color="black" mt="2rem">
                  Saiba Mais
                </Button>
              </NextLink>
            </Box>
            <Box mt="2rem">
              <Img src="/startup.svg" />
            </Box>
          </WrapItem>
        </Wrap>
        {/* formas diferentes de manipular os elementos */}
        <Flex my="2rem" p="4" justifyContent="center" flexWrap="wrap-reverse">
          <Img
            mt="2rem"
            src="/shop.svg"
            display="flex"
            justifyContent="center"
          />
          <Box id="online-shopping" maxW={{ base: 'md' }}>
            <Heading mb="1rem" color="white">
              Online Shopping
            </Heading>
            <Text>
              Um e-commerce, ou comércio eletrônico refere-se aos negócios que
              estruturam seu processo de compra e venda na internet. Assim,
              todas as transações comerciais são realizadas por meio de
              ferramentas online.
            </Text>
            <NextLink href="/online-shopping">
              <Button color="black" mt="2rem">
                Saiba Mais
              </Button>
            </NextLink>
          </Box>
        </Flex>
        <Flex p="4" my="2rem" justifyContent="center" flexWrap="wrap">
          <Box id="institucional-website" maxW={{ base: 'md' }} mr="2rem">
            <Heading mb="1rem" color="white">
              Institutional Website
            </Heading>
            <Text>
              Um site institucional de sucesso é aquele que foi feito sob medida
              para suprir as necessidades da empresa, dos clientes e dos
              principais interessados. Sendo assim, é uma ferramenta importante
              de comunicação da empresa com o público
            </Text>
            <NextLink href="/institutional-website">
              <Button color="black" mt="2rem">
                Saiba Mais
              </Button>
            </NextLink>
          </Box>
          <Img
            display="flex"
            justifyContent="center"
            mt="2rem"
            src="/buesiness-conference.svg"
          />
        </Flex>
      </Container>
      <Container maxW="container.xl">
        <Flex gap="2rem" justify="space-between" wrap="wrap">
          <Box>
            <Heading as="h3" size="md">
              Menu
            </Heading>
            <Box mt="1rem" mb="2rem">
              <List>
                <Link href="#what-is">
                  <ListItem my="1">O que é o chakra ui?</ListItem>
                </Link>
                <Link href="#idea">
                  <ListItem my="1">O que é possível fazer?</ListItem>
                </Link>
                <Link href="#landing-page">
                  <ListItem my="1">Landing page</ListItem>
                </Link>
                <Link href="#online-shopping">
                  <ListItem my="1">Online shop</ListItem>
                </Link>
                <Link href="#institucional-website">
                  <ListItem my="1">Institucional website</ListItem>
                </Link>
              </List>
            </Box>
          </Box>
          <Box>
            <Heading as="h3" size="md">
              Contato
            </Heading>
            <Box mt="1rem" mb="2rem">
              <List>
                <ListItem>Email: 15joaomaia@gmail.com</ListItem>
                <ListItem>
                  Celular:{' '}
                  <Link
                    isExternal
                    href="https://api.whatsapp.com/send?phone=5521987050273&text=Ol%C3%A1%20gostaria%20de%20saber%20como%20eu%20poderia%20ter%20um%20site"
                  >
                    21 98705-0273
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box>
            <Heading as="h3" size="md">
              Precisa de um site?
            </Heading>
            <Box mt="1rem" mb="2rem" maxW={{ base: '250px' }}>
              <Text>
                Responda o formulário com algumas informações no google forms e
                retonarei o contato em breve.
              </Text>
            </Box>
            <NextLink href="#">
              <Button color="black" bg="gray.200">
                Enviar
              </Button>
            </NextLink>
          </Box>
        </Flex>
      </Container>
      <Container>
        <Center>
          <Box my="2rem">
            <Text color="gray.700">
              Feito por{' '}
              <Link
                isExternal
                // target="_blank"
                color="gray.500"
                href="https://github.com/JoaoMaiaa"
              >
                João Maia
              </Link>
            </Text>
          </Box>
        </Center>
      </Container>
      {/* pegar ilustrações para site */}
      {/* 3 elementos */}
      {/* explicar elementos 1 por 1 da direita pra esquerda*/}
      {/* parte de contato */}
      {/* footer */}
    </>
  )
}

export default Home
