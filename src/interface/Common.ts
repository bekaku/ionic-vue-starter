export enum AxiosMethod {
  GET,
  POST,
  PUT,
  DELETE,
}

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
  Default = "DEFAULT",
}
export enum SkeletonTypeList {
  AVATAR = "avatar",
  THUMBNAIL = "thumbnail",
  CUSTOM = "custom",
}
export interface LocaleOption {
  id: string;
  name: string;
}
export interface ComplexMessage {
  title: string;
  okMessage: string;
  cancelMessage: string;
}

export interface ApiResponse {
  response?: any;
  error?: any;
}

export interface DefaultAxiosInstance {
  Accept: string;
  //   baseURL: string;
  "Content-Type": string;
  "X-language": string;
  "Code-Version": number;
  "X-Api-Client": string;
  Authorization?: string;
}
export interface UserCredentialPicture {
  path: string;
  x: string;
  xx: string;
  xxx: string;
}
export interface UserCredential {
  id: number | string;
  username: string;
  email: string;
  rolesText?: string;
  status: boolean;
  picture: UserCredentialPicture;
  userRoles?: string[];
  apiKey: string;
}
export enum ChatMessageType {
  TEXT = 1,
  IMAGE = 2,
  MAP = 3,
  SOUND = 4,
}
