import type { LinkRelAttribute } from "~/types/link_rel_attribute";
import type { LinkTargetAttribute } from "~/types/link_target_attribute";

/**
 * All possible link types' snippets in project, that can be re-used
 *
 * @description
 * - `home`: represents link to home page of project (root /)
 */
export type LinkTypes = "home";

export type LinkUIProps = {
  to?: string;
  target?: LinkTargetAttribute;
  title?: string;
  rel?: LinkRelAttribute[] | string[];
  ariaLabel?: string;
  type?: LinkTypes;
};
