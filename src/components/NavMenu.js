import { Button, HStack, Link, Menu, Box, Spacer } from '@chakra-ui/react';
import React from 'react';
import { FaHome, FaBook, FaInfo, FaGithub } from 'react-icons/fa';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import HamburgerMenu from './HamburgerMenu';
const NavMenu = () => {
  return (
    <div>
      <HStack>
        <Button leftIcon={<FaHome />}>Home</Button>
        <Button leftIcon={<FaBook />}>Menu</Button>
        <Button leftIcon={<FaInfo />}>Contact</Button>
        <HamburgerMenu/>
      </HStack>
    </div>
  );
};

export default NavMenu;
