import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import type { SystemStyleObject } from "@chakra-ui/theme-tools";
const NavItem = {
  parts: ["box", "icon", "label"]
};
export const customTheme = extendTheme(
  {
    components: {
      NavItem
    }
  },
  withDefaultColorScheme({ colorScheme: "red" })
);
