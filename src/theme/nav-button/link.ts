import type {
  MultiStyleConfig,
  PartsStyleObject
} from "@chakra-ui/theme-tools";

const part = "link";

const baseStyle: PartsStyleObject = {
  [part]: {
    textDecoration: "none",
    _focus: { boxShadow: "none" },
    _hover: { textDecoration: "none" }
  }
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
