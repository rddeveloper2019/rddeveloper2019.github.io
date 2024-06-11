export type Red = number;
export type Green = number;
export type Blue = number;
export type Color = [Red, Green, Blue];
export enum ContrastType {
  BLACK = 'black',
  WHITE = 'white',
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
