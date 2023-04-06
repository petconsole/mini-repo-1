import { ourNewId } from '@pure/pure-fe-utils';
import ourImageExtension from './ourImageExtension';
import { ImageFileKey, ImageKeyProps } from "../types";

const avatarKey: ImageFileKey = (type, id, src) =>
  `${type}/avatar/${type}-${id}-${ourNewId()}-avatar.${ourImageExtension({ src })}`;

const key = (type: string) => ({ id, src }: ImageKeyProps) => avatarKey(type, id, src);

const ourAvatarKey = {
  builder: key('builder'),
  bus: key('bus'),
  busBuilder: key('busBuilder'),
  busRepair: key('busRepair'),
  busSupply: key('busSupply'),
  foundPet: key('foundPet'),
  groomer: key('groomer'),
  lostPet: key('lostPet'),
  member: key('member'),
  pclService: key('pclService'),
  pet: key('pet'),
  petFood: key('petFood'),
  petTrainer: key('petTrainer'),
  petWalker: key('petWalker'),
  petWorkplace: key('petWorkplace'),
  place: key('place'),
  shop: key('shop'),
  sitter: key('sitter'),
  type: ({ id, src, type = 'INVALID-TYPE' }: ImageKeyProps) => avatarKey(type, id, src ),
  van: key('van'),
  vanBuilder: key('vanBuilder'),
  vanRepair: key('vanRepair'),
  vanSupply: key('vanSupply'),
  vet: key('vet'),
};

export default ourAvatarKey;
