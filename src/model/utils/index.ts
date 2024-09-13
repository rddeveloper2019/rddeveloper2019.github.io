import { Category, Operation, Product } from '../types';

const categories = ['sport', 'education', 'travel', 'hobby', 'dance', 'zoo', 'byke', 'shoping'];
const getRandomId = (): string => Math.random().toString(36).substring(7);
const getRandomName = (prefix?: string): string => `${prefix} ${Math.floor(Math.random() * 1000)}`;

const getRandomCategory = (): string => categories[Math.floor(Math.random() * categories.length)];
const getPhoto = (notnull?: boolean): string | undefined =>
  notnull || Math.random() < 0.5 ? 'https://picsum.photos/200' : undefined;
const getRandomDesc = (entity?: string): string | undefined =>
  entity && Math.random() < 0.5 ? `Description for ${entity}` : undefined;
const getRandomNotNullNumber = (additional?: number): number => Math.floor(Math.random() * 1000) + (additional || 0);
const getRandomNumber = (): number | undefined => (Math.random() < 0.5 ? getRandomNotNullNumber() : undefined);
export const createRandomCategory = (): Category => {
  return {
    id: getRandomId(),
    name: getRandomCategory(),
    photo: getPhoto(),
  } as Category;
};

export const createRandomOperation = (createdAt: string): Operation => {
  const type = Math.random() < 0.5 ? 'Cost' : 'Profit';
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
  } as Operation;
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
  } as Product;
};

// // Пример использования
// const randomProduct = createRandomProduct('2022-05-15');
// console.log(randomProduct);
// const randomOperation = createRandomOperation('2022-05-15');
// console.log(randomOperation);
// const randomCategory = createRandomCategory();
// console.log(randomCategory);

export const getRandomDate = (start: Date, end: Date): string => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
};
export const createRandomProducts = (count: number): Product[] => {
  const products: Product[] = [];
  for (let i = 0; i < count; i++) {
    const start = new Date(2012, 0, 1);
    const now = new Date();
    const date = getRandomDate(start, now);
    products.push(createRandomProduct(date));
  }

  return products;
};

export const createRandomOperations = (count: number): Operation[] => {
  const products: Operation[] = [];
  for (let i = 0; i < count; i++) {
    const start = new Date(2012, 0, 1);
    const now = new Date();
    const date = getRandomDate(start, now);
    products.push(createRandomOperation(date));
  }

  return products;
};
