import React from 'react';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Link,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { FaBars, FaHome, FaBook, FaInfo, FaGithub } from 'react-icons/fa';
const HamburgerMenu = () => {
  return (
    <Menu isLazy>
      <MenuButton as={IconButton} icon={<FaBars />} />
      <MenuList>
        <MenuGroup title="Navigation" textAlign="left">
          <MenuItem icon={<FaHome />}>Home</MenuItem>
          <MenuItem icon={<FaBook />}>Menu</MenuItem>
          <MenuItem icon={<FaInfo />}>Contact</MenuItem>
        </MenuGroup>
        <MenuGroup title="Misc" textAlign="left">
          <ColorModeSwitcher />
          <Link href="https://github.com/FrostandIce/restaurant-page" isExternal>
            <MenuItem icon={<FaGithub />}>GitHub</MenuItem>
          </Link>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default HamburgerMenu;
