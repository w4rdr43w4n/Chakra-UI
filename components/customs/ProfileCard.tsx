"use client";

import { user } from "@/config/types";
import { getSession } from "@/lib/auth";
import {
  Box,
  HStack,
  Avatar,
  VStack,
  Heading,
  Stack,
  Button,
  Text,
  Card,
  Flex,
  CardBody,
  CardHeader,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function ProfileCard() {
  const [userInfo, setUserInfo] = useState<user | undefined>();

  useEffect(() => {
    session();
  });
  async function session() {
    const session = await getSession();
    setUserInfo(session?.user);
  }
  return (
    <Flex w={"100%"} direction={"column"} align={"center"} justify={"center"}>
      <Card
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}
        borderColor="gray.200"
      >
        <CardHeader fontWeight={700}>G6 Account Profile</CardHeader>
        <CardBody>
          <HStack spacing={4}>
            <Avatar
              border={"1px solid gray"}
              color={"white"}
              bg={"teal.800"}
              name={userInfo?.username}
              size="xl"
            />
            <VStack align="start" spacing={1}>
              <Heading fontSize={"30px"} size="md">
                {userInfo?.username}
              </Heading>
              <Text fontSize="sm" color="gray.500">
                {userInfo?.email}
              </Text>
            </VStack>
          </HStack>
          <Stack spacing={4} mt={4}>
            <Box>
              <Heading fontWeight={700} size="sm" mb={2}>
                Bio
              </Heading>
              <Text>
                Nothing to <b>Say</b> everything is <b>clear</b>
              </Text>
            </Box>
            <Flex align={"center"} justify={"space-between"}>
              <Button isDisabled colorScheme="teal" variant="outline">
                Edit Profile
              </Button>
              <Button colorScheme="red" variant="outline">
                Logout
              </Button>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  );
}
