"use client";

import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Input,
  Flex,
} from "@chakra-ui/react";

export default function CustomTrigger() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Save Your work</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Provide a name</PopoverHeader>
        <PopoverBody padding={5}>
          <Flex direction={"column"} gap={5}>
            <Input placeholder="File name" />
            <Button>Save</Button>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
