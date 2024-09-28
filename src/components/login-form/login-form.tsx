import styles from './login-form.module.scss';
import React, { FC } from 'react';
import cn from 'clsx';
import { LoginFormPropsType, LoginFormType } from './types';
import Card from '../card/Card';
import TextButton from '../../components/text-button/text-button';
import { TextButtonState } from '../text-button/types';
import { Control, Controller, FieldValues, RegisterOptions, SubmitHandler, useForm } from 'react-hook-form';
import InputField from '../input-field/input-field';
import { useAuthentication } from '../../hooks/useAuthentication';

const LoginForm: FC<LoginFormPropsType> = ({ onAction }) => {
  const { login } = useAuthentication();
  const {
    control,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<LoginFormType>({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const handleCancel = () => {
    clearErrors();
    reset();
    onAction?.();
  };

  const onConfirm: SubmitHandler<LoginFormType> = ({ username, password }) => {
    login({ email: username, password });

    onAction?.();
  };

  const usernameRules: RegisterOptions = { required: 'Невалидное имя пользователя', minLength: 3 };
  const passwordRules: RegisterOptions = { required: 'Невалидный пароль', minLength: 3 };

  return (
    <Card>
      <h1 className={cn(styles.title)}>Вход</h1>
      <form className={cn(styles.form)} onSubmit={handleSubmit(onConfirm)}>
        <Controller
          name="username"
          control={control as unknown as Control<FieldValues>}
          rules={usernameRules}
          render={({ field }) => (
            <InputField
              placeholder="введите логин"
              error={errors.username && (`${errors.username.message}` || 'Не менее 3-х символов')}
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control as unknown as Control<FieldValues>}
          rules={passwordRules}
          render={({ field }) => (
            <InputField
              type="password"
              placeholder="введите пароль"
              error={errors.password && (`${errors.password.message}` || 'Не менее 3-х символов')}
              {...field}
            />
          )}
        />

        <div className={cn(styles.buttons)}>
          <TextButton type="submit" state={TextButtonState.PRIMARY}>
            Войти
          </TextButton>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
