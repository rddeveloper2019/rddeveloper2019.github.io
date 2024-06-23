import styles from './header.module.scss';
import React from 'react';
import cn from 'clsx';
import TextButton from 'src/components/text-button/text-button';
import Logo from 'src/components/logo/logo';
import { TextButtonState } from 'src/components/text-button/types';
// import Logo from '../logo/logo.tsx';

const Header = () => {
  return (
    <div className={cn(styles.header)}>
      <div className={cn(styles['logo-block'])}>
        <Logo
          image={'https://png.pngtree.com/png-clipart/20230508/original/pngtree-happy-dog-png-image_9151232.png'}
          color="white"
        />
        <div>Мои финансы</div>
      </div>
      <div>
        <nav className={cn(styles.nav)}>
          <TextButton state={TextButtonState.WHITE}>login</TextButton>
        </nav>
      </div>
    </div>
  );
};

export default Header;
