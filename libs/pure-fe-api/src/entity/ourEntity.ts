import { ourNewId, ourPascalCase } from '@pure/pure-fe-utils';
import { EntityPropsOut, EntityType, GetImageKey, ImageKeyProps, ImagePathKey } from '../types';
import ourImageExtension from '../images/ourImageExtension';
import BaseApi from '../api/BaseApi';
import {
  Blog,
  CityStat,
  Comment,
  Forum,
  Friend,
  MailHeader,
  MailMessage,
  Member,
  Notification,
  Order,
  OrderLine,
  PclHeader,
  PclService,
  PclTier,
  PclTierPrice,
  Pet,
  Post,
  Shop,
  ShopItem,
  ShopItemOptionTemplate,
  ShopItemVariant,
  Topic,
} from '../api';

const imagePathKey: ImagePathKey = (path, type, id, src) =>
  `${type}/${path}/${type}-${id}-${ourNewId()}-${path}.${ourImageExtension({ src })}`;

const getAvatarKey: GetImageKey =
  (type: string) =>
  ({ id, src }: ImageKeyProps) =>
    imagePathKey('avatar', type, id, src);
const getImageKey: GetImageKey =
  (type: string) =>
  ({ id, src }: ImageKeyProps) =>
    imagePathKey('image', type, id, src);

const entity: EntityType = (props) => {
  const {
    name,
    plural = `${props.name}s`,
    idName = `${props.name}Id`,
    nameField = 'name',
    maxImages = 0,
    loadLimit = 0,
    avatarKey = getAvatarKey(props.name),
    imageKey = getImageKey(props.name),
    api,
    apiPath,
    ...rest
  } = props;

  const pluralName = plural || `${name}s`;

  return {
    name,
    proper: ourPascalCase(name),
    plural,
    pluralProper: ourPascalCase(pluralName),
    idName,
    nameField,
    maxImages,
    loadLimit,
    avatarKey,
    imageKey,
    api: api || BaseApi({ apiPath: apiPath || `/${pluralName}` }),
    ...rest,
  };
};

export type ApiEntity = EntityPropsOut;
export type RecordOfApiEntity = Record<string, ApiEntity>;

export interface OurEntities extends RecordOfApiEntity {
  blog: ApiEntity;
  blogDef: ApiEntity;
  bus: ApiEntity;
  busBuilder: ApiEntity;
  business: ApiEntity;
  busRepair: ApiEntity;
  busSupply: ApiEntity;
  cart: ApiEntity;
  cartItem: ApiEntity;
  cityStat: ApiEntity;
  comment: ApiEntity;
  dogPark: ApiEntity;
  feed: ApiEntity;
  feedDef: ApiEntity;
  forum: ApiEntity;
  foundPet: ApiEntity;
  friend: ApiEntity;
  groomer: ApiEntity;
  lostPet: ApiEntity;
  mailFolder: ApiEntity;
  mailHeader: ApiEntity;
  mailMessage: ApiEntity;
  member: ApiEntity;
  notification: ApiEntity;
  order: ApiEntity;
  orderLine: ApiEntity;
  pclHeader: ApiEntity;
  pclService: ApiEntity;
  pclTier: ApiEntity;
  pclTierPrice: ApiEntity;
  pet: ApiEntity;
  petFood: ApiEntity;
  petTrainer: ApiEntity;
  petType: ApiEntity;
  petWalker: ApiEntity;
  petWorkplace: ApiEntity;
  place: ApiEntity;
  post: ApiEntity;
  rating: ApiEntity;
  reaction: ApiEntity;
  shop: ApiEntity;
  shopItem: ApiEntity;
  shopItemOptionTemplate: ApiEntity;
  shopItemVariant: ApiEntity;
  site: ApiEntity;
  sitter: ApiEntity;
  stripe: ApiEntity;
  tax: ApiEntity;
  topic: ApiEntity;
  user: ApiEntity;
  van: ApiEntity;
  vanBuilder: ApiEntity;
  vanRepair: ApiEntity;
  vanSupply: ApiEntity;
  vet: ApiEntity;
}

const ourEntity: OurEntities = {
  blog: entity({ name: 'blog', loadLimit: 5, api: Blog }),
  blogDef: entity({ name: 'blogDef', apiPath: '/blogs/blogDefs' }),
  bus: entity({ name: 'bus', plural: 'buses', maxImages: 12, loadLimit: 10 }),
  busBuilder: entity({ name: 'busBuilder', maxImages: 12, loadLimit: 20 }),
  business: entity({
    name: 'business',
    plural: 'businesses',
    nameField: 'businessName',
    maxImages: 8,
    loadLimit: 20,
  }),
  busRepair: entity({ name: 'busRepair', maxImages: 12, loadLimit: 20 }),
  busSupply: entity({ name: 'busSupply', plural: 'busSupplies', maxImages: 12, loadLimit: 20 }),
  cart: entity({ name: 'cart' }),
  cartItem: entity({ name: 'cartItem' }),
  cityStat: entity({ name: 'cityStat', loadLimit: 100, api: CityStat }),
  comment: entity({ name: 'comment', loadLimit: 5, api: Comment }),
  dogPark: entity({ name: 'dogPark', maxImages: 12, loadLimit: 20 }),
  feed: entity({ name: 'feed', loadLimit: 10, maxPostImages: 4 }),
  feedDef: entity({ name: 'feedDef', apiPath: '/feeds/feedDefs' }),
  forum: entity({ name: 'forum', loadLimit: 0, maxPostImages: 4, api: Forum }),
  foundPet: entity({ name: 'foundPet', nameField: 'petType', maxImages: 4, loadLimit: 20 }),
  friend: entity({ name: 'friend', loadLimit: 20, api: Friend }),
  groomer: entity({ name: 'groomer', maxImages: 12, loadLimit: 20 }),
  lostPet: entity({ name: 'lostPet', nameField: 'petName', maxImages: 4, loadLimit: 20 }),
  mailFolder: entity({ name: 'mailFolder', apiPath: '/mail/folders' }),
  mailHeader: entity({ name: 'mailHeader', loadLimit: 25, idName: 'messageId', api: MailHeader }),
  mailMessage: entity({ name: 'mailMessage', maxImages: 2, idName: 'messageId', api: MailMessage }),
  member: entity({
    name: 'member',
    maxImages: 12,
    loadLimit: 20,
    idName: 'memberName',
    api: Member,
  }),
  notification: entity({ name: 'notification', loadLimit: 25, api: Notification }),
  order: entity({ name: 'order', loadLimit: 25, api: Order }),
  orderLine: entity({ name: 'orderLine', loadLimit: 25, api: OrderLine }),
  pclHeader: entity({ name: 'pclHeader', loadLimit: 25, api: PclHeader }),
  pclService: entity({ name: 'pclService', loadLimit: 25, api: PclService }),
  pclTier: entity({ name: 'pclTier', loadLimit: 25, api: PclTier }),
  pclTierPrice: entity({ name: 'pclTierPrice', loadLimit: 25, api: PclTierPrice }),
  pet: entity({ name: 'pet', maxImages: 12, loadLimit: 20, api: Pet }),
  petFood: entity({ name: 'petFood', maxImages: 12, loadLimit: 20 }),
  petTrainer: entity({ name: 'petTrainer', maxImages: 12, loadLimit: 20 }),
  petType: entity({ name: 'petType', loadLimit: 20 }),
  petWalker: entity({ name: 'petWalker', maxImages: 12, loadLimit: 20 }),
  petWorkplace: entity({ name: 'petWorkplace', maxImages: 12, loadLimit: 20 }),
  place: entity({ name: 'place', nameField: 'placeName', maxImages: 8, loadLimit: 20 }),
  post: entity({ name: 'post', maxImages: 4, loadLimit: 5, api: Post }),
  rating: entity({ name: 'rating' }),
  reaction: entity({ name: 'reaction' }),
  shop: entity({ name: 'shop', maxImages: 8, loadLimit: 25, api: Shop }),
  shopItem: entity({ name: 'shopItem', maxImages: 6, loadLimit: 20, api: ShopItem }),
  shopItemOptionTemplate: entity({ name: 'shopItemOptionTemplate', api: ShopItemOptionTemplate }),
  shopItemVariant: entity({ name: 'shopItemVariant', api: ShopItemVariant }),
  site: entity({ name: 'site' }),
  sitter: entity({ name: 'sitter', maxImages: 12, loadLimit: 20 }),
  stripe: entity({ name: 'stripe' }),
  tax: entity({ name: 'tax' }),
  topic: entity({ name: 'topic', loadLimit: 20, api: Topic }),
  user: entity({ name: 'user', idName: 'memberId', api: Member }),
  van: entity({ name: 'van', maxImages: 12, loadLimit: 20 }),
  vanBuilder: entity({ name: 'vanBuilder', maxImages: 12, loadLimit: 20 }),
  vanRepair: entity({ name: 'vanRepair', maxImages: 12, loadLimit: 20 }),
  vanSupply: entity({ name: 'vanSupply', plural: 'vanSupplies', maxImages: 12, loadLimit: 20 }),
  vet: entity({ name: 'vet', maxImages: 12, loadLimit: 20 }),
};

export default ourEntity;
