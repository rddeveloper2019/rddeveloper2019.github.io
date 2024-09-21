import styles from './profile-form.module.scss';
import React, { FC } from 'react';
import cn from 'clsx';
import { ProfileFormType, ProfileFormTypePropTypes } from './types';
import Card from '../card/Card';
import TextButton from '../../components/text-button/text-button';
import { TextButtonState } from '../text-button/types';
import { Control, Controller, FieldValues, RegisterOptions, SubmitHandler, useForm } from 'react-hook-form';
import InputField from '../input-field/input-field';
import { useAppDispatch } from '../../store/store';
import { setIsAuth } from '../../store/slices/authSlice';

const ProfileForm: FC<ProfileFormTypePropTypes> = ({ className }) => {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<ProfileFormType>({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onCancel = () => {
    clearErrors();
    reset();
  };

  const onConfirm: SubmitHandler<ProfileFormType> = (data) => {
    dispatch(setIsAuth(true));
  };

  const usernameRules: RegisterOptions = { required: 'Невалидное имя пользователя', minLength: 3 };
  const passwordRules: RegisterOptions = { required: 'Невалидный пароль', minLength: 3 };

  return (
    <Card>
      <form className={cn(className, styles.form)} onSubmit={handleSubmit(onConfirm)}>
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
          <TextButton handleClick={onCancel} type="button" state={TextButtonState.SECONDARY}>
            Cancel
          </TextButton>

          <TextButton type="submit" state={TextButtonState.PRIMARY}>
            OK
          </TextButton>
        </div>
      </form>
    </Card>
  );
};

export default ProfileForm;
