import { Icon } from "@chakra-ui/react";

import type { FC } from "react";
import type { IconType } from "react-icons";

export interface NavIconProps {
  icon?: IconType;
}

export const NavIcon: FC<NavIconProps> = props => {
  const { icon } = props;
  if (!icon) {
    return null;
  }
  return (
    <Icon
      marginRight="4"
      fontSize="16"
      _groupHover={{ color: "highlight.text" }}
      as={icon}
    />
  );
};
