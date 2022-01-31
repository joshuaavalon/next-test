import { mode } from "@chakra-ui/theme-tools";

import type {
  MultiStyleConfig,
  PartsStyleFunction
} from "@chakra-ui/theme-tools";

const part = "button";

const baseStyle: PartsStyleFunction = props => {
  const { colorScheme } = props;
  const bgColor = mode(`${colorScheme}.500`, `${colorScheme}.300`)(props);
  return {
    [part]: {
      overflow: "hidden",
      transition: "background-color .5s ease",
      _hover: {
        bgColor
      }
    }
  };
};

const sizes: MultiStyleConfig["sizes"] = {};
const variants: MultiStyleConfig["variants"] = {
  modern: {
    [part]: { p: 2, borderRadius: "lg", fontSize: "lg" }
  },
  compact: {
    [part]: { p: 1, borderRadius: "base", fontSize: "md" }
  }
};

const config = {
  parts: [part],
  baseStyle,
  sizes,
  variants
};

export default config;
