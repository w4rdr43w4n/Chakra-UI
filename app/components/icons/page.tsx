"use client";

import {
  AddIcon,
  CheckIcon,
  CloseIcon,
  CopyIcon,
  DeleteIcon,
  DownloadIcon,
  EditIcon,
  EmailIcon,
  HamburgerIcon,
  LinkIcon,
  MoonIcon,
  NotAllowedIcon,
  SettingsIcon,
  TimeIcon,
  UnlockIcon,
  ViewIcon,
  ViewOffIcon,
  WarningTwoIcon,
} from "@chakra-ui/icons";
import { Card, CardBody, Flex, HStack } from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <Flex align={"center"} justify={"center"} w={"100%"} direction={"column"} gap={10}>
        <HStack>
          <Card>
            <CardBody>
              <WarningTwoIcon />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <AddIcon />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CheckIcon />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CloseIcon />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CopyIcon />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <DeleteIcon />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <DownloadIcon />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <EditIcon />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <EmailIcon />
            </CardBody>
          </Card>
        </HStack>
        <HStack>
          <Card>
            <CardBody>
              <HamburgerIcon />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <LinkIcon />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <NotAllowedIcon />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <MoonIcon />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <UnlockIcon />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <TimeIcon />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <ViewOffIcon />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <SettingsIcon />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <ViewIcon />
            </CardBody>
          </Card>
        </HStack>
      </Flex>
    </>
  );
}
