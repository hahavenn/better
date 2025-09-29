export type UiContainerProps = {
  /**
   * `height` CSS-property
   * @description If `true` -> `height: 100%`
   * @default `fit-content`
   */
  fullHeight?: boolean;

  /**
   * `width: 100%`
   * @default false
   *
   * @description
   * Should not be set with `width`
   */
  fullWidth?: boolean;
  /**
   * Width of container in `rem`
   *
   * @description
   * Should not be set with `fullWidth`
   */
  width?: number;

  /**
   * `flex-grow: 1`
   * @default false
   */
  grow?: boolean;
  /**
   * `flex-shrink: 0`
   * @default false
   */
  noShrink?: boolean;

  /**
   * Does container should be responsive to media-query
   */
  responsive?: boolean;

  /**
   * Which side of parent component container is attached to
   */
  attachedTo?: "left" | "top" | "right" | "bottom";
};
