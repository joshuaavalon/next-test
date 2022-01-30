import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";
import {
  FiCompass,
  FiHome,
  FiSettings,
  FiStar,
  FiTrendingUp
} from "react-icons/fi";

import { Header } from "./header";
import { SidebarContent } from "./sidebar-content";

import type { FC, ReactNode } from "react";
import type { SidebarItem } from "./sidebar-content";

export interface SidebarProps {
  children: ReactNode;
}

const items: Array<SidebarItem> = [
  { text: "Home", icon: FiHome },
  { text: "Trending", icon: FiTrendingUp },
  { text: "Explore", icon: FiCompass },
  { text: "Favourites", icon: FiStar },
  { text: "Settings", icon: FiSettings }
];

export const Sidebar: FC<SidebarProps> = props => {
  const { children } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const title = "Logo";
  return (
    <Box minH="100vh" bg="gray.100">
      <SidebarContent
        title={title}
        onClose={onClose}
        display={{ base: "none", md: "block" }}
        items={items}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent title={title} onClose={onClose} items={items} />
        </DrawerContent>
      </Drawer>
      <Header title={title} onOpen={onOpen} />
      <Box marginLeft={{ base: 0, md: 60 }} padding="4">
        {children}
      </Box>
    </Box>
  );
};
