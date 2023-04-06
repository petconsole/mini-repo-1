export type Api = Record<string, unknown>;
export type ImageFileKey = (type: string, id: string, src: string) => string;
export type ImagePathKey = (path: string, type: string, id: string, src: string) => string;

export interface BaseApiProps {
  apiPath: string;
}

export interface ImageKeyProps {
  type?: string;
  id: string;
  src: string;
}

export type ImageKey = (props: ImageKeyProps) => string;
export type GetImageKey = (type: string) => ImageKey;

export interface Image {
  [index: string]: string;
  imageId: string;
  title: string;
  contentType: string;
  s3Key: string;
  src?: string;
}

export interface EntityPropsIn {
  name: string;
  plural?: string;
  idName?: string;
  nameField?: string;
  maxImages?: number;
  loadLimit?: number;
  avatarKey?: ImageKey;
  imageKey?: ImageKey;
  api?: Api;
  apiPath?: string;
  maxPostImages?: number;
}

export interface EntityPropsOut {
  name: string;
  proper: string;
  plural: string;
  pluralProper: string;
  idName: string;
  nameField: string;
  maxImages: number;
  loadLimit: number;
  avatarKey: ImageKey;
  imageKey: ImageKey;
  api: Api;
  maxPostImages?: number;
}

export type EntityType = (props: EntityPropsIn) => EntityPropsOut;

export type LocationType = {
  city?: string;
  province?: string;
  country?: string;
};
export type locationType = LocationType;

export type OptionsType = {
  limit?: number;
  nextKey?: RecordType;
  scanForward?: boolean;
  all?: boolean;
};
export type optionsType = OptionsType;

export type RecordType = Record<string, unknown>;
export type NumberRecord = Record<string, number>;
export type StringRecord = Record<string, string>;

export interface OurPutImageProps {
  s3Key: string;
  src: string;
  acl?: string;
  contentType?: string;
  log: (...args: unknown[]) => Promise<Error>;
}

export interface OurPutImagesProps {
  images: OurPutImageProps[];
  log: (...args: unknown[]) => Promise<Error>;
}

export interface GetListResults extends RecordType {
  lastKey?: RecordType | null;
  items: RecordType[];
}
