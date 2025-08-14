import type { InputPresets, InputUIProps } from "~/components/ui/Input/types";

type InputUIPreset = {
  placeholder: InputUIProps["placeholder"];
  type: HTMLInputElement["type"];
  autocapitalize?: InputUIProps["autocapitalize"];
  autocomplete?: InputUIProps["autocomplete"];
  icon?: InputUIProps["icon"];
  buttonType?: HTMLButtonElement["type"];
  label: InputUIProps["label"];
};

/**
 * @todo add i18n
 */
export const InputUIPresets: {
  [key in InputPresets]: InputUIPreset;
} = {
  search: {
    placeholder: "Search",
    type: "text",
    autocapitalize: "off",
    autocomplete: "off",
    icon: "search",
    buttonType: "submit",
    label: "Search",
  },
} as const;
