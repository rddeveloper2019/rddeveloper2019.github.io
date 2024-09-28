import styles from './header.module.scss';
import React, { useContext, useState } from 'react';
import cn from 'clsx';
import TextButton from '../text-button/text-button';
import Logo from '../logo/logo';
import { TextButtonState } from '../text-button/types';
import { ThemeContext } from '../../theme/theme-provider';
import { Lang, Theme } from '../../store/types';
import { useTranslation } from 'react-i18next';
import { ModalControl } from '../../components/modal-control/modal-control';
import LoginForm from '../../components/login-form/login-form';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../store/store';
import { useAuthSelector } from '../../store/selectors';
import { clearAuthError, signin, signout } from '../../store/slices/authSlice';
import RegistrationForm from '../../components/registration-form/registration-form';
import Card from '../../components/card/Card';
import { useAuthentication } from '../../hooks/useAuthentication';

const enum ModalType {
  REGISTER,
  LOGIN,
  SELECT,
  NONE,
}
const Header = () => {
  const dispatch = useAppDispatch();

  const { isAuth } = useAuthSelector();
  const { theme, setAppLang: setLang, setAppTheme: setTheme, lang } = useContext(ThemeContext);
  const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
  const { errorMessage } = useAuthentication();
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

  const showRegisterForm = () => {
    setModalType(ModalType.REGISTER);
  };

  const showLoginForm = () => {
    setModalType(ModalType.LOGIN);
  };
  const showSelectAuthModal = () => {
    setModalType(ModalType.SELECT);
  };

  const closeModal = () => {
    setModalType(ModalType.NONE);
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
        {isAuth && (
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
        )}

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
              <TextButton handleClick={showSelectAuthModal} type="button" state={TextButtonState.WHITE}>
                {t('header.login')}
              </TextButton>
            )}
            {isAuth && (
              <TextButton type="button" state={TextButtonState.WHITE} handleClick={() => dispatch(signout())}>
                {t('header.logout')}
              </TextButton>
            )}
          </nav>
        </div>
      </div>
      {modalType === ModalType.SELECT && (
        <ModalControl backgroundClickHandler={closeModal}>
          <Card className={cn(styles.flex, styles['p-40'])}>
            <TextButton handleClick={showRegisterForm} type="button" state={TextButtonState.PRIMARY}>
              🔑 Регистрация
            </TextButton>

            <TextButton type="button" state={TextButtonState.SECONDARY} handleClick={showLoginForm}>
              🔓 Вход
            </TextButton>
          </Card>
        </ModalControl>
      )}
      {modalType === ModalType.LOGIN && (
        <ModalControl backgroundClickHandler={closeModal}>
          <LoginForm onAction={closeModal} />
        </ModalControl>
      )}
      {modalType === ModalType.REGISTER && (
        <ModalControl backgroundClickHandler={closeModal}>
          <RegistrationForm onAction={closeModal} />
        </ModalControl>
      )}
      {errorMessage && (
        <ModalControl backgroundClickHandler={() => dispatch(clearAuthError())}>
          <Card className={cn(styles['error-message'], styles['p-40'])}>{errorMessage}</Card>
        </ModalControl>
      )}
    </>
  );
};

export default Header;
