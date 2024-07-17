"use client";

import { headerTabs } from "@/config/header";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Text,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

export default function Menu() {
  const bg = useColorModeValue("gray.100", "gray.600");
  const hoverBgColor = useColorModeValue("gray.300", "gray.800");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton icon={<HamburgerIcon />} onClick={onOpen} aria-label="Menu" />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="start">
              {headerTabs.map((tab,index)=>(
                <Text transition={"0.25s"} borderRadius={"5px"} _hover={{backgroundColor:hoverBgColor}} width={"100%"} p={2} backgroundColor={bg} textAlign={"center"} as={"a"} href={tab.href} key={index}>{tab.label}</Text>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
