"use client";

import CustomModal from "@/components/customs/CustomModal";
import CustomTrigger from "@/components/customs/CustomTrigger";
import { Flex } from "@chakra-ui/react";



export default function Page() {
  return (
    <Flex w={"100%"} direction={"column"} align={"center"} justify={"center"} gap={5}>
      <CustomTrigger />
      <CustomModal />
    </Flex>
  );
}
