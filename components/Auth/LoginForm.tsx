"use client";

import { login, register, validate } from "@/lib/auth";
import { formData } from "@/lib/types";
import useMultiSnackbar from "@/hooks/useMultiSnackbar"
import {
  Box,
  FormControl,
  FormLabel,
  Button,
  Text,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const {addMessage} = useMultiSnackbar()
  const router = useRouter();
  const [formData, setFormData] = useState<formData>({
    username: "",
    password: "",
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
    try {
      const resp = await login(formData);
      if (resp.success) {
        addMessage(`Logged in as ${formData.username}`,"success");
        router.push("/");
      } else {
        addMessage(resp.message,"error");
      }
      console.log(resp);
    } catch (err: any) {
      console.log(`Error:${err.message}`);
    }   
  };

  return (
    <Box maxW="md" mx="auto" mt={10}>
      <Text fontSize={40} textAlign={"center"}>
        Login
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl  mb={4}>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            id="username"
            name="username"
            type="text"
            onChange={handleChange}
            value={formData.username}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            value={formData.password}
          />
        </FormControl>
        <Button width="100%" type="submit" colorScheme="teal">
          Login
        </Button>
      </form>
    </Box>
  );
}
