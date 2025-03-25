import type { TextTypes } from "~/components/ui/Text/types";

import TextLink from "./TextLink.vue";
import TextPlain from "./TextPlain.vue";

/**
 * Map for text types and corresponding pre-configured components
 * @returns text component to use
 */
const textTypeComponents = new Map<TextTypes, Component>([
  ["link", TextLink],
  ["plain", TextPlain],
]);
export default textTypeComponents;
