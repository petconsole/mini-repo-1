import { ourNewId } from '@pure/pure-fe-utils';
import ourImageExtension from './ourImageExtension';
import { ImageFileKey, ImageKeyProps } from "../types";

const imageKey: ImageFileKey = (type, id, src) =>
  `${type}/image/${type}-${id}-${ourNewId()}-image.${ourImageExtension({ src })}`;

const key = (type: string) => ({ id, src }: ImageKeyProps) => imageKey(type, id, src);

const ourImageKey = {
  blog: key('blog'),
  builder: key('builder'),
  bus: key('bus'),
  busBuilder: key('busBuilder'),
  business: key('business'),
  busRepair: key('busRepair'),
  busSupply: key('busSupply'),
  dogPark: key('dogPark'),
  feed: key('feed'),
  foundPet: key('foundPet'),
  groomer: key('groomer'),
  lostPet: key('lostPet'),
  mailMessage: ({ src }: { src: string }) => imageKey('mailContent', '%id%', src),
  member: key('member'),
  pclHeader: key('pclHeader'),
  pet: key('pet'),
  petFood: key('petFood'),
  petTrainer: key('petTrainer'),
  petWalker: key('petWalker'),
  petWorkplace: key('petWorkplace'),
  place: key('place'),
  post: key('post'),
  shop: key('shop'),
  shopItem: key('shopItem'),
  sitter: key('sitter'),
  type: ({ id, src, type = 'INVALID-TYPE' }: ImageKeyProps) => imageKey(type, id, src),
  van: key('van'),
  vanBuilder: key('vanBuilder'),
  vanRepair: key('vanRepair'),
  vanSupply: key('vanSupply'),
  vet: key('vet'),
};

export default ourImageKey;
