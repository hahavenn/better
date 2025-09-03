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
  preset?: InputPresets;
  placeholder?: string;
  autocapitalize?: string;
  buttonType?: HTMLButtonElement["type"];
  type?: HTMLInputElement["type"];
  /**
   * Text inside input label
   */
  label?: string;
  /**
   * Icon that will be displayed inside <button>. In doesn't given - button will not be shown
   */
  icon?: Icons;
  palette?: ColorGeneratedPalettes;
};
