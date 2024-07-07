import styles from './header.module.scss';
import React from 'react';
import cn from 'clsx';
import TextButton from '../text-button/text-button';
import Logo from '../logo/logo';
import { TextButtonState } from '../text-button/types';

const Header = () => {
  return (
    <div className={cn(styles.header)}>
      <div className={cn(styles['logo-block'])}>
        <Logo
          image={'https://png.pngtree.com/png-clipart/20230508/original/pngtree-happy-dog-png-image_9151232.png'}
          color="white"
        />
        <div>Финансы</div>
      </div>
      <div className={styles.links}>
        <TextButton state={TextButtonState.LINK}>
          <a href="#">Главная</a>
        </TextButton>
        <TextButton state={TextButtonState.LINK}>
          <a href="#">Статистика</a>
        </TextButton>
        <TextButton state={TextButtonState.LINK}>
          <a href="#">Поиск</a>
        </TextButton>
        <TextButton state={TextButtonState.LINK}>
          <a href="#">Профиль</a>
        </TextButton>
      </div>

      <div className={styles.login}>
        <div className={styles.theme}>
          <TextButton state={TextButtonState.WHITE}>EN</TextButton>
          <TextButton state={TextButtonState.WHITE} className={styles.icon}>
            ☼
          </TextButton>
          {/* <TextButton state={TextButtonState.WHITE} className={styles.icon}>
            ☾
          </TextButton> */}
        </div>
        <nav className={cn(styles.nav)}>
          <TextButton state={TextButtonState.WHITE}>Вход</TextButton>
        </nav>
      </div>
    </div>
  );
};

export default Header;
