export declare enum Style {
  /**
   * Light text for dark backgrounds.
   *
   * @since 1.0.0
   */
  Dark = "DARK",
  /**
   * Dark text for light backgrounds.
   *
   * @since 1.0.0
   */
  Light = "LIGHT",
  /**
   * On iOS 13 and newer the style is based on the device appearance.
   * If the device is using Dark mode, the statusbar text will be light.
   * If the device is using Light mode, the statusbar text will be dark.
   * On iOS 12 and older the statusbar text will be dark.
   * On Android the default will be the one the app was launched with.
   *
   * @since 1.0.0
   */
  Default = "DEFAULT"
}