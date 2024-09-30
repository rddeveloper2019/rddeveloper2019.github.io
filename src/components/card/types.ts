import { PropsWithChildren } from 'react';

export type CardPropsType = PropsWithChildren<{
  width?: number;
  onClick?: () => void;
  onIntersect?: () => void;
  isLast?: boolean;
  className?: string;
}>;
