"use client";
import { snackBarType } from "@/config/types";
import settings from "../config/settings";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";

const useMultiSnackbar = (
  maxMessages = Number(settings.toast_max_msg_count)
) => {
  const toast = useToast();
  const [messages, setMessages] = useState<string[]>([]);

  const addMessage = (message: string,type:snackBarType = 'info',duration = Number(settings.msgDurarion)) => {
    if (messages.length >= maxMessages) {
      setMessages((prev) => prev.slice(1));
    }

    setMessages((prev) => [...prev, message]);

    toast({
      title: message,
      status: type,
      duration: duration,
      isClosable: true,
      position: "top-right",
    });
  };

  return { addMessage, messages };
};
export default useMultiSnackbar;
