import { user } from "@/config/types";
import { getSession, logout } from "@/lib/auth";
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tooltip,
  useColorModeValue,
  Wrap,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import { useEffect, useState } from "react";

export default function AccountPanel() {
  const [userInfo, setUserInfo] = useState<user | undefined>();

  useEffect(() => {
    session();
  });
  async function session() {
    const session = await getSession();
    setUserInfo(session?.user);
  }
  async function handleLogout() {
    const resp = await logout();
    if (resp.success) setUserInfo(undefined);
  }
  return (
    <Box>
      {userInfo ? (
        <Wrap>
          <Center gap={2}>
            <Popover>
              <PopoverTrigger>
                <Avatar
                  name={userInfo.username}
                  bg={"teal.700"}
                  color={"white"}
                />
              </PopoverTrigger>
              <PopoverContent p={5} w={"fit-content"}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Flex direction={"column"} align={"center"} justify={"center"} gap={2}>
                    <Button as={"a"} variant={"solid"}  href="/auth/profile">
                      Profile
                    </Button>
                    <Button
                      variant={"solid"}
                      onClick={handleLogout}
                      colorScheme={"red"}
                    >
                      Logout
                    </Button>
                  </Flex>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Center>
        </Wrap>
      ) : (
        <Box>
          <Button
            variant={"solid"}
            as={"a"}
            href="/auth/register"
            colorScheme={"teal"}
            size={"sm"}
            mr={4}
          >
            Register
          </Button>
          <Button
            variant={"solid"}
            as={"a"}
            href="/auth/login"
            colorScheme={"teal"}
            size={"sm"}
            mr={4}
          >
            Login
          </Button>
        </Box>
      )}
    </Box>
  );
}
