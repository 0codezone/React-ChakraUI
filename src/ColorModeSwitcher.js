import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  return (
    <div>
      <IconButton
        zIndex={'10'}
        pos={'fixed'}
        top="4"
        right={4}
        colorScheme={'purple'}
        h="10"
        w={'10'}
        p="0"
        borderRadius={'full'}
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        {...props}
      />
    </div>
  );
};

export default ColorModeSwitcher;
