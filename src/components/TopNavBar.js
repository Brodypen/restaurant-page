import {Flex, Heading } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import NavMenu from './NavMenu';

const TopNavBar = () => {
  const [isMobileSize] = useMediaQuery('(min-width: 480px)');
  return (
    <Flex justifyContent="space-between">
      <Heading style={{whiteSpace: 'nowrap'}} fontSize="3xl">Donut Store</Heading>
      {isMobileSize ? <NavMenu /> : <HamburgerMenu />}
    </Flex>
  );
};

export default TopNavBar;
