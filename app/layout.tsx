import type { Metadata } from "next";
import "./globals.css";
import { ChakraProvider, Flex, useColorModeValue } from "@chakra-ui/react";
import Header from "@/components/Navigation/Header";
import { ReactNode } from "react";
export const metadata: Metadata = {
  title: "Chakra UI",
  description: "UI Components Collection of Chakra UI",
};

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html style={{ width: "100%", height: "100vh" }} lang="en">
      <body style={{ width: "100%", height: "100vh",display:'flex',flexDirection:"column"}}>
        <ChakraProvider>
          <Header />
          <Flex width={"100%"} height={"100%"}>{children}</Flex>
        </ChakraProvider>
      </body>
    </html>
  );
}
