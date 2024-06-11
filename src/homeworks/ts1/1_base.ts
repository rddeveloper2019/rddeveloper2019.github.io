import { Blue, ContrastType, Green, Red, Color, NumberedValue, Customer } from 'src/homeworks/ts1/types';

export const removePlus = (string: string): string => string.replace(/^\+/, '');

export const addPlus = (string: string): string => `+${string}`;

export const removeFirstZeros = (value: string): string => value.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');

export const getBeautifulNumber = (value: string | undefined, separator = ' '): string | undefined =>
  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

export const round = (value: number, accuracy: number | undefined = 2): number => {
  const d = 10 ** accuracy;
  return Math.round(value * d) / d;
};

const transformRegexp =
  /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;

export const getTransformFromCss = (transformCssString: string): { x: number; y: number } => {
  const data = transformCssString.match(transformRegexp);

  if (!data) return { x: 0, y: 0 };

  return {
    x: parseInt(data[6], 10),
    y: parseInt(data[8], 10),
  };
};

export const getColorContrastValue = ([red, green, blue]: Color): number =>
  // http://www.w3.org/TR/AERT#color-contrast
  Math.round((red * 299 + green * 587 + blue * 114) / 1000);

export const getContrastType = (contrastValue: number): ContrastType =>
  contrastValue > 125 ? ContrastType.BLACK : ContrastType.WHITE;

export const shortColorRegExp = /^#[0-9a-f]{3}$/i;
export const longColorRegExp = /^#[0-9a-f]{6}$/i;

export const checkColor = (color: string): void | never => {
  if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) throw new Error(`invalid hex color: ${color}`);
};

export const hex2rgb = (color: string): Color => {
  checkColor(color);
  if (shortColorRegExp.test(color)) {
    const red: Red = parseInt(color.substring(1, 2), 16); //Всё равно видит как number
    const green: Green = parseInt(color.substring(2, 3), 16);
    const blue: Blue = parseInt(color.substring(3, 4), 16);
    return [red, green, blue] as unknown as Color;
  }
  const red: Red = parseInt(color.substring(1, 3), 16);
  const green: Green = parseInt(color.substring(3, 5), 16);
  const blue: Blue = parseInt(color.substring(5, 8), 16);
  return [red, blue, green] as unknown as Color;
};

export const getNumberedArray = (arr: string[]): NumberedValue[] =>
  arr.map((value: string, number: number): NumberedValue => ({ value, number }));

export const toStringArray = (arr: NumberedValue[]): string[] => arr.map(({ value, number }) => `${value}_${number}`);

export const transformCustomers = (customers: Customer[]): { [key: string]: Partial<Customer> } => {
  return customers.reduce((acc: { [key: string]: Partial<Customer> }, customer) => {
    acc[customer.id] = {
      name: customer.name,
      age: customer.age,
      isSubscribed: customer.isSubscribed,
    };
    return acc;
  }, {});
};
