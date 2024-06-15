import { Category, Operation, OperationType, Product } from './types';

const categories = ['sport', 'education', 'travel', 'hobby', 'dance', 'zoo', 'bdsm'];
const getRandomId = (): string => Math.random().toString(36).substring(7);
const getRandomName = (prefix?: string): string => `${prefix} ${Math.floor(Math.random() * 100)}`;

const getRandomCategory = (): string => categories[Math.floor(Math.random() * categories.length)];
const getPhoto = (notnull?: boolean): string | undefined =>
  notnull || Math.random() < 0.5 ? 'https://picsum.photos/200' : undefined;
const getRandomDesc = (entity?: string): string | undefined =>
  entity && Math.random() < 0.5 ? `Description for ${entity}` : undefined;
const getRandomNotNullNumber = (additional?: number): number => Math.floor(Math.random() * 100) + additional || 0;
const getRandomNumber = (): number | undefined => (Math.random() < 0.5 ? getRandomNotNullNumber() : undefined);
export const createRandomCategory = (): Category => {
  return {
    id: getRandomId(),
    name: getRandomCategory(),
    photo: getPhoto(),
  };
};

export const createRandomOperation = (createdAt: string): Operation => {
  const type = Math.random() < 0.5 ? OperationType.COST : OperationType.PROFIT;
  const id = getRandomId();
  const name = getRandomName('Operation');
  const desc = getRandomDesc(name);
  const amount = getRandomNotNullNumber();
  const category = createRandomCategory();

  return {
    id,
    name,
    desc,
    createdAt,
    amount,
    category,
    type,
  };
};

export const createRandomProduct = (createdAt: string): Product => {
  const randomId = getRandomId();
  const randomName = getRandomName('Product');
  const randomPhoto = getPhoto(true);
  const randomDesc = getRandomDesc(randomName);
  const randomOldPrice = getRandomNumber();
  const randomPrice = getRandomNotNullNumber(randomOldPrice);
  const randomCategory = createRandomCategory();

  return {
    id: randomId,
    name: randomName,
    photo: randomPhoto,
    desc: randomDesc,
    createdAt: createdAt,
    oldPrice: randomOldPrice,
    price: randomPrice,
    category: randomCategory,
  };
};

// Пример использования
const randomProduct = createRandomProduct('2022-05-15');
console.log(randomProduct);
const randomOperation = createRandomOperation('2022-05-15');
console.log(randomOperation);
const randomCategory = createRandomCategory();
console.log(randomCategory);
