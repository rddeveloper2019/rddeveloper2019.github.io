import styles from './registration-form.module.scss';
import React, { FC } from 'react';
import cn from 'clsx';
import { RegistrationFormType, RegistrationPropsType } from './types';
import Card from '../card/Card';
import TextButton from '../../components/text-button/text-button';
import { TextButtonState } from '../text-button/types';
import { Control, Controller, FieldValues, RegisterOptions, SubmitHandler, useForm } from 'react-hook-form';
import InputField from '../input-field/input-field';
import { useAppDispatch } from '../../store/store';
import { useAuthentication } from '../../hooks/useAuthentication';

const LoginForm: FC<RegistrationPropsType> = ({ onAction }) => {
  const dispatch = useAppDispatch();
  const { register } = useAuthentication();

  const {
    control,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<RegistrationFormType>({
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

  const onConfirm: SubmitHandler<RegistrationFormType> = ({ username, password }) => {
    register({ email: username, password });

    onAction?.();
  };

  const usernameRules: RegisterOptions = { required: 'Невалидное имя пользователя', minLength: 3 };
  const passwordRules: RegisterOptions = { required: 'Невалидный пароль', minLength: 3 };

  return (
    <Card>
      <h1 className={cn(styles.title)}>Регистрация</h1>
      <form className={cn(styles.form)}>
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
          <TextButton type="button" state={TextButtonState.SECONDARY} handleClick={handleSubmit(onConfirm)}>
            AsyncThunk
          </TextButton>
          <TextButton type="button" state={TextButtonState.PRIMARY} handleClick={handleSubmit(onConfirm)}>
            Hook
          </TextButton>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
