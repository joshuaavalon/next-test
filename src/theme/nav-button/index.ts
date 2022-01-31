import button from "./button";
import iconBox from "./icon-box";
import icon from "./icon";
import label from "./label";
import link from "./link";

import { mergeParts } from "../utils";

const defaultProps = {
  colorScheme: "gray",
  variant: "modern"
};

export const NavButton = mergeParts(
  { defaultProps },
  button,
  iconBox,
  icon,
  label,
  link
);
