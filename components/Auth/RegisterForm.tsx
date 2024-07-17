"use client";

import { register, validate } from "@/lib/auth";
import { formData } from "@/lib/types";
import useMultiSnackbar from "@/hooks/useMultiSnackbar"
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Text,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

export default function RegisterForm() {
  const {addMessage} = useMultiSnackbar()
  const [validity, setValidity] = useState(false);
  const [errorMsg, setErrorMsg] = useState<formData>({
    username: "",
    password: "",
    email: "",
    passwordC: "",
  });
  const [formData, setFormData] = useState<formData>({
    email: "",
    username: "",
    password: "",
    passwordC: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validity) {
      addMessage("Check your input please","warning")
      return;
    }
    try {
      const resp = await register(formData);
      if (resp.success) {
        addMessage(
          `We have sent a verification email to ${formData.email}, please check it out and verify`
        ,"success");
      } else {
        addMessage(resp.message,"error");
      }
    } catch (err: any) {
      console.log(`Error:${err.message}`);
    }
  };
  const handleBlur = async () => {
    const valid = await validate(formData);
    setErrorMsg(valid.errors);
    setValidity(valid.valid);
  };

  return (
    <Box maxW="md" mx="auto" mt={10}>
      <Text fontSize={40} textAlign={"center"}>
        Register
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={Boolean(errorMsg.username)} mb={4}>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            id="username"
            name="username"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={formData.username}
          />
          <FormErrorMessage>{errorMsg.username}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(errorMsg.email)} mb={4}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={formData.email}
          />
          <FormErrorMessage>{errorMsg.email}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(errorMsg.password)} mb={4}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={formData.password}
          />
          <FormErrorMessage>{errorMsg.password}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(errorMsg.passwordC)} mb={4}>
          <FormLabel htmlFor="passwordC">Confirm Password</FormLabel>
          <Input
            id="passwordC"
            name="passwordC"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={formData.passwordC}
          />
          <FormErrorMessage>{errorMsg.passwordC}</FormErrorMessage>
        </FormControl>
        <Button width="100%" type="submit" colorScheme="teal">
          Register
        </Button>
      </form>
    </Box>
  );
}
