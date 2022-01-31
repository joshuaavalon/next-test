import type {
  MultiStyleConfig,
  PartsStyleObject
} from "@chakra-ui/theme-tools";

const part = "icon";

const baseStyle: PartsStyleObject = {
  [part]: {}
};

const sizes: MultiStyleConfig["sizes"] = {};
const variants: MultiStyleConfig["variants"] = {
  modern: {
    [part]: {
      w: 4,
      h: 4
    }
  },
  compact: {
    [part]: {
      w: 3,
      h: 3
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
