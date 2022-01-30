import { Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

import type { FC } from "react";
import type { FlexProps } from "@chakra-ui/react";

export interface HeaderProps extends FlexProps {
  title?: string;
  onOpen?: () => void;
}

export const Header: FC<HeaderProps> = props => {
  const { title, onOpen, ...rest } = props;
  return (
    <Flex
      marginLeft={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      background="white"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        {title}
      </Text>
      <HStack spacing={{ base: "0", md: "6" }}></HStack>
    </Flex>
  );
};
