/** Padding css rule. Can be string or separate values for each directions */
export type PaddingRule =
  | string
  | {
      top?: string;
      right?: string;
      bottom?: string;
      left?: string;
    };
