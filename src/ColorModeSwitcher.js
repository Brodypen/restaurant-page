import React from 'react';
import { useColorMode, useColorModeValue, MenuItem } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <MenuItem
      aria-label={`Switch to ${text} mode`}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    >{text.charAt(0).toUpperCase() + text.slice(1)} Mode</MenuItem>
  );
};
