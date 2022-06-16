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
import { useMediaQuery } from '@chakra-ui/react';
import { FaBars, FaHome, FaBook, FaInfo, FaGithub } from 'react-icons/fa';
const HamburgerMenu = ({ onClick }) => {
  const [isMobileSize] = useMediaQuery('(min-width: 550px)');
  const [moveContact] = useMediaQuery('(min-width: 680px)');
  return (
    <Menu isLazy>
      <MenuButton as={IconButton} icon={<FaBars />} />
      <MenuList>
        {isMobileSize ? (
          moveContact ? (
            <></>
          ) : (
            <MenuGroup title="Navigation" textAlign="left">
              <MenuItem icon={<FaInfo />} onClick={() => onClick('Contact')}>
                Contact
              </MenuItem>
            </MenuGroup>
          )
        ) : (
          <MenuGroup title="Navigation" textAlign="left">
            <MenuItem icon={<FaHome />} onClick={() => onClick('Home')}>
              Home
            </MenuItem>
            <MenuItem icon={<FaBook />} onClick={() => onClick('Menu')}>
              Menu
            </MenuItem>
            <MenuItem icon={<FaInfo />} onClick={() => onClick('Contact')}>
              Contact
            </MenuItem>
          </MenuGroup>
        )}

        <MenuGroup title="Misc" textAlign="left">
          <ColorModeSwitcher />
          <Link
            href="https://github.com/FrostandIce/restaurant-page"
            isExternal
          >
            <MenuItem icon={<FaGithub />}>GitHub</MenuItem>
          </Link>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default HamburgerMenu;
