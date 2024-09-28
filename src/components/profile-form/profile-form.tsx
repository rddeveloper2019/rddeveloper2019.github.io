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
import { saveProfile } from '../../store/slices/authSlice';
import { useAuthSelector } from '../../store/selectors';

const ProfileForm: FC<ProfileFormTypePropTypes> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { profile } = useAuthSelector();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormType>({
    defaultValues: {
      username: profile?.username || '',
      email: profile?.email || '',
    },
  });

  const onConfirm: SubmitHandler<ProfileFormType> = ({ username, email }) => {
    dispatch(saveProfile({ username, email }));
  };

  const usernameRules: RegisterOptions = { required: 'Невалидное имя пользователя', minLength: 3 };
  const emailRules: RegisterOptions = { required: 'Невалидный email', minLength: 3 };

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
          name="email"
          control={control as unknown as Control<FieldValues>}
          rules={emailRules}
          render={({ field }) => (
            <InputField
              placeholder="введите пароль"
              error={errors.email && (`${errors.email.message}` || 'Не менее 3-х символов')}
              {...field}
            />
          )}
        />

        <div className={cn(styles.buttons)}>
          <TextButton type="submit" state={TextButtonState.PRIMARY}>
            SAVE
          </TextButton>
        </div>
      </form>
    </Card>
  );
};

export default ProfileForm;
