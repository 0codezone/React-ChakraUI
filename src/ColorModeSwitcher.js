import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  return (
    <div>
      <IconButton
        variant="ghost"
        color={'current'}
        pos="fixed"
        top={4}
        right={4}
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        {...props}
      />
    </div>
  );
};

export default ColorModeSwitcher;
