"use client";
import { headerTabs } from "@/config/header";
import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Menu from "./Menu";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const hoverBgColor = useColorModeValue("gray.300", "gray.700");
  const color = useColorModeValue("black", "white");
  return (
    <Box bg={bg} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          <Menu />
          <Box>
            <Text fontSize="xl" fontWeight="bold" color={color}>
              Chakra UI
            </Text>
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {headerTabs.map((tab, index) => (
              <Text
                transition="0.2s ease"
                borderRadius="2px"
                padding="5px"
                _hover={{ backgroundColor: hoverBgColor }}
                as="a"
                key={index}
                href={tab.href}
                color={color}
              >
                {tab.label}
              </Text>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Button onClick={toggleColorMode} mr={4}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Button variant={"solid"} as={"a"} href="/auth/register" colorScheme={"teal"} size={"sm"} mr={4}>
            Register
          </Button>
          <Button variant={"solid"} as={"a"} href="/auth/login" colorScheme={"teal"} size={"sm"} mr={4}>
            Login
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
