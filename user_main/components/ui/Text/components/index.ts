import type { TextTypes } from "~/components/ui/Text/types";
import TextLink from "./TextLink.vue";

/**
 * Map for text types and corresponding pre-configured components
 * @returns text component to use
 */
const textTypeComponents = new Map<TextTypes, Component>([["link", TextLink]]);
export default textTypeComponents;
