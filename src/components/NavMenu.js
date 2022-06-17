import { Button, HStack} from '@chakra-ui/react';
import React from 'react';
import { FaHome, FaBook, FaInfo} from 'react-icons/fa';
import { useMediaQuery } from '@chakra-ui/react';
import HamburgerMenu from './HamburgerMenu';
const NavMenu = ({onClick}) => {
      const [moveContact] = useMediaQuery('(min-width: 680px)');
  return (
    <div>
      <HStack>
        <Button leftIcon={<FaHome />} onClick={() => onClick("Home")}>Home</Button>
        <Button leftIcon={<FaBook />} onClick={() => onClick("Menu")}>My OnlyFans</Button>
       {moveContact ?  <Button leftIcon={<FaInfo />} onClick={() => onClick("Contact")}>Contact</Button>: <></> }
        <HamburgerMenu onClick={onClick}/>
      </HStack>
    </div>
  );
};

export default NavMenu;
