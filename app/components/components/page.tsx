"use client";

import {
  Box,
  Flex,
  HStack,
  PinInput,
  PinInputField,
  Progress,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Spinner,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Page() {
  const [value, setValue] = useState(30);

  return (
    <Box padding={10}>
      <HStack>
        <VStack>
          <Box>
            <Text fontSize={"xl"} fontWeight={800}>
              Progress Bars (isIndeterminate)
            </Text>
            <Flex flexDirection={"column"} gap={"5px"}>
              <Progress size={"sm"} isIndeterminate colorScheme={"green"} />
              <Progress size={"sm"} isIndeterminate colorScheme={"blue"} />
              <Progress size={"sm"} isIndeterminate colorScheme={"red"} />
            </Flex>
          </Box>
          <Box>
            <Text fontSize={"xl"} fontWeight={800}>
              Progress Bar (Controlled)
            </Text>
            <Progress size={"sm"} value={value} colorScheme={"green"} />
          </Box>
          <Box>
            <Text fontSize={"xl"} fontWeight={800}>
              Spinners
            </Text>
            <Stack direction="row" spacing={4}>
              <Spinner size="xs" />
              <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
              <Spinner size="xl" />
            </Stack>
          </Box>
        </VStack>
        <VStack>
          <Box width={250}>
            <Text fontSize={"xl"} fontWeight={800}>
              Sliders
            </Text>
            <Text>{value}%</Text>
            <Slider
              aria-label="slider"
              onChangeEnd={(e) => setValue(e)}
              defaultValue={30}
            >
              <SliderTrack bg="red.100">
                <SliderFilledTrack fill={"tomato"} />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text size={"xs"} colorScheme="gray" fontSize={12}>
              This Slider Control all values of this page components
            </Text>
          </Box>
        </VStack>
        <VStack>
          <Box>
            <Text fontSize={"xl"} fontWeight={800}>
              Pin Input (For OTP)
            </Text>
            <HStack>
              <PinInput type="alphanumeric">
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
}
