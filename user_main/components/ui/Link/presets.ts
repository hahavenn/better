import type { LinkRelAttribute } from "~/types/link_rel_attribute";
import type { LinkTargetAttribute } from "~/types/link_target_attribute";
import type { LinkTypes } from "./types";
import HA_EDU_LINKS from "~/constants/links";

type LinkUIPresetsType = {
  [key in LinkTypes]: {
    target: LinkTargetAttribute;
    rel: LinkRelAttribute[];
    ariaLabel: string;
    title: string;
    to: string;
  };
};

/**
 * Presets for link with pre-defined config and a11y performance
 *
 * @todo add i18n for ariaLabel and title attributes
 */
export const LinkUIPresets: LinkUIPresetsType = {
  home: {
    target: "_self",
    rel: ["noopener", "noreferrer"],
    ariaLabel: "Go to home page",
    title: "Go to home page",
    to: HA_EDU_LINKS.HOME,
  },
};
