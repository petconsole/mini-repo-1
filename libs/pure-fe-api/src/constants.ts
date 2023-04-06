import { NumberRecord, StringRecord } from "./types";

export const ourCountryCodes = { canada: 'CA', unitedStates: 'US' };

export const ourCountryList = [
  { value: '', name: '' },
  { value: 'CA', name: 'Canada' },
];

export const ourCurrencyCodes = { canada: 'CAD', unitedStates: 'USD', euro: 'EUR' };

export const ourEntityType: StringRecord = {
  blog: 'Blog',
  builder: 'Builder', // deprecate this
  bus: 'Bus',
  busBuilder: 'BusBuilder',
  business: 'Business',
  busRepair: 'BusRepair',
  busSupply: 'BusSupply',
  cart: 'Cart',
  dogPark: 'DogPark',
  feed: 'Feed',
  foundPet: 'FoundPet',
  lostPet: 'LostPet',
  groomer: 'Groomer',
  order: 'Order',
  pclHeader: 'PclHeader',
  pclService: 'PclService',
  pclTier: 'PclTier',
  pclTierPrice: 'PclTierPrice',
  petFood: 'PetFood',
  petTrainer: 'PetTrainer',
  petType: 'PetType',
  petWalker: 'PetWalker',
  petWorkplace: 'PetWorkplace',
  place: 'Place',
  post: 'Post',
  shop: 'Shop',
  sitter: 'Sitter',
  topic: 'Topic',
  van: 'Van',
  vanBuilder: 'VanBuilder',
  vanRepair: 'VanRepair',
  vanSupply: 'VanSupply',
  vet: 'Vet',
};

// NOTE: Same as values in pcl-our-store
export const ourFetchStatus: StringRecord = {
  idle: 'idle',
  loading: 'loading',
  succeeded: 'succeeded',
  failed: 'failed',
};

export const ourFriendStatus: StringRecord = {
  requested: 'Requested',
  accepted: 'Accepted',
  cancelled: 'Cancelled',
  declined: 'Declined',
  paused: 'Paused',
};

export const ourGenderType: StringRecord = {
  male: 'Male',
  female: 'Female',
  other: 'Other',
  unknown: 'Unknown',
};

export const ourLoadLimit: NumberRecord = {
  blogPosts: 5,
  builders: 10,
  busBuilders: 20,
  buses: 10,
  businessComments: 5,
  businesses: 20,
  busRepairs: 20,
  busSupplies: 20,
  cityStat: 100,
  comments: 5,
  dogParks: 20,
  feedComments: 5,
  feedPosts: 10,
  forums: 0,
  forumTopicPosts: 5,
  forumReplyPosts: 5,
  friends: 50,
  foundPets: 20,
  groomers: 20,
  lostPets: 20,
  mailHeaders: 25,
  members: 20,
  notifications: 25,
  orders: 25,
  pclHeaders: 25,
  pclServices: 25,
  pclTiers: 25,
  pclTierPrices: 25,
  petFoods: 20,
  pets: 20,
  petTrainers: 20,
  petTypes: 20,
  petWalkers: 20,
  petWorkplaces: 20,
  places: 20,
  postComments: 5,
  shops: 25,
  sitters: 20,
  shopItemOptionTemplates: 0,
  shopItemVariants: 0,
  topics: 0,
  vanBuilders: 20,
  vanRepairs: 20,
  vanSupplies: 20,
  vets: 20,
};

export const ourMailFolderType: StringRecord = {
  inbox: 'Inbox',
  sent: 'Sent',
  trash: 'Trash',
  other: 'Other',
};

export const ourMaxImages: NumberRecord = {
  builders: 12,
  busBuilders: 12,
  buses: 12,
  businesses: 8,
  busRepairs: 12,
  dogParks: 12,
  feedPosts: 4,
  forumPosts: 4,
  foundPets: 4,
  groomers: 12,
  lostPets: 4,
  mailMessages: 2,
  pclHeaders: 4,
  profile: 12,
  petFoods: 12,
  pets: 12,
  places: 8,
  shops: 8,
  shopItem: 6,
  sitters: 12,
  trainers: 12,
  vanBuilders: 12,
  vanRepairs: 12,
  vans: 12,
  vets: 12,
  walkers: 12,
  workplaces: 12,
};

export const ourMemberImagePath = process.env.REACT_APP_MEMBER_IMAGE_PATH;

export const ourProvinceList = [
  { value: '', name: '' },
  { value: 'AB', name: 'Alberta' },
  { value: 'BC', name: 'British Columbia' },
  { value: 'MB', name: 'Manitoba' },
  { value: 'NB', name: 'New Brunswick' },
  { value: 'NL', name: 'Newfoundland and Labrador' },
  { value: 'NT', name: 'Northwest Territories' },
  { value: 'NS', name: 'Nova Scotia' },
  { value: 'NU', name: 'Nunavut' },
  { value: 'ON', name: 'Ontario' },
  { value: 'PE', name: 'Prince Edward Island' },
  { value: 'QC', name: 'Quebec' },
  { value: 'SK', name: 'Saskatchewan' },
  { value: 'YT', name: 'Yukon' },
];

export const ourShopOrderedByType: StringRecord = {
  member: 'Member',
  guest: 'Guest',
};

export const ourShopShippingType: StringRecord = {
  ship: 'Ship',
  deliver: 'Deliver',
  pickup: 'Pickup',
  other: 'Other',
};

export const ourShopOrderStatus: StringRecord = {
  cancelled: 'Cancelled',
  draft: 'Draft',
  entered: 'Entered',
  invoiced: 'Invoiced',
  ordered: 'Ordered',
  picked: 'Picked',
  packed: 'Packed',
  shipped: 'Shipped',
  completed: 'Completed',
};

export const ourPetServiceType: StringRecord = {
  boarding: 'Boarding',
  dogWalking: 'Dog Walking',
  grooming: 'Grooming',
  petFood: 'Pet Food',
  petSitting: 'Pet Sitting',
  training: 'Training',
  vetCare: 'Vet Care',
  other: 'Other',
};

export const ourShopItemType: StringRecord = {
  product: 'Product',
  service: 'Service',
};

export const ourUomLength: StringRecord = {
  CM: 'CM',
  IN: 'IN',
};
export const ourUomQuantity: StringRecord = {
  EA: 'EA',
  HR: 'HR',
};
export const ourUomType: StringRecord = {
  quantity: 'Quantity',
  weight: 'Weight',
  length: 'Length',
};
export const ourUomWeight: StringRecord = {
  LB: 'LB',
  KG: 'KG',
};

export const profileSteps = 4;

export const optionalRegex = {};

export const requiredRegex = {
  memberName: /^[\da-zA-Z][\da-zA-Z._-]{1,29}$/,
};

export const regex = {
  optional: { ...optionalRegex },
  required: { ...requiredRegex },
};

const { REACT_APP_S3_BUCKET, REACT_APP_S3_REGION } = process.env;
export const s3Bucket = REACT_APP_S3_BUCKET;
export const s3Region = REACT_APP_S3_REGION;

export const s3ImageFolder: StringRecord = {
  public: 'public',
  private: 'private',
  protected: 'protected',
};
