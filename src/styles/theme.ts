import { extendTheme } from '@chakra-ui/react'
const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth'
      },
      // styles for the `body`
      body: {
        bg: 'gray.900',
        color: 'gray.500'
      }
    }
  }
})

export default theme
