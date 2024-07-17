"use client";

import { refreshUserToken, verifyUser } from "@/lib/auth";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useMultiSnackbar from "@/hooks/useMultiSnackbar";
import {
  Box,
  Button,
  CircularProgress,
  Flex,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
export default function VerifyHandler() {
  const colors = {
    loadingText: useColorModeValue("blue.800", "blue.200"),
    infoText: useColorModeValue("black", "blue.100"),
    errorText: useColorModeValue("red.500", "red.300"),
    successText:useColorModeValue("green.400","green.300"),
    infoTextBg:useColorModeValue("gray.200","blue.900"),

  };

  const [isTokenExpired, setExpiredStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const [generalError, setGeneralError] = useState(false)
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");
  const { addMessage } = useMultiSnackbar();
  useEffect(() => {
    async function verify() {
      setLoading(true);
      const result = await verifyUser(email as string, token as string);
      if (!result.verified) {
        if (result.tokenExpired) setExpiredStatus(true);
        setGeneralError((!result.verified && !result.tokenExpired))
        addMessage(result.error, "error", 6000);
      } else {
        addMessage(
          "Your account has been verified successfully",
          "success",
          6000
        );
      }
      setLoading(false);
    }
    verify();
  }, []);
  async function handleReset() {
    setLoading(true);
    const refresh = await refreshUserToken(email as string);
    if (!refresh.success) {
      addMessage(refresh.message, "error", 6000);
    } else {
      addMessage(refresh.message, "success", 6000);
    }
    setLoading(false);
  }
  return (
    <Flex alignItems={"center"} justifyContent={"center"} w="100%" h="100%">
      {loading ? (
        <VStack>
          <CircularProgress size={100} isIndeterminate color="blue.300" />
          <Text fontSize="xl"  color={colors.loadingText}>Processing...</Text>
        </VStack>
      ) : (
        <Box>
          {isTokenExpired ? (
            <VStack boxShadow="0px 0px 8px #000" padding="20px" borderRadius="5px" bg={colors.infoTextBg}>
              <Text fontSize="2xl" fontWeight={700} color={colors.infoText} >
                Your verification token expired, click below to reset it
              </Text>
              <Button colorScheme="teal" onClick={handleReset}>Reset Token</Button>
            </VStack>
          ) : (
            <Box>
              {!email || !token ? (
                <Text fontSize="2xl" fontWeight={700} color={colors.errorText}>Bad Request 403</Text>
              ) : (
                <Box>
                  {generalError ? (
                    <Text fontSize="2xl" fontWeight={700} color={colors.errorText}>An error occured , account not verified</Text>
                  ):(

                    <Text fontSize="2xl" fontWeight={700} color={colors.successText}>Account Verified Successfully</Text>
                  )}
                </Box>
              )}
            </Box>
          )}
        </Box>
      )}
    </Flex>
  );
}
