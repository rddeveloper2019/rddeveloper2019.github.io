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
import { logout } from '../../store/slices/authSlice';
import RegistrationForm from 'src/components/registration-form/registration-form';
import Card from 'src/components/card/Card';

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
        <div className={styles.links}>
          <TextButton state={TextButtonState.LINK} type="button">
            <NavLink to={'/'}>{t('header.home')}</NavLink>
          </TextButton>
          <TextButton state={TextButtonState.LINK} type="button">
            <NavLink to={'/favorites'}>{t('header.favorites')}</NavLink>
          </TextButton>
          {isAuth && (
            <TextButton state={TextButtonState.LINK} type="button">
              <NavLink to={'/profile'}>{t('header.profile')}</NavLink>
            </TextButton>
          )}
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
              <TextButton handleClick={showSelectAuthModal} type="button" state={TextButtonState.WHITE}>
                {t('header.login')}
              </TextButton>
            )}
            {isAuth && (
              <TextButton type="button" state={TextButtonState.WHITE} handleClick={() => dispatch(logout())}>
                {t('header.logout')}
              </TextButton>
            )}
          </nav>
        </div>
      </div>
      {modalType === ModalType.SELECT && (
        <ModalControl backgroundClickHandler={closeModal}>
          <Card className={styles.flex}>
            <TextButton handleClick={showRegisterForm} type="button" state={TextButtonState.PRIMARY}>
              Зарегистрироваться
            </TextButton>

            <TextButton type="button" state={TextButtonState.SECONDARY} handleClick={showLoginForm}>
              Войти
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
    </>
  );
};

export default Header;
