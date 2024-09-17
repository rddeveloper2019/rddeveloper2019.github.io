import styles from './header.module.scss';
import React, { useContext } from 'react';
import cn from 'clsx';
import TextButton from '../text-button/text-button';
import Logo from '../logo/logo';
import { TextButtonState } from '../text-button/types';
import { MainContext } from '../../store/provider';
import { Lang, Theme } from '../../store/types';
import { useTranslation } from 'react-i18next';
import { ModalControl } from '../../components/modal-control/modal-control';
import LoginForm from '../../components/login-form/login-form';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const { theme, setTheme, setLang, lang, isAuth, modal, setModal, setIsAuth } = useContext(MainContext);

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

  const openLoginForm = () => {
    setModal(true);
  };

  const logout = () => {
    setIsAuth(false);
  };

  return (
    <>
      <div className={cn(styles.header)}>
        <div className={cn(styles['logo-block'])}>
          <Logo
            image={'https://png.pngtree.com/png-clipart/20230508/original/pngtree-happy-dog-png-image_9151232.png'}
            color="white"
          />
          <div>Финансы</div>
        </div>
        <div className={styles.links}>
          <TextButton state={TextButtonState.LINK} type="button">
            <NavLink to={'/'}>{t('header.home')}</NavLink>
          </TextButton>
          <TextButton state={TextButtonState.LINK} type="button">
            <NavLink to={'/favorites'}>{t('header.favorites')}</NavLink>
          </TextButton>
          <TextButton state={TextButtonState.LINK} type="button">
            <NavLink to={'/profile'}>{t('header.profile')}</NavLink>
          </TextButton>
        </div>

        <div className={styles.login}>
          <div className={styles.theme}>
            <TextButton state={TextButtonState.WHITE} handleClick={toggleLang} type="button">
              {lang === Lang.RU ? Lang.EN : 'РУ'}
            </TextButton>
            {theme === Theme.DARK && (
              <TextButton
                type="button"
                state={TextButtonState.WHITE}
                className={styles.icon}
                handleClick={() => setAppTheme(Theme.LIGHT)}
              >
                ☼
              </TextButton>
            )}
            {theme === Theme.LIGHT && (
              <TextButton
                type="button"
                state={TextButtonState.WHITE}
                className={styles.icon}
                handleClick={() => setAppTheme(Theme.DARK)}
              >
                ☾
              </TextButton>
            )}
          </div>
          <nav className={cn(styles.nav)}>
            {!isAuth && (
              <TextButton handleClick={openLoginForm} type="button" state={TextButtonState.WHITE}>
                {t('header.login')}
              </TextButton>
            )}
            {isAuth && (
              <TextButton type="button" state={TextButtonState.WHITE} handleClick={logout}>
                {t('header.logout')}
              </TextButton>
            )}
          </nav>
        </div>
      </div>
      {modal && (
        <ModalControl>
          <LoginForm />
        </ModalControl>
      )}
    </>
  );
};

export default Header;
