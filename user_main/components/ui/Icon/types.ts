import type { StateTypes } from "~/types/state";

export type IconState = Extract<
  StateTypes,
  "default" | "hover" | "active" | "disabled"
>;

export type Icon = "search";

/**
 *
 */
export type IconProps = {
  /**
   * State type of icon for styling
   */
  state: IconState;
  icon: Icon;
};
