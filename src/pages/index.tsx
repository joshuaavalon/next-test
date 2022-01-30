import NextLink from "next/link";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  useColorModeValue,
  useStyleConfig
} from "@chakra-ui/react";
import { FaSun } from "react-icons/fa";

import type { NextPage } from "next";
import type { FC } from "react";

const A: FC = props => {
  const href = "/";
  const active = false;
  const linkColor = useColorModeValue("gray.900", "whiteAlpha.900");
  const styles = useStyleConfig("NavItem", {});
  return (
    <Container>
      <NextLink href={href} passHref>
        <Button variant="ghost" leftIcon={<FaSun />}>
          Email
        </Button>
      </NextLink>
    </Container>
  );
};

const page: NextPage = () => <A />;

export default page;
