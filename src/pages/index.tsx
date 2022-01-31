import NextLink from "next/link";
import { Container, VStack } from "@chakra-ui/react";
import { FaEnvelope, FaUser } from "react-icons/fa";

import { NavButton } from "../component";

import type { NextPage } from "next";
import type { FC } from "react";

const A: FC = () => {
  const href = "/";
  return (
    <Container>
      <NextLink href={href} passHref>
        <VStack spacing={3} align="stretch">
          <NavButton icon={FaUser}>User</NavButton>
          <NavButton icon={FaEnvelope} colorScheme="teal" variant="compact">
            Email
          </NavButton>
        </VStack>
      </NextLink>
    </Container>
  );
};

const page: NextPage = () => <A />;

export default page;
