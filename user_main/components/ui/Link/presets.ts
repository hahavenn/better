import type { LinkRelAttribute } from "~/types/link_rel_attribute";
import type { LinkTargetAttribute } from "~/types/link_target_attribute";
import type { LinkPresets, LinkUIProps } from "./types";
import HA_EDU_LINKS from "~/constants/links";

type LinkUIPreset = {
  target: LinkTargetAttribute;
  rel: LinkRelAttribute[];
  ariaLabel: NonNullable<LinkUIProps["ariaLabel"]>;
  title: NonNullable<LinkUIProps["title"]>;
  to: LinkUIProps["to"];
};

/**
 * Presets for link with pre-defined config and a11y performance
 */
export const LinkUIPresets: {
  [key in LinkPresets]: LinkUIPreset;
} = {
  home: {
    target: "_self",
    rel: ["noopener", "noreferrer"],
    ariaLabel: "Go to home page",
    title: "Go to home page",
    to: HA_EDU_LINKS.HOME,
  },
} as const;
