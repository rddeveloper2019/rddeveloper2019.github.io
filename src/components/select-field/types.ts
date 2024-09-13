import { ChangeEvent } from 'react';

export type SelectOption = {
  id: string;
  name: string;
};

export type CustomSelectProps = {
  onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  name: string;
  options: SelectOption[];
};
