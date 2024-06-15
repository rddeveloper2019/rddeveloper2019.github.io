type Category = { id: string; name: string; photo?: string };

type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

type Operation = Cost | Profit;

type BaseOperation = { id: string; name: string; desc?: string; createdAt: string; amount: number; category: Category };

type Cost = BaseOperation & { type: 'Cost' };
type Profit = BaseOperation & { type: 'Profit' };
const createRandomProduct = (createdAt: string): Product => {
  const randomId = Math.random().toString(36).substring(7);
  const randomName = `Product ${Math.floor(Math.random() * 100)}`;
  const randomPhoto = 'https://picsum.photos/200';
  const randomDesc = Math.random() < 0.5 ? `Description for ${randomName}` : undefined;
  const randomOldPrice = Math.random() < 0.5 ? Math.floor(Math.random() * 100) : undefined;
  const randomPrice = Math.floor(Math.random() * 100) + randomOldPrice || 0 * 1.3;
  const randomCategory: Category = {
    id: Math.random().toString(36).substring(7),
    name: `Category ${Math.floor(Math.random() * 10)}`,
    photo: 'https://picsum.photos/200',
  };

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
