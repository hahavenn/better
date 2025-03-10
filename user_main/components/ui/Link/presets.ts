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
    href: string;
  };
};

export const LinkUIPresets: LinkUIPresetsType = {
  home: {
    target: "_self",
    rel: ["noopener", "noreferrer"],
    ariaLabel: "Go to home page",
    title: "Go to home page",
    href: HA_EDU_LINKS.HOME,
  },
};
