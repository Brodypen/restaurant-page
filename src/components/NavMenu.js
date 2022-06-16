import { Button, HStack} from '@chakra-ui/react';
import React from 'react';
import { FaHome, FaBook, FaInfo} from 'react-icons/fa';
import { useMediaQuery } from '@chakra-ui/react';
import HamburgerMenu from './HamburgerMenu';
const NavMenu = () => {
      const [moveContact] = useMediaQuery('(min-width: 680px)');
  return (
    <div>
      <HStack>
        <Button leftIcon={<FaHome />}>Home</Button>
        <Button leftIcon={<FaBook />}>Menu</Button>
       {moveContact ?  <Button leftIcon={<FaInfo />}>Contact</Button>: <></> }
        <HamburgerMenu/>
      </HStack>
    </div>
  );
};

export default NavMenu;
