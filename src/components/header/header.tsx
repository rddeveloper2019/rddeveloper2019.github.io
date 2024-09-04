import styles from './header.module.scss';
import React, { useContext } from 'react';
import cn from 'clsx';
import TextButton from '../text-button/text-button';
import Logo from '../logo/logo';
import { TextButtonState } from '../text-button/types';
import { MainContext } from 'src/store/provider';
import { Lang, Theme } from 'src/store/types';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { theme, setTheme, setLang, lang } = useContext(MainContext);

  const { t } = useTranslation();

  const setAppTheme = (name: Theme) => {
    setTheme(name);
  };

  const toggleLang = () => {
    if (lang === Lang.RU) {
      setLang(Lang.EN);
    } else {
      setLang(Lang.RU);
    }
  };

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
        <TextButton state={TextButtonState.LINK} className={styles.active}>
          <a href="#">{t('header.home')}</a>
        </TextButton>
        <TextButton state={TextButtonState.LINK}>
          <a href="#">{t('header.statistics')}</a>
        </TextButton>
        <TextButton state={TextButtonState.LINK}>
          <a href="#">{t('header.search')}</a>
        </TextButton>
        <TextButton state={TextButtonState.LINK}>
          <a href="#">{t('header.profile')}</a>
        </TextButton>
      </div>

      <div className={styles.login}>
        <div className={styles.theme}>
          <TextButton state={TextButtonState.WHITE} handleClick={toggleLang}>
            {lang === Lang.RU ? Lang.EN : 'РУ'}
          </TextButton>
          {theme === Theme.DARK && (
            <TextButton
              state={TextButtonState.WHITE}
              className={styles.icon}
              handleClick={() => setAppTheme(Theme.LIGHT)}
            >
              ☼
            </TextButton>
          )}
          {theme === Theme.LIGHT && (
            <TextButton
              state={TextButtonState.WHITE}
              className={styles.icon}
              handleClick={() => setAppTheme(Theme.DARK)}
            >
              ☾
            </TextButton>
          )}
        </div>
        <nav className={cn(styles.nav)}>
          <TextButton state={TextButtonState.WHITE}>{t('header.login')}</TextButton>
        </nav>
      </div>
    </div>
  );
};

export default Header;
