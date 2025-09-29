import type { LinkRelAttribute } from "~/types/linkRelAttribute";

/**
 * All possible link types' presets in project, that can be re-used
 *
 * @description
 * - `home`: represents link to home page of project (root /)
 */
export type LinkPresets = "home";

export type LinkUIProps = {
  /**
   * Url where to navigate (NuxtLink attribute binding)
   */
  to?: string;
  target?: HTMLLinkElement["target"];
  title?: HTMLLinkElement["title"];
  rel?: LinkRelAttribute[] | string[];
  ariaLabel?: HTMLLinkElement["ariaLabel"];
  preset?: LinkPresets;
};
