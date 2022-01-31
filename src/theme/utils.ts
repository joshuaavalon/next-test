import _ from "lodash";

import type {
  MultiStyleConfig,
  PartsStyleFunction,
  PartsStyleInterpolation
} from "@chakra-ui/theme-tools";

const mergeStyle =
  (styles: (PartsStyleInterpolation | undefined)[]): PartsStyleFunction =>
  props => {
    const style = {};
    for (const s of styles) {
      if (!s) {
        continue;
      }
      const resolved = _.isFunction(s) ? s(props) : s;
      _.merge(style, resolved);
    }
    return style;
  };

const mergeKeyStyle = (
  keyStyles: (MultiStyleConfig["sizes"] | undefined)[]
): MultiStyleConfig["sizes"] => {
  const style: MultiStyleConfig["sizes"] = {};
  const styleMap: Record<string, PartsStyleInterpolation[]> = {};
  for (const keyStyle of keyStyles) {
    if (!keyStyle) {
      continue;
    }
    for (const [key, style] of Object.entries(keyStyle)) {
      if (!styleMap[key]) {
        styleMap[key] = [];
      }
      styleMap[key].push(style);
    }
  }
  for (const [key, styles] of Object.entries(styleMap)) {
    style[key] = mergeStyle(styles);
  }
  return style;
};

export interface PartStyleConfig extends MultiStyleConfig {
  parts?: string[];
}

export function mergeParts(...configs: PartStyleConfig[]): PartStyleConfig {
  const parts = new Set<string>();
  for (const c of configs) {
    if (c.parts) {
      c.parts.forEach(p => parts.add(p));
    }
  }

  return {
    parts: Array.from(parts),
    baseStyle: mergeStyle(configs.map(c => c.baseStyle)),
    sizes: mergeKeyStyle(configs.map(c => c.sizes)),
    variants: mergeKeyStyle(configs.map(c => c.variants)),
    defaultProps: _.merge({}, ...configs.map(c => c.defaultProps))
  };
}
