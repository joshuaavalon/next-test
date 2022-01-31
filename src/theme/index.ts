import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

import { NavButton } from "./nav-button";

export const customTheme = extendTheme(
  {
    components: {
      NavButton
    }
  },
  withDefaultColorScheme({ colorScheme: "red" })
);
