import styles from './layout.module.scss';
import React, { FC } from 'react';
import cn from 'clsx';
import { LayoutPropTypes } from './types';

const Layout: FC<LayoutPropTypes> = (background_image) => {
  return <div className={cn(styles['layout'])}></div>;
};

export default Layout;
