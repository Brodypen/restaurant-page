import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <Flex direction='column' justifyContent="center" align="center" gap={6} margin={5}>
        <Heading fontSize="6xl">Contact Form</Heading>
        <Text fontSize='lg'>We are here to help!</Text>
        <ContactForm/>
    </Flex>
  )
}

export default Contact