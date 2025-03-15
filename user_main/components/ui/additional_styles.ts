import type { CSSProperties } from "vue";
import type { PaddingRule } from "./types";

/**
 * Compute padding rule for elements and add them to given styles object
 * @param styles styles to add to element in components
 * @param padding padding rule to add
 */
export function computeUIPadding(styles: CSSProperties, padding: PaddingRule) {
  switch (true) {
    case typeof padding === "string": {
      styles.padding = padding;
      break;
    }

    case typeof padding === "object": {
      if (padding.bottom) styles.paddingBottom = padding.bottom;
      if (padding.top) styles.paddingTop = padding.top;
      if (padding.left) styles.paddingLeft = padding.left;
      if (padding.right) styles.paddingRight = padding.right;
      break;
    }

    default: {
      break;
    }
  }
}
