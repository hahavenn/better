import type { Icons } from "./types";

const Expand = defineAsyncComponent(() => import("./icons/Expand.vue"));
const Search = defineAsyncComponent(() => import("./icons/Search.vue"));
const Add = defineAsyncComponent(() => import("./icons/Add.vue"));

const IconMap = new Map<Icons, Component>([
  ["search", Search],
  ["expand", Expand],
  ["add", Add],
]);
export default IconMap;
