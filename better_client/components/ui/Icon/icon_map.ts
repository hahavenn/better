import Search from "./icons/Search.vue";
import type { Icons } from "./types";

/** @todo make async */
const IconMap = new Map<Icons, Component>([["search", Search]]);
export default IconMap;
