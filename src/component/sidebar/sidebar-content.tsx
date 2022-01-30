import { Box, CloseButton, Flex, Text } from "@chakra-ui/react";

import { NavItem } from "./nav-item";

import type { FC } from "react";
import type { IconType } from "react-icons";
import type { BoxProps } from "@chakra-ui/react";

export interface SidebarItem {
  text: string;
  icon?: IconType;
}

export interface SidebarContentProps extends BoxProps {
  title?: string;
  onClose?: () => void;
  items?: SidebarItem[];
}

export const SidebarContent: FC<SidebarContentProps> = props => {
  const { title, onClose, items = [], ...rest } = props;
  return (
    <Box
      transition="3s ease"
      background="white"
      borderRight="1px"
      borderRightColor="gray.200"
      width={{ base: "full", md: 60 }}
      position="fixed"
      height="full"
      {...rest}
    >
      <Flex
        height="20"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
      >
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          {title}
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {items.map(link => (
        <NavItem key={link.text} icon={link.icon}>
          {link.text}
        </NavItem>
      ))}
    </Box>
  );
};
