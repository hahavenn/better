import type { Icons } from "./types";

import Expand from "./icons/Expand.vue";
import Search from "./icons/Search.vue";
import Add from "./icons/Add.vue";

/** @todo make async */
const IconMap = new Map<Icons, Component>([
  ["search", Search],
  ["expand", Expand],
  ["add", Add],
]);
export default IconMap;
