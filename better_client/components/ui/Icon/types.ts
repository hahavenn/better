import type { StateTypes } from "~/types/state";

export type IconState = Extract<
  StateTypes,
  "state__default" | "state__hover" | "state__active" | "state__disabled"
>;

/** All added icons to project */
export type Icons = "search";

export type IconProps = {
  /** State type of icon for styling */
  state: IconState;
  type: Icons;
};
