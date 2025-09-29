import { type Icons } from "~/components/ui/Icon/types";
import type { ColorGeneratedPalettes } from "~/types/color/generatedPalettes";

/**
 * Input types that used in project
 *
 * @description
 * - `search` for search something
 */
export type InputPresets = "search";

export type InputUIProps = {
  /** Predefined type of input */
  preset?: InputPresets;
  /** Placeholder text for `placeholder=""` attribute */
  placeholder?: string;
  /** See `autocapitalize` global attribute */
  autocapitalize?: "none" | "off" | "sentences" | "on" | "words" | "characters";
  /** Type for button. Mainly used for a11y */
  buttonType?: HTMLButtonElement["type"];
  type?: "text" | "tel";
  /**
   * Text inside input label.
   * Used only for a11y techs.
   * Hidden on page, but accessible by screen readers
   */
  label?: string;
  /**
   * Icon that will be displayed inside <button>. In doesn't given - button will not be shown
   */
  icon?: Icons;
  palette?: ColorGeneratedPalettes;
};
