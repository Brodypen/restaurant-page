import { Box, Flex, Heading } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import HamburgerMenu from './HamburgerMenu'

const TopNavBar = () => {
    const [isMobileSize] = useMediaQuery('(min-width: 480px)');
  return (
    <Flex justifyContent="space-between">
    <Heading>Donut Store</Heading>
    {isMobileSize? <Box></Box> : <HamburgerMenu/>}
    </Flex>
  )
}

export default TopNavBar