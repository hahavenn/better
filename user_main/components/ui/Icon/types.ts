import type { StateTypes } from "~/types/state";

export type IconState = Extract<
  StateTypes,
  "default" | "hover" | "active" | "disabled"
>;

/**
 * All added icons to project
 */
export type Icons = "search";

export type IconProps = {
  /**
   * State type of icon for styling
   */
  state: IconState;
  type: Icons;
};
