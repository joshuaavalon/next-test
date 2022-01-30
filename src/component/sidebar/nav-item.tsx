import { Flex, Link } from "@chakra-ui/react";

import { NavIcon } from "./nav-icon";

import type { FC, ReactText } from "react";
import type { IconType } from "react-icons";
import type { FlexProps } from "@chakra-ui/react";

export interface NavItemProps extends FlexProps {
  icon?: IconType;
  children: ReactText;
}

export const NavItem: FC<NavItemProps> = props => {
  const { icon, children, ...rest } = props;
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        padding="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white"
        }}
        {...rest}
      >
        <NavIcon icon={icon} />
        {children}
      </Flex>
    </Link>
  );
};
