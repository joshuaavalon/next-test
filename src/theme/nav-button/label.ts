import { mode } from "@chakra-ui/theme-tools";

import type {
  MultiStyleConfig,
  PartsStyleFunction
} from "@chakra-ui/theme-tools";

const part = "label";

const baseStyle: PartsStyleFunction = props => {
  const color = mode("white", "gray.800")(props);
  return {
    [part]: {
      transition: "color .5s ease",
      _groupHover: {
        color
      }
    }
  };
};

const sizes: MultiStyleConfig["sizes"] = {};
const variants: MultiStyleConfig["variants"] = {};

const config = {
  parts: [part],
  baseStyle,
  sizes,
  variants
};

export default config;
