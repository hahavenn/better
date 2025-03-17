import type { Sizes } from "~/types/sizes";
import type { PaddingRule } from "~/components/ui/types";

/**
 * Pre-defined types for text in different use cases
 * @description
 * - `link`: represents link text with no specified config/a11y (link component already specified it)
 */
export type TextTypes = "link";

export type TextUIProps = {
  type: TextTypes;
  fontSize?: Sizes;
  padding?: PaddingRule;
};
