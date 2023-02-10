import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        pos={'fixed'}
        top="4"
        left="4"
        colorScheme={'purple'}
        h="10"
        w={'10'}
        p="0"
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'25'} />
      </Button>

      <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VIDEO HUB</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/'}> Home</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/videos'}> Videos</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/videos?category=free'}> Free Videos</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/upload'}> Upload Video</Link>
              </Button>
            </VStack>
            <HStack
              position={'absolute'}
              bottom={'20'}
              justifyContent={'space-evenly'}
              w={'full'}
              left={'0'}
            >
              <Button onClick={onClose} colorScheme={'purple'}>
                <Link to={'/login'}>Login</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={'outline'}
                colorScheme={'purple'}
              >
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
