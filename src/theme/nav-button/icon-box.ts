import { mode } from "@chakra-ui/theme-tools";

import type {
  MultiStyleConfig,
  PartsStyleFunction
} from "@chakra-ui/theme-tools";

const part = "iconBox";

const baseStyle: PartsStyleFunction = props => {
  const { colorScheme } = props;
  const bg = mode(`${colorScheme}.500`, `${colorScheme}.300`)(props);
  const color = mode("white", "gray.800")(props);
  return {
    [part]: {
      bg,
      color
    }
  };
};

const sizes: MultiStyleConfig["sizes"] = {};
const variants: MultiStyleConfig["variants"] = {
  modern: {
    [part]: {
      w: 5,
      h: 5,
      mr: 4,
      p: 4,
      borderRadius: "md"
    }
  },
  compact: {
    [part]: {
      w: 3,
      h: 3,
      mr: 2,
      p: 3,
      borderRadius: "base"
    }
  }
};

const config = {
  parts: [part],
  baseStyle,
  sizes,
  variants
};

export default config;
