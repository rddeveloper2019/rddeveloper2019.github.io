export type Red = number;
export type Green = number;
export type Blue = number;
export type Color = [Red, Green, Blue];
export enum ContrastType {
  BLACK = 'black',
  WHITE = 'white',
}

export enum OperationType {
  COST = 'Cost',
  PROFIT = 'Profit',
}

export type NumberedValue = {
  value: string;
  number: number;
};

export type Customer = {
  id: string;
  name: string;
  age: number;
  isSubscribed: boolean;
};

export type Category = { id: string; name: string; photo?: string };

export type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

export type Operation = Cost | Profit;

export type BaseOperation = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
};

export type Cost = BaseOperation & { type: OperationType.COST };
export type Profit = BaseOperation & { type: OperationType.PROFIT };
